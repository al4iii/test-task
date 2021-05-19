import React from "react";
import { Header } from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Content from "./components/Content";
import { Login } from "./components/Login";
import { Edit } from "./components/Edit";
import { Footer } from "antd/lib/layout/layout";

const App = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Redirect to={"/content"} />} />
          <Route path="/content" render={() => <Content />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route path="/edit/:id?" render={() => <Edit />} />
        </Switch>
        <Footer>Created by <a href="https://github.com/al4iii">al4ii</a></Footer>
      </Provider>
    </HashRouter>
  );
};

export default App;
