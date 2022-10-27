import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { router } from './Router/Router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (

    <div className='App'>
       <RouterProvider router={router}></RouterProvider>
   
    </div>
  );
}

export default App;
