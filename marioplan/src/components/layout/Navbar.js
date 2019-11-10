import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks  from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    console.log(props)
    const { auth } = props
    const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                { links }
            </div>
        </nav>
    
    )
}

const mapSateToProps = (state) =>{
    
    return {
        auth: state.firebase.auth
    }
}

export default  connect(mapSateToProps)(Navbar)