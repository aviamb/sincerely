import Textbox from "./components/submit/Textbox";
import TagBar from './components/entries/TagBar';

const Home = () => {
  return (
    <div className="logo">
      <img src="./sincerely_star.svg" alt="Sincerely Logo" />
      <h1>Sincerely...</h1>
      <Textbox />
      <TagBar />
    </div>
  );
};

export default Home;