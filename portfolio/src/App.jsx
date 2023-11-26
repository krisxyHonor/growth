import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import DotGroup from "./components/DotGroup";
import Intro from "./components/Intro";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const [isScrolledTop, setIsScrolledTop] = useState(true);

  useEffect(() => console.log(selectedPage), [selectedPage]);

  useEffect(() => {
    const scrollHandler = () => setIsScrolledTop(window.scrollY === 0);
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div className="App bg-deep-blue mt-[100px]">
      <Navbar
        isScrolledTop={isScrolledTop}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Intro />
        <section className="h-[200px] w-full bg-red" id="skills"></section>
        <section className="h-[200px] w-full bg-red" id="projects"></section>
        <section
          className="h-[200px] w-full bg-red"
          id="testimonials"
        ></section>
        <section className="h-[200px] w-full bg-red" id="contact"></section>
      </div>
    </div>
  );
};

export default App;
