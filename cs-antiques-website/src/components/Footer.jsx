import { Box, Container, Grid, Typography, Stack, IconButton, Divider } from "@mui/material";
import { Facebook, Phone, Email, LocationOn, WhatsApp } from "@mui/icons-material";
import { useEffect, useState } from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    const footer = document.querySelector("footer");
    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const branches = [
    {
      name: "Panadura",
      phone: "075 264 4606",
      whatsapp: "94752644606",
      address: "214A Horana Rd, Panadura",
    },
    {
      name: "Rajagiriya",
      phone: "078 783 5304",
      whatsapp: "94787835304",
      address: "456 Gem Street, Rajagiriya",
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "CS Antiques", url: "https://www.facebook.com/share/1Fu3caXyrp/" },
    { icon: Facebook, label: "CS Pettagam Paradise", url: "https://www.facebook.com/share/1QS9BdpFX6/" },
    { icon: Facebook, label: "CS Antiques Rajagiriya", url: "https://www.facebook.com/share/187hg525rG/" },
    { icon: Facebook, label: "CS Gramophones", url: "https://www.facebook.com/share/1EwrqcfaMG/" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#050505",
        borderTop: "1px solid rgba(212,175,55,0.15)",
        py: { xs: 4, md: 5 },
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, #d4af37 50%, transparent 100%)",
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: 3 }}>
          
          {/* Left: Brand & Social */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ opacity: isVisible ? 1 : 0.5, transition: "opacity 0.6s ease" }}>
              <Typography
                sx={{
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #d4af37 0%, #f0d060 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "'Playfair Display', serif",
                  mb: 1.5,
                }}
              >
                CS Antiques
              </Typography>
              <Typography sx={{ color: "#606060", fontSize: "0.8rem", fontFamily: "'Poppins', sans-serif", lineHeight: 1.6, mb: 2 }}>
                Treasures from the past, lovingly curated for your dream home.
              </Typography>
              {/* Social Icons - Compact */}
              <Stack direction="row" spacing={0.8} sx={{ opacity: isVisible ? 1 : 0.5, transition: "opacity 0.6s ease 0.1s" }}>
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <IconButton
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      size="small"
                      sx={{
                        width: 32,
                        height: 32,
                        backgroundColor: "rgba(24,119,242,0.12)",
                        border: "1px solid rgba(24,119,242,0.25)",
                        color: "#1877F2",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          backgroundColor: "#1877F2",
                          color: "#fff",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <Icon sx={{ fontSize: "0.9rem" }} />
                    </IconButton>
                  );
                })}
              </Stack>
            </Box>
          </Grid>

          {/* Center: Contact & Hours */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ opacity: isVisible ? 1 : 0.5, transition: "opacity 0.6s ease 0.15s" }}>
              <Typography sx={{ color: "#d4af37", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Poppins', sans-serif", mb: 1.5 }}>
                Contact
              </Typography>
              <Stack spacing={1.2}>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Email sx={{ color: "#d4af37", fontSize: "1rem", flexShrink: 0 }} />
                  <Typography
                    component="a"
                    href="mailto:csantiquespanadura@gmail.com"
                    sx={{ color: "#808080", fontSize: "0.8rem", fontFamily: "'Poppins', sans-serif", textDecoration: "none", "&:hover": { color: "#d4af37" } }}
                  >
                    csantiquespanadura@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Phone sx={{ color: "#d4af37", fontSize: "1rem", flexShrink: 0 }} />
                  <Typography
                    component="a"
                    href="tel:0718820809"
                    sx={{ color: "#808080", fontSize: "0.8rem", fontFamily: "'Poppins', sans-serif", textDecoration: "none", "&:hover": { color: "#d4af37" } }}
                  >
                    071 882 0809
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                  <WhatsApp sx={{ color: "#25D366", fontSize: "1rem", mt: 0.2, flexShrink: 0 }} />
                  <Typography
                    component="a"
                    href="https://wa.me/94718820809"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "#808080", fontSize: "0.8rem", fontFamily: "'Poppins', sans-serif", textDecoration: "none", "&:hover": { color: "#25D366" } }}
                  >
                    WhatsApp
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          {/* Right: Branches */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ opacity: isVisible ? 1 : 0.5, transition: "opacity 0.6s ease 0.2s" }}>
              <Typography sx={{ color: "#d4af37", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Poppins', sans-serif", mb: 1.5 }}>
                Showrooms
              </Typography>
              <Stack spacing={1.5}>
                {branches.map((branch, idx) => (
                  <Box key={idx}>
                    <Typography sx={{ color: "#e0e0e0", fontSize: "0.85rem", fontWeight: 600, fontFamily: "'Poppins', sans-serif", mb: 0.4 }}>
                      {branch.name}
                    </Typography>
                    <Typography sx={{ color: "#606060", fontSize: "0.75rem", fontFamily: "'Poppins', sans-serif", mb: 0.3 }}>
                      {branch.address}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                      <Typography
                        component="a"
                        href={`tel:${branch.phone.replace(/\s/g, "")}`}
                        sx={{ color: "#808080", fontSize: "0.75rem", fontFamily: "'Poppins', sans-serif", textDecoration: "none", "&:hover": { color: "#d4af37" } }}
                      >
                        📞 {branch.phone}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Far Right: Hours */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ opacity: isVisible ? 1 : 0.5, transition: "opacity 0.6s ease 0.25s" }}>
              <Typography sx={{ color: "#d4af37", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Poppins', sans-serif", mb: 1.5 }}>
                Hours
              </Typography>
              <Typography sx={{ color: "#808080", fontSize: "0.8rem", fontFamily: "'Poppins', sans-serif", lineHeight: 1.7 }}>
                <Box sx={{ color: "#d4af37", fontWeight: 600 }}>Mon – Sat</Box>
                10:00 AM – 6:00 PM<br />
                <Box sx={{ color: "#d4af37", fontWeight: 600, mt: 1 }}>Sunday</Box>
                By Appointment Only
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ borderColor: "rgba(212,175,55,0.1)", my: 2 }} />

        {/* Bottom Bar - Compact */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: "center", gap: 1.5, opacity: isVisible ? 1 : 0.5, transition: "opacity 0.6s ease 0.3s" }}>
          <Typography sx={{ color: "#505050", fontSize: "0.75rem", fontFamily: "'Poppins', sans-serif", textAlign: { xs: "center", sm: "left" } }}>
            © {currentYear} CS Antiques. All rights reserved.
          </Typography>
          <Typography sx={{ color: "#606060", fontSize: "0.75rem", fontFamily: "'Poppins', sans-serif", textAlign: "center" }}>
            Bringing Unique Charm to Your Home
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

