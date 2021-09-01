import React, { Fragment } from 'react'
import NavBar from './NavBar'
import classes from './Layout.module.css'

function Layout(props) {
    return (
        <Fragment>
            <NavBar />
            <main className={classes.maincontainer}>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout
