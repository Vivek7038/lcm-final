import React from "react";

const ProfileCard = ({ item }) => {
    return (
        <div className="relative border-0 rounded-md overflow-y-hidden flex flex-col lg:flex-row items-center lg:space-x-4 mb-4">
            
            <img
                src={item.img}
                alt={"logo"}
                className="h-[280px] w-[450px] object-cover"
                // className="h-[280px] border rounded-md "
            />
            <div className="w-[90vw] lg:w-[100%] text-center lg:text-left">
                <h1 className="pt-3 text-xl text-black font-bold dark:text-light_txt">{item.name}</h1>
                <span className="text-md text-grey py-2 ">{item.role}</span>
                <div className=" lg:w-[60%] border-b-[1px] border-black my-2 dark:border-white"></div>
                <p className="text-md text-grey ">{item.desc}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
