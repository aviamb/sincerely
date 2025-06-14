const About = () => {
  return (
    <div className="flex justify-center items-center h-screen -mt-5">
      <div className="flex flex-col items-center w-[60%] mb-40 text-center">
        <img src="/cow.png" alt="Cow image" className="w-[30%] h-auto m-5" />
        <p className="text-left text-[#676767]">
          hello, thanks for stopping by! to introduce the sincerely project was made by <span className="font-bold"> willa</span>, <span className="font-bold"> avia</span>, <span className="font-bold"> randall</span>, <span className="font-bold"> alice</span>, and <span className="font-bold"> akshay</span>. the project originally started as a silly idea that randall came up during fall quarter of 2024. he wanted to add his own twist to the amazing projects he admired. the sincerely project was heavily inspired by Are.na (interface), @ucrconfessions on instagram, and the unsent project. all in all, we hope you stick around and check out what this project is all about!
        </p>
        <div className="m-10 text-[#A0B39E]">#make-it-last-forever</div>
        <iframe
          src="https://open.spotify.com/embed/track/2FwDApgXk91kXvqy2oB7dz?si=1b13202b62f941e5"
          width="50%"
          height="80"
          className="mt-6"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          title="Spotify Preview"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
