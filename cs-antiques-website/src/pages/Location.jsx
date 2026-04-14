import { Box, Container, Typography, Grid, Card, Stack, Button, Divider, Chip } from "@mui/material";
import { LocationOn, Phone, AccessTime, Navigation, WhatsApp, CheckCircle, Cancel, OpenInNew } from "@mui/icons-material";
import { useEffect, useState } from "react";

function Location() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const isOpenNow = () => {
    const day = currentTime.getDay();
    const timeInMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    if (day === 0) return false;
    return timeInMinutes >= 600 && timeInMinutes < 1080;
  };

  const branches = [
    {
      name: "Panadura Branch",
      address: "214A Horana Rd, Panadura 12500",
      phone: "075 264 4606",
      whatsapp: "94752644606",
      hours: "Mon – Sat: 10:00 AM – 6:00 PM",
      hours2: "Sunday: By Appointment",
      description: "Our flagship showroom featuring the complete antique collection – from vintage furniture to rare collectibles.",
      mapEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=79.8912%2C6.7096%2C79.9312%2C6.7496&layer=mapnik&marker=6.7296%2C79.9112",
      mapsUrl: "https://www.google.com/maps/search/214A+Horana+Rd+Panadura+12500",
      tag: "Main Showroom",
    },
    {
      name: "Rajagiriya Branch",
      address: "456 Gem Street, Rajagiriya",
      phone: "078 783 5304",
      whatsapp: "94787835304",
      hours: "Mon – Sat: 10:00 AM – 6:00 PM",
      hours2: "Sunday: By Appointment",
      description: "Premium collection center with rare and specialized antique pieces, centrally located for easy access.",
      mapEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=80.0569%2C6.8761%2C80.1169%2C6.9161&layer=mapnik&marker=6.8961%2C80.0869",
      mapsUrl: "https://www.google.com/maps/search/Gem+Street+Rajagiriya+Sri+Lanka",
      tag: "Premium Collection",
    },
  ];

  const otherNumbers = [
    { number: "075 169 8620", type: "General Inquiry", whatsapp: "94751698620" },
    { number: "071 442 4606", type: "Customer Support", whatsapp: "94714424606" },
    { number: "077 396 3489", type: "Appointments", whatsapp: "94773963489" },
  ];

  const open = isOpenNow();

  return (
    <Box sx={{ backgroundColor: "#0b0b0b", minHeight: "100vh", width: "100%" }}>

      {/* â”€â”€ Hero â”€â”€ */}
      <Box
        sx={{
          background: "linear-gradient(160deg, rgba(212,175,55,0.1) 0%, rgba(0,0,0,0) 60%)",
          py: { xs: 8, md: 13 },
          textAlign: "center",
          px: 2,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "700px",
            height: "700px",
            background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 65%)",
            pointerEvents: "none",
          },
        }}
      >
        <Box
          sx={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.9s ease",
          }}
        >
          <Chip
            icon={open ? <CheckCircle sx={{ fontSize: "0.9rem !important" }} /> : <Cancel sx={{ fontSize: "0.9rem !important" }} />}
            label={open ? "Open Now · Mon–Sat 10AM–6PM" : "Currently Closed"}
            sx={{
              mb: 3,
              backgroundColor: open ? "rgba(76,175,80,0.12)" : "rgba(244,67,54,0.12)",
              border: `1px solid ${open ? "rgba(76,175,80,0.4)" : "rgba(244,67,54,0.35)"}`,
              color: open ? "#4caf50" : "#f44336",
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.8rem",
              "& .MuiChip-icon": { color: "inherit" },
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              fontWeight: 700,
              color: "#d4af37",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              mb: 2,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Find Us
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "2.8rem", md: "4.5rem" },
              fontWeight: 900,
              background: "linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #d4af37 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "'Playfair Display', serif",
              mb: 3,
              lineHeight: 1.1,
            }}
          >
            Our Locations
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "#909090",
              maxWidth: "600px",
              mx: "auto",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.9,
            }}
          >
            Visit us at our premium showrooms across Sri Lanka —<br />
            where history meets your home.
          </Typography>
        </Box>
      </Box>

      {/* â”€â”€ Branch Cards â”€â”€ */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {branches.map((branch, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  background: "linear-gradient(145deg, rgba(212,175,55,0.06) 0%, rgba(10,10,10,0.9) 100%)",
                  border: "1px solid rgba(212,175,55,0.18)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  height: "100%",
                  transition: "all 0.45s ease",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(50px)",
                  transitionDelay: `${0.1 + index * 0.15}s`,
                  "&:hover": {
                    borderColor: "rgba(212,175,55,0.45)",
                    boxShadow: "0 30px 80px rgba(212,175,55,0.12)",
                    transform: "translateY(-8px)",
                  },
                }}
              >
                {/* Map */}
                <Box sx={{ position: "relative", height: { xs: "220px", sm: "270px", md: "300px" } }}>
                  <iframe
                    src={branch.mapEmbed}
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      display: "block",
                      filter: "invert(92%) hue-rotate(180deg) saturate(0.75) contrast(0.9)",
                    }}
                    title={`${branch.name} location map`}
                    loading="lazy"
                  />
                  {/* Badge */}
                  <Box sx={{ position: "absolute", top: 14, left: 14 }}>
                    <Chip
                      label={branch.tag}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(11,11,11,0.85)",
                        color: "#d4af37",
                        fontWeight: 700,
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.72rem",
                        border: "1px solid rgba(212,175,55,0.5)",
                        backdropFilter: "blur(10px)",
                      }}
                    />
                  </Box>
                  {/* Open maps button */}
                  <Box sx={{ position: "absolute", bottom: 12, right: 12 }}>
                    <Button
                      size="small"
                      endIcon={<OpenInNew sx={{ fontSize: "0.85rem !important" }} />}
                      onClick={() => window.open(branch.mapsUrl, "_blank")}
                      sx={{
                        backgroundColor: "rgba(0,0,0,0.8)",
                        color: "#d4af37",
                        border: "1px solid rgba(212,175,55,0.4)",
                        backdropFilter: "blur(10px)",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        borderRadius: "8px",
                        "&:hover": { backgroundColor: "rgba(212,175,55,0.15)" },
                      }}
                    >
                      Open in Maps
                    </Button>
                  </Box>
                </Box>

                {/* Info */}
                <Box sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.4rem", md: "1.8rem" },
                      fontWeight: 800,
                      color: "#d4af37",
                      fontFamily: "'Playfair Display', serif",
                      mb: 1,
                    }}
                  >
                    {branch.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#707070",
                      fontSize: "0.9rem",
                      mb: 3,
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.7,
                    }}
                  >
                    {branch.description}
                  </Typography>

                  <Divider sx={{ borderColor: "rgba(212,175,55,0.12)", mb: 3 }} />

                  <Stack spacing={2.5} sx={{ mb: 3 }}>
                    {/* Address */}
                    <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                      <Box sx={{ width: 40, height: 40, borderRadius: "12px", backgroundColor: "rgba(212,175,55,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(212,175,55,0.15)" }}>
                        <LocationOn sx={{ color: "#d4af37", fontSize: "1.2rem" }} />
                      </Box>
                      <Box>
                        <Typography sx={{ color: "#606060", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'Poppins', sans-serif", mb: 0.3 }}>Address</Typography>
                        <Typography sx={{ color: "#eaeaea", fontWeight: 600, fontFamily: "'Poppins', sans-serif", fontSize: "0.95rem" }}>{branch.address}</Typography>
                      </Box>
                    </Box>

                    {/* Phone */}
                    <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                      <Box sx={{ width: 40, height: 40, borderRadius: "12px", backgroundColor: "rgba(212,175,55,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(212,175,55,0.15)" }}>
                        <Phone sx={{ color: "#d4af37", fontSize: "1.2rem" }} />
                      </Box>
                      <Box>
                        <Typography sx={{ color: "#606060", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'Poppins', sans-serif", mb: 0.3 }}>Phone</Typography>
                        <Typography
                          component="a"
                          href={`tel:${branch.phone.replace(/\s/g, "")}`}
                          sx={{ color: "#eaeaea", fontWeight: 600, fontFamily: "'Poppins', sans-serif", textDecoration: "none", fontSize: "0.95rem", "&:hover": { color: "#d4af37" }, transition: "color 0.3s" }}
                        >
                          {branch.phone}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Hours */}
                    <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                      <Box sx={{ width: 40, height: 40, borderRadius: "12px", backgroundColor: "rgba(212,175,55,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(212,175,55,0.15)" }}>
                        <AccessTime sx={{ color: "#d4af37", fontSize: "1.2rem" }} />
                      </Box>
                      <Box>
                        <Typography sx={{ color: "#606060", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'Poppins', sans-serif", mb: 0.3 }}>Hours</Typography>
                        <Typography sx={{ color: "#eaeaea", fontWeight: 600, fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>{branch.hours}</Typography>
                        <Typography sx={{ color: "#707070", fontFamily: "'Poppins', sans-serif", fontSize: "0.85rem", mt: 0.3 }}>{branch.hours2}</Typography>
                      </Box>
                    </Box>
                  </Stack>

                  <Divider sx={{ borderColor: "rgba(212,175,55,0.12)", mb: 3 }} />

                  {/* Action Buttons */}
                  <Grid container spacing={1.5}>
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        variant="contained"
                        href={`tel:${branch.phone.replace(/\s/g, "")}`}
                        startIcon={<Phone sx={{ fontSize: "1rem !important" }} />}
                        sx={{
                          background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
                          color: "#0b0b0b",
                          fontWeight: 700,
                          fontFamily: "'Poppins', sans-serif",
                          borderRadius: "12px",
                          py: 1.2,
                          "&:hover": { transform: "translateY(-3px)", boxShadow: "0 12px 32px rgba(212,175,55,0.4)" },
                          transition: "all 0.3s ease",
                        }}
                      >
                        Call Now
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        variant="outlined"
                        href={`https://wa.me/${branch.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<WhatsApp sx={{ fontSize: "1rem !important" }} />}
                        sx={{
                          borderColor: "#25D366",
                          color: "#25D366",
                          fontWeight: 700,
                          fontFamily: "'Poppins', sans-serif",
                          borderRadius: "12px",
                          py: 1.2,
                          "&:hover": { backgroundColor: "rgba(37,211,102,0.08)", borderColor: "#25D366", transform: "translateY(-3px)" },
                          transition: "all 0.3s ease",
                        }}
                      >
                        WhatsApp
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        variant="outlined"
                        onClick={() => window.open(branch.mapsUrl, "_blank")}
                        startIcon={<Navigation sx={{ fontSize: "1rem !important" }} />}
                        sx={{
                          borderColor: "rgba(212,175,55,0.3)",
                          color: "#d4af37",
                          fontWeight: 700,
                          fontFamily: "'Poppins', sans-serif",
                          borderRadius: "12px",
                          py: 1.2,
                          "&:hover": { backgroundColor: "rgba(212,175,55,0.08)", borderColor: "#d4af37", transform: "translateY(-3px)" },
                          transition: "all 0.3s ease",
                        }}
                      >
                        Get Directions on Google Maps
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* â”€â”€ Additional Contact Numbers â”€â”€ */}
      <Box
        sx={{
          background: "linear-gradient(180deg, rgba(212,175,55,0.04) 0%, rgba(0,0,0,0) 100%)",
          py: { xs: 8, md: 12 },
          borderTop: "1px solid rgba(212,175,55,0.08)",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 7 }}>
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#d4af37",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                mb: 2,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Always Reachable
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.8rem", md: "2.8rem" },
                fontWeight: 800,
                color: "#eaeaea",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Additional Numbers
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            {otherNumbers.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(212,175,55,0.13)",
                    borderRadius: "20px",
                    p: { xs: 3, md: 3.5 },
                    textAlign: "center",
                    transition: "all 0.4s ease",
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${index * 0.12}s`,
                    "&:hover": {
                      transform: "translateY(-10px)",
                      borderColor: "rgba(212,175,55,0.35)",
                      boxShadow: "0 24px 60px rgba(212,175,55,0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.05) 100%)",
                      border: "1px solid rgba(212,175,55,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    <Phone sx={{ color: "#d4af37", fontSize: "1.5rem" }} />
                  </Box>
                  <Typography sx={{ fontSize: "0.72rem", color: "#707070", textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: "'Poppins', sans-serif", mb: 1 }}>
                    {item.type}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "1.2rem", md: "1.45rem" }, fontWeight: 700, color: "#eaeaea", fontFamily: "'Playfair Display', serif", mb: 3 }}>
                    {item.number}
                  </Typography>
                  <Grid container spacing={1.5}>
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        variant="contained"
                        href={`tel:${item.number.replace(/\s/g, "")}`}
                        startIcon={<Phone sx={{ fontSize: "0.9rem !important" }} />}
                        sx={{
                          background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
                          color: "#0b0b0b",
                          fontWeight: 700,
                          fontFamily: "'Poppins', sans-serif",
                          borderRadius: "10px",
                          fontSize: "0.82rem",
                          "&:hover": { transform: "translateY(-2px)", boxShadow: "0 8px 24px rgba(212,175,55,0.4)" },
                          transition: "all 0.3s",
                        }}
                      >
                        Call
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        variant="outlined"
                        href={`https://wa.me/${item.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<WhatsApp sx={{ fontSize: "0.9rem !important" }} />}
                        sx={{
                          borderColor: "#25D366",
                          color: "#25D366",
                          fontWeight: 700,
                          fontFamily: "'Poppins', sans-serif",
                          borderRadius: "10px",
                          fontSize: "0.82rem",
                          "&:hover": { backgroundColor: "rgba(37,211,102,0.08)", transform: "translateY(-2px)" },
                          transition: "all 0.3s",
                        }}
                      >
                        Chat
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Location;

