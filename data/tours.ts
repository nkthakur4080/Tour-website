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

export type TourPricingPlan = {
    name: string;
    subtitle: string;
    perks: string[];
    groupPricing: TourGroupPrice[];
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
    pricingPlans: TourPricingPlan[];
    included: string[];
    excluded: string[];
};

export const tours: TourPackage[] = [
    {
        id: 1,
        slug: "3n4d-nature-unbound",
        title: "3N4D Nature Unbound",
        price: "Rs. 6,200",
        duration: "3 Nights 4 Days",
        tourType: "Odisha Nature Circuit",
        location: "Koraput, Odisha",
        bestFor: "Nature lovers, waterfall chasers, and couples or families",
        heroImage: "/product-img/card-1.jpeg",
        gallery: [
            "/product-img/card-1.jpeg",
            "/product-img/card-4.jpeg",
            "/product-img/card-5.jpeg",
        ],
        shortDescription:
            "Explore Odisha's Koraput region through waterfalls, caves, hilltops, temples, and the famous natural infinity pool.",
        overview:
            "Explore Odisha's Koraput region with this captivating 3N4D itinerary. Immerse yourself in nature by visiting breathtaking waterfalls like Raniduduma and Duduma, perfect for a refreshing natural bath. Discover unique attractions such as the cave offering a top view of the Map of India and the Putsil table-top mountain. Experience the majestic Deomali Hill and Galigabdar waterfall, where awe-inspiring views await. Visit the sacred Baba Gupteshwar Temple and Kolab Dam, and marvel at the Sabara Srikhetra Jagannath Temple. Don't miss the incredible Natural Infinity pool at Talamiting waterfall. These Koraput hill station tours promise unforgettable memories in Koraput's enchanting landscapes.",
        highlights: [
            "Refresh at Raniduduma and Duduma waterfalls",
            "Explore the unique Map of India cave and watch the sunset near Jalaput",
            "Visit Deomali Hill, Galigabdar Waterfall, and Putsil table-top mountain",
            "End with Gupteshwar, Kolab Dam, Sabara Srikhetra, and Talamiting infinity pool",
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Waterfall Wonders",
                description:
                    "Arrival in Koraput - Upon your arrival in Koraput, your allocated cab will transport you to Semiliguda. Check-in at your hotel.\n\nQueen Waterfall Exploration - After a satisfying breakfast, your taxi will take you to Raniduduma Waterfall, often referred to as the Queen Waterfall of Koraput. Immerse yourself in the natural beauty, take a refreshing dip, and capture memorable photos.\n\nDuduma Waterfall - Continue your adventure to Duduma Waterfall, a magnificent Horsetail-type waterfall that cascades from a height of 574 feet. Admire the serene beauty of this site.\n\nUnique Cave Experience - Visit a unique cave in Koraput offering a panoramic top view of the Map of India. The cave's vast interior can host multiple football matches simultaneously. It features a natural pond and an iconic photogenic spot. Don't miss watching the sunset behind Jalaput Water Reservoir.",
            },
            {
                day: "Day 2",
                title: "Peaks and Cascades",
                description:
                    "Deomali Hilltop Exploration - Begin your day by visiting the majestic Deomali Hilltop, the highest peak in Odisha. A trek to the top rewards you with unparalleled views and a sense of tranquility.\n\nGaligabdar Waterfall - Next, venture to Galigabdar Waterfall, situated near the Odisha-Andhra border, surrounded by mountains. The stream flowing between the mountains creates a breathtaking view.\n\nTable Top Mountain and Putsil Mountain - Explore the table top mountain, a unique natural structure often likened to the Switzerland of Odisha. Enjoy the beautiful scenery and then continue through the Putsil mountain stretch before returning to your hotel.",
            },
            {
                day: "Day 3",
                title: "Mystical Caves and Sacred Temples",
                description:
                    "Baba Gupteshwar Temple - Embark on a journey to the sacred Baba Gupteshwar Temple, nestled near the Sabari River amid dense forests along the Odisha-Chhattisgarh border. Climb the stairs and explore the temple's mysterious caves, which are believed to house a growing 6-foot Shiva Linga.\n\nKolab Dam and Sabara Srikhetra Jagannath Temple - On your return, visit the picturesque Kolab Dam and enjoy a botanical garden. Your final stop is Sabara Srikhetra Jagannath Temple, where you can witness all the avatars of Lord Jagannath.",
            },
            {
                day: "Day 4",
                title: "Nature's Marvels and Departure",
                description:
                    "Exploring Damanjodi - After breakfast, check out from your hotel and head to Damanjodi.\n\nHanuman Statue and Local Goddess Shrine - Visit the world's third-tallest Hanuman statue and a revered local goddess shrine within a Bamboo Jungle. Explore the unique Red Mud Pond and Ash Pond, often called the 'Mars of Odisha.'\n\nNatural Infinity Pool - Discover the wonder of Koraput, the Natural Infinity Pool at Talamiting Waterfall. Enjoy the scenic eastern Ghats roads and a brief 30-minute trek to reach the pool. Indulge in a 5-star nature pool experience and capture unforgettable moments.\n\nDeparture - Finally, your adventure concludes as you head to Damanjodi Railway Station with countless memories of Koraput's natural marvels and cultural treasures.",
            },
        ],
        groupPricing: [
            { groupSize: "Group of 1", price: "Rs. 17,460", note: "Standard plan" },
            { groupSize: "Group of 2", price: "Rs. 9,414", note: "Standard plan" },
            { groupSize: "Group of 3", price: "Rs. 8,172", note: "Standard plan" },
            { groupSize: "Group of 4", price: "Rs. 6,200", note: "Standard plan" },
        ],
        pricingPlans: [
            {
                name: "Standard",
                subtitle: "Comfortable essentials with breakfast, standard rooms, and cabs",
                perks: [
                    "Breakfast Included",
                    "Standard Rooms",
                    "Cabs",
                    "24/7 Customer Support",
                ],
                groupPricing: [
                    { groupSize: "Group of 1", price: "Rs. 17,460" },
                    { groupSize: "Group of 2", price: "Rs. 9,414" },
                    { groupSize: "Group of 3", price: "Rs. 8,172" },
                    { groupSize: "Group of 4", price: "Rs. 6,200" },
                ],
            },
            {
                name: "Premium",
                subtitle: "AC stay and AC cab support for a more comfortable trip",
                perks: [
                    "Breakfast Included",
                    "AC Rooms",
                    "AC Cabs",
                    "24/7 Customer Support",
                ],
                groupPricing: [
                    { groupSize: "Group of 1", price: "Rs. 21,900" },
                    { groupSize: "Group of 2", price: "Rs. 11,000" },
                    { groupSize: "Group of 3", price: "Rs. 8,600" },
                    { groupSize: "Group of 4", price: "Rs. 7,380" },
                ],
            },
        ],
        included: [
            "Breakfast Included",
            "Accommodation",
            "Cab support for sightseeing",
            "24/7 Customer Support",
        ],
        excluded: [
            "Lunch and dinner",
            "Personal expenses and shopping",
            "Entry tickets not specifically mentioned",
            "Anything outside the listed itinerary",
        ],
    },
    {
        id: 2,
        slug: "1n2d-serene-splendors",
        title: "1N2D Serene Splendors",
        price: "Rs. 4,400",
        duration: "1 Night 2 Days",
        tourType: "Quick Escape",
        location: "Koraput, Odisha",
        bestFor: "Weekend travelers, spiritual explorers, and short-stay groups",
        heroImage: "/product-img/card-2.jpeg",
        gallery: [
            "/product-img/card-2.jpeg",
            "/product-img/card-5.jpeg",
            "/product-img/card-6.jpeg",
        ],
        shortDescription:
            "A short Koraput escape with waterfalls, Deomali Hill, Gupteshwar, Kolab Dam, and Sabara Srikhetra.",
        overview:
            "This 1N2D tour is perfect for getting off the beaten path in Koraput, Odisha. Begin Day 1 with a visit to the magnificent Raniduduma Waterfall for a refreshing natural bath and stunning views. Explore the impressive Hanuman statue, worship the local goddess in a Bamboo Jungle, and discover the unique Redmud and Ash ponds. Ascend the majestic Deomali Hill, where a trek offers breathtaking views and an unforgettable sunset. Day 2 takes you to the mysterious Baba Gupteshwar Temple, known for its growing linga and fascinating caves. Experience the serenity of Kolab Dam and conclude your trip to Koraput with a visit to Sabara Srikhetra Jagannath Temple for a truly spiritual experience. This Koraput heritage tour promises an enriching blend of adventure, nature, and culture.",
        highlights: [
            "Take in Raniduduma Waterfall and a refreshing natural bath",
            "Explore Damanjodi landmarks including Hanuman statue, goddess shrine, and Red Mud Pond",
            "Trek to Deomali Hilltop for breathtaking sunset views",
            "Visit Gupteshwar, Kolab Dam, and Sabara Srikhetra on the final day",
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Majestic Waterfalls and Peak Exploration",
                description:
                    "Morning Adventure Begins - After a satisfying breakfast at your hotel, your day of exploration in Koraput will kick off with a scenic drive to one of the region's crown jewels - Raniduduma Waterfall, often referred to as the Queen Waterfall of Koraput. Upon arrival, take in the awe-inspiring natural beauty and refresh yourself with a rejuvenating natural bath. Capture the beauty with your camera before moving on to the next exciting destinations.\n\nDiscover Damanjodi - Your journey continues to Damanjodi, where you'll encounter some remarkable attractions. First, pay a visit to the world's third-tallest Hanuman statue, a site of spiritual significance. Next, explore a local goddess shrine nestled within a captivating Bamboo Jungle, a must-visit for its unique cultural experience. Your adventure will then lead you to the intriguing Red Mud Pond and Ash Pond, often dubbed the 'Mars of Odisha.' Capture memorable moments at these distinctive locations.\n\nDeomali Hill Top - As you continue your journey, savor a delicious lunch along the way. Afterward, embark on an exhilarating excursion to the highest peak in Odisha, the majestic Deomali Hilltop. While the trek to the summit is not overly challenging, the view from the top is beyond words. As the saying goes, 'The best view comes after the hardest climb,' and Deomali Hilltop epitomizes this saying. Prepare to witness an unforgettable sunset, bask in the serenity of the moment, and then make your way back to your hotel for a well-deserved rest.",
            },
            {
                day: "Day 2",
                title: "Mystical Caves and Spiritual Serenity",
                description:
                    "Morning Check-Out - Begin your second day with a hearty breakfast at your hotel. Afterward, check out from your accommodation and bring your luggage to the designated meeting point where our representative will be ready to accompany you on your next adventure.\n\nGupteswar Temple - Settle into your vehicle as you embark on a journey to one of Koraput's most revered sites. Nestled near the Sabari River amid dense forests along the Odisha-Chhattisgarh border, you'll discover the sacred Baba Gupteshwar Temple. Surrounded by lush greenery, reaching the massive Shiva Linga within the cave involves climbing a flight of stairs. Legend has it that the linga grows larger day by day, adding to the enigmatic aura of the place. Explore the temple's multiple caves, each filled with captivating mythological tales.\n\nKolab Dam - Scenic Stops on the Way Back - As you make your way back, take a detour to the enchanting Kolab Dam, where you can enjoy a stroll through a botanical garden, further immersing yourself in nature's beauty. Your final stop will be at Sabara Srikhetra Jagannath Temple, renowned as the next Srikhetra after the famous Puri Jagannath Temple. This is the only place in the world where you can witness all the avatars of Lord Jagannath.\n\nDeparture - After this spiritually enriching experience, our representative will kindly drop you off at the railway station, concluding your memorable journey through the captivating landscapes and spiritual wonders of Koraput.",
            },
        ],
        groupPricing: [
            { groupSize: "Group of 1", price: "Rs. 6,288", note: "Standard plan" },
            { groupSize: "Group of 2", price: "Rs. 7,500", note: "Standard plan" },
            { groupSize: "Group of 3", price: "Rs. 5,450", note: "Standard plan" },
            { groupSize: "Group of 4", price: "Rs. 4,400", note: "Standard plan" },
        ],
        pricingPlans: [
            {
                name: "Standard",
                subtitle: "Breakfast, standard rooms, cabs, and support included",
                perks: [
                    "Breakfast Included",
                    "Standard Rooms",
                    "Cabs",
                    "24/7 Customer Support",
                ],
                groupPricing: [
                    { groupSize: "Group of 1", price: "Rs. 6,288" },
                    { groupSize: "Group of 2", price: "Rs. 7,500" },
                    { groupSize: "Group of 3", price: "Rs. 5,450" },
                    { groupSize: "Group of 4", price: "Rs. 4,400" },
                ],
            },
            {
                name: "Premium",
                subtitle: "AC rooms and AC cabs for a more relaxed short trip",
                perks: [
                    "Breakfast Included",
                    "AC Rooms",
                    "AC Cabs",
                    "24/7 Customer Support",
                ],
                groupPricing: [
                    { groupSize: "Group of 1", price: "Rs. 14,858" },
                    { groupSize: "Group of 2", price: "Rs. 7,500" },
                    { groupSize: "Group of 3", price: "Rs. 5,450" },
                    { groupSize: "Group of 4", price: "Rs. 4,400" },
                ],
            },
        ],
        included: [
            "Station pickup and drop",
            "Accommodation",
            "Breakfast Included",
            "Dedicated cab and customer support",
        ],
        excluded: [
            "Lunch and dinner",
            "Personal purchases",
            "Optional local activities",
            "Anything outside the listed plan",
        ],
    },
    {
        id: 3,
        slug: "1n2d-wilderness-camp",
        title: "1N2D Wilderness Camp",
        price: "Rs. 3,300",
        duration: "1 Night 2 Days",
        tourType: "Nature Camp",
        location: "Koraput, Odisha",
        bestFor: "Adventure seekers, campers, and small groups",
        heroImage: "/product-img/card-5.jpeg",
        gallery: [
            "/product-img/card-5.jpeg",
            "/product-img/card-4.jpeg",
            "/product-img/card-2.jpeg",
        ],
        shortDescription:
            "A short but high-energy Koraput adventure with Talamiting, mountain camping, sunrise views, and Gupteshwar.",
        overview:
            "Embark on an exhilarating 1N2D Nature and Adventure in Koraput. Start your journey with a visit to the enchanting Talamiting waterfall, hidden in the heart of the Eastern Ghats. Trek through lush jungles to reach the natural infinity pool and capture breathtaking moments. Continue with an unforgettable Koraput camping trip atop a mountain, surrounded by scenic valleys and starlit skies. Wake up to a mesmerizing sunrise before heading to the famous Gupteshwar Shiva caves and temple. Explore the mystical caves and immerse yourself in the rich tribal essence. Depart with unforgettable memories from this action-packed Koraput travel guide experience",
        highlights: [
            "Trek to Talamiting Waterfall and the natural infinity pool",
            "Camp on a mountain with scenic valleys and starry skies",
            "Wake up to a mesmerizing sunrise",
            "Visit Gupteshwar Shiva caves and temple before departure",
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Scenic Waterfall Discovery and Camping Adventure",
                description:
                    "Morning Arrival in Koraput - Upon your arrival in Koraput, your allocated cab will be waiting to greet you. From there, you will be taken on a picturesque journey to Semiliguda. Once you arrive, you'll check in at your comfortable hotel.\n\nTalamiting Waterfall - After settling in, prepare yourself for an extraordinary day of exploration. Your morning will begin with a delicious breakfast served at the hotel. While you enjoy your meal, our representative will arrive with a taxi ready to take you on your adventure.\n\nYour journey will lead you to the remarkable Talamiting Waterfall, often referred to as the Natural Infinity Pool. The route to the waterfall will treat you to the breathtaking beauty of the Eastern Ghats, showcasing some of the most scenic roads in the region.\n\nA moderate trek of 30-45 minutes through the jungle will lead you to the pool, where you'll have the opportunity to experience a 5-star swimming experience and capture some stunning photos. The view is so mesmerizing that you may find it hard to leave, but more adventures await.\n\nHanuman Statue Visit - On your way back, you'll visit the world's third-tallest Hanuman statue, adding a touch of spirituality to your journey. Afterward, return to your hotel to freshen up and prepare for the next thrilling experience.",
            },
            {
                day: "Day 2",
                title: "Sunrise Serenity and Mystical Cave Exploration",
                description:
                    "Sunrise Serenity - Wake up to one of the most breathtaking sunrises of your life as you soak in the tranquility of your mountaintop camping spot. Afterward, begin packing up your campsite, ready for the return journey.\n\nGupteswar - After breakfast and checking out of the hotel, embark on a journey to one of Koraput's most visited attractions: the Gupteshwar Shiva Caves and Temple. Situated near the Sabari River and surrounded by dense forests along the Odisha-Chhattisgarh border, this holy place is known as Baba Gupteshwar Temple.\n\nAs you arrive, you'll be greeted by lush greenery and a mystical atmosphere. To reach the Shiva Linga, you'll climb a series of stairs and enter a cave where it is believed that the 6-foot-tall linga is growing day by day. The entire place is steeped in mystery, with four additional caves nearby to explore, each filled with captivating mythological stories.\n\nAfter your exploration, indulge in some local cuisine, purchase unique local products, and immerse yourself in the raw essence of tribal culture. Following this enriching experience, our representative will escort you to the railway station for your departure.\n\nDeparture - After this spiritually enriching experience, our representative will kindly drop you off at the railway station, concluding your memorable journey through the captivating landscapes and spiritual wonders of Koraput.",
            },
        ],
        groupPricing: [
            { groupSize: "Group of 1", price: "Rs. 10,220", note: "Standard plan" },
            { groupSize: "Group of 2", price: "Rs. 5,200", note: "Standard plan" },
            { groupSize: "Group of 3", price: "Rs. 3,900", note: "Standard plan" },
            { groupSize: "Group of 4", price: "Rs. 3,300", note: "Standard plan" },
        ],
        pricingPlans: [
            {
                name: "Standard",
                subtitle: "Camping comfort with breakfast, standard rooms, and cab support",
                perks: [
                    "Breakfast Included",
                    "Standard Rooms",
                    "Cabs",
                    "24/7 Customer Support",
                ],
                groupPricing: [
                    { groupSize: "Group of 1", price: "Rs. 10,220" },
                    { groupSize: "Group of 2", price: "Rs. 5,200" },
                    { groupSize: "Group of 3", price: "Rs. 3,900" },
                    { groupSize: "Group of 4", price: "Rs. 3,300" },
                ],
            },
            {
                name: "Premium",
                subtitle: "AC rooms and AC cabs while keeping the adventure route intact",
                perks: [
                    "Breakfast Included",
                    "AC Rooms",
                    "AC Cabs",
                    "24/7 Customer Support",
                ],
                groupPricing: [
                    { groupSize: "Group of 1", price: "Rs. 10,221" },
                    { groupSize: "Group of 2", price: "Rs. 5,182" },
                    { groupSize: "Group of 3", price: "Rs. 3,900" },
                    { groupSize: "Group of 4", price: "Rs. 3,300" },
                ],
            },
        ],
        included: [
            "Breakfast Included",
            "Accommodation or camp stay",
            "Cab support",
            "24/7 Customer Support",
        ],
        excluded: [
            "Lunch and dinner",
            "Personal expenses",
            "Extra gear or special requests",
            "Anything outside the listed itinerary",
        ],
    },
    {
        id: 4,
        slug: "2n3d-natures-enigma",
        title: "2N3D Nature's Enigma",
        price: "Rs. 4,680",
        duration: "2 Nights 3 Days",
        tourType: "Weekend Getaway",
        location: "Koraput, Odisha",
        bestFor: "Weekend explorers, couples, and nature-focused groups",
        heroImage: "/product-img/card-4.jpeg",
        gallery: [
            "/product-img/card-4.jpeg",
            "/product-img/card-1.jpeg",
            "/product-img/card-6.jpeg",
        ],
        shortDescription:
            "A 2N3D Koraput getaway with waterfalls, Gupteshwar, Deomali, Talamiting, and Damanjodi highlights.",
        overview:
            "Experience the wonders of Koraput with this 2N3D tour package, the ideal Koraput weekend getaway offering a perfect blend of nature, adventure, and spirituality. Witness the breathtaking beauty of Queen Raniduduma and Duduma Waterfalls, where the stunning cascades and historic British-made Hydroelectric powerhouse create picturesque moments. Explore the mysterious Baba Gupteshwar Temple, hidden within captivating caves, and soak in the serenity of the scenic Kolab Dam. Immerse yourself in the spirituality of the renowned Sabara Srikhetra Jagannath Temple. For adventure seekers, ascend the majestic Deomali Hill, the highest peak in Odisha, and trek to Talamiting Waterfall, home to a natural infinity pool. Marvel at the towering Hanuman statue and discover the unique Redmud and Ash ponds. This eco-tourism experience in Koraput promises unforgettable memories, blending natural beauty, adventure, and rich culture.",
        highlights: [
            "Visit Raniduduma and Duduma along with the British-made hydroelectric powerhouse",
            "Explore Gupteshwar, Kolab Dam, and Sabara Srikhetra on a spiritual day out",
            "Trek Deomali Hill and Talamiting Waterfall",
            "Finish with Hanuman statue, local shrine, Red Mud Pond, and departure from Damanjodi",
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Raniduduma and Duduma",
                description:
                    "Morning Exploration - Begin your Koraput tour with a visit to the enchanting Raniduduma Waterfall, often called the 'Queen Waterfall of Koraput.' Capture unforgettable moments as you soak in the beauty of nature and enjoy a refreshing dip in the crystal-clear waters.\n\nDiscover Duduma Waterfall - Continue your journey to the majestic Duduma Waterfall, a stunning horsetail-type waterfall that plunges from 574 feet. Following this, explore the British-made Hydroelectric Powerhouse, a key highlight of this Koraput tour package.",
            },
            {
                day: "Day 2",
                title: "Gupteshwar, Kolab, and Sabara Srikhetra",
                description:
                    "Spiritual Exploration - On Day 2 of your 2N3D Koraput tour package, head to the sacred Baba Gupteswar Temple. This mystical cave temple, located near the Odisha-Chhattisgarh border, is famous for its growing 6-foot-tall Shiva Linga. Experience the spiritual energy as you explore the hidden caves, each filled with fascinating mythological stories.\n\nScenic Stops on the Way Back - As part of your Gupteswar tour, stop by the beautiful Kolab Dam and its botanical garden, where you can enjoy a serene walk surrounded by nature. End your day at Sabara Srikhetra Jagannath Temple, a unique destination in this Odisha tour, where all the avatars of Lord Jagannath can be seen in one place.",
            },
            {
                day: "Day 3",
                title: "Deomali and Talamiting Waterfall",
                description:
                    "Deomali Hilltop Adventure - Start your Deomali tour by ascending the highest peak in Odisha, Deomali Hill. Drive to the top and enjoy a one-hour trek to the summit, capturing panoramic views that make this adventure a highlight of your 2N3D Koraput tour package.\n\nNatural Infinity Pool - After your trek, visit the Talamiting Waterfall, home to a stunning natural infinity pool. A 30-minute trek through the lush jungle will lead you to this hidden gem, offering a five-star nature experience.\n\nExploration and Departure - Conclude your Koraput tour with a visit to the third tallest Hanuman statue, a local goddess shrine, and the unique Red Mud Pond and Ash Pond, often called the 'Mars of Odisha.' Your Koraput tour package ends with a drop-off at Damanjodi Railway Station, leaving you with cherished memories.\n\nDeparture - After this spiritually enriching experience, our representative will kindly drop you off at the railway station, concluding your memorable journey through the captivating landscapes and spiritual wonders of Koraput.",
            },
        ],
        groupPricing: [
            { groupSize: "Group of 1", price: "Rs. 13,752", note: "Standard plan" },
            { groupSize: "Group of 2", price: "Rs. 7,344", note: "Standard plan" },
            { groupSize: "Group of 3", price: "Rs. 6,168", note: "Standard plan" },
            { groupSize: "Group of 4", price: "Rs. 4,680", note: "Standard plan" },
        ],
        pricingPlans: [
            {
                name: "Standard",
                subtitle: "Breakfast, standard rooms, and cab support included",
                perks: [
                    "Breakfast Included",
                    "Standard Rooms",
                    "Cabs",
                    "24/7 Customer Support",
                ],
                groupPricing: [
                    { groupSize: "Group of 1", price: "Rs. 13,752" },
                    { groupSize: "Group of 2", price: "Rs. 7,344" },
                    { groupSize: "Group of 3", price: "Rs. 6,168" },
                    { groupSize: "Group of 4", price: "Rs. 4,680" },
                ],
            },
            {
                name: "Premium",
                subtitle: "AC stay and AC cabs for a more premium Koraput circuit",
                perks: [
                    "Breakfast Included",
                    "AC Rooms",
                    "AC Cabs",
                    "24/7 Customer Support",
                ],
                groupPricing: [
                    { groupSize: "Group of 1", price: "Rs. 17,000" },
                    { groupSize: "Group of 2", price: "Rs. 8,571" },
                    { groupSize: "Group of 3", price: "Rs. 6,570" },
                    { groupSize: "Group of 4", price: "Rs. 5,560" },
                ],
            },
        ],
        included: [
            "Breakfast Included",
            "Accommodation",
            "Sightseeing cab support",
            "24/7 Customer Support",
        ],
        excluded: [
            "Lunch and dinner",
            "Personal expenses",
            "Extra activity charges",
            "Anything outside the listed itinerary",
        ],
    },
    {
        id: 5,
        slug: "2n3d-nature-camp-escape",
        title: "2N3D Nature Camp Escape",
        price: "Rs. 3,511",
        duration: "2 Nights 3 Days",
        tourType: "Camp Adventure",
        location: "Koraput, Odisha",
        bestFor: "Camp lovers, young groups, and weekend adventurers",
        heroImage: "/product-img/card-6.jpeg",
        gallery: [
            "/product-img/card-6.jpeg",
            "/product-img/card-3.jpeg",
            "/product-img/card-2.jpeg",
        ],
        shortDescription:
            "An immersive 2N3D camp and sightseeing experience with Raniduduma, Deomali, Talamiting, Gupteshwar, and Kolab.",
        overview:
            "Experience the untamed beauty of Koraput with this immersive 2N/3D tour and camping adventure. Perfect for a weekend escape, this package seamlessly blends breathtaking landscapes, thrilling exploration, and spiritual serenity. Marvel at the enchanting Raniduduma Waterfall, trek to the summit of Deomali Hill, and camp beneath a starlit sky at Talamali Hilltop. Discover the tranquil Talamiting Waterfall, wander through the mystical caves of Baba Gupteswar Temple, and unwind by the scenic Kolab Dam. Embrace the spiritual grandeur of Sabara Srikhetra and stand in awe of the towering Hanuman statue.",
        highlights: [
            "Begin with Raniduduma Waterfall and Deomali Hill",
            "Camp on the hilltop and wake up to mountain views",
            "Visit Talamiting Waterfall and the third tallest Hanuman statue",
            "Conclude with Gupteshwar, Kolab Dam, and Sabara Srikhetra",
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Raniduduma and Deomali",
                description:
                    "Morning Exploration - Your journey begins with a warm welcome at Damanjodi railway station, followed by a transfer to your stay location for check-in and refreshment. Start your adventure at Raniduduma Waterfall, a stunning cascade surrounded by greenery.\n\nDeomali Hilltop Adventure - Head to Deomali Hill, the highest peak in Odisha, where you'll drive to the top and trek to breathtaking panoramic views.",
            },
            {
                day: "Day 2",
                title: "Talamiting Waterfall and Hanuman Statue",
                description:
                    "Nature's Infinity Pool and Spiritual Landmark - Wake up to the beauty of the hilltop and leave the campsite by 8:00 AM. Return to your stay location for a brief refreshment before heading out for the day's adventure.\n\nVisit the serene Talamiting Waterfall, known for its natural infinity pool, offering a perfect spot to relax. Then, marvel at the third tallest Hanuman statue in the world, an awe-inspiring spiritual landmark. Return to your stay location for a comfortable evening and overnight stay.",
            },
            {
                day: "Day 3",
                title: "Gupteshwar, Kolab, and Sabara Srikhetra",
                description:
                    "Cave Temple - After check-out, begin your final day of exploration with a visit to Gupteswar, a revered cave temple dedicated to Lord Shiva, nestled within dense forests.\n\nSerene Dam and Temple - Witness the grandeur of Kolab Dam, a picturesque reservoir perfect for capturing stunning views. Finally, visit Sabara Srikhetra, a temple reflecting the deep cultural heritage of Koraput. Conclude your journey with a drop-off at Koraput Railway Station, marking the end of a memorable tour.\n\nDeparture - After this spiritually enriching experience, our representative will kindly drop you off at the railway station, concluding your memorable journey through the captivating landscapes and spiritual wonders of Koraput.",
            },
        ],
        groupPricing: [
            { groupSize: "Group of 1", price: "Rs. 13,600", note: "Standard plan" },
            { groupSize: "Group of 2", price: "Rs. 6,880", note: "Standard plan" },
            { groupSize: "Group of 3", price: "Rs. 5,450", note: "Standard plan" },
            { groupSize: "Group of 4", price: "Rs. 3,511", note: "Standard plan" },
        ],
        pricingPlans: [
            {
                name: "Standard",
                subtitle: "Breakfast, standard rooms, and cab support included",
                perks: [
                    "Breakfast Included",
                    "Standard Rooms",
                    "Cabs",
                    "24/7 Customer Support",
                ],
                groupPricing: [
                    { groupSize: "Group of 1", price: "Rs. 13,600" },
                    { groupSize: "Group of 2", price: "Rs. 6,880" },
                    { groupSize: "Group of 3", price: "Rs. 5,450" },
                    { groupSize: "Group of 4", price: "Rs. 3,511" },
                ],
            },
            {
                name: "Premium",
                subtitle: "AC rooms and AC cabs for a smoother camp-and-stay trip",
                perks: [
                    "Breakfast Included",
                    "AC Rooms",
                    "AC Cabs",
                    "24/7 Customer Support",
                ],
                groupPricing: [
                    { groupSize: "Group of 1", price: "Rs. 10,920" },
                    { groupSize: "Group of 2", price: "Rs. 5,928" },
                    { groupSize: "Group of 3", price: "Rs. 5,224" },
                    { groupSize: "Group of 4", price: "Rs. 3,882" },
                ],
            },
        ],
        included: [
            "Breakfast Included",
            "Accommodation and camp experience",
            "Cab support",
            "24/7 Customer Support",
        ],
        excluded: [
            "Lunch and dinner",
            "Personal expenses",
            "Anything outside the listed itinerary",
            "Optional add-on requests",
        ],
    },
    {
        id: 6,
        slug: "3n4d-od-cg-ap-thrilling",
        title: "3N4D OD-CG-AP Thrilling",
        price: "Rs. 6,852",
        duration: "3 Nights 4 Days",
        tourType: "Multi-State Explorer",
        location: "Odisha, Chhattisgarh, and Andhra Pradesh",
        bestFor: "Travelers wanting a cross-border waterfall and valley circuit",
        heroImage: "/product-img/card-3.jpeg",
        gallery: [
            "/product-img/card-3.jpeg",
            "/product-img/card-1.jpeg",
            "/product-img/card-4.jpeg",
        ],
        shortDescription:
            "A wider 3N4D journey covering Koraput, Tirathgarh, Chitrakote, Araku Valley, Bora Cave, and Gupteshwar.",
        overview:
            "Join us for this carefully crafted 3N4D tour package and discover the enchanting beauty of nature while indulging in unforgettable experiences across the borders of Chhattisgarh and Andhra Pradesh. Highlights include the mesmerizing 8-step Raniduduma waterfall, the majestic Deomali Hill with stunning sunset views, and the awe-inspiring Tirathgarh and Chitrakote waterfalls. Explore the picturesque Araku Valley and the immense Bora Cave. Immerse yourself in local culture by visiting the market, the holy Baba Gupteshwar Temple with its mysterious linga, and marvel at the Kolab Dam and Sabara Srikhetra Jagannath Temple. This journey beautifully combines the best of nature and cultural heritage, inviting you to experience the captivating stories of the region",
        highlights: [
            "Enjoy Raniduduma and a Deomali sunset trek on day one",
            "Explore Tirathgarh and Chitrakote, the Niagara Falls of India",
            "Spend a day in Araku Valley and Bora Cave",
            "End with Gupteshwar, Kolab Dam, and Sabara Srikhetra",
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Raniduduma and Deomali",
                description:
                    "Arrival in Koraput - Upon arrival in Koraput, your allocated cab will transport you to Semiliguda - check-in at your hotel.\n\nQueen Waterfall Exploration - After a satisfying breakfast, your taxi will take you to Raniduduma Waterfall, often called the Queen Waterfall of Koraput. Enjoy a natural bath in this safe and serene setting, capture memorable photos, and proceed to your next destination.\n\nDeomali Hilltop Sunset Trek - Visit the highest peak in Odisha, the majestic Deomali Hilltop. A trek to the top, while not overly difficult, offers breathtaking views. Experience the best sunset of your life here and return to your hotel.",
            },
            {
                day: "Day 2",
                title: "Tirathgarh and Chitrakote Waterfalls",
                description:
                    "Waterfall Mania - After breakfast, your taxi will be ready at your hotel.\n\nExploring Tirathgarh Waterfall - Head to Tirathgarh Waterfall, a stepped waterfall in Chhattisgarh with unique natural formations. This waterfall descends 300 feet below the hillside, creating a captivating cascade.\n\nChitrakote Waterfall - Continue your waterfall exploration with a visit to Chitrakote Waterfall, often dubbed the 'Niagara Falls of India.' This spectacular waterfall plummets from a height of 30 meters and widens to nearly 300 meters during the monsoon season. Capture the mesmerizing beauty of nature before returning to your hotel.",
            },
            {
                day: "Day 3",
                title: "Araku Valley and Bora Cave",
                description:
                    "Araku Valley Excursion - Today, you'll journey to the picturesque Araku Valley, situated near the Odisha-Andhra Border. Enjoy scenic mountain ranges along the way and explore the Araku Tribal Museum. Depending on the season, you may also visit a coffee plantation.\n\nDiscover Bora Cave - Experience the awe-inspiring Bora Cave, the widest cave in India, capable of accommodating thousands of visitors simultaneously. Explore its vast interior and capture its captivating beauty before returning to your hotel in the evening.",
            },
            {
                day: "Day 4",
                title: "Gupteshwar, Kolab, and Sabara Srikhetra",
                description:
                    "Baba Gupteshwar Temple - Begin your day with a visit to the holy Baba Gupteshwar Temple, located near the Sabari River amid dense forests along the Odisha-Chhattisgarh border. Climb the stairs to reach the Shiva Linga inside the cave, believed to be growing day by day, shrouding the place in mystery. Explore the temple's nearby caves, each revealing fascinating mythological stories.\n\nKolab Dam and Sabara Srikhetra Jagannath Temple - On your return, visit the scenic Kolab Dam and enjoy a stroll through the botanical garden. Your final stop is Sabara Srikhetra Jagannath Temple, where you can witness all the avatars of Lord Jagannath. Conclude your memorable journey as our representative drops you off at the railway station.\n\nDeparture - After this spiritually enriching experience, our representative will kindly drop you off at the railway station, concluding your memorable journey through the captivating landscapes and spiritual wonders of Koraput.",
            },
        ],
        groupPricing: [
            { groupSize: "Group of 1", price: "Rs. 20,064", note: "Standard plan" },
            { groupSize: "Group of 2", price: "Rs. 10,716", note: "Standard plan" },
            { groupSize: "Group of 3", price: "Rs. 9,040", note: "Standard plan" },
            { groupSize: "Group of 4", price: "Rs. 6,852", note: "Standard plan" },
        ],
        pricingPlans: [
            {
                name: "Standard",
                subtitle: "Breakfast, standard rooms, and cabs across the route",
                perks: [
                    "Breakfast Included",
                    "Standard Rooms",
                    "Cabs",
                    "24/7 Customer Support",
                ],
                groupPricing: [
                    { groupSize: "Group of 1", price: "Rs. 20,064" },
                    { groupSize: "Group of 2", price: "Rs. 10,716" },
                    { groupSize: "Group of 3", price: "Rs. 9,040" },
                    { groupSize: "Group of 4", price: "Rs. 6,852" },
                ],
            },
            {
                name: "Premium",
                subtitle: "AC rooms and AC cabs for the longer multi-state circuit",
                perks: [
                    "Breakfast Included",
                    "AC Rooms",
                    "AC Cabs",
                    "24/7 Customer Support",
                ],
                groupPricing: [
                    { groupSize: "Group of 1", price: "Rs. 24,950" },
                    { groupSize: "Group of 2", price: "Rs. 12,550" },
                    { groupSize: "Group of 3", price: "Rs. 9,614" },
                    { groupSize: "Group of 4", price: "Rs. 8,150" },
                ],
            },
        ],
        included: [
            "Breakfast Included",
            "Accommodation",
            "Cab support for the route",
            "24/7 Customer Support",
        ],
        excluded: [
            "Lunch and dinner",
            "Personal expenses",
            "Tickets not mentioned",
            "Anything outside the listed route",
        ],
    },
    {
        id: 7,
        slug: "3n4d-od-ap-enchanting-quest",
        title: "3N4D OD-AP Enchanting Quest",
        price: "Rs. 6,342",
        duration: "3 Nights 4 Days",
        tourType: "Odisha-Andhra Explorer",
        location: "Odisha and Andhra Pradesh",
        bestFor: "Travelers wanting waterfalls, valleys, caves, and sacred sites",
        heroImage: "/product-img/card-2.jpeg",
        gallery: [
            "/product-img/card-2.jpeg",
            "/product-img/card-3.jpeg",
            "/product-img/card-5.jpeg",
        ],
        shortDescription:
            "A 3N4D Odisha-Andhra route with Raniduduma, Duduma, Deomali, Talamiting, Araku Valley, Bora Cave, and Gupteshwar.",
        overview:
            "Experience the enchanting beauty of Koraput with this captivating 3-night, 4-day tour. Begin Day 1 at the majestic Raniduduma and Duduma waterfalls, where you can enjoy a refreshing natural bath and take in their awe-inspiring splendor. On Day 2, journey to Deomali Hill, Odisha’s highest peak, followed by a dip in the natural infinity pool at Talamiting waterfall. Day 3 brings you to the scenic Araku Valley, where you’ll explore the tribal museum and the vast Bora Cave. Conclude with visits to the mystical Baba Gupteshwar Temple and Kolab Dam. This Koraput tribal village tour offers an immersive and unforgettable experience in nature and culture, perfect for those seeking Koraput adventure tours.",
        highlights: [
            "Open with Raniduduma, Duduma, and the hydroelectric powerhouse",
            "Trek Deomali and visit Talamiting's infinity pool and Hanuman statue",
            "Explore Araku Valley, the tribal museum, and Bora Cave",
            "Finish with Gupteshwar, Kolab Dam, and Sabara Srikhetra",
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Waterfall Wonders",
                description:
                    "Queen Waterfall Exploration - Your allocated cab will take you to Raniduduma Waterfall, often referred to as the Queen Waterfall of Koraput. Capture memorable photos, and proceed to your next destination.\n\nDuduma Waterfall and Hydroelectric Powerhouse - Continue your adventure with a visit to Duduma Waterfall, an impressive Horsetail-type waterfall cascading from a height of 574 feet. Explore the serene beauty of this place and visit the British-made Hydroelectric Powerhouse before returning to your hotel.",
            },
            {
                day: "Day 2",
                title: "Peak and Pool Paradise",
                description:
                    "Deomali Hilltop Adventure - Enjoy breakfast at your hotel, and our representative will arrive. Embark on a journey to Deomali Hilltop, the highest peak in Odisha. A short and manageable trek of approximately 1 hour leads you to the summit. Collect unforgettable memories and proceed to your next destination.\n\nNatural Infinity Pool (Talamiting Waterfall) - Discover the wonder of Koraput, the Natural Infinity Pool at Talamiting Waterfall. Enjoy scenic Eastern Ghats roads and a brief 30-minute trek to reach the pool. Indulge in a 5-star pool experience and capture memorable moments. On your return to the hotel, visit the world's third-tallest Hanuman statue.",
            },
            {
                day: "Day 3",
                title: "Valley Exploration",
                description:
                    "Araku Valley Excursion - After breakfast, your taxi will be ready at your hotel. Journey to Araku Valley, situated near the Odisha-Andhra Border. Admire beautiful mountain ranges along the way and explore the Araku Tribal Museum. Depending on the season, you may also visit a coffee plantation.\n\nBora Cave Exploration - Explore the awe-inspiring Bora Cave, the widest cave in India, capable of accommodating thousands of visitors simultaneously. Capture its magnificent beauty before returning to your hotel in the evening.",
            },
            {
                day: "Day 4",
                title: "Mystical Temples and Dams",
                description:
                    "Baba Gupteshwar Temple - Begin your day with a visit to the holy Baba Gupteshwar Temple, located near the Sabari River amidst dense forests along the Odisha-Chhattisgarh border. Climb the stairs to reach the Shiva Linga inside the cave, believed to be growing day by day, shrouding the place in mystery. Explore the nearby caves and be amazed by their mythological stories.\n\nKolab Dam and Sabara Srikhetra Jagannath Temple - On your return, visit the scenic Kolab Dam and enjoy a stroll through the botanical garden. Your final stop is Sabara Srikhetra Jagannath Temple, where you can witness all the avatars of Lord Jagannath.\n\nDeparture - After this spiritually enriching experience, our representative will kindly drop you off at the railway station, concluding your memorable journey through the captivating landscapes and spiritual wonders of Koraput.",
            },
        ],
        groupPricing: [
            { groupSize: "Group of 1", price: "Rs. 18,024", note: "Standard plan" },
            { groupSize: "Group of 2", price: "Rs. 9,696", note: "Standard plan" },
            { groupSize: "Group of 3", price: "Rs. 8,360", note: "Standard plan" },
            { groupSize: "Group of 4", price: "Rs. 6,342", note: "Standard plan" },
        ],
        pricingPlans: [
            {
                name: "Standard",
                subtitle: "Breakfast, standard rooms, and route cab support included",
                perks: [
                    "Breakfast Included",
                    "Standard Rooms",
                    "Cabs",
                    "24/7 Customer Support",
                ],
                groupPricing: [
                    { groupSize: "Group of 1", price: "Rs. 18,024" },
                    { groupSize: "Group of 2", price: "Rs. 9,696" },
                    { groupSize: "Group of 3", price: "Rs. 8,360" },
                    { groupSize: "Group of 4", price: "Rs. 6,342" },
                ],
            },
            {
                name: "Premium",
                subtitle: "AC rooms and AC cabs for the Odisha-Andhra circuit",
                perks: [
                    "Breakfast Included",
                    "AC Rooms",
                    "AC Cabs",
                    "24/7 Customer Support",
                ],
                groupPricing: [
                    { groupSize: "Group of 1", price: "Rs. 22,500" },
                    { groupSize: "Group of 2", price: "Rs. 11,350" },
                    { groupSize: "Group of 3", price: "Rs. 8,800" },
                    { groupSize: "Group of 4", price: "Rs. 7,550" },
                ],
            },
        ],
        included: [
            "Breakfast Included",
            "Accommodation",
            "Cab support for sightseeing",
            "24/7 Customer Support",
        ],
        excluded: [
            "Lunch and dinner",
            "Personal expenses",
            "Entry fees not mentioned",
            "Anything outside the listed itinerary",
        ],
    },
    {
        id: 8,
        slug: "2n3d-od-ap-cave-camp-trails",
        title: "2N3D OD-AP Cave Camp Trails",
        price: "Rs. 4,761",
        duration: "2 Nights 3 Days",
        tourType: "Cave and Camp Trail",
        location: "Odisha and Andhra Pradesh",
        bestFor: "Mixed groups seeking adventure, caves, camping, and culture",
        heroImage: "/product-img/card-5.jpeg",
        gallery: [
            "/product-img/card-5.jpeg",
            "/product-img/card-2.jpeg",
            "/product-img/card-4.jpeg",
        ],
        shortDescription:
            "A 2N3D cross-border trail with Raniduduma, Deomali, Araku, Borra Caves, Gupteshwar, Kolab, and Sabara Srikhetra.",
        overview:
            "Experience the best of Odisha and Andhra Pradesh with a perfect blend of adventure, nature, and culture. Witness the stunning Raniduduma Waterfall, trek to Deomali’s peak, and camp under a starlit sky. Explore the breathtaking Borra Caves, Araku Valley’s lush landscapes, and ancient temples, crafting a memorable experience for all travelers",
        highlights: [
            "Begin with Raniduduma and Deomali Hilltop",
            "Cross into Araku Valley and explore Borra Caves",
            "Discover Gupteshwar Temple in a dense forest setting",
            "Wrap up with Kolab Dam and Sabara Srikhetra before departure",
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Raniduduma and Deomali",
                description:
                    "Morning Exploration - Your journey begins with a warm welcome at Damanjodi railway station, followed by a transfer to your stay location for check-in and refreshment. Start your adventure at Raniduduma Waterfall, a stunning cascade surrounded by greenery and a refreshing mountain breeze.\n\nDeomali Hilltop Adventure - Head to Deomali Hill, the highest peak in Odisha, where you'll drive to the top and trek to breathtaking panoramic views.",
            },
            {
                day: "Day 2",
                title: "Araku and Natural Wonders",
                description:
                    "Exploring Araku Valley - Wake up to the tranquil beauty of the hilltop and leave the campsite by 8:00 AM. Return to your stay location for refreshment before heading towards Andhra Pradesh. Visit the picturesque Araku Valley, a scenic hill station famous for its lush landscapes and rich tribal culture.\n\nBorra Caves Expedition - Discover the ancient Borra Caves, a limestone cave system with breathtaking stalactites and stalagmites formations, offering a glimpse into natural history. Head back to your stay location for an evening of relaxation and overnight stay.",
            },
            {
                day: "Day 3",
                title: "Cultural and Scenic Wonders",
                description:
                    "Gupteswar Temple Exploration - After check-out, begin your final day of exploration with a visit to Gupteswar, a revered cave temple dedicated to Lord Shiva, nestled within dense forests.\n\nKolab Dam and Sabara Srikhetra Jagannath Temple - Witness the grandeur of Kolab Dam, a picturesque reservoir perfect for capturing stunning views, a massive reservoir ideal for photography and relaxation. Conclude your sightseeing with a visit to Sabara Srikhetra, a temple symbolizing the rich cultural heritage of Koraput. The tour ends with a drop-off at Koraput Railway Station, concluding an unforgettable journey.\n\nDeparture - After this spiritually enriching experience, our representative will kindly drop you off at the railway station, concluding your memorable journey through the captivating landscapes and spiritual wonders of Koraput.",
            },
        ],
        groupPricing: [
            { groupSize: "Group of 1", price: "Rs. 14,076", note: "Standard plan" },
            { groupSize: "Group of 2", price: "Rs. 7,500", note: "Standard plan" },
            { groupSize: "Group of 3", price: "Rs. 6,276", note: "Standard plan" },
            { groupSize: "Group of 4", price: "Rs. 4,761", note: "Standard plan" },
        ],
        pricingPlans: [
            {
                name: "Standard",
                subtitle: "Breakfast, standard rooms, and route cabs included",
                perks: [
                    "Breakfast Included",
                    "Standard Rooms",
                    "Cabs",
                    "24/7 Customer Support",
                ],
                groupPricing: [
                    { groupSize: "Group of 1", price: "Rs. 14,076" },
                    { groupSize: "Group of 2", price: "Rs. 7,500" },
                    { groupSize: "Group of 3", price: "Rs. 6,276" },
                    { groupSize: "Group of 4", price: "Rs. 4,761" },
                ],
            },
            {
                name: "Premium",
                subtitle: "AC rooms and AC cabs for the two-state cave and camp route",
                perks: [
                    "Breakfast Included",
                    "AC Rooms",
                    "AC Cabs",
                    "24/7 Customer Support",
                ],
                groupPricing: [
                    { groupSize: "Group of 1", price: "Rs. 17,400" },
                    { groupSize: "Group of 2", price: "Rs. 8,780" },
                    { groupSize: "Group of 3", price: "Rs. 6,692" },
                    { groupSize: "Group of 4", price: "Rs. 4,480" },
                ],
            },
        ],
        included: [
            "Breakfast Included",
            "Accommodation",
            "Cab support",
            "24/7 Customer Support",
        ],
        excluded: [
            "Lunch and dinner",
            "Personal expenses",
            "Optional activities",
            "Anything outside the listed itinerary",
        ],
    },
];

export function getTourBySlug(slug: string) {
    return tours.find((tour) => tour.slug === slug);
}

export function getAllTourSlugs() {
    return tours.map((tour) => tour.slug);
}
