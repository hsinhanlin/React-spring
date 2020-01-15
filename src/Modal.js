import React from 'react'
import { useTransition, animated } from 'react-spring'


const Modal = ({ closeModal, modalAnimate, pointerEvents }) => {
    return (
        // eslint-disable-next-line
        <div className="modal" style={{ pointerEvents }, {
            background: 'rgba(0, 0, 0, .75)'
        }}>
            <animated.div className="modal-card" style={modalAnimate}>
                <h1>Modal</h1>
                <button onClick={closeModal}>close</button>
            </animated.div>
        </div >
    )
}

const ModalWrapper = () => {
    const [on, toggle] = React.useState(false)
    const transition = useTransition(on, null, {
        from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' }
    })
    const pointerEvents = on ? 'all' : 'none'

    return (
        <div>
            {transition.map(
                ({ item, key, props: modalAnimate }) =>
                    item && (
                        <Modal
                            modalAnimate={modalAnimate}
                            closeModal={() => toggle(false)}
                            key={key}
                            pointerEvents={pointerEvents}
                        />
                    )
            )}
            <button onClick={() => toggle(!on)}>Open</button>
        </div>
    )
}

export default ModalWrapper
