import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Todo from './Todo';

function Home() {
  return (
    <div id = "todoHome">
      <Header />
      <div id = "todoArea">
      <Todo />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
