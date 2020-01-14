import React from 'react'
import { useSpring, animated } from 'react-spring'

const Toggle = () => {
    const [isToggled, setToggled] = React.useState(false)
    const fade = useSpring({
        opacity: isToggled ? 1 : 0
    })

    return (
        <div>
            <animated.h1 style={fade}>hello</animated.h1>
            <button onClick={() => setToggled(!isToggled)}>toggle</button>
        </div>
    )
}

export default Toggle
