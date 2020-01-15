import React from 'react'
import { useSpring, animated } from 'react-spring'
import useMeasure from './useMeasure'

const Accordion = () => {
    const [on, toggleOn] = React.useState(false)
    const [bind, { height, top }] = useMeasure()

    const animation = useSpring({
        overflow: 'hidden',
        height: on ? height + top * 2 : 0
    })

    return (
        <div>
            <h1><button onClick={() => toggleOn(!on)}>Toggle</button></h1>
            <animated.div style={animation}>
                <div  {...bind} className="accordion">
                    <p>Accordion content</p>
                </div>
            </animated.div>
        </div>
    )
}

export default Accordion
