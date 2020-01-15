import React from 'react'
import { animated, useSpring, useTrail, useChain } from 'react-spring'

const items = [.5, .1, .2, .3, .4]

const Boxes = () => {
    const [on, toggle] = React.useState(false)

    const springRef = React.useRef()
    const { size } = useSpring({
        ref: springRef,
        from: { size: '20%' },
        to: { size: on ? '100%' : '20%' }
    })

    const transitionRef = React.useRef()
    const trail = useTrail(items.length, {
        ref: transitionRef,
        from: {
            opacity: 0,
            transoform: 'scale(0)'
        },
        to: {
            opacity: on ? 1 : 0,
            transoform: on ? 'scale(.3)' : 'scale(1)'
        }
    })

    useChain(on ? [springRef, transitionRef] : [transitionRef, springRef])

    return (
        <div className="full-height">

            <animated.div
                className="boxes-grid-two"
                onClick={() => toggle(!on)}
                style={{ width: size, height: size }}
            >
                {trail.map((animation, key) =>
                    <animated.div
                        className="box-two"
                        style={animation}
                        key={key}
                    />
                )}
            </animated.div >
        </div>
    )
}

export default Boxes
