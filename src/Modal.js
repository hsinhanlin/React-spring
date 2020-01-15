import React from 'react'
import { useTransition, animated } from 'react-spring'


const Modal = ({ closeModal, modalAnimate }) => {
    return (
        <animated.div className="modal" style={modalAnimate}>
            <div className="modal-card">
                <h1>Modal</h1>
                <button onClick={closeModal}>close</button>
            </div>
        </animated.div>
    )
}

const ModalWrapper = () => {
    const [on, toggle] = React.useState(false)
    const transition = useTransition(on, null, {
        from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    })
    return (
        <div>
            {transition.map(
                ({ item, key, props: modalAnimate }) =>
                    item && (
                        <Modal modalAnimate={modalAnimate} closeModal={() => toggle(false)} key={key} />
                    )
            )}
            <button onClick={() => toggle(!on)}>Open</button>
        </div>
    )
}

export default ModalWrapper
