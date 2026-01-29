import { Box, Container, Grid, Typography, Stack, IconButton } from "@mui/material";
import {
  Facebook,
  Phone,
  Email,
  LocationOn,
  WhatsApp,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
  `;

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
        borderTop: "1px solid rgba(212, 175, 55, 0.2)",
        pt: { xs: 6, sm: 8, md: 12 },
        pb: { xs: 4, sm: 6, md: 8 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent)",
        },
      }}
    >
      <style>{animationStyles}</style>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 2, sm: 2.5, md: 3, lg: 4 }}
          sx={{ mb: { xs: 4, md: 6 }, justifyContent: "center" }}
        >
          {/* Branch 1 */}
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            lg={2.5}
            sx={{
              animation: isVisible ? "fadeInUp 0.8s ease-out 0.1s both" : "none",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#d4af37",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "'Playfair Display', serif",
                  mb: 2.5,
                }}
              >
                {contactInfo.panadura.branch}
              </Typography>

              <Stack spacing={2}>
                <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                  <Phone
                    sx={{
                      color: "#d4af37",
                      mt: 0.5,
                      fontSize: { xs: "1rem", md: "1.2rem" },
                      flexShrink: 0,
                    }}
                  />
                  <Box>
                    <Typography
                      component="a"
                      href={`tel:${contactInfo.panadura.phone}`}
                      sx={{
                        color: "#eaeaea",
                        fontSize: { xs: "0.85rem", md: "0.9rem" },
                        fontWeight: 500,
                        mb: 0.5,
                        fontFamily: "'Poppins', sans-serif",
                        textDecoration: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#d4af37",
                        },
                      }}
                    >
                      {contactInfo.panadura.phone}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                  <LocationOn
                    sx={{
                      color: "#d4af37",
                      mt: 0.5,
                      fontSize: { xs: "1rem", md: "1.2rem" },
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#b0b0b0",
                      fontSize: { xs: "0.8rem", md: "0.85rem" },
                      lineHeight: 1.6,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {contactInfo.panadura.address}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#909090",
                    fontSize: { xs: "0.8rem", md: "0.85rem" },
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  ⏰ {contactInfo.panadura.hours}
                </Typography>
              </Stack>
            </Box>
          </Grid>

          {/* Branch 2 */}
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            lg={2.5}
            sx={{
              animation: isVisible ? "fadeInUp 0.8s ease-out 0.2s both" : "none",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#d4af37",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "'Playfair Display', serif",
                  mb: 2.5,
                }}
              >
                {contactInfo.rajagiriya.branch}
              </Typography>

              <Stack spacing={2}>
                <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                  <Phone
                    sx={{
                      color: "#d4af37",
                      mt: 0.5,
                      fontSize: { xs: "1rem", md: "1.2rem" },
                      flexShrink: 0,
                    }}
                  />
                  <Box>
                    <Typography
                      component="a"
                      href={`tel:${contactInfo.rajagiriya.phone}`}
                      sx={{
                        color: "#eaeaea",
                        fontSize: { xs: "0.85rem", md: "0.9rem" },
                        fontWeight: 500,
                        mb: 0.5,
                        fontFamily: "'Poppins', sans-serif",
                        textDecoration: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#d4af37",
                        },
                      }}
                    >
                      {contactInfo.rajagiriya.phone}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                  <LocationOn
                    sx={{
                      color: "#d4af37",
                      mt: 0.5,
                      fontSize: { xs: "1rem", md: "1.2rem" },
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#b0b0b0",
                      fontSize: { xs: "0.8rem", md: "0.85rem" },
                      lineHeight: 1.6,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {contactInfo.rajagiriya.address}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#909090",
                    fontSize: { xs: "0.8rem", md: "0.85rem" },
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  ⏰ {contactInfo.rajagiriya.hours}
                </Typography>
              </Stack>
            </Box>
          </Grid>

          {/* Contact Methods */}
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            lg={2.5}
            sx={{
              animation: isVisible ? "fadeInUp 0.8s ease-out 0.3s both" : "none",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#d4af37",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "'Playfair Display', serif",
                  mb: 2.5,
                }}
              >
                Contact Us
              </Typography>

              <Stack spacing={2}>
                <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                  <Email
                    sx={{
                      color: "#d4af37",
                      fontSize: { xs: "1rem", md: "1.2rem" },
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    component="a"
                    href="mailto:csantiquespanadura@gmail.com"
                    sx={{
                      color: "#eaeaea",
                      fontSize: { xs: "0.75rem", md: "0.85rem" },
                      wordBreak: "break-word",
                      fontFamily: "'Poppins', sans-serif",
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#d4af37",
                      },
                    }}
                  >
                    csantiquespanadura@gmail.com
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                  <WhatsApp
                    sx={{
                      color: "#25D366",
                      fontSize: { xs: "1rem", md: "1.2rem" },
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    component="a"
                    href="https://wa.me/94718820809"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#eaeaea",
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
                      fontFamily: "'Poppins', sans-serif",
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#25D366",
                      },
                    }}
                  >
                    071 882 0809
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#909090",
                    fontSize: { xs: "0.75rem", md: "0.8rem" },
                    fontStyle: "italic",
                    mt: 2,
                    lineHeight: 1.8,
                    fontFamily: "'Poppins', sans-serif",
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
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            lg={2.5}
            sx={{
              animation: isVisible ? "fadeInUp 0.8s ease-out 0.4s both" : "none",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#d4af37",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "'Playfair Display', serif",
                  mb: 2.5,
                }}
              >
                Follow Us
              </Typography>

              <Stack spacing={1.5}>
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  const iconColor = Icon === Facebook ? "#1877F2" : "#d4af37";
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        animation: isVisible
                          ? `fadeInUp 0.8s ease-out ${0.4 + index * 0.1}s both`
                          : "none",
                      }}
                    >
                      <IconButton
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: iconColor,
                          p: 0.5,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            color: Icon === Facebook ? "#1877F2" : "#e8c547",
                            transform: "scale(1.25) rotate(5deg)",
                          },
                        }}
                      >
                        <Icon fontSize="small" />
                      </IconButton>
                      <Typography
                        sx={{
                          color: "#b0b0b0",
                          fontSize: { xs: "0.75rem", md: "0.8rem" },
                          maxWidth: "150px",
                          fontFamily: "'Poppins', sans-serif",
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
            background: "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent)",
            mb: { xs: 3, md: 4 },
            animation: isVisible ? "fadeInUp 0.8s ease-out 0.5s both" : "none",
          }}
        />

        {/* Bottom Section */}
        <Box
          sx={{
            textAlign: "center",
            animation: isVisible ? "fadeInUp 0.8s ease-out 0.6s both" : "none",
          }}
        >
          <Typography
            sx={{
              color: "#d4af37",
              fontSize: { xs: "0.9rem", md: "1.05rem" },
              fontWeight: 600,
              letterSpacing: "0.1em",
              mb: 1,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            © {currentYear} CS ANTIQUES. All rights reserved.
          </Typography>

          <Typography
            sx={{
              color: "#909090",
              fontSize: { xs: "0.75rem", md: "0.85rem" },
              letterSpacing: "0.05em",
              fontFamily: "'Poppins', sans-serif",
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
