import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-gray overflow-hidden flex flex-col items-center justify-start pt-[18px] px-5 pb-[29px] box-border gap-[38px] max-w-full text-center text-6xl text-white font-langar mq675:gap-[19px] ${className}`}
    >
      <div className="w-[370px] overflow-hidden flex flex-col items-start justify-center py-0 pr-[34px] pl-0 box-border max-w-full">
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-3 pr-1.5 pl-[38px] gap-[24px]">
          <div className="h-[35px] relative tracking-[0.07em] inline-block mq450:text-xl">
            Follow us on:
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[0.5px] px-0 gap-[20px] mq450:flex-wrap mq450:justify-center">
            <img
              className="h-10 w-10 relative overflow-hidden shrink-0 min-h-[40px]"
              loading="lazy"
              alt=""
              src="/skilliconsinstagram.svg"
            />
            <img
              className="h-10 w-10 relative overflow-hidden shrink-0 min-h-[40px]"
              loading="lazy"
              alt=""
              src="/logoswhatsappicon.svg"
            />
            <img
              className="h-10 w-10 relative overflow-hidden shrink-0 min-h-[40px]"
              loading="lazy"
              alt=""
              src="/skilliconslinkedin.svg"
            />
            <img
              className="h-10 w-10 relative overflow-hidden shrink-0 min-h-[40px]"
              loading="lazy"
              alt=""
              src="/logosfacebook.svg"
            />
            <img
              className="h-10 w-10 relative overflow-hidden shrink-0 min-h-[40px]"
              loading="lazy"
              alt=""
              src="/pajamastwitter.svg"
            />
          </div>
        </div>
      </div>
      <div className="overflow-hidden flex flex-col items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
        <div className="relative tracking-[0.07em] leading-[37px] mq450:text-xl">
          © Similarweb LTD 2024 All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
