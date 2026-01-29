import {
  Box,
  Container,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
  Chip,
} from "@mui/material";
import { KeyboardArrowDown, Diamond } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  const handleWhatsAppInquiry = () => {
    const phoneNumber = "+94718820809"; // Update with your WhatsApp number
    const message = encodeURIComponent(
      "Hello! I'm interested in your premium antique collection. Can you provide more information?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleVisitShowroom = () => {
    navigate("/location");
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(0,0,0,0.92) 0%,
            rgba(0,0,0,0.82) 40%,
            rgba(0,0,0,0.55) 65%,
            rgba(0,0,0,0.15) 100%
          ),
          url("/src/assets/images/home/hero.png")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: isMobile ? "scroll" : "fixed",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes shimmer {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.85;
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* CONTENT BLOCK */}
        <Box
          sx={{
            maxWidth: "650px",
            textAlign: { xs: "center", md: "left" },
            px: { xs: 2, md: 4 },
            animation: "fadeInUp 1s ease-out 0.2s forwards",
            opacity: 0,
          }}
        >
          {/* Premium Badge */}
          <Box
            sx={{
              mb: { xs: 3, md: 4 },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              animation: "slideInLeft 0.8s ease-out 0.1s forwards",
              opacity: 0,
            }}
          >
            <Chip
              icon={<Diamond sx={{ color: "#d4af37", fontSize: 18 }} />}
              label="Premium Antique Collection"
              sx={{
                background: "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.1))",
                border: "2px solid #d4af37",
                backdropFilter: "blur(10px)",
                color: "#d4af37",
                fontWeight: 800,
                fontSize: { xs: "0.75rem", md: "0.85rem" },
                letterSpacing: "0.08em",
                px: 1.5,
                py: 0.5,
                fontFamily: '"Poppins", sans-serif',
                transition: "all 0.3s ease",
                boxShadow: "0 8px 20px rgba(212,175,55,0.3)",
                "& .MuiChip-icon": {
                  marginLeft: "8px",
                },
                "&:hover": {
                  background: "linear-gradient(135deg, rgba(212,175,55,0.3), rgba(212,175,55,0.15))",
                  boxShadow: "0 12px 35px rgba(212,175,55,0.5)",
                  transform: "translateY(-2px)",
                },
              }}
            />
          </Box>

          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="CS Antiques Logo"
            sx={{
              width: { xs: 110, sm: 130, md: 160 },
              mb: { xs: 4, md: 6 },
              filter: "drop-shadow(0 20px 40px rgba(212,175,55,0.5))",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              mx: { xs: "auto", md: 0 },
              display: { xs: "block", md: "block" },
              animation: "scaleIn 0.8s ease-out 0.2s forwards",
              opacity: 0,
              "&:hover": {
                filter: "drop-shadow(0 30px 60px rgba(212,175,55,0.8))",
                transform: "scale(1.1)",
              },
            }}
          />

          {/* Decorative Line - Premium Style */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, md: 1.5 },
              mb: { xs: 4, md: 5 },
              justifyContent: { xs: "center", md: "flex-start" },
              animation: "fadeInUp 0.8s ease-out 0.3s forwards",
              opacity: 0,
            }}
          >
            <Box
              sx={{
                width: { xs: 30, md: 50 },
                height: "2px",
                background: "linear-gradient(90deg, #d4af37, rgba(212,175,55,0.3))",
              }}
            />
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#d4af37",
                boxShadow: "0 0 25px rgba(212,175,55,0.8)",
                animation: "shimmer 2s ease-in-out infinite",
              }}
            />
            <Box
              sx={{
                width: { xs: 30, md: 50 },
                height: "2px",
                background: "linear-gradient(90deg, rgba(212,175,55,0.3), #d4af37)",
              }}
            />
          </Box>

          {/* Heading - Enhanced */}
          <Box
            component="h1"
            sx={{
              fontSize: { xs: "2.4rem", sm: "3.2rem", md: "5rem" },
              fontWeight: 800,
              color: "#eaeaea",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              mb: { xs: 3, md: 4 },
              textShadow: "0 8px 40px rgba(0,0,0,0.7), 0 0 50px rgba(212,175,55,0.4)",
              fontFamily: '"Playfair Display", serif',
              animation: "fadeInUp 1s ease-out 0.4s forwards",
              opacity: 0,
              background: "linear-gradient(135deg, #eaeaea 0%, #d4af37 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "fadeInUp 1s ease-out 0.4s forwards, shimmer 3s ease-in-out 1.5s infinite",
            }}
          >
            Bring the Unique Charm of Antiquity to Your Dream Home
          </Box>

          {/* Subtitle - Enhanced */}
          <Box
            component="p"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.3rem" },
              color: "#e8e8e8",
              mb: { xs: 5, md: 6 },
              lineHeight: 1.9,
              fontWeight: 300,
              letterSpacing: "0.02em",
              textShadow: "0 3px 15px rgba(0,0,0,0.5)",
              fontFamily: '"Poppins", sans-serif',
              animation: "fadeInUp 1s ease-out 0.5s forwards",
              opacity: 0,
            }}
          >
            Premium Antique & Reproduction Furniture Since 2020
          </Box>

          {/* CTA Buttons - Premium Styling */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, md: 3 }}
            justifyContent={{ xs: "center", md: "flex-start" }}
            sx={{
              animation: "fadeInUp 1s ease-out 0.6s forwards",
              opacity: 0,
            }}
          >
            <Button
              onClick={handleWhatsAppInquiry}
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: { xs: 5, md: 9 },
                py: 2.2,
                fontSize: { xs: "0.95rem", md: "1.1rem" },
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
                boxShadow: "0 20px 60px rgba(212,175,55,0.7), inset 0 2px 0 rgba(255,255,255,0.3)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
                color: "#000",
                fontFamily: '"Poppins", sans-serif',
                border: "none",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                  transition: "left 0.7s",
                },
                "&:hover": {
                  transform: "translateY(-7px)",
                  boxShadow: "0 30px 80px rgba(212,175,55,0.9), inset 0 2px 0 rgba(255,255,255,0.4)",
                  "::before": {
                    left: "100%",
                  },
                },
                "&:active": {
                  transform: "translateY(-3px)",
                },
              }}
            >
              Inquire on WhatsApp
            </Button>

            <Button
              onClick={handleVisitShowroom}
              variant="outlined"
              size="large"
              sx={{
                borderColor: "#d4af37",
                color: "#d4af37",
                px: { xs: 5, md: 9 },
                py: 2.2,
                fontSize: { xs: "0.95rem", md: "1.1rem" },
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                border: "2.5px solid #d4af37",
                position: "relative",
                background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.02) 100%)",
                backdropFilter: "blur(12px)",
                fontFamily: '"Poppins", sans-serif',
                boxShadow: "0 12px 40px rgba(212,175,55,0.25), inset 0 1px 0 rgba(212,175,55,0.3)",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  background: "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))",
                  opacity: 0,
                  transition: "opacity 0.4s",
                },
                "&:hover": {
                  backgroundColor: "rgba(212,175,55,0.12)",
                  color: "#fff",
                  transform: "translateY(-7px)",
                  boxShadow: "0 25px 70px rgba(212,175,55,0.6), inset 0 1px 20px rgba(212,175,55,0.2)",
                  borderColor: "#e8c547",
                  "::after": {
                    opacity: 1,
                  },
                },
                "&:active": {
                  transform: "translateY(-3px)",
                },
              }}
            >
              Visit Showroom
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* Scroll Indicator - Premium Style */}
      <Box
        onClick={scrollToNext}
        sx={{
          position: "absolute",
          bottom: { xs: 30, md: 50 },
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          cursor: "pointer",
          transition: "all 0.3s ease",
          animation: "float 3s ease-in-out infinite 2s",
          "@keyframes float": {
            "0%, 100%": {
              transform: "translateX(-50%) translateY(0)",
            },
            "50%": {
              transform: "translateX(-50%) translateY(-12px)",
            },
          },
          "&:hover": {
            transform: "translateX(-50%) scale(1.25)",
          },
        }}
      >
        <Box
          sx={{
            width: { xs: 34, md: 40 },
            height: { xs: 56, md: 66 },
            border: "3px solid #d4af37",
            borderRadius: 30,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(180deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
            boxShadow: "0 15px 50px rgba(212,175,55,0.4), inset 0 1px 0 rgba(212,175,55,0.3), inset 0 -1px 0 rgba(0,0,0,0.3)",
            backdropFilter: "blur(12px)",
            transition: "all 0.3s ease",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
              opacity: 0.6,
            },
            "&:hover": {
              background: "linear-gradient(180deg, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.08) 100%)",
              boxShadow: "0 20px 70px rgba(212,175,55,0.6), inset 0 1px 0 rgba(212,175,55,0.4), inset 0 -1px 0 rgba(0,0,0,0.4)",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              width: "4px",
              height: "12px",
              backgroundColor: "#d4af37",
              borderRadius: 4,
              animation: "scrollBounce 2.5s infinite",
              boxShadow: "0 0 15px rgba(212,175,55,0.7)",
            },
          }}
        />
      </Box>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% {
            opacity: 1;
            transform: translateY(-8px);
          }
          50% {
            opacity: 0.3;
            transform: translateY(10px);
          }
        }
      `}</style>
    </Box>
  );
}

export default Hero;
