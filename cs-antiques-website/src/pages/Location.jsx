import { Box, Container, Typography, Grid, Card, Stack, Button, Divider } from "@mui/material";
import { LocationOn, Phone, AccessTime, Map, Navigation } from "@mui/icons-material";

function Location() {
  const branches = [
    {
      name: "Panadura Branch",
      address: "123 Main Street, Panadura",
      phone: "075 264 4606",
      hours: "Monday - Saturday: 10:00 AM - 6:00 PM",
      hours2: "Sunday: By Appointment",
      latitude: 6.7296,
      longitude: 79.9112,
      description: "Our main showroom featuring the complete collection",
    },
    {
      name: "Rajagiriya Branch",
      address: "456 Gem Street, Rajagiriya",
      phone: "078 783 5304",
      hours: "Monday - Saturday: 10:00 AM - 6:00 PM",
      hours2: "Sunday: By Appointment",
      latitude: 6.8961,
      longitude: 80.0869,
      description: "Premium collection center with specialized pieces",
    },
  ];

  const otherNumbers = [
    { number: "075 169 8620", type: "General Inquiry" },
    { number: "071 442 4606", type: "Customer Support" },
    { number: "077 396 3489", type: "Appointments" },
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
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 800,
              color: "#d4af37",
              mb: 2,
              letterSpacing: "0.02em",
            }}
          >
            Our Locations
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              color: "#b0b0b0",
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Visit us at either of our premium showrooms across Sri Lanka
          </Typography>
        </Box>
      </Box>

      {/* Showroom Cards */}
      <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 4 }, width: "100%" }}>
        <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
        <Grid container spacing={6}>
          {branches.map((branch, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  background: "rgba(212, 175, 55, 0.08)",
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "#d4af37",
                    boxShadow: "0 20px 50px rgba(212, 175, 55, 0.25)",
                  },
                }}
              >
                {/* Map Placeholder */}
                <Box
                  sx={{
                    width: "100%",
                    height: "300px",
                    background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.05) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "2px solid rgba(212, 175, 55, 0.15)",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Map sx={{ fontSize: "3rem", color: "#d4af37", mb: 1 }} />
                    <Typography sx={{ color: "#909090", fontSize: "0.9rem" }}>
                      [Google Maps Integration]
                    </Typography>
                  </Box>
                </Box>

                {/* Content */}
                <Box sx={{ p: 4 }}>
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "#d4af37",
                      mb: 1,
                    }}
                  >
                    {branch.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#b0b0b0",
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {branch.description}
                  </Typography>

                  <Divider sx={{ backgroundColor: "rgba(212, 175, 55, 0.15)", mb: 3 }} />

                  {/* Address */}
                  <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                    <LocationOn sx={{ color: "#d4af37", flexShrink: 0 }} />
                    <Box>
                      <Typography sx={{ fontSize: "0.9rem", color: "#909090", mb: 0.5 }}>
                        Address
                      </Typography>
                      <Typography sx={{ color: "#eaeaea", fontWeight: 600 }}>
                        {branch.address}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Phone */}
                  <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                    <Phone sx={{ color: "#d4af37", flexShrink: 0 }} />
                    <Box>
                      <Typography sx={{ fontSize: "0.9rem", color: "#909090", mb: 0.5 }}>
                        Phone
                      </Typography>
                      <Typography sx={{ color: "#eaeaea", fontWeight: 600 }}>
                        {branch.phone}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Hours */}
                  <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                    <AccessTime sx={{ color: "#d4af37", flexShrink: 0 }} />
                    <Box>
                      <Typography sx={{ fontSize: "0.9rem", color: "#909090", mb: 0.5 }}>
                        Hours
                      </Typography>
                      <Typography sx={{ color: "#eaeaea", mb: 0.5 }}>
                        {branch.hours}
                      </Typography>
                      <Typography sx={{ color: "#b0b0b0", fontSize: "0.9rem" }}>
                        {branch.hours2}
                      </Typography>
                    </Box>
                  </Box>

                  <Divider sx={{ backgroundColor: "rgba(212, 175, 55, 0.15)", mb: 3 }} />

                  {/* Buttons */}
                  <Stack spacing={2}>
                    <Button
                      fullWidth
                      variant="contained"
                      href={`tel:${branch.phone.replace(/\s/g, "")}`}
                      startIcon={<Phone />}
                      sx={{
                        backgroundColor: "#d4af37",
                        color: "#0b0b0b",
                        fontWeight: 700,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-3px)",
                          boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)",
                        },
                      }}
                    >
                      Call Now
                    </Button>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<Navigation />}
                      sx={{
                        borderColor: "#d4af37",
                        color: "#d4af37",
                        fontWeight: 700,
                        "&:hover": {
                          backgroundColor: "rgba(212, 175, 55, 0.1)",
                        },
                      }}
                    >
                      Directions
                    </Button>
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Box>
      </Box>

      {/* Alternative Numbers */}
      <Box
        sx={{
          background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.02) 100%)",
          py: { xs: 8, md: 12 },
          borderTop: "1px solid rgba(212,175,55,0.1)",
          borderBottom: "1px solid rgba(212,175,55,0.1)",
          px: { xs: 2, md: 4 },
          width: "100%",
        }}
      >
        <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              sx={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#d4af37",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Alternative Contact Numbers
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                fontWeight: 800,
                color: "#eaeaea",
              }}
            >
              Quick Contact Info
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {otherNumbers.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    background: "rgba(212, 175, 55, 0.08)",
                    border: "1px solid rgba(212, 175, 55, 0.15)",
                    backdropFilter: "blur(10px)",
                    p: 3,
                    textAlign: "center",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      borderColor: "#d4af37",
                      boxShadow: "0 15px 40px rgba(212, 175, 55, 0.2)",
                    },
                  }}
                >
                  <Phone sx={{ fontSize: "2.5rem", color: "#d4af37", mb: 2 }} />
                  <Typography
                    sx={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "#eaeaea",
                      mb: 1,
                    }}
                  >
                    {item.number}
                  </Typography>
                  <Typography sx={{ color: "#b0b0b0", mb: 2 }}>
                    {item.type}
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    href={`tel:${item.number.replace(/\s/g, "")}`}
                    sx={{
                      backgroundColor: "#d4af37",
                      color: "#0b0b0b",
                      fontWeight: 700,
                    }}
                  >
                    Call
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Location;
