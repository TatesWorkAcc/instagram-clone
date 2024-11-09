import LoginPage from "./LoginPage"
import HomePage from "./HomePage"
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {

  const router = createBrowserRouter([{
    path: '/',
    // one slash for the default page to open
    element: <LoginPage />,
    errorElement: <div>404 Not Found</div>
    // shows error message if wrong url
    // can also create a component to put here
  },
  {
    path: '/home',
    // this adds to url that links to home page
    element: <HomePage/>
  }
  ])

  return (
    <>

      <RouterProvider router={router}/>

    </>
  )
}

export default App
