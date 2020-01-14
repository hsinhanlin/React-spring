import React from 'react';
import { useSpring, animated } from 'react-spring'
import Toggle from './Toggle'
import Nav from './Nav'
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [isNavOpen, setNavOpen] = React.useState(false)
  const navAnimate = useSpring({ transform: isNavOpen ? `translate3d(0,0,0)` : `translate3d(100%,0,0)` })

  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  })

  return (

    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <button className="menu-button" onClick={() => setNavOpen(!isNavOpen)}>Menu</button>
        <Nav style={navAnimate} />
      </header>
      <main>
        <Toggle />
      </main>
    </animated.div>
  );
}

export default App;
