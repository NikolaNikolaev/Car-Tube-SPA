import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/home/Home';
import home from './services/api/homeEndpoints';

import AuthController from './controllers/AuthController';
import CarOfferController from './controllers/CarOfferController';

const AppRouter = () => (
    <Switch>
        {/* Home */}
        <Route exact path="/" ><Redirect to={home.HOME_ENDPOINT} /></Route>
        <Route exact path={home.HOME_ENDPOINT} component={Home} />
        {/* Auth */}
        <Route path="/auth" component={AuthController} />
        {/* Car Offer */}
        <Route path="/cars" component={CarOfferController} />
        {/* Not Found */}
        <Route path={'*'} render={() => <h1>Not Found</h1>} />
    </Switch>
);

export default AppRouter;