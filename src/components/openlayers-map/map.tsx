'use client';
import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { cn } from '@/lib/utils';

const MapComponent: React.FC = () => {
  // useTheme can be used for dynamic theme switching if needed
  // const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  /* Force light theme for stats */
  const isDark = false;

  return (
    <div className="relative p-4 sm:p-6 md:p-8 bg-white dark:bg-black py-16">
      {/* Grid background */}
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:20px_20px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Title Section */}
        <div
          className="w-full bg-bg border-4 border-black dark:bg-darkBg
                            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                            transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                            transition-all duration-300 p-6 mb-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-darkText text-center">
            My Code Journey 🚀
          </h1>
        </div>

        {/* GitHub & LeetCode Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* GitHub Section */}
          <div className="border-4 border-black dark:border-darkBorder bg-white dark:bg-darkBg p-6 rounded-md shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center">
            <h2 className="text-2xl font-black mb-6 text-black dark:text-white">GitHub Contributions</h2>
            <div className="w-full flex justify-center overflow-x-auto">
              <GitHubCalendar
                username="sylvia-barick"
                colorScheme={isDark ? 'dark' : 'light'}
                blockSize={12}
                blockMargin={5}
                fontSize={16}
              />
            </div>
            <p className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-400">
              <a href="https://github.com/sylvia-barick" target="_blank" rel="noopener noreferrer" className="hover:underline">
                @sylvia-barick
              </a>
            </p>
          </div>

          {/* LeetCode Section */}
          <div className="border-4 border-black dark:border-darkBorder bg-white dark:bg-darkBg p-6 rounded-md shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center">
            <h2 className="text-2xl font-black mb-6 text-black dark:text-white">LeetCode Stats</h2>
            <div className="w-full flex justify-center">
              <img
                src={`https://leetcard.jacoblin.cool/Sylvia15?theme=${isDark ? 'dark' : 'light'}&font=Recursive&ext=heatmap`}
                alt="LeetCode Stats"
                className="max-w-full h-auto object-contain rounded-md"
              />
            </div>
            <p className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-400">
              <a href="https://leetcode.com/u/Sylvia15/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                @Sylvia15
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
