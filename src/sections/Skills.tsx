'use client';

import React from 'react';
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTensorflow,
  SiMysql,
  SiMongodb,
  SiFirebase,
} from 'react-icons/si';
import { FaRobot, FaBrain, FaWallet, FaNetworkWired, FaDatabase, FaCode, FaJava } from 'react-icons/fa';

const SkillsShowcase = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: FaCode,
      skills: [
        { name: 'C++', icon: SiCplusplus },
        { name: 'C', icon: SiC },
        { name: 'Python', icon: SiPython },
        { name: 'Java', icon: FaJava },
        { name: 'JavaScript', icon: SiJavascript },
      ],
    },
    {
      title: 'Frameworks & Tools',
      icon: FaNetworkWired,
      skills: [
        { name: 'React JS', icon: SiReact },
        { name: 'Next JS', icon: SiNextdotjs },
        { name: 'NLP', icon: FaBrain },
        { name: 'Machine Learning', icon: SiTensorflow },
        { name: 'Agentic AI', icon: FaRobot },
      ],
    },
    {
      title: 'Databases & Cloud',
      icon: FaDatabase,
      skills: [
        { name: 'SQL', icon: SiMysql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Firebase', icon: SiFirebase },
      ],
    },
    {
      title: 'Web3',
      icon: FaWallet,
      skills: [
        { name: 'MetaMask', icon: FaWallet },
        { name: 'Core Wallet', icon: FaWallet },
        { name: 'Freighter', icon: FaWallet },
      ],
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-black py-16 border-t-4 border-black dark:border-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-black dark:text-white uppercase tracking-tight">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-purple-100 dark:bg-zinc-900 border-4 border-black dark:border-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
            >
              <div className="flex items-center gap-3 mb-6 border-b-4 border-black dark:border-white pb-3">
                <category.icon className="w-6 h-6 text-black dark:text-white" />
                <h3 className="text-2xl font-black text-black dark:text-white uppercase">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white dark:bg-black border-2 border-black dark:border-white px-3 py-2
                               shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]
                               hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                  >
                    <skill.icon className="w-5 h-5 text-black dark:text-white" />
                    <span className="font-bold text-black dark:text-white text-sm md:text-base">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsShowcase;
