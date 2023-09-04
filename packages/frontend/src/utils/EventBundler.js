/** Bundles emitted events when active and triggers them later deduplicated. */
export class EventBundler {
  _events = null

  get enabled() {
    return this._events !== null
  }

  bundle(callback) {
    this._events = new Map()
    try {
      const result = callback()
      this._events.forEach(({ listener, args }) => listener(...args))
      return result
    } finally {
      this._events = null
    }
  }

  on(emitter, eventName, listener) {
    emitter.on(eventName, this._getListener(eventName, listener))
  }

  off(emitter, eventName, listener) {
    emitter.off(eventName, this._getListener(eventName, listener))
  }

  _getListener(eventName, listener) {
    let wrappedListener = this._listeners?.get([eventName, listener])
    if (wrappedListener) return wrappedListener

    wrappedListener = (...args) => {
      if (this.enabled) {
        this._events.set(this._getEventKey(listener, args), { listener, args })
      } else {
        listener(...args)
      }
    }
    ;(this._listeners ??= new WeakMap()).set([eventName, listener], wrappedListener)
    return wrappedListener
  }

  _getEventKey(listener, args) {
    if (args?.length) {
      // NOTE: Could do better with deep comparison.
      return [listener, args]
    }
    return listener
  }
}
