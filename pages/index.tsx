import type { NextPage } from "next";
import Content from "../components/content";
import GalleryFooter from "../components/gallery-footer";
import Footer from "../components/footer";

const MainPage: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-3 px-0 pb-0.5 box-border gap-[52px] leading-[normal] tracking-[normal] mq825:gap-[26px]">
      <img
        className="w-full h-[194px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/rectangle-1.svg"
      />
      <Content />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/frame-2@2x.png"
      />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/upcoming-events@2x.png"
      />
      <GalleryFooter />
      <Footer />
    </div>
  );
};

export default MainPage;
