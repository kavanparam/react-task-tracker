//with impt -- to set strict types for props
// import PropTypes from 'prop-types'

//not required with new React versions
// import React from 'react'

//boilerplate arrow function with rafce
const Header = ({title}) => {
  return (
    <div className="App">

        <header className="App-header">
            <h1>Hello from React</h1>
            <h2>this is a React sub-component!</h2>
            <p>(with default React header formatting)</p>
            <p><sub>{title}</sub></p>
        </header>

    </div>
  )
}

//displayed when there isn't a title passed to the component that overrides this.
Header.defaultProps = {
    title: 'Default prop',
}

export default Header