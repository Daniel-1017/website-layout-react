const navLinks = [
  {
    id: 1,
    to: "/home",
    linkText: "Home",
  },
  {
    id: 2,
    to: "/about-me",
    linkText: "About",
  },
  {
    id: 3,
    to: "/portfolio",
    linkText: "Portfolio",
  },
  {
    id: 4,
    to: "/contact-me",
    linkText: "Contact",
  },
  {
    id: 5,
    to: "/posts",
    linkText: "Posts",
  },
];

const NavLinks = () => {
  return {
    navLinks,
  };
};

export default NavLinks;
