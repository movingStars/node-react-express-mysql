import React from 'react';
import { observer, inject } from 'mobx-react';

@inject(['LoginStore']) @observer
class Login extends React.Component{

    render(){

        const { userName } = this.props.LoginStore;

        return(

            <div>{userName}，您好！</div>

        );

    }

}

export default Login;