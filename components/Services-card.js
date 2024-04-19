"use client";
import { useRouter } from "next/navigation"
import { SelectedServiceContext } from "@/provider/ServicesProvider";
import { useContext } from "react";
import { data } from "@/constants/data";
export default function Card({ item, index = 1 }) {
    const { selectedService, setSelectedService } = useContext(
        SelectedServiceContext
    );

    const router = useRouter()
    const handleClick = (item) => {
        setSelectedService(item)

        router.push("/services")
    }
    return (
        <div
            className={"w-[300px] h-[550px] relative shadow-lg bg-white dark:bg-dark_cards dark:text-white  rounded-md  mb-10"}>
            <div className="">
                <img src={item.img} alt={"img"} className={"h-[203px] w-[100%]  rounded-md "} />
            </div>
            <div className={"p-4"}>
                <p className={"text-xl  my-2 font-bold capitalize"}>
                    {item.name}
                </p>
                <p>

                    {item.short}
                </p>
                <a className={"absolute pt-2 pb-2 cursor-pointer font-medium md:right-4 md:bottom-4 -cursor-pointer text-sm md:text-md lg:text-md xl:text-lg group md:mt-16"} onClick={() => handleClick(item)}>
                    READ MORE
                    <div className="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500 dark:bg-white"></div>
                </a>
            </div>

        </div>

    )
}