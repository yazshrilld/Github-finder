import { ReactComponent as DarkIcon } from "../assets/svg/darkIcon.svg";
import { ReactComponent as SearchIcon } from "../assets/svg/searchIcon.svg";
import { ReactComponent as UserIcon } from "../assets/svg/githubDpIcon.svg";
import { ReactComponent as LocateIcon } from "../assets/svg/locationIcon.svg";
import { ReactComponent as UrlIcons } from "../assets/svg/urlIcon.svg";
import { ReactComponent as TwitterIcon } from "../assets/svg/twitterIcon.svg";
import { ReactComponent as OfficeIcon } from "../assets/svg/officeBuildingIcon.svg";

import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#F6F8FF] min-h-screen font-mono font-light cont">
        <div className="max-w-[767px] mx-auto pt-[50px] px-[20px] cont1">
          <div className="flex items-center justify-between cont2">
            <h5 className="text-[#222731] cont3">devfinder</h5>
            <div className="flex items-start gap-4 cont4">
              <p className="uppercase text-[#4B6A9B]">Dark</p>
              <DarkIcon className="" />
            </div>
          </div>
          <div className="relative mt-[3rem]">
            <SearchIcon className="absolute left-2 top-4" />
            <input
              type="text"
              placeholder="Search Github Username..."
              className="w-full h-[3.5rem] bg-white rounded-[10px] border-0 outline-0 p-[0_3rem] shadow-xl text-[#4B6A9B]"
            />
            <button className="absolute right-2 top-1.5 bg-[#0079FF] w-[5rem] h-[2.8rem] rounded-[10px] text-white">
              Search
            </button>
          </div>
          <div className="relative bg-white mt-[2rem] flex gap-7 md:gap-2 shadow-xl md:h-[60vh]">
            <div className="m-[10px]">
              <UserIcon />
            </div>
            <div className="m-[10px] w-full pr-[40px]">
              <div className="flex flex-col justify-between md:flex-row">
                <div className="mb-[5px]">
                  <p className="text-3xl font-semibold text-[#2B3442]">
                    The Octocrat
                  </p>
                  <p className="text-[#0079FF]">@octocrat</p>
                </div>
                <div className="text-[#697C9A]">
                  <span>Joined </span>
                  <span>25 Jan 2011</span>
                </div>
              </div>
              <div className="md:absolute md:top-[28%] md:left-10 w-[70%] md:mb-[50px]">
                <p className="text-[#697C9A] my-[1.5rem] md:mb-[20px]">
                  This Profile has no bio, Lorem ipsum dolor sit . 
                </p>
              </div>
              <div className="w-full bg-[#F6F8FF] flex justify-evenly py-[1rem] rounded-[10px] md:absolute md:top-[43%] md:left-10 md:w-[70%] ">
                <div>
                  <div className="text-md text-[#697C9A] font-bold">Repos</div>
                  <div className="font-bold text-2xl text-[#2B3442]">8</div>
                </div>
                <div>
                  <div className="text-md text-[#697C9A] font-bold">
                    Followers
                  </div>
                  <div className="font-bold text-2xl text-[#2B3442]">3988</div>
                </div>
                <div>
                  <div className="text-md text-[#697C9A] font-bold">
                    Following
                  </div>
                  <div className="font-bold text-2xl text-[#2B3442]">96</div>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-[2rem] mb-[1rem] md:absolute md:top-[60%] md:left-10 w-[70%] md:grid-cols-1">
                <div className="flex gap-5 items-center mb-[1rem]">
                  <LocateIcon />
                  <div className="text-md text-[#697C9A] font-light">San Fransisco</div>
                </div>
                <div className="flex gap-5 items-center mb-[1rem]">
                  <TwitterIcon />
                  <div className="text-md text-[#697C9A] font-light">Repos</div>
                </div>
                <div className="flex gap-5 items-center mb-[1rem]">
                  <UrlIcons />
                  <div className="text-md text-[#697C9A] font-light">https://www</div>
                </div>
                <div className="flex gap-5 items-center">
                  <OfficeIcon />
                  <div className="text-md text-[#697C9A] font-light">Repos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
