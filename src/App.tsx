import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Routers from '@/utils/Routers';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          {Routers.map((route: any) => {
            return <Route key={route.id} {...route} />;
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
