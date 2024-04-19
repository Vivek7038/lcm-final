"use client";
import React, {useEffect, useState} from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineCard from "./TimelineCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { TimeLineData } from "@/constants/data";

const Timeline = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // useEffect(() => {
    //   const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    //   const handleDarkModeChange = (event) => {
    //     setIsDarkMode(event.matches);
    //   };

    //   // Initial check
    //   handleDarkModeChange(mediaQuery);

    //   // Listen for changes
    //   mediaQuery.addListener(handleDarkModeChange);

    //   return () => {
    //     mediaQuery.removeListener(handleDarkModeChange);
    //   };
    // }, []);

    return (
        <div>
            {isDarkMode ? (
                <VerticalTimeline style={{background: "transparent"}}>
                    {TimeLineData.map((item, index) => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work  dark:bg-dark_bg "
                            contentStyle={{}}
                            contentArrowStyle={{}}
                            iconStyle={{
                                background: "white",
                                transform: index % 2 === 0 ? "scaleX(-1)" : "none",
                            }}
                            visible={true}
                            icon={<LocalShippingIcon className="dark:text-black "/>}
                            style={{
                                marginLeft: "auto",
                                marginRight: "auto",
                                maxWidth: "900px",
                                width: "100%",
                            }}
                            key={index}
                        >
                            <TimelineCard item={item}/>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            ) : (
                <VerticalTimeline lineColor={isDarkMode ? "white" : "black"}>
                    {TimeLineData.map((item, index) => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work  dark:bg-dark_bg "
                            contentStyle={{}}
                            contentArrowStyle={{}}
                            iconStyle={{
                                background: "white",
                                transform: index % 2 === 0 ? "scaleX(-1)" : "none",
                            }}
                            visible={true}
                            icon={<LocalShippingIcon className="dark:text-black "/>}
                            style={{
                                marginLeft: "auto",
                                marginRight: "auto",
                                maxWidth: "900px",
                                width: "100%",
                            }}
                            key={index}
                        >
                            <TimelineCard item={item}/>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            )}
        </div>
    );
};

export default Timeline;
