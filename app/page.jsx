import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"

const Home = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between xl:pt-8 xl:pb-24 xl:flex-row">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent-default">Aden Fernandes</span></h1>
            <p className="text-white/80 max-w-[500px] mb-9">With over 4 years of experience, I  pride myself on creating <span className="text-nowrap text-accent-default">mobile-first</span> and <span className="text-accent-default">responsive</span> <span className="text-nowrap">web-applications</span>. I also ensure that these implementations are subjected to various test cases and adhere to the proper SEO standards.</p>
                      {/* Button and Socias */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/pdfs/Aden-Fernandes-CV.pdf" download="Aden-Fernandes-CV">    
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>
                  Download CV
                </span>
              <FiDownload />
              </Button>
              </a>
            <div>
              <Socials containerStyle="flex gap-6" iconStyle="w-9 h-9 border border-accent flex justify-center items-center text-accent rounded-full text-base hover:bg-primary hover:text-accent-default hover-transition-all duration-500"/>
            </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0"><Photo /></div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
