import React from 'react';
import { BrowserRouter,Switch, Redirect ,Route } from 'react-router-dom';

import Layout from '../components/Layout'
import Principal from '../pages/Principal'
import NotFound from '../pages/NotFound'
import BadgeNew from '../pages/BadgeNew'
import BadgesRick from '../pages/BadgesRick'
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer'
import BadgeEdit from '../pages/BadgeEdit'
import Badges from '../pages/Badges'
import fetchrick from './fetchrick';

function App(){
    return (
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/"  component={Principal}/>
                <Route exact path="/Badges" component={Badges} />
                <Route exact path="/BadgesRick" component={BadgesRick} />
                <Route exact path="/BadgesRick/:characterId" component={fetchrick} />

                <Route exact path="/Badges/new" component={BadgeNew} />
                <Route exact path="/Badges/:badgeId" component={BadgeDetailsContainer} />
                <Route exact path="/Badges/:badgeId/edit" component={BadgeEdit} />

                <Route path="/404" component={NotFound} />
                <Redirect from="*" to="/404" />
            </Switch>
              

        </Layout>
        </BrowserRouter>
    )
}
export default App
