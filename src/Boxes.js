import React from 'react'
import { animated, useSpring, useTrail, useChain, useTransition } from 'react-spring'

const items = [.5, .1, .2, .3, .4, .4, .4, .4,]

const Boxes = () => {
    const [on, toggle] = React.useState(false)

    const springRef = React.useRef()
    const { size } = useSpring({
        ref: springRef,
        from: { size: '20%' },
        to: { size: on ? '100%' : '20%' }
    })

    const transitionRef = React.useRef()
    const transition = useTransition(on ? items : [],
        item => item, {
        trail: 400 / items.length,
        ref: transitionRef,
        from: {
            opacity: 0,
            transoform: 'scale(0)'
        },
        enter: {
            opacity: 1,
            transoform: 'scale(1)'
        },
        leave: {
            opacity: 0,
            transoform: 'scale(0)'
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
                {transition.map(({ item, key, props }) =>
                    <animated.div
                        className="box-two"
                        style={props}
                        key={key}
                    />
                )}
            </animated.div >
        </div>
    )
}

export default Boxes
