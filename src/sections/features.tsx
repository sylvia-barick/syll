import {
  SiBitcoin,
  SiC,
  SiCplusplus,
  SiEthereum,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTensorflow,
  SiTypescript,
} from 'react-icons/si';

export default function Features() {
  const skills = [
    { text: 'Python', Icon: SiPython },
    { text: 'JavaScript', Icon: SiJavascript },
    { text: 'C', Icon: SiC },
    { text: 'C++', Icon: SiCplusplus },
    { text: 'HTML', Icon: SiHtml5 },
    { text: 'TypeScript', Icon: SiTypescript },
    { text: 'React.js', Icon: SiReact },
    { text: 'Next.js', Icon: SiNextdotjs },
    { text: 'Machine Learning', Icon: SiTensorflow },
    { text: 'SQL', Icon: SiMysql },
    { text: 'MongoDB', Icon: SiMongodb },
    { text: 'Firebase', Icon: SiFirebase },
    { text: 'Web3 (MetaMask)', Icon: SiEthereum },
    { text: 'Core Wallet', Icon: SiBitcoin },
    { text: 'Version Control', Icon: SiGit },
  ];

  return (
    <div>
      <section className="border-t-border dark:border-t-darkBorder dark:bg-darkBg border-t-2 bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Skills and Technologies
        </h2>

        <div className="mx-auto grid max-w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => {
            return (
              <div
                className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex flex-col gap-3 rounded-base border-2 bg-white p-5"
                key={i}
              >
                <h4 className="text-xl font-heading flex items-center gap-3">
                  <skill.Icon className="text-2xl" /> {/* Icon with a size */}
                  {skill.text} {/* Skill Name */}
                </h4>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
