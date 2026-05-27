"use client";

import { useMemo, useState } from "react";
import type { TourItineraryItem } from "@/data/tours";
import "./PackageItineraryTabs.scss";

type Props = {
    itinerary: TourItineraryItem[];
};

function parseItinerarySections(description: string) {
    return description
        .split("\n\n")
        .map((part) => part.trim())
        .filter(Boolean)
        .map((part) => {
            const separator = " - ";
            const separatorIndex = part.indexOf(separator);

            if (separatorIndex === -1) {
                return {
                    heading: "",
                    body: part,
                };
            }

            return {
                heading: part.slice(0, separatorIndex).trim(),
                body: part.slice(separatorIndex + separator.length).trim(),
            };
        });
}

export default function PackageItineraryTabs({ itinerary }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeDay = itinerary[activeIndex];
    const activeSections = useMemo(
        () => parseItinerarySections(activeDay.description),
        [activeDay.description]
    );

    return (
        <div className="itinerary-tabs">
            <div className="itinerary-tabs__nav" role="tablist" aria-label="Tour itinerary days">
                {itinerary.map((item, index) => (
                    <button
                        key={item.day}
                        type="button"
                        role="tab"
                        aria-selected={activeIndex === index}
                        className={`itinerary-tabs__tab ${
                            activeIndex === index ? "itinerary-tabs__tab--active" : ""
                        }`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <span className="itinerary-tabs__tab-label">{item.day}</span>
                        <strong>{item.title}</strong>
                    </button>
                ))}
            </div>

            <div className="itinerary-tabs__panel" role="tabpanel">
                <div className="itinerary-tabs__panel-header">
                    <div className="itinerary-tabs__day-badge">
                        {/* <span>Travel Day</span> */}
                        <strong>{activeDay.day}</strong>
                    </div>
                    <div>
                        <h3>{activeDay.title}</h3>
                        <p>Explore the plan for {activeDay.day.toLowerCase()}.</p>
                    </div>
                </div>

                <div className="itinerary-tabs__sections">
                    {activeSections.map((section, index) => (
                        <div
                            key={`${activeDay.day}-${index + 1}`}
                            className="itinerary-tabs__section"
                        >
                            <span className="itinerary-tabs__step">{index + 1}</span>
                            <div className="itinerary-tabs__section-body">
                                {section.heading ? <h4>{section.heading}</h4> : null}
                                <p>{section.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
