
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Topics from './Components/Topics/Topics';
import Main from './Layout/Main';
import Statistics from './Layout/Statistics';
import Blog from './Components/Blog/Blog';
import Error from './Components/Error/Error';
import Quiz from './Components/Quiz/Quiz';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>
        },
        {
          path: '/topics',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>
        },
        { path: '/statistics', element: <Statistics></Statistics> },
        { path: '/blog', element: <Blog></Blog> },
        {
          path: 'quiz/:id', loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          }, element: <Quiz></Quiz>
        }
      ],
    },
    { path: '*', element: <Error></Error> }
  ])




  return (
    <div className="App">

      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
