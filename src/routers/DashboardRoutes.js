import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { HeroeScreen } from '../components/heores/HeroeScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Switch>
              <Route exact path="/marvel" component={MarvelScreen} />
              <Route exact path="/hero/:heroeId" component={HeroeScreen} />
              <Route exact path="/dc" component={DcScreen} />
              <Route exact path="/search" component={SearchScreen} />

              <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}
