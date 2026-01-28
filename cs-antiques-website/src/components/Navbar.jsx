import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Collections", path: "/products" },
    { label: "Gallery", path: "/gallery" },
    { label: "Location", path: "/location" },
    { label: "Contact", path: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#0b0b0b",
        height: "100%",
        pt: 3,
      }}
    >
      <Box sx={{ px: 2, mb: 3 }}>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: "#d4af37", display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            component={RouterLink}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              py: 1.5,
              px: 2,
              "&:hover": {
                backgroundColor: "rgba(212, 175, 55, 0.1)",
                borderLeft: "3px solid #d4af37",
              },
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                "& .MuiTypography-root": {
                  color: "#eaeaea",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(11, 11, 11, 0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
        boxShadow: "0 2px 20px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 1,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            p: 0,
          }}
        >
          {/* Logo */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="CS Antiques"
              sx={{
                height: { xs: 50, md: 60 },
                width: "auto",
                filter: "drop-shadow(0 4px 15px rgba(212,175,55,0.3))",
              }}
            />
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={RouterLink}
                to={item.path}
                sx={{
                  color: "#eaeaea",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  px: 2,
                  py: 1,
                  position: "relative",
                  transition: "all 0.3s ease",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    width: 0,
                    height: "2px",
                    backgroundColor: "#d4af37",
                    transition: "all 0.3s ease",
                    transform: "translateX(-50%)",
                  },
                  "&:hover": {
                    color: "#d4af37",
                    "&::after": {
                      width: "80%",
                    },
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#d4af37",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Container>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#0b0b0b",
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
