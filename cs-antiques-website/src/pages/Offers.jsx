import { Box, Container, Typography, Grid, Card, Button, Stack, Chip } from "@mui/material";
import { ContentCopy, LocalOffer, WhatsApp } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { apiUrl } from "../config/api";

function Offers() {
  const [isVisible, setIsVisible] = useState(false);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState({});

  useEffect(() => {
    setIsVisible(true);
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await fetch(apiUrl("/api/offers"));
      if (response.ok) {
        const data = await response.json();
        setOffers(data.data || []);
      } else {
        console.error("API Error:", response.status);
        setOffers([]);
      }
    } catch (error) {
      console.error("Error fetching offers:", error);
      setOffers([]);
    } finally {
      setLoading(false);
    }
  };

  const copyPromoCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => setCopied({ ...copied, [id]: false }), 2000);
  };

  const getDaysLeft = (validUntil) => {
    const now = new Date();
    const until = new Date(validUntil);
    const days = Math.ceil((until - now) / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0b0b0b",
        minHeight: "100vh",
        width: "100%",
        background: `
          linear-gradient(135deg, rgba(0, 0, 0, 0.92) 0%, rgba(20, 15, 10, 0.9) 50%, rgba(0, 0, 0, 0.92) 100%),
          radial-gradient(circle at top right, rgba(212, 175, 55, 0.08) 0%, transparent 50%)
        `,
        py: { xs: 6, md: 10 },
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          px: { xs: 2, md: 4 },
          mb: { xs: 6, md: 10 },
        }}
      >
        <Box
          sx={{
            animation: isVisible ? "fadeInUp 0.8s ease-out 0.1s both" : "none",
            "@keyframes fadeInUp": {
              from: { opacity: 0, transform: "translateY(30px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <LocalOffer
            sx={{
              fontSize: { xs: "3rem", md: "4rem" },
              color: "#d4af37",
              mb: 2,
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "0.85rem", md: "1rem" },
              fontWeight: 700,
              color: "#d4af37",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              mb: 2,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Exclusive Deals
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              fontWeight: 800,
              background: "linear-gradient(135deg, #d4af37 0%, #e8c547 50%, #d4af37 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Special Offers & Promotions
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              color: "#b0b0b0",
              maxWidth: "600px",
              mx: "auto",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Limited-time promotions on curated antique pieces
          </Typography>
        </Box>
      </Box>

      {/* Offers Grid */}
      <Container maxWidth="lg">
        {loading ? (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography sx={{ color: "#d4af37", fontSize: "1.2rem", fontFamily: "'Playfair Display', serif" }}>
              Loading Offers...
            </Typography>
          </Box>
        ) : offers.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 12 }}>
            <Typography sx={{ color: "#d4af37", fontSize: "1.5rem", fontFamily: "'Playfair Display', serif", mb: 2 }}>
              No Active Offers
            </Typography>
            <Typography sx={{ color: "#707070", fontFamily: "'Poppins', sans-serif" }}>
              Check back soon for exclusive deals!
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={{ xs: 2.5, sm: 3, md: 4 }}>
            {offers.map((offer, index) => (
              <Grid item xs={12} sm={6} md={4} key={offer.id}>
                <Card
                  sx={{
                    background: "linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(212, 175, 55, 0.04) 100%)",
                    border: "1.5px solid rgba(212, 175, 55, 0.25)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.4s ease",
                    animation: isVisible ? `fadeInUp 0.8s ease-out ${0.1 + index * 0.08}s both` : "none",
                    "@keyframes fadeInUp": {
                      from: { opacity: 0, transform: "translateY(30px)" },
                      to: { opacity: 1, transform: "translateY(0)" },
                    },
                    "&:hover": {
                      borderColor: "#d4af37",
                      transform: "translateY(-12px)",
                      boxShadow: "0 30px 80px rgba(212, 175, 55, 0.2)",
                    },
                  }}
                >
                  {/* Image Container */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      paddingBottom: "66.66%",
                      overflow: "hidden",
                      backgroundColor: "rgba(212, 175, 55, 0.08)",
                    }}
                  >
                    <Box
                      component="img"
                      src={offer.imageUrl?.startsWith('/') ? apiUrl(offer.imageUrl) : offer.imageUrl}
                      alt={offer.title}
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        transition: "transform 0.4s ease",
                      }}
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23222' width='400' height='300'/%3E%3Ctext x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23d4af37' font-size='24' font-family='Playfair Display'%3EImage Not Available%3C/text%3E%3C/svg%3E";
                      }}
                    />

                    {/* Discount Badge */}
                    {offer.discount && (
                      <Chip
                        label={`${offer.discount}% OFF`}
                        sx={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          backgroundColor: "#ff6b6b",
                          color: "#fff",
                          fontSize: "0.9rem",
                          fontWeight: 700,
                          fontFamily: "'Poppins', sans-serif",
                          zIndex: 2,
                        }}
                      />
                    )}

                    {/* Days Left Badge */}
                    {getDaysLeft(offer.validUntil) > 0 && (
                      <Chip
                        label={`${getDaysLeft(offer.validUntil)} days left`}
                        size="small"
                        sx={{
                          position: "absolute",
                          bottom: 12,
                          left: 12,
                          backgroundColor: "rgba(212, 175, 55, 0.15)",
                          color: "#d4af37",
                          border: "1px solid rgba(212, 175, 55, 0.4)",
                          fontSize: "0.75rem",
                          fontFamily: "'Poppins', sans-serif",
                          zIndex: 2,
                        }}
                      />
                    )}
                  </Box>

                  {/* Content */}
                  <Box sx={{ p: { xs: 1.5, md: 2 }, flex: 1, display: "flex", flexDirection: "column" }}>
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: 800,
                        color: "#d4af37",
                        fontFamily: "'Playfair Display', serif",
                        mb: 1,
                        lineHeight: 1.2,
                      }}
                    >
                      {offer.title}
                    </Typography>

                    {offer.description && (
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          color: "#a0a0a0",
                          fontFamily: "'Poppins', sans-serif",
                          mb: 2,
                          lineHeight: 1.5,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {offer.description}
                      </Typography>
                    )}

                    {/* Promo Code */}
                    {offer.promoCode && (
                      <Box
                        sx={{
                          backgroundColor: "rgba(212, 175, 55, 0.1)",
                          border: "1px dashed rgba(212, 175, 55, 0.3)",
                          borderRadius: "8px",
                          p: 1,
                          mb: 2,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "0.95rem",
                            fontWeight: 700,
                            color: "#d4af37",
                            fontFamily: "'Playfair Display', serif",
                            letterSpacing: "0.1em",
                          }}
                        >
                          {offer.promoCode}
                        </Typography>
                        <Button
                          size="small"
                          onClick={() => copyPromoCode(offer.promoCode, offer.id)}
                          sx={{
                            minWidth: "auto",
                            p: 0.5,
                            color: "#d4af37",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              backgroundColor: "rgba(212, 175, 55, 0.1)",
                            },
                          }}
                        >
                          <ContentCopy sx={{ fontSize: "0.9rem" }} />
                        </Button>
                      </Box>
                    )}

                    {copied[offer.id] && (
                      <Typography sx={{ fontSize: "0.75rem", color: "#4caf50", mb: 1, fontFamily: "'Poppins', sans-serif" }}>
                        ✓ Copied!
                      </Typography>
                    )}

                    {/* Buttons */}
                    <Stack spacing={1} sx={{ mt: "auto" }}>
                      <Button
                        fullWidth
                        href="https://wa.me/94718820809"
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<WhatsApp />}
                        sx={{
                          backgroundColor: "#25D366",
                          color: "#fff",
                          fontWeight: 700,
                          fontFamily: "'Poppins', sans-serif",
                          borderRadius: "8px",
                          "&:hover": {
                            backgroundColor: "#20c656",
                            transform: "translateY(-2px)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        Chat Now
                      </Button>
                      <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                          borderColor: "rgba(212, 175, 55, 0.3)",
                          color: "#d4af37",
                          fontWeight: 700,
                          fontFamily: "'Poppins', sans-serif",
                          borderRadius: "8px",
                          "&:hover": {
                            backgroundColor: "rgba(212, 175, 55, 0.08)",
                            borderColor: "#d4af37",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        Learn More
                      </Button>
                    </Stack>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default Offers;
