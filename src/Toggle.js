import React from 'react'
import { useSpring, animated } from 'react-spring'

const Toggle = () => {
    const [isToggled, setToggled] = React.useState(false)
    const { color, x } = useSpring({
        color: isToggled ? 'tomato' : 'lightgreen',
        x: isToggled ? 0 : 1
    })

    return (
        <div>
            <animated.h1
                style={{
                    transform: x.interpolate({
                        range: [0, .25, .50, .75, 1],
                        output: [0, -75, 10, 0, 0]
                    }).interpolate(x => `translate3d(${x}px,0,0)`),
                    color
                }} >hello</animated.h1>
            <button onClick={() => setToggled(!isToggled)}>toggle</button>
        </div>
    )
}


export default Toggle
