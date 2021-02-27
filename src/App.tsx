import React , {Suspense, lazy} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoadingScreen from './screens/LoadingScreen';

const Home = lazy(() => import("./screens/Home"));
const Explore = lazy(() => import("./screens/Explore"));
const NotFound = lazy(() => import("./screens/NotFound"));

const App = () =>  {
    return (
        <main>
            <Suspense fallback={<LoadingScreen />}>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/explore" component={Explore} />
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </main>
    )
}

export default App;

