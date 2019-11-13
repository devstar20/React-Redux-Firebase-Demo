import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks  from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    console.log(props)
    const { auth, profile } = props
    
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                { links }
            </div>
        </nav>
    
    )
}



export default  connect(mapSateToProps)(Navbar)