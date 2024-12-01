// -------------------------updated code start by-----------------------------------------
import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: "10rem" }}>
      <Container className="main-hero-section">
        <Box className="hero-section-left-side">
          <div className="hero-section-orange-circle" />
          {/* Wrapping Typography in motion for animation */}
          <motion.div
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "ease-in" }}
          >
            <Typography className="hero-section-left-text" variant="h3">
              Transform Your Career Journey with Us
            </Typography>
          </motion.div>
          <Box className="hero-section-left-description">
            <Typography className="hero-section-left-description-text">
              Our platform connects you with top employers, providing the
              resources and opportunities to enhance your skills, grow your
              network, and take the next step in your career.
            </Typography>
          </Box>

          <Box className="hero-section-countup-stats">
            <Box component="span">
              <CountUp
                start={1000}
                end={5000}
                duration={4}
                style={{ fontSize: "2rem", color: "#f53003" }}
              />
              <Box component="span" sx={{ fontSize: "2rem", color: "#f53003" }}>
                +
              </Box>
              <Box
                sx={{
                  fontSize: "0.8rem",
                }}
              >
                Premimum products
              </Box>
            </Box>
            <Box component="span">
              <CountUp
                start={1000}
                end={5000}
                duration={4}
                style={{ fontSize: "2rem", color: "#f53003" }}
              />
              <Box component="span" sx={{ fontSize: "2rem", color: "#f53003" }}>
                +
              </Box>
              <Box sx={{ fontSize: "0.8rem" }}>Premimum products</Box>
            </Box>
            <Box component="span">
              <CountUp
                start={1000}
                end={5000}
                duration={4}
                style={{ fontSize: "2rem", color: "#f53003" }}
              />
              <Box component="span" sx={{ fontSize: "2rem", color: "#f53003" }}>
                +
              </Box>
              <Box sx={{ fontSize: "0.8rem" }}>Premimum products</Box>
            </Box>
          </Box>
          <Box>
            <Button variant="contained" color="primary">
              Sign In
            </Button>
          </Box>
        </Box>
        <Box className="hero-section-right-side">
          <motion.div
          // initial={{ x: "7rem", opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // transition={{
          //   duration: 2,
          //   type: "ease-in",
          // }}
          >
            <img
              className="hero-section-right-side-image"
              src="1111.jpeg"
              alt="Job Portal"
            />
          </motion.div>
        </Box>
      </Container>
    </Container>
  );
};

export default Hero;

// ---------------------------end--------------------------------------

// import React from "react";
// import "./Hero.css";
// import { IoIosArrowForward } from "react-icons/io";

// const HomePage = () => {
//   return (
//     <div className="hero">
//       {/* <h1>JOBBLISS</h1> */}
//       <div className="cards-container">
//         {/* Discover Section */}
//         <div className="card-hero1">
//           <h3>Discover </h3>
//           <p>
//             Embark on your career journey with jobbliss, where opportunities
//             meet ambition.
//           </p>
//           <button>Services <IoIosArrowForward/> </button>
//         </div>

//         {/* Connect Section */}
//         <div className="card-hero1">
//           <h3>Connect</h3>
//           <p>
//             Build your professional network and unlock new career possibilities
//             in a collaborative environment.
//           </p>
//           <button>Services <IoIosArrowForward/></button>
//         </div>

//         {/* Explore Section */}
//         <div className="card-hero1">
//           <h3>Explore</h3>
//           <p>
//             Dive into a wealth of job listings while gaining insights into the
//             companies that matter.
//           </p>
//           <button>Services<IoIosArrowForward/></button>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default HomePage;
