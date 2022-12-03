import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AllIconsCategory from './Icons/AllIconsCategory/AllIconsCategory';
import ErrorPage from './Icons/ErrorPage/ErrorPage';
import SingleIcons from './Icons/SingleIcons/SingleIcons';
import Main from './Layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,

      children: [
        {
          path: '/',
          element: <AllIconsCategory></AllIconsCategory>
        },
        {
          path: '/categories/:name',
          element: <SingleIcons></SingleIcons>,
          loader: ({ params }) => fetch(`hhttps://icons-server.vercel.app/categories/${params.name}`)
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} ></RouterProvider>

    </div>
  );
}

export default App;
