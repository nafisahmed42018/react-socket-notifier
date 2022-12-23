import React, { useRef, useState } from 'react';
import './App.css';
import Card from './components/card/card';
import Navbar from './components/navbar/navbar';
import { posts } from './data';

const App = () => {
  const userNameRef = useRef();
  const [user, setUser] = useState('');
  console.log(user);
  return (
    <div className='container'>
      {user ? (
        <>
          <Navbar />
          {posts.map(post => (
            <Card key={post.id} post={post} />
          ))}

          <span className='username'>{user}</span>
        </>
      ) : (
        <div className='login'>
          <input ref={userNameRef} type='text' placeholder='username' />
          <button onClick={() => setUser(userNameRef.current.value)}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
