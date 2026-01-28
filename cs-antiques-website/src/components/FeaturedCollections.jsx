import { Box, Container, Typography, Grid, Button } from "@mui/material";

const collections = [
  {
    title: "Pettagams",
    description:
      "Traditional Sri Lankan storage chests crafted with timeless beauty and durability.",
  },
  {
    title: "Gramophones",
    description:
      "Classic gramophones that add elegance, heritage, and charm to any space.",
  },
  {
    title: "Antique Cabinets",
    description:
      "Authentic antique cabinets featuring intricate detailing and superior craftsmanship.",
  },
  {
    title: "Reproduction Furniture",
    description:
      "Faithfully recreated antique designs crafted for modern living.",
  },
];

function FeaturedCollections() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#121212",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              color: "#d4af37",
              fontWeight: 700,
              mb: 2,
              letterSpacing: "0.05em",
            }}
          >
            Our Signature Collections
          </Typography>

          <Typography
            sx={{
              color: "#bdbdbd",
              maxWidth: "700px",
              mx: "auto",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.8,
            }}
          >
            Carefully curated antique and reproduction furniture pieces designed
            to bring timeless elegance and heritage value to your living spaces.
          </Typography>
        </Box>

        {/* Collection Cards */}
        <Grid container spacing={4}>
          {collections.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  height: "100%",
                  borderRadius: "22px",
                  border: "1px solid rgba(212,175,55,0.25)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0))",
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    borderColor: "#d4af37",
                  },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "#d4af37",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#e0e0e0",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>

                <Button
                  variant="outlined"
                  sx={{
                    mt: 4,
                    borderColor: "#d4af37",
                    color: "#d4af37",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    "&:hover": {
                      backgroundColor: "#d4af37",
                      color: "#000",
                    },
                  }}
                >
                  Inquire on WhatsApp
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default FeaturedCollections;
