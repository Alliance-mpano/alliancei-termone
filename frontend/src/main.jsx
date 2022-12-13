import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import action as appAction from './App';
import App, {action as appAction} from './App'
import ErrorPage from './ErrorPage';
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    action: appAction,
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
