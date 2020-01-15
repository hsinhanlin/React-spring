import React from 'react'
import { animated, useSprings } from 'react-spring'

const items = [.5, .1, .2, .3, .4]

const Boxes = () => {
    const springs = useSprings(items.length,
        items.map(item => ({
            from: {
                opacity: 0
            },
            to: {
                opacity: item
            }
        }))
    )

    return (
        <div className="boxes-grid">
            {springs.map((animation, key) => <animated.div className="box" style={animation} key={key} />)}


        </div>
    )
}

export default Boxes
