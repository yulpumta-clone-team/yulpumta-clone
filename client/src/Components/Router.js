import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Auth from "../hoc/auth";
import Navigation from "./Navigation";

const ActiveTimer = lazy(() => import("../Routes/ActiveTimer"));
const Chat = lazy(() => import("../Routes/Chat"));
const Group = lazy(() => import("../Routes/Group"));
const GStudy = lazy(() => import("../Routes/GStudy"));
const GDetail = lazy(() => import("../Routes/GDetail/GDetailContainer"));
const Home = lazy(() => import("../Routes/Home"));
const Login = lazy(() => import("../Routes/Login"));
const Planner = lazy(() => import("../Routes/Planner"));
const Stat = lazy(() => import("../Routes/Stat"));
const Rank = lazy(() => import("../Routes/Rank"));
const Register = lazy(() => import("../Routes/Register"));

const Container = styled.div`
  width: 100%;
`;

const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Navigation />
      <Container>
        <Switch>
          <Route path="/" exact component={Auth(Home, true)} />
          <Route path="/active" exact component={Auth(ActiveTimer, true)} />
          <Route path="/login" component={Auth(Login, false)} />
          <Route path="/register" component={Auth(Register, false)} />
          <Route path="/group" exact component={Auth(Group, true)} />
          <Route path="/group/study" component={Auth(GStudy, true)} />
          <Route path="/group/detail" component={Auth(GDetail, true)} />
          <Route path="/group/chat" component={Auth(Chat, true)} />
          <Route path="/planner" component={Auth(Planner, true)} />
          <Route path="/stat" component={Auth(Stat, true)} />
          <Route path="/rank" component={Auth(Rank, true)} />
          <Redirect from="*" to="/" />
        </Switch>
      </Container>
    </Router>
  </Suspense>
);

export default AppRouter;
