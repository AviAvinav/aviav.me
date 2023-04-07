import Navbutton from "../navbutton";

const Blog = () => {
  return (
    <main className="relative z-0">
      <div className="text-zinc-400 selection:bg-emerald-200 selection:text-black bg-black relative">
        <div className="fixed left-0 top-0 w-screen z-20 h-20 md:h-screen md:w-20 flex items-center md:items-start md:justify-center md:pt-32 px-10 sm:px-20 md:px-0 bg-emerald-200">
          <Navbutton />
        </div>
        <div className="h-screen w-screen z-10 flex flex-col px-10 sm:px-20 md:px-44 relative">
          <h1 className="text-6xl">Welcome to Avi&apos;s Blog</h1>
        </div>
      </div>
    </main>
  );
};

export default Blog;
