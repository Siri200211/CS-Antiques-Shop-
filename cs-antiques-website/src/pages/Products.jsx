import { Box, Container, Typography, Grid, Card, Button, Stack } from "@mui/material";
import { WhatsApp, FavoriteBorder, Favorite } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../config/api";
import { resolveProductImage, placeholderProductImage } from "../utils/productImages";


function Products() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [favorites, setFavorites] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(apiUrl("/api/products"));
      if (response.ok) {
        const data = await response.json();
        const productsData = data.data || data || [];
        console.log("🔥 Products page - Fetched products:", productsData.map(p => ({
          id: p.id,
          name: p.name,
          mainImage: p.mainImage,
          resolvedImage: resolveProductImage(p.mainImage),
        })));
        setProducts(productsData);
      } else {
        console.error("API Error:", response.status);
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

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

    @keyframes glowPulse {
      0%, 100% {
        box-shadow: 0 0 20px rgba(212, 175, 55, 0.4), inset 0 0 20px rgba(212, 175, 55, 0.1);
      }
      50% {
        box-shadow: 0 0 40px rgba(212, 175, 55, 0.6), inset 0 0 30px rgba(212, 175, 55, 0.2);
      }
    }

    @keyframes shimmerWave {
      0% {
        background-position: -1000px center;
      }
      100% {
        background-position: 1000px center;
      }
    }

    @keyframes borderGlow {
      0%, 100% {
        border-color: rgba(212, 175, 55, 0.3);
      }
      50% {
        border-color: rgba(212, 175, 55, 0.6);
      }
    }

    @keyframes floatSmall {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-15px);
      }
    }
  `;

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getProductImage = (product) => {
    return resolveProductImage(product.mainImage);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0b0b0b",
        minHeight: "100vh",
        width: "100vw",
        background: `
          linear-gradient(135deg, rgba(0, 0, 0, 0.92) 0%, rgba(20, 15, 10, 0.9) 50%, rgba(0, 0, 0, 0.92) 100%),
          url(${resolveProductImage("/images/products/col9.jpeg")}) center/cover no-repeat fixed
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            repeating-linear-gradient(
              90deg,
              rgba(212, 175, 55, 0.02) 0px,
              rgba(212, 175, 55, 0.02) 2px,
              transparent 2px,
              transparent 4px
            ),
            repeating-linear-gradient(
              0deg,
              rgba(212, 175, 55, 0.01) 0px,
              rgba(212, 175, 55, 0.01) 2px,
              transparent 2px,
              transparent 4px
            )
          `,
          pointerEvents: "none",
        }
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <style>{animationStyles}</style>

        {/* Hero Section */}
        <Box
          sx={{
            background: `
            linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.08) 50%, rgba(212, 175, 55, 0) 100%),
            radial-gradient(circle at 30% 60%, rgba(212, 175, 55, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 70% 40%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)
          `,
            backdropFilter: "blur(12px)",
            py: { xs: 6, md: 10 },
            textAlign: "center",
            px: { xs: 2, md: 4 },
            width: "100%",
            borderBottom: "2px solid rgba(212, 175, 55, 0.2)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
              opacity: 0.6,
            },
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at center, rgba(212, 175, 55, 0.02) 0%, transparent 70%)",
              pointerEvents: "none",
            },
          }}
        >
          <Box
            sx={{
              animation: isVisible ? "fadeInUp 0.8s ease-out 0.1s both" : "none",
              position: "relative",
              zIndex: 1,
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
                animation: "floatSmall 4s ease-in-out infinite",
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
                background: "linear-gradient(135deg, #d4af37 0%, #e8c547 50%, #d4af37 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "'Playfair Display', serif",
                textShadow: "0 20px 60px rgba(212,175,55,0.3), 0 0 80px rgba(212,175,55,0.2)",
                filter: "drop-shadow(0 10px 30px rgba(212,175,55,0.25))",
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
        <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 1.5, md: 4 }, width: "100%", background: "radial-gradient(circle at center, rgba(212, 175, 55, 0.03) 0%, transparent 100%)" }}>
          {loading ? (
            <Container maxWidth="xl" sx={{ textAlign: "center", py: 8 }}>
              <Typography sx={{ color: "#d4af37", fontSize: "1.5rem", fontFamily: "'Playfair Display', serif" }}>
                Loading Products...
              </Typography>
            </Container>
          ) : products.length === 0 ? (
            <Container maxWidth="xl" sx={{ textAlign: "center", py: 8 }}>
              <Typography sx={{ color: "#d4af37", fontSize: "1.5rem", fontFamily: "'Playfair Display', serif" }}>
                No Products Available
              </Typography>
            </Container>
          ) : (
          <Container
            maxWidth="xl"
            sx={{
              px: { xs: 0, sm: 2, md: 3 }   // remove side padding only in mobile
            }}
          >

            <Grid
              container
              spacing={{ xs: 1, sm: 3, md: 4 }}   // smaller gutter only in mobile
              sx={{
                justifyContent: "center",
                alignItems: "stretch",
              }}
            >
              {products.map((product, index) => (
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={3}
                  key={product.id}
                  sx={{
                    height: { xs: "auto", md: "520px" },
                    minHeight: { xs: "auto", md: "520px" },
                    maxHeight: { xs: "none", md: "520px" },

                    // ✅ HARD FORCE 2 PER ROW MOBILE
                    display: "flex",
                  }}
                >

                  <Card
                    onClick={() => navigate(`/product/${product.id}`)}
                    sx={{
                      background: `
                      linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.06) 100%),
                      radial-gradient(circle at top left, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at bottom right, rgba(212, 175, 55, 0.04) 0%, transparent 50%)
                    `,
                      border: "1.5px solid rgba(212, 175, 55, 0.25)",
                      backdropFilter: "blur(12px)",
                      borderRadius: "16px",
                      overflow: "hidden",
                      height: { xs: "auto", md: "auto" },
                      width: {
                        xs: "100%",   
                        sm: "95%",
                        md: "100%",
                      },
                      mx: "auto",   
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      animation: isVisible ? `fadeInUp 0.8s ease-out ${0.1 + index * 0.08}s both` : "none",
                      display: "flex",
                      flexDirection: "column",
                      cursor: "pointer",
                      boxShadow: "0 25px 70px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(212, 175, 55, 0.15), 0 0 30px rgba(212, 175, 55, 0.15)",
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      },
                      "&:hover": {
                        borderColor: "#d4af37",
                        boxShadow: "0 50px 120px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(212, 175, 55, 0.25), 0 0 60px rgba(212, 175, 55, 0.3)",
                        transform: "translateY(-16px)",
                        background: `
                        linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0.08) 100%),
                        radial-gradient(circle at top left, rgba(212, 175, 55, 0.12) 0%, transparent 50%),
                        radial-gradient(circle at bottom right, rgba(212, 175, 55, 0.06) 0%, transparent 50%)
                      `,
                        "&::before": {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    {/* Image Container */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        maxWidth: { xs: "170px", md: "280px" },
                        mx: "auto",
                        overflow: "hidden",
                        backgroundColor: "rgba(212, 175, 55, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flex: { xs: "0 0 160px", md: "0 0 300px" },
                        borderBottom: "1px solid rgba(212, 175, 55, 0.15)",
                        background: `
                        linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.02) 100%),
                        radial-gradient(circle at center, rgba(212, 175, 55, 0.08) 0%, transparent 50%)
                      `,
                      }}
                    >
                      <Box
                        component="img"
                        src={getProductImage(product)}
                        alt={product.name}
                        onError={(e) => {
                          const fallback = placeholderProductImage;
                          if (!e.currentTarget.src.startsWith("data:image/svg+xml")) {
                            e.currentTarget.src = fallback;
                          }
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
                        p: { xs: 1.2, md: 2 },
                        display: "flex",
                        flexDirection: "column",
                        width: { xs: "150px", md: "250px" },
                        overflow: "hidden",
                        flex: 1,
                      }}
                    >
                      {product.category && (
                        <Typography
                          sx={{
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            color: "#d4af37",
                            textTransform: "uppercase",
                            letterSpacing: "0.12em",
                            fontFamily: "'Poppins', sans-serif",
                            mb: 0.5,
                            textShadow: "0 2px 8px rgba(212, 175, 55, 0.2)",
                          }}
                        >
                          {product.category}
                        </Typography>
                      )}

                      <Typography
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 800,
                          color: "#eaeaea",
                          fontFamily: "'Playfair Display', serif",
                          height: "44px",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          lineHeight: 1.1,
                          mb: 1.5,
                          textShadow: "0 4px 12px rgba(0, 0, 0, 0.4), 0 0 8px rgba(212, 175, 55, 0.2)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {product.name}
                      </Typography>

                      {/* Description */}
                      {product.description && (
                        <Typography
                          sx={{
                            fontSize: { xs: "0.7rem", md: "0.8rem" },
                            color: "#a0a0a0",
                            fontFamily: "'Poppins', sans-serif",
                            display: { xs: "none", md: "-webkit-box" },
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            lineHeight: 1.3,
                            mb: 1,
                            height: { xs: "0px", md: "32px" },
                          }}
                        >
                          {product.description}
                        </Typography>
                      )}

                      {/* Price Section */}
                      <Box sx={{ height: "40px", display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                        <Typography
                          sx={{
                            fontSize: "1.3rem",
                            fontWeight: 900,
                            background: "linear-gradient(135deg, #e1b625 0%, #d4af37 100%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontFamily: "'Playfair Display', serif",
                            textShadow: "0 4px 12px rgba(212, 175, 55, 0.2)",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {product.price}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.85rem",
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
                          href={`https://wa.me/94718820809?text=Hello!%20I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}%20priced%20at%20${encodeURIComponent(product.price)}.%20Please%20check%20the%20full%20details:%20${encodeURIComponent(window.location.origin)}/product/${product.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<WhatsApp />}
                          sx={{
                            background: "linear-gradient(135deg, #d4af37 0%, #e8c547 50%, #d4af37 100%)",
                            color: "#0b0b0b",
                            fontWeight: 700,
                            fontSize: "0.8rem",
                            fontFamily: "'Poppins', sans-serif",
                            py: 1,
                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            borderRadius: "8px",
                            position: "relative",
                            overflow: "hidden",
                            boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              top: 0,
                              left: "-100%",
                              width: "100%",
                              height: "100%",
                              background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
                              transition: "left 0.6s ease",
                            },
                            "&:hover": {
                              transform: "translateY(-4px)",
                              boxShadow: "0 20px 50px rgba(212, 175, 55, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                              background: "linear-gradient(135deg, #e8c547 0%, #f0d454 50%, #e8c547 100%)",
                              "&::before": {
                                left: "100%",
                              },
                            },
                            "&:active": {
                              transform: "translateY(-1px)",
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
            )}
        </Box>
      </Box>
    </Box>
  );
}

export default Products;
