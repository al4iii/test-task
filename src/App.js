import React from "react";
import { Header } from "./components/Header";
import { _Table } from "./components/Table";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Content from "./components/content";
import { Login } from "./components/Login";
import { Edit } from "./components/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Redirect to={"/content"} />} />
          <Route path="/content" render={() => <Content />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route path="/edit/:id?" render={() => <Edit />} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
