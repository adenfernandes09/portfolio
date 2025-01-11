"use client";
import CountUp from "react-countup";

const metrics = [
  { num: 10, type: "Code Completions" },
  { num: 12, type: "Projects Completed" },
  { num: 40, type: "Code Commits" },
  { num: 24, type: "Languages known" },
];
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:py-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {metrics.map((metric, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={metric.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    metric.type.length > 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {metric.type}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;