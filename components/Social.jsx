"use client";

import Link from "next/link";

import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const socials = [
  {
        icon: <FaGithub />,
        path: "https://github.com/PiyumiKithsiri"
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/piyumi-kithsiri-86b281277/"
    },  
    {
        icon: <FaFacebook />,
        path: "https://www.facebook.com/profile.php?id=100089442646384"
    },  
    {
        icon: <FaTwitter />,
        path: "https://x.com/PiyumiRandi"
    },    
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
