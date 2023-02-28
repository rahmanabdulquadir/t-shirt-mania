import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Main from './Layouts/Main';
import T_shirts from './component/T_shirt/T_shirts';
import Home from './component/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('t_shirt.json')
          },
          element: <Home></Home>
        },
        {
          path: '/t-shirts',
          element: <T_shirts></T_shirts>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
