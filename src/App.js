import React, { Component } from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import First from './components/first';
import Second from './components/second';
import Main from './components/main';

class App extends Component {
  render() {
    const activeStyle = {
      color: 'skyBlue'
    };

    return (
      <div className="App">
        클라이언트 사이드 렌더링을 해 보겠습니다.
        <div>
          <ul className="link-list">
            <li>
              {/* 다른 태그와 마찬가지로 className을 넣을 수 있습니다. */}
              {/* 이동하려고 하는 URL을 to라는 Attribute로 표현해 주세요. */}
              <NavLink activeStyle={activeStyle} exact className="link" to="/">
                메인 페이지로 이동
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} className="link" to="/home">
                홈 페이지로 이동
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} className="link" to="/first">
                First 페이지로 이동
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} className="link" to="/second">
                Second 페이지로 이동
              </NavLink>
            </li>
          </ul>
        </div>
        {/* react-router-dom에서 제공하는 태그 입니다. */}
        {/* path 부분에 url 경로를 넣고, component의 to의 경로에서 보여주고 싶은 컴포넌트를 넣어주면 됩니다. */}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/first" component={First} />
          <Route path="/second" component={Second} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
