import Home from "./components/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Details from "./components/Details/Details";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/details',
      element:<Details></Details>
    }
  ])
  return (
    <RouterProvider router={router} >
       <Home></Home>
    </RouterProvider> 
  );
}

export default App;
