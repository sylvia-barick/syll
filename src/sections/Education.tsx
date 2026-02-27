'use client';

import React from 'react';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Education = () => {
    return (
        <div className="w-full bg-yellow-300 dark:bg-purple-900 py-16 border-t-4 border-black dark:border-white">
            <div className="max-w-5xl mx-auto px-5">
                <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-black dark:text-white uppercase tracking-tight">
                    Education
                </h2>

                <div className="space-y-8">
                    {/* College */}
                    <div className="bg-white dark:bg-zinc-900 border-4 border-black dark:border-white p-6 md:p-8
                         shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]
                         relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <FaGraduationCap className="w-32 h-32" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white uppercase">
                                    Institute of Engineering and Management (IEM)
                                </h3>
                                <div className="mt-2 md:mt-0 px-4 py-1 bg-black dark:bg-white text-white dark:text-black font-bold text-sm transform -rotate-2">
                                    Jul 2024 - Jun 2028
                                </div>
                            </div>

                            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                                B.Tech in Computer Science-AI-ML
                            </h4>

                            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 text-lg font-medium border-t-2 border-dashed border-gray-400 pt-4">
                                <div>
                                    <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 mr-2 text-sm font-bold">CGPA</span>
                                    8.8
                                </div>
                                <div>
                                    <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 mr-2 text-sm font-bold">COURSEWORK</span>
                                    Web Dev, AI, Gen AI, Web 3
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* School */}
                    <div className="bg-white dark:bg-zinc-900 border-4 border-black dark:border-white p-6 md:p-8
                         shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]
                         relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <FaSchool className="w-32 h-32" />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white uppercase mb-4">
                                Gokhale Memorial Girls’ School
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-100 dark:bg-zinc-800 p-4 border-2 border-black dark:border-white">
                                    <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">Class 10 (CBSE)</div>
                                    <div className="text-3xl font-black text-black dark:text-white">96%</div>
                                </div>
                                <div className="bg-gray-100 dark:bg-zinc-800 p-4 border-2 border-black dark:border-white">
                                    <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">Class 12 (CBSE)</div>
                                    <div className="text-3xl font-black text-black dark:text-white">89.6%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
