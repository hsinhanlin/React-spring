import React from 'react'
import { Waypoint } from 'react-waypoint'
import { animated, useSpring, config } from 'react-spring'

const Waypoints = () => {
    const [on, toggleOn] = React.useState(false)
    const animation = useSpring({
        opacity: on ? 1 : 0,
        transform: on ? 'translate3d(0,0,0)' : 'translate3d(50%,0,0)',
        config: config.slow
    })

    return (
        <div className="waypoints">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique consequuntur cumque, illum repudiandae eveniet ab eius facere repellendus explicabo nam cupiditate labore possimus ad amet quas et dolor perferendis nemo.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique consequuntur cumque, illum repudiandae eveniet ab eius facere repellendus explicabo nam cupiditate labore possimus ad amet quas et dolor perferendis nemo.</p>
            <p>Lorem ipsum dolor sit amet.</p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique consequuntur cumque, illum repudiandae eveniet ab eius facere repellendus explicabo nam cupiditate labore possimus ad amet quas et dolor perferendis nemo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique consequuntur cumque, illum repudiandae eveniet ab eius facere repellendus explicabo nam cupiditate labore possimus ad amet quas et dolor perferendis nemo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique consequuntur cumque, illum repudiandae eveniet ab eius facere repellendus explicabo nam cupiditate labore possimus ad amet quas et dolor perferendis nemo.</p>
            <animated.div style={animation}>
                <Waypoint
                    bottomOffset="10%"
                    onEnter={() => {
                        if (!on) toggleOn(true)
                    }}
                >
                    <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique consequuntur cumque, illum repudiandae eveniet ab eius facere repellendus explicabo nam cupiditate labore possimus ad amet quas et dolor perferendis nemo.</p>
                </Waypoint>
            </animated.div>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    )
}

export default Waypoints
