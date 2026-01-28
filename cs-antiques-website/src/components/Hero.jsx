import {
  Box,
  Container,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import logo from "../assets/images/logo.png";

function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
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
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: isMobile ? "scroll" : "fixed",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
            animation: "fadeInUp 1s ease-out",
            "@keyframes fadeInUp": {
              from: {
                opacity: 0,
                transform: "translateY(30px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="CS Antiques Logo"
            sx={{
              width: { xs: 110, sm: 130, md: 160 },
              mb: { xs: 4, md: 6 },
              filter: "drop-shadow(0 15px 35px rgba(212,175,55,0.4))",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              mx: { xs: "auto", md: 0 },
              display: { xs: "block", md: "block" },
              "&:hover": {
                filter: "drop-shadow(0 25px 50px rgba(212,175,55,0.7))",
                transform: "scale(1.05)",
              },
            }}
          />

          {/* Decorative Line */}
          <Box
            sx={{
              width: { xs: 40, md: 60 },
              height: "2px",
              background: "linear-gradient(90deg, #d4af37, transparent)",
              mb: { xs: 3, md: 4 },
              ml: { xs: "auto", md: 0 },
              mr: { xs: "auto", md: 0 },
            }}
          />

          {/* Heading */}
          <Box
            component="h1"
            sx={{
              fontSize: { xs: "2.2rem", sm: "3rem", md: "4.5rem" },
              fontWeight: 700,
              color: "#d4af37",
              lineHeight: 1.1,
              letterSpacing: "0.02em",
              mb: { xs: 3, md: 4 },
              textShadow: "0 4px 20px rgba(0,0,0,0.5)",
            }}
          >
            Bring the Unique Charm of Antiquity to Your Dream Home
          </Box>

          {/* Subtitle */}
          <Box
            component="p"
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.2rem" },
              color: "#e8e8e8",
              mb: { xs: 5, md: 6 },
              lineHeight: 1.8,
              fontWeight: 300,
              letterSpacing: "0.01em",
            }}
          >
            Premium Antique & Reproduction Furniture Since 2020
          </Box>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: { xs: 4, md: 8 },
                py: 1.8,
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                boxShadow: "0 12px 35px rgba(212,175,55,0.5)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 18px 50px rgba(212,175,55,0.7)",
                },
              }}
            >
              Inquire on WhatsApp
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "#d4af37",
                color: "#d4af37",
                px: { xs: 4, md: 8 },
                py: 1.8,
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                border: "2px solid #d4af37",
                "&:hover": {
                  backgroundColor: "#d4af37",
                  color: "#000",
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 30px rgba(212,175,55,0.4)",
                },
              }}
            >
              Visit Showroom
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* Scroll Indicator */}
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
          "&:hover": {
            transform: "translateX(-50%) scale(1.15)",
          },
        }}
      >
        <Box
          sx={{
            width: 28,
            height: 45,
            border: "2px solid #d4af37",
            borderRadius: 24,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "2px",
              height: "8px",
              backgroundColor: "#d4af37",
              borderRadius: 2,
              animation: "scrollBounce 2s infinite",
            },
          }}
        />
      </Box>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% {
            opacity: 1;
            transform: translateY(0);
          }
          50% {
            opacity: 0.3;
            transform: translateY(8px);
          }
        }
      `}</style>
    </Box>
  );
}

export default Hero;
