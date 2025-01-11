"use client";

import Link from "next/link";
import { BsArrowDownRight, BsArrowRight } from "react-icons/bs";
import { motion as motionComponent } from "framer-motion";

const services = [
  {
    num: "01",
    type: "Web Development",
    href: "",
    description:
      "There will be a lot of lorem ipsum or just some resume related content over here. Keep an eye for this section as this content will change at some point",
  },
  {
    num: "02",
    type: "UI/UX",
    href: "",
    description:
      "There will be a lot of lorem ipsum or just some resume related content over here. Keep an eye for this section as this content will change at some point",
  },
  {
    num: "03",
    type: "Responsive Design",
    href: "",
    description:
      "There will be a lot of lorem ipsum or just some resume related content over here. Keep an eye for this section as this content will change at some point",
  },
  {
    num: "04",
    type: "Frameworks something",
    href: "",
    description:
      "There will be a lot of lorem ipsum or just some resume related content over here. Keep an eye for this section as this content will change at some point",
  },
];

const About = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      <div className="container mx-auto">
        <motionComponent.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="flex justify-between items-center w-full">
                  <p className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                    {service.num}
                  </p>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-default transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-default transition-all duration-500">
                  {service.type}
                </h2>
                <p className="text-white/70">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motionComponent.div>
      </div>
    </section>
  );
};

export default About;
