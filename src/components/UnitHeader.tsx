"use client";

import React from "react";

interface UnitHeaderProps {
  unitNumber: string;
  title: string;
  backgroundColor: string;
}

const UnitHeader: React.FC<UnitHeaderProps> = ({
  unitNumber,
  title,
  backgroundColor,
}) => {
  return (
    <div
      className={`w-[580px] h-[110.594px] rounded-[13px] relative`}
      style={{ backgroundColor }}
    >
      {/* Guidebook Button */}
      <button
        className="inline-flex p-[14px_22px_14px_14px] items-center gap-3 rounded-2xl border-2 border-black/20 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.20)] absolute left-[407px] top-[29px] w-[157px] h-[52px] cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-[0px_4px_0px_0px_rgba(0,0,0,0.20)] hover:brightness-110"
        style={{ backgroundColor }}
      >
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 relative"
        >
          <g clipPath="url(#clip0_guidebook)">
            <path
              d="M0.0195312 4.84933C0.0195312 4.12137 0.609655 3.53125 1.33761 3.53125H3.09505C3.823 3.53125 4.41313 4.12137 4.41313 4.84933C4.41313 5.57728 3.823 6.16741 3.09505 6.16741H1.33761C0.609655 6.16741 0.0195312 5.57728 0.0195312 4.84933Z"
              fill="white"
            />
            <path
              d="M0.0195312 11.8806C0.0195312 11.1526 0.609655 10.5625 1.33761 10.5625H3.09505C3.823 10.5625 4.41313 11.1526 4.41313 11.8806C4.41313 12.6085 3.823 13.1986 3.09505 13.1986H1.33761C0.609655 13.1986 0.0195312 12.6085 0.0195312 11.8806Z"
              fill="white"
            />
            <path
              d="M0.0195312 18.904C0.0195312 18.176 0.609655 17.5859 1.33761 17.5859H3.09505C3.823 17.5859 4.41313 18.176 4.41313 18.904C4.41313 19.6319 3.823 20.2221 3.09505 20.2221H1.33761C0.609655 20.2221 0.0195312 19.6319 0.0195312 18.904Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.65527 3.53056V6.16671H3.09466C3.82261 6.16671 4.41274 5.57659 4.41274 4.84864C4.41274 4.12068 3.82261 3.53056 3.09466 3.53056H2.65527ZM3.09466 1.77312H3.09349C3.68239 0.724294 4.80532 0.015625 6.09377 0.015625H20.4134C22.3125 0.015625 23.8519 1.55509 23.8519 3.45412V20.3025C23.8519 22.2015 22.3125 23.741 20.4134 23.741H6.09377C4.80535 23.741 3.68244 23.0324 3.09353 21.9836H3.09464C4.7932 21.9836 6.17016 20.6066 6.17016 18.9081C6.17016 17.2095 4.7932 15.8326 3.09464 15.8326H2.65527V14.9539H3.09464C4.7932 14.9539 6.17016 13.577 6.17016 11.8784C6.17016 10.1799 4.7932 8.80293 3.09464 8.80293H2.65527V7.92415H3.09466C4.79322 7.92415 6.17017 6.5472 6.17017 4.84864C6.17017 3.15008 4.79322 1.77312 3.09466 1.77312ZM3.09464 20.2261H2.65527V17.59H3.09464C3.8226 17.59 4.41272 18.1801 4.41272 18.9081C4.41272 19.636 3.8226 20.2261 3.09464 20.2261ZM3.09464 13.1965H2.65527V10.5604H3.09464C3.8226 10.5604 4.41272 11.1505 4.41272 11.8784C4.41272 12.6064 3.8226 13.1965 3.09464 13.1965ZM9.90473 3.96986C9.2981 3.96986 8.80633 4.46162 8.80633 5.06825C8.80633 5.67488 9.2981 6.16666 9.90473 6.16666H19.1313C19.7379 6.16666 20.2297 5.67488 20.2297 5.06825C20.2297 4.46162 19.7379 3.96986 19.1313 3.96986H9.90473ZM8.80633 10.3405C8.80633 9.73393 9.2981 9.24216 9.90473 9.24216H19.1313C19.7379 9.24216 20.2297 9.73393 20.2297 10.3405C20.2297 10.9472 19.7379 11.4389 19.1313 11.4389H9.90473C9.2981 11.4389 8.80633 10.9472 8.80633 10.3405ZM9.90473 14.5145C9.2981 14.5145 8.80633 15.0062 8.80633 15.6129C8.80633 16.2195 9.2981 16.7113 9.90473 16.7113H16.4951C17.1017 16.7113 17.5935 16.2195 17.5935 15.6129C17.5935 15.0062 17.1017 14.5145 16.4951 14.5145H9.90473Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_guidebook">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.015625)"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="text-white font-inter text-[13px] font-bold leading-[18px] tracking-[0.8px] uppercase">
          Guidebook
        </div>
      </button>

      <div className="text-white font-inter text-[17px] font-normal leading-[26.6px] absolute left-[17px] top-[61px]">
        {title}
      </div>
      <div className="text-white font-inter text-[23px] font-bold leading-[34px] absolute left-[17px] top-[22px]">
        {unitNumber}
      </div>
    </div>
  );
};

export default UnitHeader;
