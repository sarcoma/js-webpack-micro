/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Column, Container, Row } from './elements/structure';
import CurrentPage from './page';
import ContactPage from './contact-page';
import { Title } from './elements/typography';
import PlotPage from './plot-page';
import LoginPage from './login-page';
import { userIsNotAuthenticated } from '../authentication';
import { connect } from 'react-redux';
import { CREDENTIALS_LOGOUT } from '../actions/types';
import HomePage from './home-page';

const isActiveFunc = (match) => {
    return match;
};

let Links = ({loggedIn, logout}) => (
    <nav className="main-nav">
        <NavLink exact isActive={isActiveFunc} activeClassName="active" to="/">Home</NavLink>
        {' '}
        <NavLink strict isActive={isActiveFunc} activeClassName="active" to="/one">One</NavLink>
        {' '}
        <NavLink strict isActive={isActiveFunc} activeClassName="active" to="/two">Two</NavLink>
        {' '}
        <NavLink strict isActive={isActiveFunc} activeClassName="active" to="/contact-us">Contact Us</NavLink>
        {' '}
        <NavLink strict isActive={isActiveFunc} activeClassName="active" to="/plot">Plot</NavLink>
        {loggedIn !== null ? <button onClick={logout}>Logout</button> : null}
    </nav>
);

Links = connect(
    state => {
        return {
            loggedIn: state.app.auth.data.token
        };
    },
    dispatch => {
        return {
            logout: () => dispatch({type: CREDENTIALS_LOGOUT})
        };
    }
)(Links);

const App = () => (
    <div className="page-wrapper">
        <div className="page-content">
            <Container>
                <Row>
                    <Column span={6}>
                        <Title tag='h2'>Site Title</Title>
                    </Column>
                    <Column span={6}>
                        <Links/>
                    </Column>
                </Row>
            </Container>
            <Container>
                <Switch>
                    <Route exact path="/" component={userIsNotAuthenticated(HomePage)}/>
                    <Route exact path="/login" component={userIsNotAuthenticated(LoginPage)}/>
                    <Route
                        exact
                        path="/plot"
                        component={userIsNotAuthenticated(PlotPage)}
                    />
                    <Route exact path="/contact-us" component={userIsNotAuthenticated(ContactPage)}/>
                    <Route exact path="/:page?" component={userIsNotAuthenticated(CurrentPage)}/>
                </Switch>
            </Container>
        </div>
    </div>
);

export default App;
