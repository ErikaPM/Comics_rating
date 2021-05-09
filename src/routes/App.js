import React from 'react';
import Layout from '../components/Layout';
import Rating from '../containers/Rating';
import Home from '../containers/Home';
import '../assets/styles/App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/rating" component={Rating}/>
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App;