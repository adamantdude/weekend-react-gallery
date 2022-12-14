import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import GalleryForm from '../GalleryForm/GalleryForm';

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    getGallery();
  }, []);

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

  const newPicture = (picture) => {
    Axios({
      method: 'POST',
      url: '/gallery',
      data: picture
    })
      .then(res => {
        console.log(res);
        getGallery();
      })
      .catch(err => {
        console.log(err);
      })
  }

  const delPicture = (id) => {
    Axios({
      method: 'DELETE',
      url: `/gallery/${id}`
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
        <GalleryForm newFN={newPicture}/>
        <GalleryList list={items} postFN={postLike} delFN={delPicture}/>
      </div>
    );
}

export default App;
