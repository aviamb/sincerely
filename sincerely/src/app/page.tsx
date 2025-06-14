import TextboxContainer from "./components/submit/TextboxContainer";
import Description from "./components/submit/Description";

const Home = () => {
  return (
    <div>
      <nav className="flex items-center p-4">
      </nav>
      <div className="flex justify-center p-20 ml-30">
        <div>
          <TextboxContainer />
        </div>
        <div className="ml-5">
          <Description />
        </div>
      </div>
      
    </div>
  );
};

export default Home;