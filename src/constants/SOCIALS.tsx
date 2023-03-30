import { ReactElement } from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

type Social = {
  id: number;
  title: string;
  icon: ReactElement;
  link: string;
};

const SIZE = 35;
const SOCIALS: Social[] = [
  {
    id: 1,
    title: 'LinkedIn',
    icon: <FaLinkedin size={SIZE} />,
    link: 'https://www.linkedin.com/in/patrickholderness/',
  },
  {
    id: 2,
    title: 'Email',
    icon: <HiOutlineMail size={SIZE} />,
    link: 'mailto:patrickholderness@gmail.com',
  },

  {
    id: 3,
    title: 'Github',
    icon: <FaGithub size={SIZE} />,
    link: 'https://github.com/patrickholderness',
  },

  {
  id: 4,
  title: 'WhatsApp',
  icon: <FaWhatsapp size={SIZE} />,
  link: 'https://api.whatsapp.com/send?phone=491779128908&text=Hello',
},
];

export default SOCIALS;