import TextboxContainer from "./components/submit/TextboxContainer";
import Description from "./components/submit/Description";

const Home = () => {
  return (
    <div>
      <nav className="flex items-center p-4">
      </nav>
      <div className="flex justify-center h-screen">
        <div className="flex justify-center mt-8 mx-12">
          <TextboxContainer />
        </div>
      </div>
      
    </div>
  );
};

export default Home;