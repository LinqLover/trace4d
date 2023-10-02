/**
 * Simple logging injection for the [stats.js](https://github.com/mrdoob/stats.js) library.
 */

import Stats from 'stats.js'


let _logs = undefined

/** Get or set the logging state. */
export function logging(enabled) {
  if (enabled === undefined) {
    return _logs !== undefined
  }

  if (enabled) {
    _logs ??= {}
  } else {
    _logs = undefined
  }
}

/** Get the logs. */
export function logs() {
  return _logs
}

// Monkey patching 🙈🙊🙉
const originalPanel = Stats.Panel
Stats.Panel = function(name, fg, bg) {
  const panel = originalPanel.call(this, name, fg, bg)
  if (_logs !== undefined) {
    const originalUpdate = panel.update
    panel.update = (value, maxValue) => {
      (_logs[name] ??= []).push(value)
      originalUpdate.call(panel, value, maxValue)
    }
  }
  return panel
}
