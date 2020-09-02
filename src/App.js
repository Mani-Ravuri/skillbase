import React from 'react';
import logo from './logo.svg';
import { Button, Row, Col } from 'antd';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import NavBar from "./components/dashboard/features/header";
import Footer from "./components/dashboard/features/footer";
import Login from "./components/profile/features/login/Login"
import Skills from "./components/skills";
import AddSkills from "./components/skills/features/AddSkill";
import LandingPage from "./components/dashboard";
import Organization from "./components/organization";
import Profile from "./components/profile";
import Directory from "./components/organization/features/Directory";
import AddPeople from "./components/organization/features/Directory/peoples/CreatePeople";



function App() {
  return (

    <BrowserRouter >
      {/* <ScrollToTop /> */}

      <header className='main-header-grid'>
        <NavBar />
      </header>
      <Row style={{ padding: "3em 0", background: "#0000ff14" }}>
        <Col xs={{ span: 24, offset: 0 }} lg={{ span: 20, offset: 2 }} sm={{ span: 24, offset: 0 }}>
          <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={LandingPage} />
            <Route path="/skill/addskill"> <AddSkills /></Route>
            <Route path="/skill" > <Skills /> </Route>
            <Route path="/profile" > <Profile /></Route>
            <Route path="/organization/directory/people"  > <AddPeople /></Route>
            <Route path="/organization/directory" > <Directory /></Route>
            <Route path="/organization" > <Organization /></Route>
            <Route path="/" render={(props) => redirectAuth(props)} />
          </Switch>
        </Col>
      </Row>
      <footer className="App-footer">
        <Footer />
      </footer>
    </BrowserRouter>

  );
}
function redirectAuth(props) {
  const authenticated = JSON.parse(sessionStorage.getItem('isLogged'))
  if (authenticated) return <Redirect to="/dashboard" />
  else return <Login {...props} />
}
export default App;
