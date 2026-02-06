import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { TrendingUp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function BrandStats() {
  const navigate = useNavigate();
  const stats = [
    { 
      value: "2019", 
      label: "Established",
      description: "Since our inception"
    },
    { 
      value: "400+", 
      label: "Pettagams",
      description: "Carefully curated"
    },
    { 
      value: "200+", 
      label: "Gramophones",
      description: "Vintage collections"
    },
    { 
      value: "700+", 
      label: "Happy Customers",
      description: "Worldwide satisfaction"
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        background: `
          radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
          linear-gradient(180deg, #050505 0%, #0a0a0a 100%)
        `,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
        },
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
      `}</style>
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Heading */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 10, md: 14 },
            animation: "fadeInDown 0.8s ease-out 0.2s forwards",
            opacity: 0,
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "#d4af37",
              letterSpacing: "0.35em",
              fontWeight: 800,
              fontSize: { xs: "0.75rem", md: "0.85rem" },
              mb: 2,
              display: "block",
              fontFamily: '"Poppins", sans-serif',
              textTransform: "uppercase",
              animation: "fadeInDown 0.6s ease-out 0.1s forwards",
              opacity: 0,
            }}
          >
            OUR LEGACY
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "#eaeaea",
              fontWeight: 800,
              mb: 4,
              fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4.2rem" },
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              fontFamily: '"Playfair Display", serif',
              background: "linear-gradient(135deg, #eaeaea 0%, #d4af37 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "fadeInUp 0.8s ease-out 0.2s forwards, shimmer 3s ease-in-out 1s infinite",
              opacity: 0,
            }}
          >
            A Trusted Name in Antique Excellence
          </Typography>

          <Box
            sx={{
              width: "100px",
              height: "3px",
              background: "linear-gradient(90deg, #d4af37, rgba(212,175,55,0.3))",
              mx: "auto",
              mb: 5,
              borderRadius: "2px",
              animation: "scaleIn 0.8s ease-out 0.3s forwards",
              opacity: 0,
            }}
          />

          <Typography
            sx={{
              color: "#b0b0b0",
              fontSize: { xs: "0.98rem", md: "1.15rem" },
              letterSpacing: "0.01em",
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.9,
              fontWeight: 400,
              fontFamily: '"Poppins", sans-serif',
              animation: "fadeInUp 0.8s ease-out 0.4s forwards",
              opacity: 0,
            }}
          >
            Serving passionate collectors and antique enthusiasts across Sri Lanka with uncompromising quality and authentic pieces since 2019
          </Typography>
        </Box>

        {/* Stats Grid */}
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          justifyContent="center"
          sx={{ mb: { xs: 10, md: 14 } }}
        >
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  p: { xs: 4, md: 5 },
                  border: "2px solid rgba(212,175,55,0.2)",
                  borderRadius: "12px",
                  background: `
                    linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0) 50%),
                    radial-gradient(circle at top right, rgba(212, 175, 55, 0.06) 0%, transparent 50%),
                    rgba(15, 15, 15, 0.8)
                  `,
                  backdropFilter: "blur(15px)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  animation: `scaleIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.5 + index * 0.1}s forwards`,
                  opacity: 0,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.5s ease",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(circle at center, rgba(212, 175, 55, 0.02) 0%, transparent 70%)",
                    pointerEvents: "none",
                  },
                  "&:hover": {
                    transform: "translateY(-18px)",
                    borderColor: "#d4af37",
                    boxShadow: "0 40px 100px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
                    background: `
                      linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0) 50%),
                      radial-gradient(circle at top right, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                      rgba(25, 25, 25, 0.95)
                    `,
                    "&::before": {
                      transform: "scaleX(1)",
                    },
                  },
                }}
              >
                {/* Value */}
                <Typography
                  sx={{
                    fontSize: { xs: "2.8rem", md: "3.5rem" },
                    fontWeight: 800,
                    color: "#d4af37",
                    mb: 1.5,
                    letterSpacing: "0.02em",
                    textShadow: "0 6px 20px rgba(212, 175, 55, 0.4)",
                    fontFamily: '"Playfair Display", serif',
                  }}
                >
                  {stat.value}
                </Typography>

                {/* Label */}
                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#e0e0e0",
                    fontWeight: 800,
                    mb: 1.5,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  {stat.label}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: { xs: "0.8rem", md: "0.85rem" },
                    color: "#a8a8a8",
                    fontWeight: 400,
                    letterSpacing: "0.05em",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  {stat.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box
          sx={{
            p: { xs: 5, md: 6 },
            backgroundColor: "rgba(212, 175, 55, 0.08)",
            border: "2px solid rgba(212, 175, 55, 0.2)",
            borderRadius: "16px",
            textAlign: "center",
            backdropFilter: "blur(12px)",
            transition: "all 0.4s ease",
            animation: "fadeInUp 0.8s ease-out 0.6s forwards",
            opacity: 0,
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
              opacity: 0.5,
            },
            "&:hover": {
              borderColor: "#d4af37",
              boxShadow: "0 20px 60px rgba(212, 175, 55, 0.25)",
              background: "linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.04) 100%)",
            },
          }}
        >
          <Typography
            sx={{
              color: "#d4af37",
              fontSize: { xs: "0.9rem", md: "1rem" },
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 800,
              mb: 3,
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            Join Our Community of Collectors
          </Typography>

          <Button
            onClick={() => navigate("/location")}
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
              color: "#0b0b0b",
              px: { xs: 4, md: 6 },
              py: 1.5,
              fontWeight: 800,
              letterSpacing: "0.11em",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              display: "inline-block",
              mt: 2,
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              textTransform: "uppercase",
              position: "relative",
              overflow: "hidden",
              border: "none",
              fontFamily: '"Poppins", sans-serif',
              borderRadius: "8px",
              boxShadow: "0 12px 35px rgba(212,175,55,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                transition: "left 0.6s",
              },
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 18px 50px rgba(212,175,55,0.7), inset 0 1px 0 rgba(255,255,255,0.3)",
                "::before": {
                  left: "100%",
                },
              },
              "&:active": {
                transform: "translateY(-2px)",
              },
            }}
          >
            Visit Our Showrooms
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default BrandStats;
