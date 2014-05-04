# then-on

  promises for events

## Installation

    npm install then-on

## API
### on(emitter, event, errorEvent = 'error')

  returns a promise.

  `emitter.on(event, resolve)`

  if the errorEvent is not explicitly `null`, `undefined`, `false` or otherwise falsy, `emitter.on(errorEvent, reject)`

  it makes use of `.once` instead of `.on` if present, and uses `.removeListener` to remove the uncalled handler if it's available.

