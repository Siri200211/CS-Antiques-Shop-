import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Card,
  Grid,
  Alert,
} from "@mui/material";
import { Logout, Edit, Delete, Add, Dashboard, Settings } from "@mui/icons-material";

function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    originalPrice: "",
    description: "",
    condition: "",
    mainImage: "",
  });

  // Check authentication on mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userStr = localStorage.getItem("user");

    if (!token || !userStr) {
      navigate("/admin/login");
      return;
    }

    const userData = JSON.parse(userStr);
    setUser(userData);
    fetchProducts();
  }, [navigate]);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products");
      const data = await response.json();
      setProducts(data.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/admin/login");
  };

  // Open add/edit dialog
  const handleOpenDialog = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        category: product.category,
        price: product.price,
        originalPrice: product.originalPrice || "",
        description: product.description || "",
        condition: product.condition || "",
        mainImage: product.mainImage || "",
      });
    } else {
      setEditingProduct(null);
      setFormData({
        name: "",
        category: "",
        price: "",
        originalPrice: "",
        description: "",
        condition: "",
        mainImage: "",
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingProduct(null);
  };

  // Handle form submission
  const handleSaveProduct = async () => {
    const token = localStorage.getItem("authToken");

    try {
      const url = editingProduct
        ? `http://localhost:5000/api/products/${editingProduct.id}`
        : "http://localhost:5000/api/products";

      const method = editingProduct ? "PUT" : "POST";

      // Convert numeric fields
      const productData = {
        ...formData,
        price: parseFloat(formData.price) || 0,
        originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
      };

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });

      const data = await response.json();

      if (data.success) {
        fetchProducts();
        handleCloseDialog();
        alert(editingProduct ? "Product updated!" : "Product created!");
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Error saving product: " + error.message);
    }
  };

  // Handle delete
  const handleDeleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    const token = localStorage.getItem("authToken");

    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        fetchProducts();
        alert("Product deleted!");
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Error deleting product: " + error.message);
    }
  };

  if (!user) return null;

  return (
    <Box sx={{ backgroundColor: "#0b0b0b", minHeight: "100vh" }}>
      {/* Top Navigation */}
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.08) 100%)",
          borderBottom: "1px solid rgba(212, 175, 55, 0.3)",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Dashboard sx={{ mr: 2, color: "#d4af37" }} />
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#d4af37",
              fontFamily: "'Playfair Display', serif",
              flex: 1,
            }}
          >
            CS Antiques Admin
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography sx={{ color: "#b0b0b0", fontSize: "0.9rem" }}>
              Welcome, {user.email}
            </Typography>
            <IconButton
              onClick={(e) => setAnchorEl(e.currentTarget)}
              sx={{ color: "#d4af37" }}
            >
              <Settings />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "#1a1a1a",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                },
              }}
            >
              <MenuItem onClick={handleLogout}>
                <Logout sx={{ mr: 1, color: "#d4af37" }} />
                <Typography sx={{ color: "#eaeaea" }}>Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: 800,
              color: "#d4af37",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Products Management
          </Typography>
          <Button
            startIcon={<Add />}
            onClick={() => handleOpenDialog()}
            sx={{
              background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
              color: "#0b0b0b",
              fontWeight: 700,
              textTransform: "uppercase",
              "&:hover": {
                boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)",
              },
            }}
          >
            Add Product
          </Button>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                background: "linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)",
                border: "1px solid rgba(212, 175, 55, 0.3)",
                p: 2,
              }}
            >
              <Typography sx={{ color: "#b0b0b0", fontSize: "0.9rem" }}>
                Total Products
              </Typography>
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "#d4af37",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {products.length}
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Products Table */}
        <TableContainer
          component={Paper}
          sx={{
            background: "linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)",
            border: "1px solid rgba(212, 175, 55, 0.3)",
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "rgba(212, 175, 55, 0.15)" }}>
                <TableCell sx={{ color: "#d4af37", fontWeight: 700 }}>ID</TableCell>
                <TableCell sx={{ color: "#d4af37", fontWeight: 700 }}>Name</TableCell>
                <TableCell sx={{ color: "#d4af37", fontWeight: 700 }}>Category</TableCell>
                <TableCell sx={{ color: "#d4af37", fontWeight: 700 }} align="right">
                  Price
                </TableCell>
                <TableCell sx={{ color: "#d4af37", fontWeight: 700 }}>Condition</TableCell>
                <TableCell sx={{ color: "#d4af37", fontWeight: 700 }} align="center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(212, 175, 55, 0.08)",
                    },
                    borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
                  }}
                >
                  <TableCell sx={{ color: "#eaeaea" }}>{product.id}</TableCell>
                  <TableCell sx={{ color: "#eaeaea" }}>{product.name}</TableCell>
                  <TableCell sx={{ color: "#b0b0b0" }}>{product.category}</TableCell>
                  <TableCell sx={{ color: "#eaeaea" }} align="right">
                    Rs. {product.price?.toLocaleString()}
                  </TableCell>
                  <TableCell sx={{ color: "#b0b0b0" }}>{product.condition}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      size="small"
                      onClick={() => handleOpenDialog(product)}
                      sx={{ color: "#4caf50" }}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteProduct(product.id)}
                      sx={{ color: "#f44336" }}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* Add/Edit Product Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: "linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)",
            border: "1px solid rgba(212, 175, 55, 0.3)",
          },
        }}
      >
        <DialogTitle sx={{ color: "#d4af37", fontWeight: 700 }}>
          {editingProduct ? "Edit Product" : "Add New Product"}
        </DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2 }}>
          <TextField
            fullWidth
            label="Product Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#eaeaea",
                "& fieldset": {
                  borderColor: "rgba(212, 175, 55, 0.3)",
                },
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#707070",
              },
              "& .MuiInputLabel-root": {
                color: "#d4af37",
              },
            }}
          />
          <TextField
            fullWidth
            label="Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#eaeaea",
                "& fieldset": {
                  borderColor: "rgba(212, 175, 55, 0.3)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#d4af37",
              },
            }}
          />
          <TextField
            fullWidth
            label="Price"
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#eaeaea",
                "& fieldset": {
                  borderColor: "rgba(212, 175, 55, 0.3)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#d4af37",
              },
            }}
          />
          <TextField
            fullWidth
            label="Original Price"
            type="number"
            value={formData.originalPrice}
            onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#eaeaea",
                "& fieldset": {
                  borderColor: "rgba(212, 175, 55, 0.3)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#d4af37",
              },
            }}
          />
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={3}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#eaeaea",
                "& fieldset": {
                  borderColor: "rgba(212, 175, 55, 0.3)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#d4af37",
              },
            }}
          />
          <TextField
            fullWidth
            label="Condition"
            value={formData.condition}
            onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#eaeaea",
                "& fieldset": {
                  borderColor: "rgba(212, 175, 55, 0.3)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#d4af37",
              },
            }}
          />
          <TextField
            fullWidth
            label="Main Image URL"
            value={formData.mainImage}
            onChange={(e) => setFormData({ ...formData, mainImage: e.target.value })}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#eaeaea",
                "& fieldset": {
                  borderColor: "rgba(212, 175, 55, 0.3)",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#d4af37",
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleCloseDialog} sx={{ color: "#b0b0b0" }}>
            Cancel
          </Button>
          <Button
            onClick={handleSaveProduct}
            sx={{
              background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
              color: "#0b0b0b",
              fontWeight: 700,
            }}
          >
            {editingProduct ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AdminDashboard;
