"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiSvelte } from "react-icons/si";

//UI Imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:"I am a confident, reliable team player who takes accountability for the work that is assigned to me. I ensure that my tasks are completed within the deadlines allocated to me and always available to support or assist anyone if need be. I am always curious about learning new tech stacks and furthering my goals to make a meaningful impact wherever my services are rendered.",
  info: [
    { fieldName: "Name", fieldValue: "Aden Fernandes" },
    { fieldName: "Phone", fieldValue: "+353-(89)2200290" },
    { fieldName: "Residence", fieldValue: "Ireland" },
    { fieldName: "Email", fieldValue: "fernandes.aden09@gmail.com" },
    { fieldName: "Nationality", fieldValue: "Portuguese" },
    { fieldName: "Languages", fieldValue: "English, Hindi, Portuguese" },
  ],
};

const experience = {
  icon: "Need to add an icon over here",
  title: "My experience",
  description:
    "I have worked for over 4+ years with Creative Capsule Infotech building web-applications tailored to meet client demands and providing technical solutions to client problems",
  items: [
    {
      company: "Creative Capsule Infotech",
      position: "Frontend Developer",
      duration: "Jan 2021 - Dec 2024",
    },
    {
      company: "Infosys",
      position: "Trainee Engineer",
      duration: "Jan 2018 - Jan 2020",
    },
  ],
};

const education = {
  icon: "Need to add an icon over here",
  title: "My education",
  description:
    "I have obtained my Bachelor's in Information Technology from Shree Rayeshwar Institute of Engineering and Information Technology. During my schooling I built a Smart Home Automation system which was sensor based and would give a user tips on where elecetricity could be better utilised.",
  items: [
    {
      institution:
        "Shree Rayeshwar Institute of Engineering and Information Technology",
      degree: "Bachelors in Computer Science and Information Technology",
      duration: "Jun 2016 - May 2020",
    },
  ],
};

const skills = {
  title: "Skills Acquired",
  description:
    "There is a lot of data about me and I need to revisit some of these pages and update them with actual content once I complete this little side project",
  skills: [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "JS", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "TailwindCss", icon: <SiTailwindcss /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Svelte", icon: <SiSvelte /> },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto"           
        >
            <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About Me</TabsTrigger>
                </TabsList>
                <div className="min-h-[70vh] w-full">
                <TabsContent className="w-full" value="experience">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{experience.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                        <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {experience.items.map((exp, index) => {
                                    return(
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent-default">{exp.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{exp.position}</h3>
                                            <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent-default"></span>
                                                <p className="text-white/60">{exp.company}</p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </ScrollArea>
                    </div>
                </TabsContent>
                    <TabsContent className="w-full" value="education">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{education.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                        <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {education.items.map((edu, index) => {
                                    return(
                                        <li key={index} className="bg-[#232329] h-full py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent-default">{edu.duration}</span>
                                            <h3 className="text-lg leading-6 max-w-[260px] min-h-[60px] text-center lg:text-left">{edu.degree}</h3>
                                            <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent-default"></span>
                                                <p className="text-white/60 leading-6">{edu.institution}</p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </ScrollArea>
                    </div>
                    </TabsContent>
                    <TabsContent className="w-full hh-full" value="skills">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{skills.title}</h3>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl-gap-[30px] gap-4">
                                {skills.skills.map((skill, index) => {
                                    return(<li key={index}>
                                        <TooltipProvider duration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                    <div className="text-6xl group-hover:text-accent-default transition-all duration-500">        
                                                    {skill.icon}
                                                        </div>
                                                </TooltipTrigger>
                                                <TooltipContent className="capitalize">
                                                    {skill.name}
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>)
                                })}
                            </ul>
                        </div>            
                    </TabsContent>
                    <TabsContent className="w-full text-center xl:text-left" value="about">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item, index) => {
                                    return(
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}:</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    </motion.div>
  );
};

export default Resume;
