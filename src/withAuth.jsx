import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { URL } from './config';

function withAuth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    
    componentDidMount() {
      fetch(URL+'check_token',{
        method: 'POST',
            body: JSON.stringify({
              token:localStorage.getItem('token')
            }),
            headers: {
              'Content-Type': 'application/json'
            } 
      })
        .then(res => res.json())
        .then(data => {
            if(data.isValid){
                this.setState({ loading: false, redirect: false });
            }else{
                this.setState({ loading: false, redirect: true });
            }
          
        });
    }


    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/auth" />;
      }
      return <ComponentToProtect {...this.props} />;
    }
  }
}

export default withAuth