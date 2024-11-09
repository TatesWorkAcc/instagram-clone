import LoginPage from "./LoginPage"
import HomePage from "./HomePage"
import MessagePage from "./MessagePage"

import { createBrowserRouter, RouterProvider} from 'react-router-dom'

// importing the userprovider so all components can access the username using context
import { UserProvider } from "./UserContext"

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
  },
  {
    path: '/messages',
    element: <MessagePage/>
  }
  ])

  return (
    <UserProvider>
    
      <RouterProvider router={router}/>

    </UserProvider>
  )
}

export default App
