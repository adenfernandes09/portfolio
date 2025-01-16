import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/adenfernandes09",
  },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/adenfernandes/" },
];

const Socials = (props) => {
  return (
    <div className={props.containerStyle}>
      {socials.map((social, index) => (
        <a className={props.iconStyle} href={social.path} key={index} target="_blank">
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
