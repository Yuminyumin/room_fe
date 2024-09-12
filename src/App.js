import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './room/page/HomePage.jsx';
import RoomsView from './room/page/RoomsViewPage.jsx';
import RoomsUpload from './room/page/RoomsUploadPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/rooms-view' element={<RoomsView/>}/>
        <Route path='/rooms-upload' element={<RoomsUpload/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
