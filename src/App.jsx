import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import Root from "./components/Root";

function App() {
const router = createBrowserRouter([
  {path: '/',
element: <Root />,
children: [
  {
    index: true,
    element: <Homepage />
  }
]
}
])

  return (
    <>
    <RouterProvider  router={router} />
    </>
  )
}

export default App
