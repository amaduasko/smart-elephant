import React from 'react';

const Navigation = ({ onRouteChange, isSignIn }) => {

    if(isSignIn) {
        return(
            <nav style = {{display : "flex", justifyContent : "flex-end"}}>
            <p onClick = {() => onRouteChange('signout')} className = 'f3 link dim white underline pa3 pointer'>Sign Out</p>
            </nav>
        );
    }
    else {
        return(
            <nav style = {{display : "flex", justifyContent : "flex-end"}}>
            <p onClick = {() => onRouteChange('SignIn')} className = 'f3 link dim white underline pa3 pointer'>Sign In</p>
            <p onClick = {() => onRouteChange('register')} className = 'f3 link dim white underline pa3 pointer'>Register</p>
            </nav>
        );
    }

}

export default Navigation;
