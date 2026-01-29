import { Box, Container, Typography, Grid, Card, Button, Stack } from "@mui/material";
import { WhatsApp, FavoriteBorder, Favorite } from "@mui/icons-material";
import { useEffect, useState } from "react";
import col1 from "../assets/images/products/col1.jpeg";
import col2 from "../assets/images/products/col2.jpeg";
import col3 from "../assets/images/products/col3.jpeg";
import col4 from "../assets/images/products/cal4.jpeg";
import col5 from "../assets/images/products/col5.jpeg";
import col6 from "../assets/images/products/col6.jpeg";
import col7 from "../assets/images/products/col7.jpeg";
import col8 from "../assets/images/products/col8.jpeg";

function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const animationStyles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
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
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  `;

  const products = [
    {
      id: 1,
      name: "pettagam cabinet",
      category: "Furniture",
      price: "Rs. 85,000",
      originalPrice: "Rs. 1,20,000",
      image: col1,
      description: "Exquisite mahogany cabinet with hand-carved",
      era: "1940s",
      condition: "Restored",
    },
    {
      id: 2,
      name: "Classic Cupboard",
      category: "Furniture",
      price: "Rs. 65,000",
      originalPrice: "Rs. 95,000",
      image: col2,
      description: "Exquisite mahogany cabinet with hand-carved",
      era: "1930s",
      condition: "Fully Functional",
    },
    {
      id: 3,
      name: "Vintage Brass Lamp",
      category: "Furniture",
      price: "Rs. 72,000",
      originalPrice: "Rs. 1,10,000",
      image: col3,
      description: "Art Deco brass table lamp with silk shade",
      era: "1920s",
      condition: "Excellent",
    },
    {
      id: 4,
      name: "Antique Desk Set",
      category: "Collectibles",
      price: "Rs. 48,000",
      originalPrice: "Rs. 75,000",
      image: col4,
      description: "Leather-bound desk with brass accessories",
      era: "1950s",
      condition: "Pristine",
    },
    {
      id: 5,
      name: "Lucky Horses",
      category: "Furniture",
      price: "Rs. 95,000",
      originalPrice: "Rs. 1,35,000",
      image: col5,
      description: "Premium wooden pettagam with intricate ",
      era: "1910s",
      condition: "Restored",
    },
    {
      id: 6,
      name: "Hand-made Ships",
      category: "Ship",
      price: "Rs. 28,000",
      originalPrice: "Rs. 45,000",
      image: col6,
      description: "Art Deco brass table lamp with silk shade",
      era: "1960s",
      condition: "Working",
    },
    {
      id: 7,
      name: "Hand-Painted Mirror",
      category: "Decorative",
      price: "Rs. 38,000",
      originalPrice: "Rs. 60,000",
      image: col7,
      description: "Ornate wooden frame with hand-painted ",
      era: "1930s",
      condition: "Excellent",
    },
    {
      id: 8,
      name: "Carved Wooden kannappu",
      category: "Art",
      price: "Rs. 55,000",
      originalPrice: "Rs. 85,000",
      image: col8,
      description: "Intricately carved teak panel with traditional motifs",
      era: "1920s",
      condition: "Excellent",
    },
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Box sx={{ backgroundColor: "#0b0b0b", minHeight: "100vh", width: "100vw" }}>
      <style>{animationStyles}</style>

      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
          py: { xs: 6, md: 10 },
          textAlign: "center",
          px: { xs: 2, md: 4 },
          width: "100%",
        }}
      >
        <Box
          sx={{
            animation: isVisible ? "fadeInUp 0.8s ease-out 0.1s both" : "none",
          }}
        >
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
            Curated Collection
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 800,
              color: "#d4af37",
              mb: 2,
              letterSpacing: "0.02em",
              background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Premium Antiques
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              color: "#b0b0b0",
              maxWidth: "700px",
              mx: "auto",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Handpicked treasures and timeless pieces for discerning collectors
          </Typography>
        </Box>
      </Box>

      {/* Products Grid */}
      <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 1.5, md: 4 }, width: "100%" }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ justifyContent: "center", alignItems: "stretch" }}>
            {products.map((product, index) => (
              <Grid item xs={6} sm={6} md={3} key={product.id} sx={{ height: "600px", minHeight: "600px", maxHeight: "600px" }}>
                <Card
                  sx={{
                    background: "linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.03) 100%)",
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    height: "100%",
                    minHeight: "600px",
                    maxHeight: "600px",
                    width: "100%",
                    transition: "all 0.4s ease",
                    animation: isVisible ? `fadeInUp 0.8s ease-out ${0.1 + index * 0.08}s both` : "none",
                    display: "flex",
                    flexDirection: "column",
                    flex: "0 0 600px",
                    "&:hover": {
                      borderColor: "#d4af37",
                      boxShadow: "0 30px 80px rgba(212, 175, 55, 0.25)",
                      transform: "translateY(-12px)",
                    },
                  }}
                >
                  {/* Image Container */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "300px",
                      minHeight: "300px",
                      maxHeight: "300px",
                      overflow: "hidden",
                      backgroundColor: "rgba(212, 175, 55, 0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "0 0 300px",
                    }}
                  >
                    <Box
                      component="img"
                      src={product.image}
                      alt={product.name}
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        transition: "all 0.4s ease",
                        "&:hover": {
                          transform: "scale(1.08)",
                        },
                      }}
                    />

                    {/* Overlay */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(to top, rgba(11, 11, 11, 0.8), transparent)",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        p: 1.5,
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            color: "#d4af37",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          {product.era}
                        </Typography>
                      </Box>
                      <Box
                        onClick={() => toggleFavorite(product.id)}
                        sx={{
                          cursor: "pointer",
                          color: favorites[product.id] ? "#ff6b6b" : "#d4af37",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.2)",
                          },
                        }}
                      >
                        {favorites[product.id] ? <Favorite /> : <FavoriteBorder />}
                      </Box>
                    </Box>

                    {/* Badge */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        backgroundColor: "#d4af37",
                        color: "#0b0b0b",
                        px: 1.2,
                        py: 0.5,
                        borderRadius: "20px",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontFamily: "'Poppins', sans-serif",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {product.condition}
                    </Box>
                  </Box>

                  {/* Content */}
                  <Box
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: "300px",
                      width: "250px",
                      maxHeight: "300px",
                      overflow: "hidden",
                      flex: "0 0 300px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        color: "#d4af37",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        height: "16px",
                        overflow: "hidden",
                        lineHeight: 1,
                      }}
                    >
                      {product.category}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#eaeaea",
                        fontFamily: "'Playfair Display', serif",
                        height: "44px",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        lineHeight: 1.1,
                      }}
                    >
                      {product.name}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        color: "#b0b0b0",
                        lineHeight: 1.4,
                        fontFamily: "'Poppins', sans-serif",
                        height: "40px",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        fontWeight: 400,
                      }}
                    >
                      {product.description}
                    </Typography>

                    {/* Price Section */}
                    <Box sx={{ height: "40px", display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "#d4af37",
                          fontFamily: "'Playfair Display', serif",
                        }}
                      >
                        {product.price}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          color: "#707070",
                          textDecoration: "line-through",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {product.originalPrice}
                      </Typography>
                    </Box>

                    {/* Button */}
                    <Stack spacing={0} sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
                      <Button
                        fullWidth
                        variant="contained"
                        href={`https://wa.me/94718820809?text=I'm%20interested%20in%20${product.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<WhatsApp />}
                        sx={{
                          background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
                          color: "#0b0b0b",
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          fontFamily: "'Poppins', sans-serif",
                          py: 1,
                          transition: "all 0.3s ease",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          "&:hover": {
                            transform: "translateY(-3px)",
                            boxShadow: "0 15px 40px rgba(212, 175, 55, 0.5)",
                          },
                        }}
                      >
                        Inquire Now
                      </Button>
                    </Stack>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Products;
