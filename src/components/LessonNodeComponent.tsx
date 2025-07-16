"use client";

import React from "react";

interface LessonNodeComponentProps {
  type: "start" | "story" | "lesson" | "progress" | "review";
  position: { left: number; top: number };
}

const LessonNodeComponent: React.FC<LessonNodeComponentProps> = ({
  type,
  position,
}) => {
  const baseClasses =
    "w-[70px] h-[65px] flex-shrink-0 absolute cursor-pointer transition-all duration-200 hover:scale-110 hover:z-10";
  const shadowClasses =
    "w-[70px] h-2 flex-shrink-0 bg-gradient-to-b from-[rgba(0,0,0,0.20)] to-[rgba(0,0,0,0.20)] absolute left-0 top-[29px]";
  const nodeClasses =
    "w-[70px] h-[57px] flex-shrink-0 rounded-[31.75px] shadow-[0px_8px_0px_0px_rgba(0,0,0,0.20)] absolute left-0 top-0 transition-all duration-200";
  const iconContainerClasses =
    "flex w-[42px] h-[34px] justify-center items-center flex-shrink-0 absolute left-[14px] top-[12px]";

  const renderContent = () => {
    switch (type) {
      case "start":
        return (
          <div
            className={baseClasses}
            style={{ left: position.left, top: position.top }}
          >
            <div className={`${shadowClasses} bg-flowlingo-green`}></div>
            <div
              className={`${nodeClasses} bg-flowlingo-green shadow-[0px_8px_0px_0px_rgba(0,0,0,0.20),0px_8px_0px_0px_#58CC02] hover:shadow-[0px_12px_0px_0px_rgba(0,0,0,0.20),0px_12px_0px_0px_#58CC02] hover:brightness-110`}
            ></div>
            <div className={iconContainerClasses}>
              <svg
                width="42"
                height="35"
                viewBox="0 0 42 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[42px] h-[34px] flex-shrink-0"
              >
                <mask
                  id="mask0_star"
                  maskUnits="userSpaceOnUse"
                  x="6"
                  y="3"
                  width="30"
                  height="29"
                >
                  <path d="M36 3.10938H6V31.1094H36V3.10938Z" fill="white" />
                </mask>
                <g mask="url(#mask0_star)">
                  <path
                    d="M18.7521 4.52094C19.6598 2.63885 22.3402 2.63885 23.2479 4.52094L25.8539 9.92454C26.225 10.6941 26.9639 11.2203 27.8125 11.3193L33.7906 12.017C35.9269 12.2663 36.7684 14.9208 35.1658 16.3553L30.8845 20.1879C30.224 20.7791 29.9267 21.6764 30.1035 22.5451L31.2468 28.1624C31.6684 30.2334 29.4857 31.8581 27.6228 30.86L22.1786 27.9433C21.4424 27.5489 20.5576 27.5489 19.8214 27.9433L14.3772 30.86C12.5143 31.8581 10.3316 30.2334 10.7532 28.1624L11.8965 22.5451C12.0733 21.6764 11.776 20.7791 11.1155 20.1879L6.83415 16.3553C5.23162 14.9208 6.07307 12.2663 8.20939 12.017L14.1875 11.3193C15.0361 11.2203 15.775 10.6941 16.1461 9.92454L18.7521 4.52094Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
          </div>
        );

      case "story":
        return (
          <div
            className={baseClasses}
            style={{ left: position.left, top: position.top }}
          >
            <div className={`${shadowClasses} bg-[#E5E5E5]`}></div>
            <div
              className={`${nodeClasses} bg-[#E5E5E5] shadow-[0px_8px_0px_0px_rgba(0,0,0,0.20),0px_8px_0px_0px_#E5E5E5] hover:shadow-[0px_12px_0px_0px_rgba(0,0,0,0.20),0px_12px_0px_0px_#E5E5E5] hover:bg-[#f0f0f0]`}
            ></div>
            <div className={iconContainerClasses}>
              <svg
                width="42"
                height="35"
                viewBox="0 0 42 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[42px] h-[34px] flex-shrink-0"
              >
                <g clipPath="url(#clip0_book)">
                  <path
                    d="M42.0002 9.03948C42.0002 7.03722 40.3331 5.41406 38.2767 5.41406H29.9361C24.4523 5.41406 20.0068 9.74248 20.0068 15.0818V32.3872C20.0068 33.0546 20.5688 33.6109 21.2483 33.5224C25.1292 33.0167 23.7036 30.0648 30.4325 30.0648C32.3041 30.0648 36.1108 30.0648 38.2778 30.0648C40.3343 30.0648 42.0002 28.4416 42.0002 26.4394V9.03948Z"
                    fill="#AFAFAF"
                  />
                  <path
                    d="M0 9.03949C0 7.03722 1.66706 5.41406 3.72348 5.41406H12.0641C17.5479 5.41406 21.9934 9.74248 21.9934 15.0818V32.3872C21.9934 33.0546 21.4313 33.6065 20.749 33.5419C15.97 33.0898 18.3992 29.9376 11.5676 29.9376C9.69604 29.9376 5.88932 29.9376 3.72233 29.9376C1.66591 29.9376 0 28.3144 0 26.3121V9.03949Z"
                    fill="#AFAFAF"
                  />
                  <path
                    d="M36.8866 4.44722C36.8866 2.84541 35.5529 1.54688 33.9078 1.54688H27.9502C23.5632 1.54688 20.0068 5.00961 20.0068 9.28112V26.6831C20.0068 27.217 20.4593 27.6687 20.9951 27.5548C23.3484 27.0544 23.1357 24.7495 28.4467 24.7495C29.972 24.7495 32.1483 24.7495 33.9089 24.7495C35.554 24.7495 36.8866 23.451 36.8866 21.8492V4.44722Z"
                    fill="#D8D8D8"
                  />
                  <path
                    d="M5.11328 4.44722C5.11328 2.84541 6.44693 1.54688 8.09206 1.54688H14.0496C18.4367 1.54688 21.993 5.00961 21.993 9.28112V26.6831C21.993 27.217 21.5446 27.665 21.0037 27.5773C18.2361 27.1283 18.9485 24.7495 13.5532 24.7495C12.0278 24.7495 9.85153 24.7495 8.09095 24.7495C6.44581 24.7495 5.11328 23.451 5.11328 21.8492V4.44722Z"
                    fill="#D8D8D8"
                  />
                  <path
                    opacity="0.4"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.5117 3.66622C20.1003 4.20913 20.6036 4.83881 20.9999 5.53424C21.3968 4.83789 21.9009 4.20746 22.4905 3.66406V26.8431C22.2663 27.0117 22.034 27.1658 21.7694 27.2931C21.587 27.5055 21.3102 27.6278 21.0038 27.578C20.9801 27.5742 20.9567 27.5702 20.9336 27.5661C20.728 27.5937 20.5372 27.5387 20.3828 27.4294C20.0423 27.3179 19.7629 27.1707 19.5117 27.0024V3.66622Z"
                    fill="#AFAFAF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_book">
                    <rect
                      width="42"
                      height="34"
                      fill="white"
                      transform="translate(0 0.546875)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        );

      case "lesson":
        return (
          <div
            className={`${baseClasses} hover:scale-105`}
            style={{ left: position.left, top: position.top }}
          >
            <div className={`${shadowClasses} bg-[#E5E5E5]`}></div>
            <div
              className={`${nodeClasses} bg-[#E5E5E5] shadow-[0px_8px_0px_0px_rgba(0,0,0,0.20),0px_8px_0px_0px_#E5E5E5] hover:shadow-[0px_10px_0px_0px_rgba(0,0,0,0.20),0px_10px_0px_0px_#E5E5E5] hover:bg-[#f0f0f0]`}
            ></div>
            <div className={iconContainerClasses}>
              <svg
                width="42"
                height="35"
                viewBox="0 0 42 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[42px] h-[34px] flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.8731 4.86719C16.9449 4.86719 13.7604 7.85306 13.7604 11.5363V13.812C13.7604 13.8676 13.7612 13.9231 13.7626 13.9783H13.7049C11.854 13.9783 10.3535 15.4788 10.3535 17.3297V26.2708C10.3535 28.1217 11.854 29.6222 13.7049 29.6222H28.0455C29.8965 29.6222 31.397 28.1217 31.397 26.2708V17.3298C31.397 15.4788 29.8965 13.9783 28.0455 13.9783H27.9837C27.9851 13.9231 27.9858 13.8676 27.9858 13.812V11.5363C27.9858 7.85305 24.8014 4.86719 20.8731 4.86719ZM24.4812 13.9783C24.484 13.9232 24.4855 13.8678 24.4855 13.812V11.5363C24.4855 9.66568 22.8682 8.14925 20.8731 8.14925C18.8781 8.14925 17.2608 9.66568 17.2608 11.5363V13.812C17.2608 13.8678 17.2622 13.9232 17.2651 13.9783H24.4812Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>
          </div>
        );

      case "progress":
        return (
          <div
            className="w-20 h-[90px] flex-shrink-0 absolute cursor-pointer transition-all duration-200 hover:scale-110 hover:z-10"
            style={{ left: position.left, top: position.top }}
          >
            <svg
              width="81"
              height="91"
              viewBox="0 0 81 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-[90px] flex-shrink-0"
            >
              <g clipPath="url(#clip0_computer)">
                <path
                  opacity="0.3"
                  d="M76.125 38.2031H4.125C1.91586 38.2031 0.125 39.994 0.125 42.2031V74.2031C0.125 76.4123 1.91586 78.2031 4.125 78.2031H76.125C78.3341 78.2031 80.125 76.4123 80.125 74.2031V42.2031C80.125 39.994 78.3341 38.2031 76.125 38.2031Z"
                  fill="#AFAFAF"
                />
                <path
                  d="M8.41406 39.9388C8.41406 34.4023 12.9022 29.9141 18.4387 29.9141H60.8809C66.4174 29.9141 70.9056 34.4023 70.9056 39.9388V66.5225C70.9056 68.7371 69.1103 70.5324 66.8957 70.5324H12.4239C10.2093 70.5324 8.41406 68.7371 8.41406 66.5225V39.9388Z"
                  fill="#9A9A9A"
                />
                <path
                  d="M6.24707 25.431C6.24707 19.8945 10.7353 15.4062 16.2718 15.4062H63.3879C68.9244 15.4062 73.4127 19.8945 73.4127 25.431V55.2545H6.24707V25.431Z"
                  fill="#9A9A9A"
                />
                <path
                  d="M77.0433 42.9766H3.23438V54.505H77.0433V42.9766Z"
                  fill="#D8D8D8"
                />
                <path
                  d="M67.1455 25.6797H75.042C76.1493 25.6797 77.0469 26.5773 77.0469 27.6846V45.9797H67.1455V25.6797Z"
                  fill="#D8D8D8"
                />
                <path
                  d="M3.23438 27.6846C3.23438 26.5773 4.13201 25.6797 5.23932 25.6797H11.632C12.7393 25.6797 13.637 26.5773 13.637 27.6846V43.9748C13.637 45.0821 12.7393 45.9797 11.632 45.9797H5.23932C4.13201 45.9797 3.23438 45.0821 3.23438 43.9748V27.6846Z"
                  fill="#D8D8D8"
                />
                <path
                  d="M6.24707 14.208C6.24707 13.1007 7.14471 12.2031 8.25201 12.2031H18.7779C19.8852 12.2031 20.7829 13.1007 20.7829 14.208V34.7058H6.24707V14.208Z"
                  fill="#D8D8D8"
                />
                <path
                  d="M58.877 14.208C58.877 13.1007 59.7747 12.2031 60.882 12.2031H71.4079C72.5152 12.2031 73.4129 13.1007 73.4129 14.208V34.7058H58.877V14.208Z"
                  fill="#D8D8D8"
                />
                <path
                  d="M6.37891 24.3457L20.727 20.7734V33.4233L6.37891 33.2475V24.3457Z"
                  fill="#EDEDED"
                />
                <path
                  d="M6.24707 31.9297H20.7829V46.4244H6.24707V31.9297Z"
                  fill="#BFBFBF"
                />
                <path
                  d="M6.24707 52.7472C6.24707 51.6399 7.14471 50.7422 8.25201 50.7422H18.7779C19.8852 50.7422 20.7829 51.6399 20.7829 52.7472V70.5939C20.7829 71.7012 19.8852 72.5989 18.7779 72.5989H8.25201C7.14471 72.5989 6.24707 71.7012 6.24707 70.5939V52.7472Z"
                  fill="#BFBFBF"
                />
                <path
                  d="M57.5596 52.7472C57.5596 51.6399 58.4573 50.7422 59.5646 50.7422H70.0905C71.1978 50.7422 72.0955 51.6399 72.0955 52.7472V70.5939C72.0955 71.7012 71.1978 72.5989 70.0905 72.5989H59.5646C58.4573 72.5989 57.5596 71.7012 57.5596 70.5939V52.7472Z"
                  fill="#BFBFBF"
                />
                <path
                  d="M73.4128 31.9297H58.877V46.4244H73.4128V31.9297Z"
                  fill="#BFBFBF"
                />
                <path
                  d="M42.5868 50.1172H37.0732V59.8286H42.5868V50.1172Z"
                  fill="#C4C4C4"
                />
                <path
                  d="M20.7829 55.5078H6.24707V60.3949H20.7829V55.5078Z"
                  fill="#9A9A9A"
                />
                <path
                  d="M72.0954 55.5078H57.5596V60.3949H72.0954V55.5078Z"
                  fill="#9A9A9A"
                />
                <path
                  d="M57.5565 64.0234H20.7783V66.6549H57.5565V64.0234Z"
                  fill="#898989"
                />
                <path
                  d="M58.8722 23.8438H20.7783V26.4752H58.8722V23.8438Z"
                  fill="#898989"
                />
                <path
                  opacity="0.92"
                  d="M57.5565 55.5078H20.7783V60.3949H57.5565V55.5078Z"
                  fill="#888888"
                />
                <path
                  opacity="0.92"
                  d="M58.8722 35.5078H20.7783V42.9735H58.8722V35.5078Z"
                  fill="#898989"
                />
                <path
                  d="M3.23438 46.4219H77.0433V55.5068C77.0433 56.6141 76.1456 57.5118 75.0383 57.5118H5.23932C4.13201 57.5118 3.23438 56.6141 3.23438 55.5068V46.4219Z"
                  fill="#BFBFBF"
                />
                <path
                  d="M46.97 38.5859H32.0582C30.3972 38.5859 29.0508 39.9324 29.0508 41.5934V53.7792C29.0508 55.4402 30.3972 56.7866 32.0582 56.7866H46.97C48.6309 56.7866 49.9774 55.4402 49.9774 53.7792V41.5934C49.9774 39.9324 48.6309 38.5859 46.97 38.5859Z"
                  fill="#D8D8D8"
                />
                <path
                  d="M33.7267 38.5859H32.0582C30.3973 38.5859 29.0508 39.9323 29.0508 41.5933V53.7792C29.0508 55.4401 30.3973 56.7866 32.0582 56.7866H33.0622C33.5876 56.7866 34.0103 56.3547 33.999 55.8294L33.7267 43.1758V38.5859Z"
                  fill="#EDEDED"
                />
                <path
                  d="M46.97 43.0625H32.0582C30.3972 43.0625 29.0508 44.409 29.0508 46.0699V57.9958C29.0508 59.6567 30.3972 61.0032 32.0582 61.0032H46.97C48.6309 61.0032 49.9774 59.6567 49.9774 57.9958V46.0699C49.9774 44.409 48.6309 43.0625 46.97 43.0625Z"
                  fill="#BFBFBF"
                />
                <path
                  d="M39.1689 53.4566C41.3489 53.4566 43.1161 51.8696 43.1161 49.9119C43.1161 47.9542 41.3489 46.3672 39.1689 46.3672C36.9889 46.3672 35.2217 47.9542 35.2217 49.9119C35.2217 51.8696 36.9889 53.4566 39.1689 53.4566Z"
                  fill="#8A8A8A"
                />
                <path
                  d="M38.2716 51.8041C38.641 51.0653 39.6954 51.0653 40.0648 51.8041L41.8611 55.3965C42.1944 56.063 41.7098 56.8473 40.9645 56.8473H37.3719C36.6267 56.8473 36.142 56.063 36.4753 55.3965L38.2716 51.8041Z"
                  fill="#8A8A8A"
                />
                <path
                  d="M58.9102 16.5855L73.3809 13.0938V21.0584L58.9102 24.5503V16.5855Z"
                  fill="#EDEDED"
                />
                <path
                  d="M29.0517 42.5625H20.6094V46.3655H29.0517V42.5625Z"
                  fill="#EDEDED"
                />
              </g>
              <defs>
                <clipPath id="clip0_computer">
                  <rect
                    width="80"
                    height="90"
                    fill="white"
                    transform="translate(0.125 0.203125)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        );

      case "review":
        return (
          <div
            className={baseClasses}
            style={{ left: position.left, top: position.top }}
          >
            <div className={`${shadowClasses} bg-[#E5E5E5]`}></div>
            <div
              className={`${nodeClasses} bg-[#E5E5E5] hover:shadow-[0px_12px_0px_0px_rgba(0,0,0,0.20),0px_12px_0px_0px_#E5E5E5] hover:bg-[#f0f0f0]`}
            ></div>
            <ellipse
              cx="32.5889"
              cy="36.2688"
              rx="13.9931"
              ry="12.2969"
              transform="rotate(14.2478 32.5889 36.2688)"
              fill="#AFAFAF"
            />
            <ellipse
              cx="48.8209"
              cy="25.6219"
              rx="3.39832"
              ry="3.88958"
              transform="rotate(14.2478 48.8209 25.6219)"
              fill="#AFAFAF"
            />
            <ellipse
              cx="39.8209"
              cy="18.6219"
              rx="3.39832"
              ry="3.88958"
              transform="rotate(14.2478 39.8209 18.6219)"
              fill="#AFAFAF"
            />
            <ellipse
              cx="27.8209"
              cy="18.6219"
              rx="3.39832"
              ry="3.88958"
              transform="rotate(14.2478 27.8209 18.6219)"
              fill="#AFAFAF"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return renderContent();
};

export default LessonNodeComponent;
