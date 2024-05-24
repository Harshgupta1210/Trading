import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Page1 from './Components/Page1/page1';
import Page2 from './Components/page2/page2';
import Page3 from './Components/page3/page3';
import Page4 from './Components/Page4/page4';
import Footer from './Components/Footer/footer';
import Login from './Components/Login/login';
import { createBrowserRouter, RouterProvider,} from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
