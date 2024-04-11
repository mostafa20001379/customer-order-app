import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import routes from './routes';
import Header from "./components/Header";

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <Header/>
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.component/>}
                            exact={route.exact}
                        />
                    ))}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
