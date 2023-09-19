/** Add resizer logic to all elements with class 'resizer'.
  * Resizer elements must have a parent element.
  * Attributes:
  *  data-direction ('horizontal' or 'vertical')
  *  data-edge ('left', 'top', 'right', or 'bottom'): on which side of the parent element the resizer is located
  */

document.addEventListener('DOMContentLoaded', () => {
  const resizable = (resizer) => {
    const target = resizer.parentElement
    const direction = resizer.getAttribute('data-direction') || 'horizontal'
    const edge = resizer.getAttribute('data-edge')
      || { horizontal: 'left', vertical: 'top' }[direction]
    const coord = { horizontal: 'pageX', vertical: 'pageY' }[direction]
    const dim = { horizontal: 'width', vertical: 'height' }[direction]

    let startValue
    let prevValue = 0
    let previousStyles

    const onMouseDown = (event) => {
      startValue = event[coord]
      const rect = target.getBoundingClientRect()
      prevValue = rect[dim]

      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
    }

    const onMouseMove = (event) => {
      if (event.isT4dSimulated) return // raaauuugh

      const delta = (event[coord] - startValue) * { left: 1, top: 1, right: -1, bottom: -1 }[edge]

      const styleValue = ((prevValue + delta) * 100) / target.parentElement.getBoundingClientRect()[dim]
      target.style[dim] = `${styleValue}%`

      const cursor = { horizontal: 'ew-resize', vertical: 'ns-resize' }[direction]
      resizer.style.cursor = cursor
      document.body.style.cursor = cursor

      if (!previousStyles) {
        previousStyles = new Map()
        ;[...target.children].forEach(child => {
          if (child === resizer) return
          const previousStyle = {}
          ;['userSelect', 'pointerEvents'].forEach(prop => {
            previousStyle[prop] = target.style[prop]
            child.style[prop] = 'none'
          })
          previousStyles.set(child, previousStyle)
        })
      }
    }

    const onMouseUp = () => {
      resizer.style.removeProperty('cursor')
      document.body.style.removeProperty('cursor')

      previousStyles?.forEach((previousStyle, child) => {
        Object.entries(previousStyle).forEach(([prop, value]) => {
          child.style[prop] = value
        })
      })
      previousStyles = null

      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }

    resizer.addEventListener('mousedown', onMouseDown)
  }

  document.querySelectorAll('.resizer').forEach(
    (element) => resizable(element))
})
