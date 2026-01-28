import { Box, Container, Grid, Typography, Stack, IconButton } from "@mui/material";
import {
  Facebook,
  Phone,
  Email,
  LocationOn,
  WhatsApp,
} from "@mui/icons-material";

function Footer() {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    panadura: {
      branch: "Panadura Branch",
      phone: "075 264 4606",
      hours: "10:00 AM - 6:00 PM",
      address: "123 Main Street, Panadura",
    },
    rajagiriya: {
      branch: "Rajagiriya Branch",
      phone: "078 783 5304",
      hours: "10:00 AM - 6:00 PM",
      address: "456 Gem Street, Rajagiriya",
    },
  };

  const socialLinks = [
    {
      icon: Facebook,
      label: "CS Antiques",
      url: "https://www.facebook.com/share/1Fu3caXyrp/",
    },
    {
      icon: Facebook,
      label: "CS Pettagam Paradise",
      url: "https://www.facebook.com/share/1QS9BdpFX6/",
    },
    {
      icon: Facebook,
      label: "CS Antiques Rajagiriya",
      url: "https://www.facebook.com/share/187hg525rG/",
    },
    {
      icon: Facebook,
      label: "CS Gramophones",
      url: "https://www.facebook.com/share/1EwrqcfaMG/",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#050505",
        borderTop: "1px solid rgba(212, 175, 55, 0.15)",
        pt: { xs: 8, md: 10 },
        pb: { xs: 4, md: 6 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: 6 }}>
          {/* Branch 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography
                sx={{
                  color: "#d4af37",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                {contactInfo.panadura.branch}
              </Typography>

              <Stack spacing={2}>
                <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                  <Phone sx={{ color: "#d4af37", mt: 0.5, fontSize: "1.2rem" }} />
                  <Box>
                    <Typography
                      sx={{
                        color: "#eaeaea",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        mb: 0.5,
                      }}
                    >
                      {contactInfo.panadura.phone}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                  <LocationOn sx={{ color: "#d4af37", mt: 0.5, fontSize: "1.2rem" }} />
                  <Typography
                    sx={{
                      color: "#b0b0b0",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {contactInfo.panadura.address}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#909090",
                    fontSize: "0.85rem",
                  }}
                >
                  ⏰ {contactInfo.panadura.hours}
                </Typography>
              </Stack>
            </Box>
          </Grid>

          {/* Branch 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography
                sx={{
                  color: "#d4af37",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                {contactInfo.rajagiriya.branch}
              </Typography>

              <Stack spacing={2}>
                <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                  <Phone sx={{ color: "#d4af37", mt: 0.5, fontSize: "1.2rem" }} />
                  <Box>
                    <Typography
                      sx={{
                        color: "#eaeaea",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        mb: 0.5,
                      }}
                    >
                      {contactInfo.rajagiriya.phone}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                  <LocationOn sx={{ color: "#d4af37", mt: 0.5, fontSize: "1.2rem" }} />
                  <Typography
                    sx={{
                      color: "#b0b0b0",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {contactInfo.rajagiriya.address}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#909090",
                    fontSize: "0.85rem",
                  }}
                >
                  ⏰ {contactInfo.rajagiriya.hours}
                </Typography>
              </Stack>
            </Box>
          </Grid>

          {/* Contact Methods */}
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography
                sx={{
                  color: "#d4af37",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                Contact Us
              </Typography>

              <Stack spacing={2}>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Email sx={{ color: "#d4af37", fontSize: "1.2rem" }} />
                  <Typography
                    sx={{
                      color: "#eaeaea",
                      fontSize: "0.85rem",
                      wordBreak: "break-word",
                    }}
                  >
                    csantiquespanadura@gmail.com
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <WhatsApp sx={{ color: "#25D366", fontSize: "1.2rem" }} />
                  <Typography
                    sx={{
                      color: "#eaeaea",
                      fontSize: "0.85rem",
                    }}
                  >
                    071 882 0809
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#909090",
                    fontSize: "0.8rem",
                    fontStyle: "italic",
                    mt: 2,
                  }}
                >
                  Monday - Saturday: 10 AM - 6 PM
                  <br />
                  Sunday: By Appointment
                </Typography>
              </Stack>
            </Box>
          </Grid>

          {/* Follow Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography
                sx={{
                  color: "#d4af37",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                Follow Us
              </Typography>

              <Stack spacing={1}>
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <IconButton
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: "#d4af37",
                          p: 0.5,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            color: "#e8c547",
                            transform: "scale(1.2)",
                          },
                        }}
                      >
                        <Icon fontSize="small" />
                      </IconButton>
                      <Typography
                        sx={{
                          color: "#b0b0b0",
                          fontSize: "0.8rem",
                          maxWidth: "150px",
                        }}
                      >
                        {social.label}
                      </Typography>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box
          sx={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
            mb: 4,
          }}
        />

        {/* Bottom Section */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              color: "#909090",
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              mb: 1,
            }}
          >
            © {currentYear} CS ANTIQUES. All rights reserved.
          </Typography>

          <Typography
            sx={{
              color: "#707070",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
            }}
          >
            Bringing the Unique Charm of Antiquity to Your Dream Home
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
