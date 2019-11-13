import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from  '../../store/actions/authActions'


const SignedInLinks = (props) => {
    console.log("signedin lnkle", props)
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to="/" className="btn btn-floating waves-effect waves-light pink lighten-1">
            
                </NavLink></li>
        </ul>
    
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signOut: ()=> dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);