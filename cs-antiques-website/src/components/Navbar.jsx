import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
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
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutClickCount, setAboutClickCount] = useState(0);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [clickTimeoutId, setClickTimeoutId] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Collections", path: "/products" },
    { label: "Offers", path: "/offers" },
    { label: "Location", path: "/location" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    
    if (aboutClickCount === 0) {
      navigate("/about");
      setAboutClickCount(1);
      
      if (clickTimeoutId) clearTimeout(clickTimeoutId);
      const timeoutId = setTimeout(() => {
        setAboutClickCount(0);
      }, 3000);
      setClickTimeoutId(timeoutId);
      return;
    }

    const newCount = aboutClickCount + 1;
    setAboutClickCount(newCount);

    if (newCount === 3) {
      setShowPasswordDialog(true);
      setAboutClickCount(0);
      setEnteredPassword("");
      if (clickTimeoutId) clearTimeout(clickTimeoutId);
      setClickTimeoutId(null);
    }
  };

  const handlePasswordSubmit = () => {
    if (enteredPassword.toLowerCase() === "chehan") {
      setShowPasswordDialog(false);
      setEnteredPassword("");
      setAboutClickCount(0);
      if (clickTimeoutId) clearTimeout(clickTimeoutId);
      setClickTimeoutId(null);
      navigate("/admin/login");
    } else {
      setEnteredPassword("");
      alert("❌ Incorrect password! Try again.");
    }
  };

  const handlePasswordCancel = () => {
    setShowPasswordDialog(false);
    setEnteredPassword("");
    setAboutClickCount(0);
    if (clickTimeoutId) clearTimeout(clickTimeoutId);
    setClickTimeoutId(null);
  };

  const isActive = (path) => location.pathname === path;

  const drawer = (
    <Box
      sx={{
        width: 280,
        backgroundColor: "#0b0b0b",
        height: "100%",
        pt: 2,
        background: "linear-gradient(180deg, #1a1a1a 0%, #0b0b0b 100%)",
      }}
    >
      <Box sx={{ px: 2, mb: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box component="img" src={logo} alt="CS Antiques" sx={{ height: 40, width: "auto" }} />
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: "#d4af37", "&:hover": { background: "rgba(212, 175, 55, 0.1)" } }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      
      <Box sx={{ borderTop: "1px solid rgba(212, 175, 55, 0.2)", pt: 2 }}>
        <List sx={{ px: 1 }}>
          {navItems.map((item) => (
            <ListItem
              key={item.label}
              component={item.label === "About" ? "button" : RouterLink}
              to={item.label === "About" ? undefined : item.path}
              onClick={item.label === "About" ? handleAboutClick : handleDrawerToggle}
              sx={{
                py: 1.8,
                px: 2,
                mb: 1,
                borderRadius: "8px",
                background: isActive(item.path) ? "rgba(212, 175, 55, 0.15)" : "transparent",
                borderLeft: isActive(item.path) ? "3px solid #d4af37" : "3px solid transparent",
                pl: isActive(item.path) ? "calc(2rem - 3px)" : "2rem",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(212, 175, 55, 0.2)",
                  borderLeftColor: "#d4af37",
                  pl: "calc(2rem - 3px)",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  "& .MuiTypography-root": {
                    color: isActive(item.path) ? "#d4af37" : "#e0e0e0",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    fontSize: "0.95rem",
                    fontFamily: "'Poppins', sans-serif",
                    textTransform: "uppercase",
                    transition: "color 0.3s ease",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes navGlow {
          0%, 100% {
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          }
          50% {
            box-shadow: 0 12px 48px rgba(212, 175, 55, 0.15);
          }
        }
      `}</style>

      <AppBar
        position="sticky"
        sx={{
          background: scrolled 
            ? "linear-gradient(135deg, rgba(11, 11, 11, 0.98) 0%, rgba(11, 11, 11, 0.96) 100%)"
            : "linear-gradient(135deg, rgba(11, 11, 11, 0.92) 0%, rgba(11, 11, 11, 0.88) 100%)",
          backdropFilter: "blur(30px)",
          borderBottom: scrolled 
            ? "1px solid rgba(212, 175, 55, 0.4)" 
            : "1px solid rgba(212, 175, 55, 0.2)",
          boxShadow: scrolled 
            ? "0 12px 48px rgba(212, 175, 55, 0.2), inset 0 1px 0 rgba(212, 175, 55, 0.15)"
            : "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(212, 175, 55, 0.1)",
          WebkitBackdropFilter: "blur(30px)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Toolbar sx={{ py: { xs: 1, md: 1.5 } }}>
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              p: 0,
              gap: { xs: 2, md: 4 },
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
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "scale(1.08)",
                },
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="CS Antiques"
                sx={{
                  height: { xs: 45, md: 55 },
                  width: "auto",
                  filter: scrolled 
                    ? "drop-shadow(0 6px 20px rgba(212,175,55,0.4))"
                    : "drop-shadow(0 4px 15px rgba(212,175,55,0.3))",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    filter: "drop-shadow(0 8px 30px rgba(212,175,55,0.6))",
                  },
                }}
              />
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
              }}
            >
              {navItems.map((item, index) => (
                <Button
                  key={item.label}
                  component={item.label === "About" ? "button" : RouterLink}
                  to={item.label === "About" ? undefined : item.path}
                  onClick={item.label === "About" ? handleAboutClick : undefined}
                  sx={{
                    color: isActive(item.path) ? "#d4af37" : "#e0e0e0",
                    fontSize: "0.9rem",
                    fontWeight: isActive(item.path) ? 700 : 600,
                    letterSpacing: "0.06em",
                    px: 2.5,
                    py: 1.2,
                    position: "relative",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    textTransform: "uppercase",
                    fontFamily: "'Poppins', sans-serif",
                    borderRadius: "6px",
                    background: isActive(item.path) 
                      ? "rgba(212, 175, 55, 0.1)"
                      : "transparent",
                    border: isActive(item.path)
                      ? "1px solid rgba(212, 175, 55, 0.3)"
                      : "1px solid transparent",
                    
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      bottom: "8px",
                      left: "50%",
                      width: isActive(item.path) ? "60%" : 0,
                      height: "2px",
                      backgroundColor: "#d4af37",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: "translateX(-50%)",
                      borderRadius: "1px",
                      boxShadow: "0 0 12px rgba(212, 175, 55, 0.6)",
                    },
                    
                    "&:hover": {
                      color: "#d4af37",
                      background: "rgba(212, 175, 55, 0.12)",
                      border: "1px solid rgba(212, 175, 55, 0.4)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 24px rgba(212, 175, 55, 0.2)",
                      
                      "&::before": {
                        width: "70%",
                        boxShadow: "0 0 16px rgba(212, 175, 55, 0.8)",
                      },
                    },
                    
                    "&:active": {
                      transform: "translateY(0)",
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
                transition: "all 0.3s ease",
                background: "rgba(212, 175, 55, 0.08)",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                borderRadius: "8px",
                "&:hover": {
                  transform: "scale(1.1)",
                  background: "rgba(212, 175, 55, 0.15)",
                  borderColor: "#d4af37",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#0b0b0b",
            width: 280,
            borderLeft: "1px solid rgba(212, 175, 55, 0.2)",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Secret Admin Unlock Dialog */}
      <Dialog open={showPasswordDialog} onClose={handlePasswordCancel} maxWidth="sm" fullWidth>
        <DialogTitle
          sx={{
            background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
            color: "#0b0b0b",
            fontWeight: 700,
            letterSpacing: "0.08em",
            fontFamily: "'Playfair Display', serif",
            textTransform: "uppercase",
            fontSize: "1.2rem",
          }}
        >
          🔐 Admin Access
        </DialogTitle>
        <DialogContent sx={{ pt: 3, pb: 2, background: "linear-gradient(135deg, #1a1a1a 0%, #0b0b0b 100%)" }}>
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
                color: "#e0e0e0",
                "&:hover fieldset": {
                  borderColor: "#d4af37",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#d4af37",
                  boxShadow: "0 0 12px rgba(212, 175, 55, 0.3)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#a0a0a0",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#d4af37",
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ p: 2, background: "linear-gradient(135deg, #1a1a1a 0%, #0b0b0b 100%)", gap: 1 }}>
          <Button
            onClick={handlePasswordCancel}
            sx={{
              color: "#a0a0a0",
              textTransform: "uppercase",
              fontWeight: 700,
              borderRadius: "6px",
              transition: "all 0.3s ease",
              "&:hover": {
                color: "#d4af37",
                background: "rgba(212, 175, 55, 0.1)",
              },
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
              borderRadius: "6px",
              px: 3,
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0 8px 24px rgba(212, 175, 55, 0.5)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Unlock
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Navbar;
