import Content from "./components/Content/Content";
import NavBar from "./components/Navbar/NavBar";
import Slogan from "./components/Slogan/Slogan";
import {useEffect, useState} from 'react';


export default function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      console.log("abc");
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, [])

  useEffect(() => {
    if(windowSize.width < 500) {
      setMobile(true);
    }
    else {
      setMobile(false);
    }
  }, [windowSize]);

  return (
    <div className="font-sora overflow-y-auto overflow-x-hidden h-screen p-5 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 dark:text-white text-black md:px-20 from-white to-pink-500">
      <NavBar isMobile={isMobile}/>
      <Slogan/>
      <Content/>
    </div>
  )
}
