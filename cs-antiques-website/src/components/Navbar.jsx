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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutClickCount, setAboutClickCount] = useState(0);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Collections", path: "/products" },
    { label: "Location", path: "/location" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Secret admin unlock trigger
  const handleAboutClick = (e) => {
    e.preventDefault();
    const newCount = aboutClickCount + 1;
    setAboutClickCount(newCount);

    // Show password dialog after 3 clicks
    if (newCount === 3) {
      setShowPasswordDialog(true);
      setAboutClickCount(0); // Reset counter
      setEnteredPassword(""); // Clear password field
    }
  };

  const handlePasswordSubmit = () => {
    if (enteredPassword.toLowerCase() === "chehan") {
      // Correct password - navigate to admin login
      setShowPasswordDialog(false);
      setEnteredPassword("");
      navigate("/admin/login");
    } else {
      // Wrong password - clear and shake
      setEnteredPassword("");
      alert("❌ Incorrect password! Try again.");
    }
  };

  const handlePasswordCancel = () => {
    setShowPasswordDialog(false);
    setEnteredPassword("");
    setAboutClickCount(0);
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
            component={item.label === "About" ? "button" : RouterLink}
            to={item.label === "About" ? undefined : item.path}
            onClick={item.label === "About" ? handleAboutClick : handleDrawerToggle}
            sx={{
              py: 2,
              px: 2,
              "&:hover": {
                backgroundColor: "rgba(212, 175, 55, 0.15)",
                borderLeft: "4px solid #d4af37",
                pl: "calc(2rem - 4px)",
              },
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                "& .MuiTypography-root": {
                  color: "#d4af37",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  fontSize: "1.1rem",
                  fontFamily: "'Playfair Display', serif",
                  textTransform: "uppercase",
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
        background: "linear-gradient(135deg, rgba(11, 11, 11, 0.7) 0%, rgba(11, 11, 11, 0.5) 100%)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(212, 175, 55, 0.3)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(212, 175, 55, 0.2)",
        WebkitBackdropFilter: "blur(20px)",
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
              gap: 3,
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={item.label === "About" ? "button" : RouterLink}
                to={item.label === "About" ? undefined : item.path}
                onClick={item.label === "About" ? handleAboutClick : undefined}
                sx={{
                  color: "#eaeaea",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  px: 3,
                  py: 1.5,
                  position: "relative",
                  transition: "all 0.3s ease",
                  textTransform: "uppercase",
                  fontFamily: "'Playfair Display', serif",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    width: 0,
                    height: "3px",
                    backgroundColor: "#d4af37",
                    transition: "all 0.3s ease",
                    transform: "translateX(-50%)",
                    borderRadius: "2px",
                  },
                  "&:hover": {
                    color: "#d4af37",
                    transform: "translateY(-2px)",
                    "&::after": {
                      width: "100%",
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

      {/* Secret Admin Unlock Dialog */}
      <Dialog open={showPasswordDialog} onClose={handlePasswordCancel}>
        <DialogTitle
          sx={{
            background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
            color: "#0b0b0b",
            fontWeight: 700,
            letterSpacing: "0.08em",
            fontFamily: "'Playfair Display', serif",
            textTransform: "uppercase",
          }}
        >
          🔐 Admin Access
        </DialogTitle>
        <DialogContent sx={{ pt: 3, minWidth: 350 }}>
          <TextField
            autoFocus
            fullWidth
            type="password"
            label="Enter Password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handlePasswordSubmit();
              }
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "#d4af37",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#d4af37",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#d4af37",
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button
            onClick={handlePasswordCancel}
            sx={{
              color: "#666",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handlePasswordSubmit}
            sx={{
              background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
              color: "#0b0b0b",
              fontWeight: 700,
              textTransform: "uppercase",
              "&:hover": {
                boxShadow: "0 6px 20px rgba(212, 175, 55, 0.4)",
              },
            }}
          >
            Unlock
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
}

export default Navbar;
