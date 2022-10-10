
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Topics from './Components/Topics/Topics';
import Main from './Layout/Main';
import Statistics from './Layout/Statistics';
import Blog from './Components/Blog/Blog';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        { path: '/', element: <Topics></Topics> },
        {
          path: '/topics', loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }, element: <Topics></Topics>
        },
        { path: '/statistics', element: <Statistics></Statistics> },
        { path: '/blog', element: <Blog></Blog> }
      ],
      element: <Main></Main>
    },
  ])




  return (
    <div className="App">

      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
