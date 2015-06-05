/*!
 * grunt <http://gruntjs.com/>
 *
 * Copyright (c) 2013-2015 "Cowboy" Ben Alman.
 * Licensed under the MIT license.
 */

'use strict';

var chalk = require('chalk');
var logger = require('grunt-legacy-log-facade');
var legacyUtil = require('grunt-legacy-util');

function Fail(options) {
  this.options = {};
  if (typeof options === 'function') {
    this.option = options;
  } else {
    this.options = options || {};
    this.option = optionsFn(this.options);
  }

  // Keep track of error and warning counts.
  this.errorcount = 0;
  this.warncount = 0;

  // Error codes.
  this.code = {
    FATAL_ERROR: 1,
    MISSING_GRUNTFILE: 2,
    TASK_FAILURE: 3,
    TEMPLATE_ERROR: 4,
    INVALID_AUTOCOMPLETE: 5,
    WARNING: 6,
  };
  this.log = logger.logMethodsToEvents();
}

// DRY it up!
Fail.prototype._writeln = function(e, mode) {
  this.log.muted = false;
  var msg = String(e.message || e);
  if (!this.option('no-color')) { msg += '\x07'; } // Beep!
  if (mode === 'warn') {
    msg = 'Warning: ' + msg + ' ';
    msg += (this.option('force') ? chalk.underline('Used --force, continuing.') : 'Use --force to continue.');
    msg = chalk.yellow(msg);
  } else {
    msg = chalk.red('Fatal error: ' + msg);
  }
  this.log.writeln(msg);
};

// If --stack is enabled, log the appropriate error stack (if it exists).
Fail.prototype._dumpStack = function(e) {
  if (this.option('stack')) {
    if (e.origError && e.origError.stack) {
      console.log(e.origError.stack);
    } else if (e.stack) {
      console.log(e.stack);
    }
  }
};

// A fatal error occurred. Abort immediately.
Fail.prototype.fatal = function(e, errcode) {
  this._writeln(e, 'fatal');
  this._dumpStack(e);
  legacyUtil.exit(typeof errcode === 'number' ? errcode : this.code.FATAL_ERROR);
};


// A warning occurred. Abort immediately unless -f or --force was used.
Fail.prototype.warn = function(e, errcode) {
  var message = typeof e === 'string' ? e : e.message;
  this.warncount++;
  this._writeln(message, 'warn');
  // If -f or --force aren't used, stop script processing.
  if (!this.option('force')) {
    this._dumpStack(e);
    this.log.writeln().fail('Aborted due to warnings.');
    legacyUtil.exit(typeof errcode === 'number' ? errcode : this.code.WARNING);
  }
};

// This gets called at the very end.
Fail.prototype.report = function() {
  if (this.warncount > 0) {
    this.log.writeln().fail('Done, but with warnings.');
  } else {
    this.log.writeln().success('Done, without errors.');
  }
};

/**
 * Returns a function for getting properties defined on `obj`.
 * This is used as a fallback function when one isn't passed
 * to the constructor.
 *
 * @param  {Object} `obj`
 * @return {Function} Returns a function for getting an option by `name`
 */

function optionsFn(obj) {
  return function (name) {
    var no = name.match(/^no-(.+)$/);
    return no ? !obj[no[1]] : obj[name];
  };
}

/**
 * Expose `Fail`
 */

exports.Fail = Fail;
