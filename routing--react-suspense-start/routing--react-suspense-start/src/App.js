import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import User from './containers/User';
import Welcome from './containers/Welcome';
const Posts = React.lazy(() => import('./containers/Posts'));

class App extends Component {
  state = { showPosts: false}

  modeHandler = () => {
    this.setState(preState => {
      return { showPosts: !preState.showPosts};
    })
  }
  render() {
    return (
      <React.Fragment> 
      <button onClick={this.modeHandler}>Toggle Mode</button>
      {this.state.showPosts ? (<Suspense fallback={<div>Loading...</div>}>
                <Posts />
              </Suspense> 
            ) : (
              <User />
            )}
      </React.Fragment>      
      // <Router>
      //   <React.Fragment>
      //     <nav>
      //       <NavLink to="/user">User Page</NavLink> |&nbsp;
      //       <NavLink to="/posts">Posts Page</NavLink>
      //     </nav>
      //     <Route path="/" component={Welcome} exact />
      //     <Route path="/user" component={User} />
      //     <Route 
      //       path="/posts" 
      //       render={() => 
      //       <Suspense fallback={<div>Loading...</div>}>
      //         <Posts />
      //       </Suspense>} 
      //     />
      //   </React.Fragment>
      // </Router>
    );
  }
}

export default App;
