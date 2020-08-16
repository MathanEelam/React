import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        ShowSideDrawer: false,
    }

    SideDrawerClosedHandler = () => {
        this.setState({ShowSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState(( prevState ) => {
            return {ShowSideDrawer: !prevState.ShowSideDrawer};
        } );
    }

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.ShowSideDrawer} closed={this.SideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    };
};

export default Layout;