'use strict';
var Promise = require('promise')

module.exports =
function on(ee, event, error) {
  if (arguments.length < 3) error = 'error'
  return new Promise(function(resolve, reject) {
    var resolve_ = resolve
      , reject_ = reject

    if (ee.removeListener && error) {
      resolve_ = function(value) {
        if (error) ee.removeListener(error, reject_)
        resolve(value)
      }

      reject_ = function(value) {
        ee.removeListener(event, resolve_)
        reject(value)
      }
    }

    if (typeof ee.once == 'function') {
      ee.once(event, resolve_)
      if (error) ee.once(error, reject_)
    }
    else {
      ee.on(event, resolve_)
      if (error) ee.on(error, reject_)
    }
  })
}
