import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink, __RouterContext } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'

const Routes = () => {
    return (
        <Router>
            <ul className="router-nav">
                <NavLink to="/">One</NavLink>
                <NavLink to="/two">Two</NavLink>
                <NavLink to="/three">Three</NavLink>
            </ul>

            <Main />
        </Router>
    )
}


const Main = () => {
    const { location } = React.useContext(__RouterContext)

    const transitions = useTransition(location, location => location.key, {
        from: {
            opacity: 0,
            position: 'absolute',
            width: '100%',
            transform: 'translate3d(100%,0,0)'
        },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    })

    return transitions.map(({ item, props: transition, key }) => (
        <animated.div key={key} style={transition}>
            <Switch location={item}>
                <Route exact path="/" component={One} />
                <Route exact path="/two" component={Two} />
                <Route exact path="/three" component={Three} />
            </Switch>
        </animated.div>
    ))
}

const One = () => {
    return (
        <div className="page-route">
            <h1>One</h1>
        </div>
    )
}
const Two = () => {
    return (
        <div className="page-route two">
            <h1>Two</h1>
        </div>
    )
}
const Three = () => {
    return (
        <div className="page-route three">
            <h1>Three</h1>
        </div>
    )
}
export default Routes
