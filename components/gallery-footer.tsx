import type { NextPage } from "next";

export type GalleryFooterType = {
  className?: string;
};

const GalleryFooter: NextPage<GalleryFooterType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-7 pb-1.5 box-border gap-[52px] max-w-full text-left text-41xl text-gray font-langar mq675:gap-[26px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <h1 className="m-0 relative text-inherit leading-[100%] font-normal font-inherit mq450:text-17xl mq450:leading-[36px] mq825:text-29xl mq825:leading-[48px]">
          GALLERY
        </h1>
      </div>
      <div className="self-stretch h-[335px] overflow-y-auto shrink-0 flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full">
        <div className="h-[412px] flex-1 relative overflow-hidden max-w-full">
          <img
            className="absolute top-[4px] left-[0px] w-full h-full"
            loading="lazy"
            alt=""
            src="/rectangle-6.svg"
          />
          <div className="absolute top-[21px] left-[932px] w-[440px] h-[275px] overflow-hidden flex flex-col items-center justify-start bg-[url('/896588-magnificentkaratewallpapers-3550x2367-h-1@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
            <img
              className="self-stretch h-[275px] relative max-w-full overflow-hidden shrink-0 object-cover hidden"
              alt=""
              src="/896588-magnificentkaratewallpapers-3550x2367-h-1@2x.png"
            />
          </div>
          <div className="absolute top-[23px] left-[466px] w-[440px] h-[275px] overflow-hidden flex flex-col items-center justify-start bg-[url('/896588-magnificentkaratewallpapers-3550x2367-h-1@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
            <img
              className="self-stretch h-[275px] relative max-w-full overflow-hidden shrink-0 object-cover hidden"
              alt=""
              src="/896588-magnificentkaratewallpapers-3550x2367-h-1@2x.png"
            />
          </div>
          <div className="absolute top-[21px] left-[0px] w-[440px] h-[275px] overflow-hidden flex flex-col items-center justify-start bg-[url('/896588-magnificentkaratewallpapers-3550x2367-h-1@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
            <img
              className="self-stretch h-[275px] relative max-w-full overflow-hidden shrink-0 object-cover hidden"
              alt=""
              src="/896588-magnificentkaratewallpapers-3550x2367-h-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="ml-[-29px] w-[1442px] h-[591px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border max-w-[105%]">
        <img
          className="mt-[-5.5px] h-[602px] flex-1 relative max-w-full overflow-hidden object-contain"
          alt=""
          src="/frame-9@2x.png"
        />
      </div>
    </section>
  );
};

export default GalleryFooter;
