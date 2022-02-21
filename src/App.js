import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Author from './Components/Author/Author';
import Post from './Components/Post/Post';
import Stories from './Components/Stories/Stories';
import Subes from './Components/subes/Subes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stories />}/>
        <Route path="/post" element={<Post />}/>
        <Route path="/author" element={<Author />}/>
        <Route path="/subes" element={<Subes />}/>

        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;