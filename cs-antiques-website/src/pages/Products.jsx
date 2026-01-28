import { Box, Container, Typography, Grid, Card, Button, Chip, Stack, Rating } from "@mui/material";
import { WhatsApp, Info } from "@mui/icons-material";
import { useState } from "react";

function Products() {
  const [hoveredId, setHoveredId] = useState(null);

  const products = [
    {
      id: 1,
      category: "Pettagams",
      name: "Victorian Wooden Chest",
      price: "Rs. 85,000",
      originalPrice: "Rs. 1,20,000",
      image: "/src/assets/images/products/pettagam1.jpg",
      era: "1920s",
      rating: 4.8,
      reviews: 24,
      description: "Handcrafted wooden storage chest with intricate carvings",
      condition: "Restored",
      material: "Teak Wood",
    },
    {
      id: 2,
      category: "Gramophones",
      name: "Classic Gramophone Deluxe",
      price: "Rs. 65,000",
      originalPrice: "Rs. 95,000",
      image: "/src/assets/images/products/gramophone1.jpg",
      era: "1930s",
      rating: 4.9,
      reviews: 31,
      description: "Vintage gramophone with exceptional sound quality",
      condition: "Fully Functional",
      material: "Brass & Wood",
    },
    {
      id: 3,
      category: "Cabinets",
      name: "Mahogany Storage Cabinet",
      price: "Rs. 72,000",
      originalPrice: "Rs. 1,10,000",
      image: "/src/assets/images/products/cabinet1.jpg",
      era: "1940s",
      rating: 4.7,
      reviews: 18,
      description: "Elegant mahogany cabinet with glass doors",
      condition: "Excellent",
      material: "Mahogany",
    },
    {
      id: 4,
      category: "Furniture",
      name: "Ornate Dining Chair Set",
      price: "Rs. 1,50,000",
      originalPrice: "Rs. 2,20,000",
      image: "/src/assets/images/products/chair1.jpg",
      era: "1950s",
      rating: 4.6,
      reviews: 15,
      description: "Set of 6 authentic antique dining chairs",
      condition: "Restored",
      material: "Rosewood",
    },
    {
      id: 5,
      category: "Pettagams",
      name: "Carved Storage Chest Premium",
      price: "Rs. 95,000",
      originalPrice: "Rs. 1,35,000",
      image: "/src/assets/images/products/pettagam2.jpg",
      era: "1910s",
      rating: 5.0,
      reviews: 42,
      description: "Rare carved wooden chest with ornamental designs",
      condition: "Pristine",
      material: "Cedarwood",
    },
    {
      id: 6,
      category: "Decorative",
      name: "Vintage Desk Lamp",
      price: "Rs. 28,000",
      originalPrice: "Rs. 45,000",
      image: "/src/assets/images/products/lamp1.jpg",
      era: "1960s",
      rating: 4.5,
      reviews: 12,
      description: "Art Deco brass desk lamp with silk shade",
      condition: "Working",
      material: "Brass & Silk",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#0b0b0b", minHeight: "100vh", width: "100vw" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
          py: { xs: 8, md: 12 },
          textAlign: "center",
          px: { xs: 2, md: 4 },
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontWeight: 800,
            color: "#d4af37",
            mb: 2,
            letterSpacing: "0.02em",
          }}
        >
          Our Collections
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.25rem" },
            color: "#b0b0b0",
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          Handpicked antiques and premium reproductions for discerning collectors
        </Typography>
      </Box>

      {/* Products Grid */}
      <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 4 }, width: "100%" }}>
        <Grid container spacing={4} sx={{ maxWidth: "1600px", mx: "auto" }}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                sx={{
                  background: "rgba(212, 175, 55, 0.08)",
                  border: "1px solid rgba(212, 175, 55, 0.15)",
                  backdropFilter: "blur(10px)",
                  overflow: "hidden",
                  height: "100%",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: hoveredId === product.id ? "translateY(-15px)" : "translateY(0)",
                  borderColor: hoveredId === product.id ? "#d4af37" : "rgba(212, 175, 55, 0.15)",
                  boxShadow:
                    hoveredId === product.id
                      ? "0 25px 50px rgba(212, 175, 55, 0.25)"
                      : "0 5px 15px rgba(0, 0, 0, 0.3)",
                }}
              >
                {/* Image Container */}
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: "280px",
                    background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.05) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      background: `url(${product.image}) center/cover`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "transform 0.3s ease",
                      transform: hoveredId === product.id ? "scale(1.08)" : "scale(1)",
                      filter: "opacity(0.7)",
                    }}
                  />

                  {/* Badges */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 15,
                      left: 15,
                      right: 15,
                      display: "flex",
                      gap: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    <Chip
                      label={product.category}
                      sx={{
                        backgroundColor: "#d4af37",
                        color: "#0b0b0b",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                      }}
                    />
                    <Chip
                      label={product.era}
                      sx={{
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        color: "#d4af37",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                      }}
                    />
                  </Box>

                  {/* Discount Badge */}
                  {product.originalPrice && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 15,
                        right: 15,
                        backgroundColor: "rgba(212, 175, 55, 0.9)",
                        color: "#0b0b0b",
                        px: 2,
                        py: 0.5,
                        borderRadius: "50px",
                        fontWeight: 800,
                        fontSize: "0.85rem",
                      }}
                    >
                      -25%
                    </Box>
                  )}
                </Box>

                {/* Content */}
                <Box sx={{ p: 3 }}>
                  <Typography
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#eaeaea",
                      mb: 1,
                    }}
                  >
                    {product.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      color: "#b0b0b0",
                      mb: 2,
                      lineHeight: 1.5,
                    }}
                  >
                    {product.description}
                  </Typography>

                  {/* Rating */}
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 2 }}>
                    <Rating value={product.rating} readOnly size="small" sx={{ color: "#d4af37" }} />
                    <Typography sx={{ fontSize: "0.8rem", color: "#909090" }}>
                      ({product.reviews})
                    </Typography>
                  </Box>

                  {/* Details */}
                  <Stack spacing={1} sx={{ mb: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography sx={{ fontSize: "0.8rem", color: "#909090" }}>
                        Condition:
                      </Typography>
                      <Typography sx={{ fontSize: "0.8rem", color: "#d4af37", fontWeight: 600 }}>
                        {product.condition}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography sx={{ fontSize: "0.8rem", color: "#909090" }}>
                        Material:
                      </Typography>
                      <Typography sx={{ fontSize: "0.8rem", color: "#eaeaea", fontWeight: 600 }}>
                        {product.material}
                      </Typography>
                    </Box>
                  </Stack>

                  {/* Price */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      sx={{
                        fontSize: "1.4rem",
                        fontWeight: 800,
                        color: "#d4af37",
                        mb: 0.5,
                      }}
                    >
                      {product.price}
                    </Typography>
                    {product.originalPrice && (
                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                          color: "#909090",
                          textDecoration: "line-through",
                        }}
                      >
                        {product.originalPrice}
                      </Typography>
                    )}
                  </Box>

                  {/* Button */}
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<WhatsApp />}
                    href="https://wa.me/+94718820809?text=I'm interested in this product"
                    target="_blank"
                    sx={{
                      backgroundColor: "#25D366",
                      color: "white",
                      fontWeight: 700,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 10px 25px rgba(37, 211, 102, 0.4)",
                      },
                    }}
                  >
                    Inquire Now
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.02) 100%)",
          py: { xs: 6, md: 10 },
          textAlign: "center",
          borderTop: "1px solid rgba(212,175,55,0.1)",
          px: { xs: 2, md: 4 },
          width: "100%",
        }}
      >
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 800,
              color: "#eaeaea",
              mb: 2,
            }}
          >
            Not Found What You're Looking For?
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              color: "#b0b0b0",
              mb: 4,
              lineHeight: 1.8,
            }}
          >
            Visit our showrooms or connect with us on WhatsApp to explore our complete collection and discuss custom orders.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ justifyContent: "center" }}>
            <Button
              variant="contained"
              href="https://wa.me/+94718820809"
              target="_blank"
              startIcon={<WhatsApp />}
              sx={{
                backgroundColor: "#25D366",
                color: "white",
                px: 4,
                py: 1.5,
                fontWeight: 700,
              }}
            >
              Chat on WhatsApp
            </Button>
            <Button
              variant="outlined"
              href="/location"
              startIcon={<Info />}
              sx={{
                borderColor: "#d4af37",
                color: "#d4af37",
                px: 4,
                py: 1.5,
                fontWeight: 700,
                "&:hover": {
                  backgroundColor: "rgba(212, 175, 55, 0.1)",
                },
              }}
            >
              Visit Showroom
            </Button>
          </Stack>
      </Box>
    </Box>
  );
}

export default Products;
