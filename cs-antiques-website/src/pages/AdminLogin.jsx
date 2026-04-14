import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { Lock, Email } from "@mui/icons-material";
import { apiUrl } from "../config/api";

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("test@csantiques.com");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(apiUrl("/api/auth/login"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // Store token and user info
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to admin dashboard
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError("Connection error. Make sure backend is running on port 5000. Error: " + err.message);
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0b0b0b",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          sx={{
            p: 4,
            background: "linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)",
            border: "1px solid rgba(212, 175, 55, 0.3)",
            borderRadius: "12px",
          }}
        >
          {/* Header */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              sx={{
                fontSize: "2.5rem",
                fontWeight: 800,
                background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "'Playfair Display', serif",
                mb: 1,
              }}
            >
              CS Antiques
            </Typography>
            <Typography
              sx={{
                fontSize: "1.1rem",
                color: "#b0b0b0",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Admin Portal
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 2, backgroundColor: "rgba(211, 47, 47, 0.1)" }}>
              {error}
            </Alert>
          )}

          {/* Login Form */}
          <Box component="form" onSubmit={handleLogin} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* Email Field */}
            <Box>
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#d4af37",
                  mb: 1,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Email Address
              </Typography>
              <TextField
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@csantiques.com"
                InputProps={{
                  startAdornment: <Email sx={{ mr: 1, color: "#d4af37" }} />,
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#eaeaea",
                    "& fieldset": {
                      borderColor: "rgba(212, 175, 55, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(212, 175, 55, 0.6)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#d4af37",
                    },
                  },
                  "& .MuiOutlinedInput-input::placeholder": {
                    color: "#707070",
                    opacity: 1,
                  },
                }}
              />
            </Box>

            {/* Password Field */}
            <Box>
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#d4af37",
                  mb: 1,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Password
              </Typography>
              <TextField
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                InputProps={{
                  startAdornment: <Lock sx={{ mr: 1, color: "#d4af37" }} />,
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#eaeaea",
                    "& fieldset": {
                      borderColor: "rgba(212, 175, 55, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(212, 175, 55, 0.6)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#d4af37",
                    },
                  },
                  "& .MuiOutlinedInput-input::placeholder": {
                    color: "#707070",
                    opacity: 1,
                  },
                }}
              />
            </Box>

            {/* Login Button */}
            <Button
              fullWidth
              type="submit"
              disabled={loading}
              sx={{
                mt: 2,
                py: 1.5,
                background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
                color: "#0b0b0b",
                fontWeight: 700,
                fontSize: "1rem",
                borderRadius: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)",
                  transform: "translateY(-2px)",
                },
                "&:disabled": {
                  opacity: 0.7,
                },
              }}
            >
              {loading ? <CircularProgress size={24} /> : "Sign In"}
            </Button>
          </Box>


        </Paper>
      </Container>
    </Box>
  );
}

export default AdminLogin;
