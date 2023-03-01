import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Divider, HStack, List } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: techwithalex@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/madualex",
  },
  {
    icon: faLinkedin,
    url: "https://linkedin.com//in/alex-ogochukwumadu/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@madualex",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/21238594/madu-alex",
  },
];

const Header = () => {

  const headerRef = useRef(null);
  
  useEffect(() => {
    let position = window.scrollY;
    
    const handleScroll = () => {    
      const headerEl = headerRef.current;
      if (!headerEl) return;

      const moving = window.scrollY;
      
      if (position > moving) {
        headerEl.style.transform = "translateY(0)";
      } else {
        headerEl.style.transform = "translateY(-200px)";
      }
      position = moving;
    };

    window.addEventListener('scroll', handleScroll);
    return (() => {
      window.removeEventListener("scroll", handleScroll)
    })
  }, [])

  // const [position, setPosition] = useState(window.scrollY)
  // const [visible, setVisible] = useState(true)
  // useEffect(() => {
  //   const handleScroll = () => {
  //     let moving = window.pageYOffset

  //     setVisible(position > moving);
  //     setPosition(moving)
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return (() => {
  //     window.removeEventListener("scroll", handleScroll);
  //   })
  // })

  // const cls = visible ? "visible" : "hidden";


  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav className= "nav-links">
            <HStack spacing={6}>
              <a href="mailto: techwithalex@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
              <a href="https://github.com/madualex" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://linkedin.com/in/alex-ogochukwumadu/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://medium.com/@madualex">
                <FontAwesomeIcon icon={faMedium} size="2x" />
              </a>
              <a href="https://stackoverflow.com/users/21238594/madu-alex" target="_blank">
                <FontAwesomeIcon icon={faStackOverflow} size="2x" />
              </a>
            </HStack>
          </nav>

          <nav>
            <HStack spacing={8}>
              <a href="#projects" onClick={() => handleClick("projects")}>Projects</a>
              <a href="#contact-me" onClick={() => handleClick("contactme")} >Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
