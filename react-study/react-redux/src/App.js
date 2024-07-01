import './App.css';
import {Counter} from "./features/counter/Counter";

import {createBrowserRouter, Link, RouterProvider, useNavigate} from "react-router-dom";
import Layout from "./viewa/Home/Home";
import NotFound from "./viewa/404/404";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/about",
                element: <div>About</div>
            },
            {
                path: "/login",
                element: <div>Login</div>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
])

function App() {
    return (
        <div className="App">
            <Counter/>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
