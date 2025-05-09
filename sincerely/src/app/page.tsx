import React from 'react';
import Textbox from "./components/submit/Textbox";
import TagBar from './components/entries/TagBar';
import ClassTag from  './components/entries/classTag';

const Home = () => {
  return (
    <div className="logo">
      <img src="./sincerely_star.svg" alt="Sincerely Logo" />
      <h1>Sincerely...</h1>
      <Textbox />
      <TagBar />
      {/* <ClassTag /> */}
    </div>
  );
};

export default Home;