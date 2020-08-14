import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        ShowSideDrawer: true,
    }

    SideDrawerClosedHandler = () => {
        this.setState({ShowSideDrawer: false});
    }
    render () {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer open={this.state.ShowSideDrawer} closed={this.SideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    };
};

export default Layout;