import type { NextPage } from "next";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1375px] flex flex-row items-start justify-center pt-0 px-5 pb-[19px] box-border max-w-full text-left text-11xl text-white font-kaushan-script ${className}`}
    >
      <div className="w-[1111px] flex flex-row items-start justify-between max-w-full gap-[20px] mq825:flex-wrap">
        <img
          className="h-[163px] w-[164px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/299995596-391204619803731-7254178695556164460-nremovebgpreview-1@2x.png"
        />
        <div className="w-[634px] flex flex-col items-start justify-start pt-[41px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <a className="[text-decoration:none] relative text-firebrick inline-block min-w-[68px] z-[1]">
              Home
            </a>
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[101px] z-[1]">
              Services
            </a>
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[71px] z-[1]">
              About
            </a>
            <a className="[text-decoration:none] relative text-[inherit] whitespace-nowrap z-[1]">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
