import React from 'react'
import { useSpring, animated, config } from 'react-spring'

const Checkout = ({ isOpen }) => {
    const { x } = useSpring({
        x: isOpen ? 0 : 100,
        config: config.wobbly,
    })

    return (
        <div className="checkout"
            style={{
                pointerEvents: isOpen ? 'all' : 'none'
            }}
        >
            <animated.div style={{
                transform: x.interpolate(x => `translateX(${x * -1}%)`)
            }}
                className="checkout-left" />
            <animated.div style={{
                transform: x.interpolate(x => `translateX(${x}%)`)
            }}
                className="checkout-right" />

        </div>
    )
}

export default Checkout
