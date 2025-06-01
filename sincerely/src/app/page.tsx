import IconBar from "./components/submit/IconBar";
import Textbox from "./components/submit/Textbox";
import TextboxContainer from "./components/submit/TextboxContainer";

const Home = () => {
  return (
    <div>
      <nav className="flex items-center p-4">
      </nav>
      <div className="flex justify-center mt-8 mx-12">
        <TextboxContainer />
      </div>
    </div>
  );
};

export default Home;