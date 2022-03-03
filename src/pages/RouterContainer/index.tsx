import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AsyncDemo } from '../Basics/AsyncDemo';

export const ROUTES = [
    { path: '/basic/async', element: <AsyncDemo /> }
]


export const RouterContainer = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {ROUTES.map((route, index) => {
                        return <Route path={route.path} key={ index } element={route.element} ></Route>
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    )
}
