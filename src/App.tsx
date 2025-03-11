import Lobby from './pages/lobby';
import ShareLayout from './pages/sharelayout';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import Observe from './pages/observe';
import ErrorRoute from './pages/routing-error';
import BirdsDes from './pages/birdsDes';
import './App.css';
const Routes = createBrowserRouter([
   // share layout is navigation bar 
  {path:"/",element:<ShareLayout/>,errorElement:<ErrorRoute/>, children:[
         {path:"/",element:<Lobby/>}, // This is  Home page
        {path:"/observe", element:<Observe/>} // this is Observe The Birds Page

  ]},
  {path:'/observe/:id',element:<BirdsDes/>}

])
function App() {
  return (
    <div className='bg-[#2A2C27]'>
   
   
    <RouterProvider router={Routes} />

   </div>
  )
}

export default App
