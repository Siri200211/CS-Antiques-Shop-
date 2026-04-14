import Hero from "../components/Hero";
import BrandStats from "../components/BrandStats";
import { Box, Container, Typography, Button, Stack, Grid } from "@mui/material";
import { ArrowForward, WhatsApp, LocalOffer } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleExploreCollections = () => {
    navigate("/products");
  };

  const handleWhatsAppInquiry = () => {
    const phoneNumber = "+94718820809";
    const message = encodeURIComponent(
      "Hello! I'm interested in your premium antique collection. Can you provide more information?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      <Hero />
      <BrandStats />

      {/* Special Offers Section */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background: `
            linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 50%, rgba(212, 175, 55, 0.03) 100%),
            linear-gradient(180deg, #0a0a0a 0%, #050505 100%)
          `,
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(212, 175, 55, 0.2)",
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
          {/* Content Block */}
          <Box sx={{ maxWidth: "900px", mx: "auto" }}>
            {/* Header */}
            <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
              <Typography
                sx={{
                  color: "#d4af37",
                  fontSize: { xs: "0.85rem", md: "0.95rem" },
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  mb: 2,
                  fontFamily: "'Poppins', sans-serif",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <LocalOffer sx={{ fontSize: "1.3rem" }} />
                SPECIAL OFFERS
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  color: "#eaeaea",
                  fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem" },
                  fontWeight: 800,
                  mb: 3,
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Exclusive Deals on Premium{" "}
                <Box component="span" sx={{ color: "#d4af37" }}>
                  Antiques
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "#b0b0b0",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  mb: 5,
                  lineHeight: 1.8,
                  fontFamily: "'Poppins', sans-serif",
                  maxWidth: "700px",
                  mx: "auto",
                }}
              >
                Discover our curated seasonal collection with special discounts on handpicked antique and reproduction furniture pieces. Limited time offers available now!
              </Typography>

              {/* Buttons */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" sx={{ mb: 6 }}>
                <Button
                  onClick={handleExploreCollections}
                  endIcon={<ArrowForward />}
                  sx={{
                    background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
                    color: "#0b0b0b",
                    fontWeight: 700,
                    fontSize: "1rem",
                    px: 4,
                    py: 1.8,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontFamily: "'Poppins', sans-serif",
                    borderRadius: "6px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)",
                    "&:hover": {
                      boxShadow: "0 15px 50px rgba(212, 175, 55, 0.5)",
                      transform: "translateY(-3px)",
                      background: "linear-gradient(135deg, #e8c547 0%, #f0d454 100%)",
                    },
                  }}
                >
                  View All Offers
                </Button>

                <Button
                  onClick={handleWhatsAppInquiry}
                  startIcon={<WhatsApp />}
                  sx={{
                    border: "2px solid rgba(212, 175, 55, 0.5)",
                    color: "#d4af37",
                    fontWeight: 700,
                    fontSize: "1rem",
                    px: 4,
                    py: 1.6,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontFamily: "'Poppins', sans-serif",
                    borderRadius: "6px",
                    transition: "all 0.3s ease",
                    backgroundColor: "rgba(212, 175, 55, 0.05)",
                    "&:hover": {
                      backgroundColor: "rgba(212, 175, 55, 0.15)",
                      borderColor: "#d4af37",
                      transform: "translateY(-3px)",
                      boxShadow: "0 10px 30px rgba(212, 175, 55, 0.2)",
                    },
                  }}
                >
                  Inquire Now
                </Button>
              </Stack>
            </Box>

            {/* Benefits Grid */}
            <Box
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: "12px",
                background: "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.08) 100%)",
                border: "1px solid rgba(212, 175, 55, 0.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Grid container spacing={2}>
                {[
                  { title: "Premium Selection", desc: "400+ curated pieces" },
                  { title: "Authentic Quality", desc: "Genuine antiques verified" },
                  { title: "Worldwide Shipping", desc: "Fast & secure delivery" },
                  { title: "Expert Support", desc: "24/7 customer service" },
                ].map((item, idx) => (
                  <Grid item xs={12} sm={6} md={3} key={idx}>
                    <Box
                      sx={{
                        p: 3,
                        background: "rgba(0, 0, 0, 0.3)",
                        borderRadius: "8px",
                        border: "1px solid rgba(212, 175, 55, 0.2)",
                        transition: "all 0.3s ease",
                        textAlign: "center",
                        "&:hover": {
                          borderColor: "#d4af37",
                          background: "rgba(212, 175, 55, 0.1)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#d4af37",
                          fontWeight: 700,
                          fontSize: "1rem",
                          mb: 0.5,
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        ✓ {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#a0a0a0",
                          fontSize: "0.9rem",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Home;
