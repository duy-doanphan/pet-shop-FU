import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    RouterProvider,
    Route, Routes,
} from "react-router-dom";
import User from "./component/User/User";
import Admin from "./component/Admin/Admin";
import HomePage from "./component/Home/HomePage";
import ManageUser from "./component/Admin/Content/ManageUser";
import DashBoard from "./component/Admin/Content/DashBoard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        {/*<React.StrictMode>*/}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App></App>}>
                    <Route index element={<HomePage></HomePage>}/>
                    <Route path="users" element={<User></User>}/>
                </Route>

                <Route path="/admins" element={<Admin></Admin>}>
                    <Route index element={<DashBoard></DashBoard>}/>
                    <Route path="manage-users" element={<ManageUser></ManageUser>}/>
                </Route>
            </Routes>
        </BrowserRouter>

        {/*</React.StrictMode>*/}
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
