import TextboxContainer from "./components/submit/TextboxContainer";
import Description from "./components/submit/Description";

const Home = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 max-w-6xl w-full">
        <div className="flex-1">
          <TextboxContainer />
        </div>

        <div className="md:w-[300px] text-sm text-gray-700">
          <Description />
        </div>
      </div>
    </main>
  );
};

export default Home;
