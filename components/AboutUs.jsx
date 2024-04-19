"use client";
import React from "react";
import { useRouter } from "next/navigation";

const AboutUs = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/about-us");
  };
  return (
    <>
      <div className={"xl:w-[89%] z-20"}>
        <div className={"md:hidden xl:block z-20 "}>
          Established in 2015, LCM is one of the leading midsize delivery &
          logistics company based in{" "}
          <a className={"font-bold italic"}>BANGALORE</a>
        </div>

        <div className="text-justify">
          <p className={"xl:my-12 md:mb-8 md:mt-0 text-justify"}>
            Has maintained exclusive long term contracts with businesses like
            Ajio, Jio Mart, Reliance Digital, Indian Posts etc., enjoying
            stupendous growth on a yearly basis. The foundation for the company
            has been laid by strong supply chain professionals with over 15
            years of entrepreneurial stints.
          </p>
          <p className="text-justify">
            Professionally managed by 60 full time employees with all businesses
            contracted with total of 140+ owned vehicles and approximation of
            500+ on-call based vehicles. Having its strong regional hold in
            South India & Maharashtra, with plans to expand all over the
            country. Company is also into warehousing and managing other
            warehouses.
          </p>
        </div>
        <div className={"w-[100%] my-8 flex justify-between"}>
          <div>
            <p className={"md:text-4xl text-2xl"}>
              <a className={"font-bold md:text-6xl text-3xl"}>15</a>Yrs
            </p>
            <p>Entrepreneurial stint</p>
          </div>
          <div>
            <p className={"md:text-4xl text-2xl"}>
              <a className={"font-bold md:text-6xl text-3xl"}>25</a>k
            </p>
            <p>Serving pincode</p>
          </div>
        </div>
        <button
          className={"text-white bg-black p-4 rounded-2xl ml-[35%] md:ml-0"}
          onClick={() => handleClick()}
        >
          Learn more
        </button>
      </div>

      <div className={"h-[100%] mt-4 md:mt-0  relative"}>
        <img
          src={"bubblebg.png"}
          alt={""}
          className={
            "absolute h-40 w-40 z-10 2xl:bottom-32 md:bottom-12 xl:-right-20 md:right-2 hidden md:block"
          }
        />
        <img
          src={"./LCM-pic-4.jpg "}
          className={"relative z-20 border rounded-md"}
          alt={"img"}
        />
      </div>
    </>
  );
};

export default AboutUs;
