import React from 'react';
import { useSpring, animated } from 'react-spring'
import Toggle from './Toggle'
// import Nav from './Nav'
import Checkout from './Checkout'
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [isNavOpen, setNavOpen] = React.useState(false)

  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  })
  console.log(isNavOpen)
  return (

    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <button className="menu-button" onClick={() => setNavOpen(!isNavOpen)}>Menu</button>
      </header>
      <main>
        <Toggle />
        <Checkout isOpen={isNavOpen} />
      </main>
    </animated.div>
  );
}

export default App;
