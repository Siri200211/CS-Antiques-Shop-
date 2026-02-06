import { Box, Container, Typography, Grid, Button, Stack, Card } from "@mui/material";
import { WhatsApp, FavoriteBorder, Favorite } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import col1 from "../assets/images/products/col1.jpeg";
import col2 from "../assets/images/products/col2.jpeg";
import col3 from "../assets/images/products/col3.jpeg";
import col4 from "../assets/images/products/col4.jpeg";
import col5 from "../assets/images/products/col5.jpeg";
import col6 from "../assets/images/products/col6.jpeg";
import col7 from "../assets/images/products/col7.jpeg";
import col8 from "../assets/images/products/col8.jpeg";
import col9 from "../assets/images/products/col9.jpeg";
import col10 from "../assets/images/products/col10.jpeg";
import col11 from "../assets/images/products/col11.jpeg";
import col12 from "../assets/images/products/col12.jpeg";
import col13 from "../assets/images/products/col13.jpeg";
import col14 from "../assets/images/products/col14.jpeg";
import col15 from "../assets/images/products/col15.jpeg";
import col16 from "../assets/images/products/col16.jpeg";
import col17 from "../assets/images/products/col17.jpeg";
import col18 from "../assets/images/products/col18.jpeg";
import col19 from "../assets/images/products/col19.jpeg";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const products = [
    {
      id: 1,
      name: "Dutch Box",
      category: "Decorative",
      price: "Rs.135,000",
      image: col1,
      originalPrice: "Rs. 150,000",
      description: "Elegant dutch wooden box with brass inlays",
      condition: "Brand New",
    },
    {
      id: 2,
      name: "Ath Paththaray",
      category: "Decorative",
      price: "Rs. 28,500",
      originalPrice: "Rs. 34,000",
      image: col2,
      description: "Traditional brass water vessel with intricate carvings",
      condition: "Well-Preserved",
    },
    {
      id: 3,
      name: "Brass Lamp Shade",
      category: "Lighting",
      price: "Rs. 78,000",
      originalPrice: "Rs. 105,000",
      image: col3,
      description: "Art Deco brass table lamp with silk shade",
      condition: "Fully Restored",
    },
    {
      id: 4,
      name: "Pettagama with Wooden Horse, Gramophone & Wooden Mirror",
      category: "Antique Collection",
      price: "Rs. 350,000",
      originalPrice: "",
      image: col4,
      description: "Rare combination collection featuring wooden pettagama, gramophone, and ornate wooden mirror",
      condition: "Excellent",
    },
    {
      id: 5,
      name: "Ebony Wood Brand New Kavichchiya",
      category: "Premium Furniture",
      price: "Rs. 12,75,000",
      originalPrice: "Rs. 13,85,000",
      image: col5,
      description: "Premium wooden pettagam with intricate ",
      condition: "Brand new",
    },
    {
      id: 6,
      name: "Original Antique Writing Biro Cupboard",
      category: "Furniture",
      price: "Rs. 495,000",
      originalPrice: "Rs. 540,000",
      image: col6,
      description: "original antique burma teak wood and ebony wood writing biro cupboard",
      condition: "Pristine",
    },
    {
      id: 7,
      name: "Gramophone",
      category: "Music",
      price: "Rs. 29,000",
      originalPrice: "Rs. 38,000",
      image: col7,
      description: "Vintage gramophone with ornate wooden body, fully functional",
      condition: "Fully Functional",
    },
    {
      id: 8,
      name: "Original Antique Pettagama",
      category: "Furniture",
      price: "Rs. 97,000",
      originalPrice: "Rs. 108,000",
      image: col8,
      description: "Intricately carved teak panel with traditional motifs",
      condition: "Fully Restored",
    },
    {
      id: 9,
      name: "Ebony Wood Premium Most Valuable Kavichchiya",
      category: "Premium Furniture",
      price: "Rs. 18,00,000",
      originalPrice: "Rs. 19,85,000",
      image: col9,
      description: "Exceptionally rare ebony wood furniture piece, hand-carved with premium craftsmanship",
      condition: "Excellent",
    },
    {
      id: 10,
      name: "Rose Wood Original Antique Cupboard",
      category: "Furniture",
      price: "Rs. 345,000",
      originalPrice: "Rs. 385,000",
      image: col10,
      description: "Original antique rose wood cupboard with traditional hand-carved details",
      condition: "Pristine",
    },
    {
      id: 11,
      name: "Table Cupboard",
      category: "Furniture",
      price: "Rs. 135,000",
      originalPrice: "Rs. 152,000",
      image: col11,
      description: "Intricately carved teak panel with traditional motifs",
      condition: "Well-Preserved",
    },
    {
      id: 12,
      name: "Jack Wood Premium Kavichchiya",
      category: "Art",
      price: "Rs. 195,000",
      originalPrice: "Rs. 225,000",
      image: col12,
      description: "Intricately carved teak panel with traditional motifs",
      condition: "brand new",
    },
    {
      id: 13,
      name: "Jack Wood Original Antique Dressing Table",
      category: "Art",
      price: "Rs. 145,000",
      originalPrice: "Rs. 170,000",
      image: col13,
      description: "Intricately carved teak panel with traditional motifs",
      condition: "Fully Restored",
    },
    {
      id: 14,
      name: "Teak Wood Grand Father Chair",
      category: "Art",
      price: "Rs. 68,000",
      originalPrice: "Rs. 76,000",
      image: col14,
      description: "Intricately carved teak panel with traditional motifs",
      era: "1920s",
      condition: "Good Condition",
    },
    {
      id: 15,
      name: "Premium Showcase Cupboard Jack Wood",
      category: "Furniture",
      price: "Rs. 235,000",
      originalPrice: "Rs. 255,000",
      image: col15,
      description: "Intricately carved teak panel with traditional motifs",
      condition: "Pristine",
    },
    {
      id: 16,
      name: "Dutch Box",
      category: "Art",
      price: "Rs. 58,000",
      originalPrice: "Rs. 65,000",
      image: col16,
      description: "Intricately carved teak panel with traditional motifs",
      condition: " brand new",
    },
    {
      id: 17,
      name: "Original Antique Tea Trolly",
      category: "Art",
      price: "Rs. 125,000",
      originalPrice: "Rs. 155,000",
      image: col17,
      description: "Intricately carved teak panel with traditional motifs",
      condition: "Well-Preserved",
    },
    {
      id: 18,
      name: "White Siyambala Wood Rare Design Coffee Table",
      category: "Art",
      price: "Rs. 135,000",
      originalPrice: "Rs. 152,000",
      image: col18,
      description: "Intricately carved teak panel with traditional motifs",
      condition: "Fully Restored",
    },
    {
      id: 19,
      name: "White Siyambala Wood Rare Design Kavichchiya",
      category: "Art",
      price: "Rs. 975,000",
      originalPrice: "Rs. 10,80,000",
      image: col19,
      description: "Intricately carved teak panel with traditional motifs",
      condition: "Pristine",
    }
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Box sx={{ backgroundColor: "#0b0b0b", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography sx={{ color: "#d4af37", fontSize: "2rem", fontFamily: "'Playfair Display', serif" }}>
          Product Not Found
        </Typography>
      </Box>
    );
  }

  const productPageUrl = `${window.location.origin}/product/${product.id}`;

  return (
    <Box sx={{ backgroundColor: "#0b0b0b", minHeight: "100vh", width: "100vw", py: { xs: 4, md: 8 }, px: { xs: 2, md: 4 }, display: "flex", justifyContent: "center" }}>
      <Box sx={{ maxWidth: "1200px", width: "100%" }}>
        {/* Back Button */}
        <Button
          onClick={() => navigate("/products")}
          sx={{
            color: "#d4af37",
            mb: 4,
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "rgba(212, 175, 55, 0.1)",
            },
          }}
        >
          ← Back to Products
        </Button>

        <Grid container spacing={4}>
          {/* Image Section */}
          <Grid item xs={8} md={6}>
            <Card
              sx={{
                background: "linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.03) 100%)",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                borderRadius: "16px",
                overflow: "hidden",
                height: "500px",
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Card>
          </Grid>

          {/* Details Section */}
          <Grid item xs={12} md={6}>
            {/* Category */}
            <Typography
              sx={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#d4af37",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontFamily: "'Poppins', sans-serif",
                mb: 1.5,
              }}
            >
              {product.category}
            </Typography>

            {/* Product Name */}
            <Typography
              sx={{
                fontSize: "2.5rem",
                fontWeight: 700,
                color: "#eaeaea",
                fontFamily: "'Playfair Display', serif",
                mb: 2,
                lineHeight: 1.3,
              }}
            >
              {product.name}
            </Typography>

            {/* Condition Badge */}
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{
                  display: "inline-block",
                  backgroundColor: "#d4af37",
                  color: "#0b0b0b",
                  px: 2,
                  py: 0.8,
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                {product.condition}
              </Box>
            </Box>

            {/* Description */}
            <Typography
              sx={{
                fontSize: "1.1rem",
                color: "#b0b0b0",
                fontFamily: "'Poppins', sans-serif",
                mb: 3,
                lineHeight: 1.8,
              }}
            >
              {product.description}
            </Typography>

            {/* Price Section */}
            <Box sx={{ mb: 4, pb: 3, borderBottom: "1px solid rgba(212, 175, 55, 0.2)" }}>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: "#707070",
                  fontFamily: "'Poppins', sans-serif",
                  mb: 1,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Price
              </Typography>
              <Box sx={{ display: "flex", alignItems: "baseline", gap: 2 }}>
                <Typography
                  sx={{
                    fontSize: "2.2rem",
                    fontWeight: 900,
                    color: "#d4af37",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {product.price}
                </Typography>
                {product.originalPrice && (
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      color: "#707070",
                      textDecoration: "line-through",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {product.originalPrice}
                  </Typography>
                )}
              </Box>
            </Box>

            {/* Product Details */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid item xs={6}>
                <Typography sx={{ fontSize: "0.9rem", color: "#707070", fontFamily: "'Poppins', sans-serif", mb: 0.5 }}>
                  Condition
                </Typography>
                <Typography sx={{ fontSize: "1.1rem", color: "#eaeaea", fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>
                  {product.condition}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontSize: "0.9rem", color: "#707070", fontFamily: "'Poppins', sans-serif", mb: 0.5 }}>
                  Category
                </Typography>
                <Typography sx={{ fontSize: "1.1rem", color: "#eaeaea", fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>
                  {product.category}
                </Typography>
              </Grid>
            </Grid>

            {/* Inquiry Section */}
            <Stack spacing={2}>
              <Button
                fullWidth
                variant="contained"
                href={`https://wa.me/94718820809?text=Hello!%20I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.category)})%20priced%20at%20${encodeURIComponent(product.price)}.%20Please%20check%20the%20full%20details:%20${encodeURIComponent(productPageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<WhatsApp />}
                sx={{
                  background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
                  color: "#0b0b0b",
                  fontWeight: 700,
                  fontSize: "1rem",
                  fontFamily: "'Poppins', sans-serif",
                  py: 1.5,
                  transition: "all 0.3s ease",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 15px 40px rgba(212, 175, 55, 0.5)",
                  },
                }}
              >
                Inquire Now on WhatsApp
              </Button>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => setIsFavorite(!isFavorite)}
                startIcon={isFavorite ? <Favorite /> : <FavoriteBorder />}
                sx={{
                  color: isFavorite ? "#ff6b6b" : "#d4af37",
                  borderColor: "#d4af37",
                  fontWeight: 600,
                  fontSize: "1rem",
                  fontFamily: "'Poppins', sans-serif",
                  py: 1.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "#d4af37",
                    backgroundColor: "rgba(212, 175, 55, 0.1)",
                  },
                }}
              >
                {isFavorite ? "Added to Favorites" : "Add to Favorites"}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ProductDetail;
