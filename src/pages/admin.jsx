import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './dashboard';
import Messages from './messages';
import AddBlog from './addblog';
import Nav from '../components/nav';


export default function Admin(props){
    const { path } = props.match

    
    const links = [
        {
            title:'Dashboard',
            url:'/admin/'
        },
        {
            title:'Blog',
            url:'/admin/blog'
        },
        {
            title:'Messages',
            url:'/admin/messages'
        }
    ]

    const heading = 'APanel'

    return (
        <div className='ad-m'>
            <Router>
                <Nav links={links} heading={heading}/>
                <Switch>
                    <Route path={'/admin/'} exact component={Dashboard}/>
                    <Route path={'/admin/messages'} exact component={Messages}/>
                    <Route path={'/admin/blog'} exact component={AddBlog}/>
                </Switch>
            </Router>
        </div>
    )
}