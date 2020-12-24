import React , {Suspense, lazy} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoadingScreen from './screens/LoadingScreen';
import "./App.css";
// const banner =  require("./assets/banner.jpg")

const Home = lazy(() => import("./screens/Home"));
const Explore = lazy(() => import("./screens/Explore"));
const NotFound = lazy(() => import("./screens/NotFound"));

const App: React.FC = () =>  {
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


export function sum(a:number, b:number): number {
    return a + b;
}
