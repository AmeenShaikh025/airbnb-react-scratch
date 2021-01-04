import React , {Suspense, lazy} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoadingScreen from './LoadingScreen';
// const banner =  require("./assets/banner.jpg")

const Home = lazy(() => import("./Home"));
const Explore = lazy(() => import("./Explore"));
const NotFound = lazy(() => import("./NotFound"));

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

export default App


// export function sum(a:number, b:number): number {
//     return a + b;
// }
