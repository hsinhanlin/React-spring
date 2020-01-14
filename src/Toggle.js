import React from 'react'
import { useSpring, animated } from 'react-spring'

const Toggle = () => {
    const [isToggled, setToggled] = React.useState(false)
    const { color, x } = useSpring({
        color: isToggled ? 'tomato' : 'lightgreen',
        x: isToggled ? 0 : 50
    })

    return (
        <div>
            <animated.h1 style={{
                transform: x.interpolate(x => `translate3d(${x}px,0,0)`),
                color
            }} >hello</animated.h1>
            <button onClick={() => setToggled(!isToggled)}>toggle</button>
        </div>
    )
}


export default Toggle
