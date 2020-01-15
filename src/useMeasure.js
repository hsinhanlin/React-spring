import React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export default function useMeasure() {
    const ref = React.useRef()
    const [bounds, setBounds] = React.useState({
        left: 0, top: 0, width: 0, height: 0
    })
    const [ro] = React.useState(() => new ResizeObserver(
        ([entry]) => setBounds(entry.contentRect)))

    React.useEffect(() => (ro.observe(ref.current), ro.disconnect), []);

    return [{ ref }, bounds];
}
