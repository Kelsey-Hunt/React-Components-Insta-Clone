/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

import React, { useState } from 'react';
import Posts  from './components/Posts/Posts';
import SearchBar  from './components/SearchBar/SearchBar'
import dummyData  from './dummy-data.js'
import './App.css';

const App = () => {
  const [posts, setPosts] = useState(dummyData);

  const likePost = postId => {

    const updatedPosts = posts.map(post => {
      if(post.id === postId){
        return {...post, likes: post.likes + 1};
      } else {
        return post;
      }
    })

    setPosts(updatedPosts);
  };

  return (
    <div className='App'>
      {/* Add SearchBar and Posts here to render them */}
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
