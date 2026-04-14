import { Box, Container, Typography, Grid, Button, Stack, Card } from "@mui/material";
import { WhatsApp, FavoriteBorder, Favorite } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiUrl } from "../config/api";
import { resolveProductImage, placeholderProductImage } from "../utils/productImages";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(apiUrl(`/api/products/${id}`));
      if (response.ok) {
        const data = await response.json();
        const productData = data.data || data;
        console.log("🔥 ProductDetail - Fetched product:", {
          id: productData.id,
          name: productData.name,
          mainImage: productData.mainImage,
          resolvedImage: resolveProductImage(productData.mainImage),
        });
        setProduct(productData);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  const getProductImage = () => {
    if (!product) return placeholderProductImage;
    return resolveProductImage(product.mainImage);
  };

  if (loading) {
    return (
      <Box sx={{ backgroundColor: "#0b0b0b", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography sx={{ color: "#d4af37", fontSize: "1.5rem", fontFamily: "'Playfair Display', serif" }}>
          Loading Product...
        </Typography>
      </Box>
    );
  }

  if (!product) {
    return (
      <Box sx={{ backgroundColor: "#0b0b0b", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography sx={{ color: "#d4af37", fontSize: "2rem", fontFamily: "'Playfair Display', serif" }}>
          Product Not Found
        </Typography>
      </Box>
    );
  }

  const baseUrl = import.meta.env.VITE_BASE_URL || "https://698ff5393ea9ca87ce90a744--csantiquess.netlify.app";
  const productPageUrl = `${baseUrl}/product/${product.id}`;

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
                key={product?.mainImage || "placeholder"}
                component="img"
                src={getProductImage()}
                alt={product.name}
                onLoad={(e) => {
                  console.log("✅ Image loaded successfully:", e.currentTarget.src);
                }}
                onError={(e) => {
                  console.error("❌ Image load failed:", e.currentTarget.src);
                  const fallback = placeholderProductImage;
                  if (!e.currentTarget.src.startsWith("data:image/svg+xml")) {
                    console.log("Fallback to placeholder");
                    e.currentTarget.src = fallback;
                  }
                }}
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
