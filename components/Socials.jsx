import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  { icon: <FaLinkedin />, path: "" },
];

const Socials = (props) => {
  return (
    <div className={props.containerStyle}>
      {socials.map((social, index) => (
        <Link className={props.iconStyle} href={social.path} key={index}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
