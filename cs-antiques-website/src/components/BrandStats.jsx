import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { TrendingUp } from "@mui/icons-material";

function BrandStats() {
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
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Heading */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 10, md: 14 },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "#d4af37",
              letterSpacing: "0.35em",
              fontWeight: 700,
              fontSize: "0.85rem",
              mb: 2,
              display: "block",
            }}
          >
            OUR LEGACY
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "#f5f5f5",
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.8rem" },
              letterSpacing: "0.02em",
              lineHeight: 1.2,
            }}
          >
            A Trusted Name in Antique Excellence
          </Typography>

          <Box
            sx={{
              width: "80px",
              height: "3px",
              background: "linear-gradient(90deg, #d4af37, rgba(212,175,55,0.3))",
              mx: "auto",
              mb: 4,
            }}
          />

          <Typography
            sx={{
              color: "#b0b0b0",
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              letterSpacing: "0.01em",
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.8,
              fontWeight: 300,
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
                  border: "1px solid rgba(212,175,55,0.15)",
                  borderRadius: "8px",
                  background: `
                    linear-gradient(135deg, rgba(212, 175, 55, 0.04) 0%, rgba(0, 0, 0, 0) 50%),
                    rgba(15, 15, 15, 0.6)
                  `,
                  backdropFilter: "blur(10px)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
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
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.5s ease",
                  },
                  "&:hover": {
                    transform: "translateY(-12px)",
                    borderColor: "#d4af37",
                    boxShadow: "0 25px 60px rgba(212, 175, 55, 0.25)",
                    background: `
                      linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(0, 0, 0, 0) 50%),
                      rgba(20, 20, 20, 0.8)
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
                    fontSize: { xs: "2.5rem", md: "3rem" },
                    fontWeight: 700,
                    color: "#d4af37",
                    mb: 1,
                    letterSpacing: "0.02em",
                    textShadow: "0 4px 15px rgba(212, 175, 55, 0.3)",
                  }}
                >
                  {stat.value}
                </Typography>

                {/* Label */}
                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#e0e0e0",
                    fontWeight: 700,
                    mb: 1.5,
                  }}
                >
                  {stat.label}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color: "#a0a0a0",
                    fontWeight: 300,
                    letterSpacing: "0.05em",
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
            backgroundColor: "rgba(212, 175, 55, 0.05)",
            border: "1px solid rgba(212, 175, 55, 0.15)",
            borderRadius: "8px",
            textAlign: "center",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography
            sx={{
              color: "#d4af37",
              fontSize: { xs: "0.9rem", md: "1rem" },
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 700,
              mb: 3,
            }}
          >
            Join Our Community of Collectors
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              px: { xs: 5, md: 10 },
              py: 2,
              fontSize: { xs: "0.9rem", md: "1rem" },
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              boxShadow: "0 15px 40px rgba(212, 175, 55, 0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 20px 50px rgba(212, 175, 55, 0.5)",
              },
            }}
          >
            View Showroom Locations
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default BrandStats;
