import React from "react";
import fuel from "../Assets/img/Fuel pictures/Logos/fuel_logo.png";
import img from "../Assets/img/Fuel pictures/articles/gr_11.webp";

function Job() {
  return (
    <>
      <section className="container mt-32">
        <div className="flex  items-center flex-col md:flex-row overflow-hidden">
          <div className="">
            <p className="text-white text-3xl lg:text-2xl font-extrabold e-header">
              {" "}
              Let's buidl
            </p>
            <p className=" text-3xl lg:text-6xl text-[#1DE9B6] font-extrabold w-[full] md:w-[700px] tracking-[2px]">
              Looking for job opportunities in the Fuel Ecosystem? We've got you
              Covered!
            </p>
          </div>

          <div className=" mt-5">
            <img width="400px" src={img} alt="" />
          </div>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeLVScOiLz7A32Av92pe_1iej7gMR6i_MRao3JZcK5HBoOLAw/viewform"
        >
          <button className="bg-white shadow-md shadow-slate-400 text-center mx-auto py-2 px-10 rounded-lg text-xl hover:opacity-40  md:absolute md:top-[400px] lg:top-[560px]">
            Post a job
          </button>
        </a>
        <div className="mt-32">
          <header className="text-white text-4xl opacity-70 font-bold text-left underline  underline-offset-8 mb-10">
           ENGINEERING
          </header>
          <div className="bg-[#1DE9B6] rounded-md shadow-md shadow-slate-600 w-full h-32 items-center px-4">
            <div className="flex justify-between items-center">
              <div className="flex">
                <div>
                  <img className="mt-5" src={fuel} width="70px" alt="logo" />
                </div>
                <div className="m-7">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://jobs.lever.co/fuellabs/408033a5-287b-4e52-a6b9-5a348140238b"
                  >
                    <button className="text-black text-[12px] md:text-2xl  font-bold hover:underline hover:underline-offset-4 hover:transition-all">
                     Senior Front End Engineer
                    </button>{" "}
                  </a>
                  <p className="font-semibold  text-[10px] md:text-xl">
                    Fuel Labs
                  </p>
                  <p className="opacity-80 text-[10px] md:text-xl">
                    Remote
                  </p>
                </div>
              </div>
              <div className="hidden md:flex">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://jobs.lever.co/fuellabs/408033a5-287b-4e52-a6b9-5a348140238b"
                >
                  <button className="text-black">
                    Apply now<i class="ri-arrow-right-fill"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#1DE9B6] rounded-md shadow-md mt-12 shadow-slate-600 w-full h-32 items-center px-4">
            <div className="flex justify-between items-center">
              <div className="flex">
                <div>
                  <img className="mt-5" src={fuel} width="70px" alt="logo" />
                </div>
                <div className="m-7">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://jobs.lever.co/fuellabs/a03879ee-44b7-438f-bb59-9b7f3d0aa5a1"
                  >
                    <button className="text-black text-[12px] md:text-2xl font-bold hover:underline hover:underline-offset-4 hover:transition-all">
                    Senior Full-stack Software Engineer [TypeScript]
                    </button>{" "}
                  </a>
                  <p className="font-semibold  text-[10px] md:text-xl">
                  Fuel Labs
                  </p>
                  <p className="opacity-80 text-[10px] md:text-xl">Remote</p>
                </div>
              </div>
              <div className="hidden md:flex">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://jobs.lever.co/fuellabs/a03879ee-44b7-438f-bb59-9b7f3d0aa5a1"
                >
                  <button className="text-black">
                    Apply now<i class="ri-arrow-right-fill"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#1DE9B6] rounded-md shadow-md mt-12 shadow-slate-600 w-full h-32 items-center px-4 mb-12">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center">
                <div>
                  <img className="mt-5" src={fuel} width="70px" alt="logo" />
                </div>
                <div className="m-7">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://jobs.lever.co/fuellabs/ef39d2c4-c245-4d8e-ae13-57400b841328"
                  >
                    <button className="text-black text-[12px] md:text-2xl font-bold hover:underline hover:underline-offset-4 hover:transition-all">
                    Senior Software Security Engineer
                    </button>{" "}
                  </a>
                  <p className="font-semibold  text-[10px] md:text-xl">
                    Fuel Labs
                  </p>
                  <p className="opacity-80 text-[10px] md:text-xl">
                    Remote-Global
                  </p>
                </div>
              </div>
              <div className="hidden md:flex">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://jobs.lever.co/fuellabs/ef39d2c4-c245-4d8e-ae13-57400b841328"
                >
                  <button className="text-black">
                    Apply now<i class="ri-arrow-right-fill"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
     
        </div>
        <div className="mt-32">
          <header className="text-white text-4xl opacity-70 font-bold text-left underline  underline-offset-8 mb-10">
            DEV REL
          </header>
          <div className="bg-[#1DE9B6] rounded-md shadow-md mt-12 shadow-slate-600 w-full h-32 items-center px-4 mb-12">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center">
                <div>
                  <img className="mt-5" src={fuel} width="70px" alt="logo" />
                </div>
                <div className="m-7">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://jobs.lever.co/fuellabs/5f85d60c-0df5-476f-abbb-9cca6deb5d7a"
                  >
                    <button className="text-black text-[12px] md:text-2xl font-bold hover:underline hover:underline-offset-4 hover:transition-all">
                    Developer Relations
                    </button>{" "}
                  </a>
                  <p className="font-semibold  text-[10px] md:text-xl">
                    Fuel Labs
                  </p>
                  <p className="opacity-80 text-[10px] md:text-xl">
                    Remote
                  </p>
                </div>
              </div>
              <div className="hidden md:flex">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://jobs.lever.co/fuellabs/5f85d60c-0df5-476f-abbb-9cca6deb5d7a"
                >
                  <button className="text-black">
                    Apply now<i class="ri-arrow-right-fill"></i>
                  </button>
                </a>
              </div>
            </div>
         
          </div>
        </div>
        <div className="mt-32">
          <header className="text-white text-4xl opacity-70 font-bold text-left underline  underline-offset-8 mb-10">
          GROWTH
          </header>
          <div className="bg-[#1DE9B6] rounded-md shadow-md shadow-slate-600 w-full h-32 items-center px-4">
            <div className="flex justify-between items-center">
              <div className="flex">
                <div>
                  <img className="mt-5" src={fuel} width="70px" alt="logo" />
                </div>
                <div className="m-7">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://jobs.lever.co/fuellabs/0a88ee0d-cee3-44de-9ac2-b2c159ec121b"
                  >
                    <button className="text-black text-[12px] md:text-2xl  font-bold hover:underline hover:underline-offset-4 hover:transition-all">
                    Marketing Manager
                    </button>{" "}
                  </a>
                  <p className="font-semibold  text-[10px] md:text-xl">
                    Fuel Labs
                  </p>
                  <p className="opacity-80 text-[10px] md:text-xl">
                    Remote
                  </p>
                </div>
              </div>
              <div className="hidden md:flex">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://jobs.lever.co/fuellabs/0a88ee0d-cee3-44de-9ac2-b2c159ec121b"
                >
                  <button className="text-black">
                    Apply now<i class="ri-arrow-right-fill"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
         
        </div>
      </section>
    </>
  );
}

export default Job;
