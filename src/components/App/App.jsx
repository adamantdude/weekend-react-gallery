import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    getGallery();
  }, [])

  const getGallery = () => {
    Axios({
      method: 'GET',
      url: '/gallery'
    })
      .then(res => {
        setItems(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const postLike = (id) => {
    Axios({
      method: 'PUT',
      url: `/gallery/like/${id}`
    })
      .then(res => {
        console.log(res);
        getGallery();
      })
      .catch(err => {
        console.log(err);
      })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList list={items} postFN={postLike}/>
      </div>
    );
}

export default App;
