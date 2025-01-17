"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { Textarea } from "@/components/ui/textarea";

const info = [
  { title: "Phone", value: "+353892200290", icon: <FaPhoneAlt /> },
  { title: "Email", value: "fernandes.aden09@gmail.com", icon: <FaEnvelope /> },
  { title: "Address", value: "Ringsend, Irishtown, Dublin", icon: <FaMapMarkerAlt /> },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col bg-[#27272c] p-10 rounded-xl" action={async(FormData) => await sendEmail(FormData)}>
              <h3 className="text-4xl mb-4 text-accent-default">Get in Touch</h3>
              <p className="text-white/60 mb-4">
                Looking to discuss a proposition, look no further. Kindly drop in your details and a message for the service you want to be rendered, and I will reach out back to you as soon as I can.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" name="firstname" />
                <Input type="lastname" placeholder="Last Name" name="lastname" />
                <Input type="Email" placeholder="Email" name="email" />
                <Input type="Phone" placeholder="Phone" name="phone" />
              </div>
                <Textarea className="h-[200px] w-full my-6" placeholder="Type your message here" name="message"/>
                <Button size="md" className="max-w-40" type="submit">
                  Submit
                </Button>
            </form>
          </div>
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] rounded-md text-accent-default flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.value}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
