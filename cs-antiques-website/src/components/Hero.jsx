import {
  Box,
  Container,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logo from "../assets/images/logo.png";

function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
        backgroundAttachment: "scroll",
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
            maxWidth: "720px",
            textAlign: { xs: "center", md: "left" },
            px: { xs: 2, md: 4 },
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="CS Antiques Logo"
            sx={{
              width: { xs: 110, sm: 140, md: 170 },
              mb: { xs: 3, md: 5 },
              filter: "drop-shadow(0 12px 28px rgba(212,175,55,0.35))",
            }}
          />

          {/* Heading */}
          <Box
            component="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "2.8rem", md: "4.2rem" },
              fontWeight: 700,
              color: "#d4af37",
              lineHeight: 1.1,
              letterSpacing: "0.06em",
              mb: { xs: 2, md: 3 },
            }}
          >
            Bring the Unique Charm of Antiquity to Your Dream Home
          </Box>

          {/* Subtitle */}
          <Box
            component="p"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
              color: "#eaeaea",
              mb: { xs: 4, md: 6 },
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Premium Antique & Reproduction Furniture Since 2019
          </Box>

          {/* CTA Buttons */}
          <Stack
            direction="row"
            spacing={3}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: 6,
                py: 1.6,
                boxShadow: "0 10px 30px rgba(212,175,55,0.45)",
              }}
            >
              Inquire on WhatsApp
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: "#d4af37",
                color: "#d4af37",
                px: 6,
                py: 1.6,
                "&:hover": {
                  backgroundColor: "rgba(212,175,55,0.12)",
                  borderColor: "#e8c547",
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
        sx={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
        }}
      >
        <Box
          sx={{
            width: 24,
            height: 40,
            border: "2px solid #d4af37",
            borderRadius: 20,
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 8,
              left: "50%",
              transform: "translateX(-50%)",
              width: 4,
              height: 8,
              backgroundColor: "#d4af37",
              borderRadius: 2,
              animation: "scrollDot 2s infinite",
            },
          }}
        />
      </Box>

      <style>{`
        @keyframes scrollDot {
          0% { opacity: 1; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0; transform: translateX(-50%) translateY(12px); }
        }
      `}</style>
    </Box>
  );
}

export default Hero;
