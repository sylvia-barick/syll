'use client';

import React from 'react';
import { FaTrophy, FaUsers, FaLightbulb, FaHandHoldingHeart } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            category: 'Hackathons',
            icon: FaTrophy,
            items: [
                'Hack Synthesis 2.0 (Most Innovative)',
                'Tech Triad (IIIT Kharagpur) Winner',
                'Kshitij IIT Kharagpur (Finalist)',
                'Hexafalls 2025',
                'Algorand Buildstation',
                'Team1 Avalanche',
                'Craftncode 2024',
                'Algorand',
                'Rise In– Celo',
                'Rise In– Stellar',
            ],
        },
        {
            category: 'Leadership & Technical Roles',
            icon: FaUsers,
            items: [
                'Organizer @ Smart Make-A-Thon',
                'Website Creator @ IEM Comicverse',
                'Website Creator @ Smart Society Olympiad',
                'Website Creator @ Kolkata Film Festival',
                'Website Creator @ Converge',
                'Website Creator @ Spell Bee',
            ],
        },
        {
            category: 'Exhibitions & Contributions',
            icon: FaLightbulb,
            items: [
                'IIT Tech Exhibition',
                'IDE Bootcamp Ranchi (Rated 3.9/5)',
            ],
        },
        {
            category: 'Active Volunteer & Domain Lead',
            icon: FaHandHoldingHeart,
            items: [
                'Smart Maker’s Festival (2024 & 2025)',
                'Mechatronica',
                'Innovacion',
                'IEM Comicverse',
                'SSO Olympiad',
            ],
        },
    ];

    return (
        <div className="w-full bg-white dark:bg-black py-16 border-t-4 border-black dark:border-white">
            <div className="max-w-7xl mx-auto px-5">
                <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-black dark:text-white uppercase tracking-tight">
                    Experience & Activities
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-zinc-900 border-4 border-black dark:border-white p-6 
                         shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]
                         hover:translate-x-1 hover:translate-y-1 hover:shadow-none 
                         transition-all duration-200"
                        >
                            <div className="flex items-center gap-4 mb-6 border-b-4 border-black dark:border-white pb-4">
                                <div className="p-3 bg-black dark:bg-white text-white dark:text-black">
                                    <exp.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-black dark:text-white">
                                    {exp.category}
                                </h3>
                            </div>

                            <ul className="space-y-3">
                                {exp.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-lg font-medium text-gray-800 dark:text-gray-200">
                                        <span className="mr-3 mt-1.5 w-2 h-2 bg-black dark:bg-white flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
