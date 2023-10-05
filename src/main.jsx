import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import ErrorPage from './routes/ErrorPage.jsx';
import App from './App.jsx';

const router = createBrowserRouter([{
  path:"*",
  element: <App/>,
  errorElement: <ErrorPage/>
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
