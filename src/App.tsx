import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';


function App() {
  return (
    <div className='max-w-[1400px] mx-auto'>
      <RouterProvider
        router={router}
      />
    </div>
  );
}

export default App;
