import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { routes } from './routeConfig';
export const Routes = () => {

    return (
        <Switch>
            {
                routes.map(route => {
                   return  <Route {...route} key={route.component.toString()} />
                })
            }
        </Switch>
    )
}
