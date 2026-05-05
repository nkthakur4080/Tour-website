export type TourItineraryItem = {
    day: string;
    title: string;
    description: string;
};

export type TourGroupPrice = {
    groupSize: string;
    price: string;
    note?: string;
};

export type TourPackage = {
    id: number;
    slug: string;
    title: string;
    price: string;
    duration: string;
    tourType: string;
    location: string;
    bestFor: string;
    heroImage: string;
    gallery: string[];
    shortDescription: string;
    overview: string;
    highlights: string[];
    itinerary: TourItineraryItem[];
    groupPricing: TourGroupPrice[];
    included: string[];
    excluded: string[];
};

export const tours: TourPackage[] = [
    {
        id: 1,
        slug: "3n4d-nature-unbound",
        title: "3N4D Nature Unbound",
        price: "Rs. 7500",
        duration: "3 Nights 4 Days",
        tourType: "Nature Adventure",
        location: "Koraput, Odisha",
        bestFor: "Nature lovers, families, and couples",
        heroImage: "/product-img/card-1.jpeg",
        gallery: [
            "/product-img/card-1.jpeg",
            "/product-img/card-4.jpeg",
            "/product-img/card-5.jpeg",
        ],
        shortDescription:
            "Explore waterfalls, hills, caves, and cultural destinations.",
        overview:
            "This package is designed for travelers who want to experience Koraput's natural beauty, peaceful landscapes, and local culture in a comfortable multi-day trip.",
        highlights: [
            "Scenic waterfalls and hill viewpoints",
            "Caves and nature trails",
            "Local cultural experiences",
            "Relaxed multi-day itinerary",
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Arrival and Local Exploration",
                description:
                    "Arrive in Koraput, check in, and begin with nearby sightseeing spots and a relaxed local visit.",
            },
            {
                day: "Day 2",
                title: "Waterfalls and Hills",
                description:
                    "Spend the day exploring major natural attractions including waterfalls, hill views, and scenic drives.",
            },
            {
                day: "Day 3",
                title: "Culture and Nature",
                description:
                    "Visit culturally important places along with beautiful natural destinations around the region.",
            },
            {
                day: "Day 4",
                title: "Departure",
                description:
                    "Enjoy a calm morning, local wrap-up, and departure with memorable experiences.",
            },
        ],
        groupPricing: [
            { groupSize: "Group of 2", price: "Rs. 8,000", note: "per adult" },
            { groupSize: "Group of 4", price: "Rs. 6,500", note: "per adult" },
            { groupSize: "Group of 6", price: "Rs. 5,900", note: "per adult" },
        ],
        included: [
            "Accommodation",
            "Sightseeing assistance",
            "Local travel support",
            "Basic itinerary planning",
        ],
        excluded: [
            "Personal expenses",
            "Extra meals",
            "Entry tickets not mentioned",
            "Shopping expenses",
        ],
    },
    {
        id: 2,
        slug: "1n2d-serene-splendors",
        title: "1N2D Serene Splendors",
        price: "Rs. 3500",
        duration: "1 Night 2 Days",
        tourType: "Adventure",
        location: "Koraput, Odisha",
        bestFor: "Weekend travelers and quick getaways",
        heroImage: "/product-img/card-2.jpeg",
        gallery: [
            "/product-img/card-2.jpeg",
            "/product-img/card-5.jpeg",
            "/product-img/card-6.jpeg",
        ],
        shortDescription:
            "A quick Koraput getaway filled with nature and spirituality.",
        overview:
            "This short itinerary is perfect for travelers who want a refreshing Koraput experience in a limited time, combining peaceful scenery and meaningful local visits.",
        highlights: [
            "Short and easy weekend-friendly plan",
            "Nature and spiritual destinations",
            "Comfortable quick getaway",
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Arrival and Sightseeing",
                description:
                    "Arrive and begin your trip with local sightseeing, scenic stops, and a relaxed evening.",
            },
            {
                day: "Day 2",
                title: "Morning Exploration and Departure",
                description:
                    "Visit key nearby attractions, enjoy the atmosphere of Koraput, and depart later in the day.",
            },
        ],
        groupPricing: [
            { groupSize: "Group of 2", price: "Rs. 8,000", note: "per adult" },
            { groupSize: "Group of 4", price: "Rs. 5,500", note: "per adult" },
            { groupSize: "Group of 6", price: "Rs. 5,000", note: "per adult" },
        ],
        included: [
            "Accommodation",
            "Basic travel coordination",
            "Sightseeing support",
        ],
        excluded: [
            "Personal expenses",
            "Meals not mentioned",
            "Any activity outside itinerary",
        ],
    },
    {
        id: 3,
        slug: "4n5d-koraput-expedition",
        title: "4N5D Koraput Expedition",
        price: "Rs. 9000",
        duration: "4 Nights 5 Days",
        tourType: "Expedition",
        location: "Koraput, Odisha",
        bestFor: "Explorers and slow-travel enthusiasts",
        heroImage: "/product-img/card-3.jpeg",
        gallery: [
            "/product-img/card-3.jpeg",
            "/product-img/card-4.jpeg",
            "/product-img/card-6.jpeg",
        ],
        shortDescription:
            "A longer journey through scenic landscapes and hidden gems.",
        overview:
            "This extended package offers a deeper travel experience across Koraput, covering popular attractions and lesser-known scenic destinations with more time to enjoy each stop.",
        highlights: [
            "Longer and richer itinerary",
            "Hidden gems and offbeat places",
            "More relaxed travel pace",
            "Great for deeper exploration",
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Arrival and Orientation",
                description:
                    "Reach Koraput, settle in, and begin with an introductory local experience.",
            },
            {
                day: "Day 2",
                title: "Major Scenic Attractions",
                description:
                    "Explore some of the best-known natural and visual highlights in the region.",
            },
            {
                day: "Day 3",
                title: "Offbeat Exploration",
                description:
                    "Visit quieter and less crowded places known for their natural charm and peaceful setting.",
            },
            {
                day: "Day 4",
                title: "Culture and Local Experience",
                description:
                    "Spend the day understanding local flavor, scenic surroundings, and travel moments at a slower pace.",
            },
            {
                day: "Day 5",
                title: "Departure",
                description:
                    "Wrap up the journey and depart with a complete Koraput experience.",
            },
        ],
        groupPricing: [
            { groupSize: "Group of 2", price: "Rs. 10,500", note: "per adult" },
            { groupSize: "Group of 4", price: "Rs. 8,200", note: "per adult" },
            { groupSize: "Group of 6", price: "Rs. 7,600", note: "per adult" },
        ],
        included: [
            "Accommodation",
            "Trip coordination",
            "Sightseeing assistance",
            "Travel planning support",
        ],
        excluded: [
            "Personal shopping",
            "Meals not specified",
            "Tickets for optional activities",
            "Personal transport upgrades",
        ],
    },
    {
        id: 4,
        slug: "2n3d-waterfalls-trail",
        title: "2N3D Waterfalls Trail",
        price: "Rs. 5200",
        duration: "2 Nights 3 Days",
        tourType: "Scenic Escape",
        location: "Koraput, Odisha",
        bestFor: "Friends, photographers, and short-break travelers",
        heroImage: "/product-img/card-4.jpeg",
        gallery: [
            "/product-img/card-4.jpeg",
            "/product-img/card-1.jpeg",
            "/product-img/card-6.jpeg",
        ],
        shortDescription:
            "A refreshing circuit covering famous waterfalls, viewpoints, and forest roads.",
        overview:
            "This tour focuses on Koraput's dramatic natural scenery, making it a great fit for travelers who want strong visuals, fresh air, and a shorter yet memorable itinerary.",
        highlights: [
            "Waterfall-focused route",
            "Beautiful hill viewpoints",
            "Short and photo-friendly itinerary",
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Arrival and Viewpoints",
                description:
                    "Arrive, settle in, and head out toward scenic hill views and relaxed evening sightseeing.",
            },
            {
                day: "Day 2",
                title: "Waterfalls Circuit",
                description:
                    "Spend the day visiting major waterfall spots and enjoying forest-lined roads and stops.",
            },
            {
                day: "Day 3",
                title: "Local Wrap-Up and Departure",
                description:
                    "Enjoy a shorter final morning before completing the trip and heading back.",
            },
        ],
        groupPricing: [
            { groupSize: "Group of 2", price: "Rs. 6,200", note: "per adult" },
            { groupSize: "Group of 4", price: "Rs. 5,400", note: "per adult" },
            { groupSize: "Group of 6", price: "Rs. 4,900", note: "per adult" },
        ],
        included: [
            "Accommodation",
            "Sightseeing coordination",
            "Trip planning support",
        ],
        excluded: [
            "Personal expenses",
            "Meals not specified",
            "Optional activity charges",
        ],
    },
    {
        id: 5,
        slug: "adventure-weekend-escape",
        title: "Adventure Weekend Escape",
        price: "Rs. 4200",
        duration: "2 Days 1 Night",
        tourType: "Adventure",
        location: "Koraput, Odisha",
        bestFor: "Adventure seekers and weekend groups",
        heroImage: "/product-img/card-5.jpeg",
        gallery: [
            "/product-img/card-5.jpeg",
            "/product-img/card-4.jpeg",
            "/product-img/card-2.jpeg",
        ],
        shortDescription:
            "Camping, bonfire, and light trekking for travelers looking for a quick adventure.",
        overview:
            "This package is aimed at travelers who want a more energetic short break, mixing nature, open-air experiences, and a fun weekend vibe.",
        highlights: [
            "Camping and bonfire atmosphere",
            "Light trekking experience",
            "Great option for weekend groups",
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Arrival and Camp Experience",
                description:
                    "Arrive at the destination, settle into camp, and enjoy the outdoor setup and evening vibe.",
            },
            {
                day: "Day 2",
                title: "Morning Adventure and Return",
                description:
                    "Begin with light trekking or exploration before wrapping up and returning.",
            },
        ],
        groupPricing: [
            { groupSize: "Group of 2", price: "Rs. 5,500", note: "per adult" },
            { groupSize: "Group of 4", price: "Rs. 4,800", note: "per adult" },
            { groupSize: "Group of 6", price: "Rs. 4,300", note: "per adult" },
        ],
        included: [
            "Camp stay",
            "Basic activity coordination",
            "Support during the trip",
        ],
        excluded: [
            "Personal expenses",
            "Special gear rental",
            "Anything outside the planned activities",
        ],
    },
    {
        id: 6,
        slug: "culture-and-nature-retreat",
        title: "Culture and Nature Retreat",
        price: "Rs. 6800",
        duration: "3 Days 2 Nights",
        tourType: "Cultural Retreat",
        location: "Koraput, Odisha",
        bestFor: "Slow travelers and culture-focused visitors",
        heroImage: "/product-img/card-6.jpeg",
        gallery: [
            "/product-img/card-6.jpeg",
            "/product-img/card-3.jpeg",
            "/product-img/card-2.jpeg",
        ],
        shortDescription:
            "A slower trip combining scenic landscapes with authentic local experiences.",
        overview:
            "This package offers a calm and immersive travel pace for people who want to enjoy Koraput's natural beauty together with a stronger local and cultural feel.",
        highlights: [
            "Balanced nature and culture itinerary",
            "Calm, slower-paced travel",
            "Strong local experience focus",
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Arrival and Scenic Orientation",
                description:
                    "Arrive, settle in, and enjoy a gentle start with scenic surroundings and local introduction.",
            },
            {
                day: "Day 2",
                title: "Culture and Exploration",
                description:
                    "Visit places that reflect the local flavor of the region while also experiencing nearby natural beauty.",
            },
            {
                day: "Day 3",
                title: "Leisureful Morning and Departure",
                description:
                    "Take in the final moments of the trip before departure.",
            },
        ],
        groupPricing: [
            { groupSize: "Group of 2", price: "Rs. 7,800", note: "per adult" },
            { groupSize: "Group of 4", price: "Rs. 6,900", note: "per adult" },
            { groupSize: "Group of 6", price: "Rs. 6,200", note: "per adult" },
        ],
        included: [
            "Accommodation",
            "Travel assistance",
            "Itinerary planning support",
            "Sightseeing coordination",
        ],
        excluded: [
            "Personal purchases",
            "Meals not specified",
            "Optional add-on activities",
        ],
    },
];

export function getTourBySlug(slug: string) {
    return tours.find((tour) => tour.slug === slug);
}

export function getAllTourSlugs() {
    return tours.map((tour) => tour.slug);
}
