import ScrollToTop from "react-scroll-to-top";

const BackToTop = () => {
  return (
    <ScrollToTop
      smooth
      top="310"
      svgPath="M128,216,88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0V96l80,40v32l-80-16v32L168,200v32Z"
      className="pl-[6px] bg-red-100 duration-1000"
      color="#F63E7B"
    />
  );
};

export default BackToTop;
