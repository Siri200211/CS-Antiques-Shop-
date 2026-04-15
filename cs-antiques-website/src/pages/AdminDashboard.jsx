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
  CircularProgress,
  Tabs,
  Tab,
  Chip,
} from "@mui/material";
import { Logout, Edit, Delete, Add, Dashboard, Settings, PersonAdd, LockReset, AdminPanelSettings, LocalOffer } from "@mui/icons-material";
import { apiUrl } from "../config/api";

function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [adminUsers, setAdminUsers] = useState([]);
  const [openNewAdminDialog, setOpenNewAdminDialog] = useState(false);
  const [openResetPasswordDialog, setOpenResetPasswordDialog] = useState(false);
  const [selectedAdminId, setSelectedAdminId] = useState(null);
  const [newAdminForm, setNewAdminForm] = useState({ email: "", password: "", role: "admin" });
  const [resetPasswordForm, setResetPasswordForm] = useState({ newPassword: "", confirmPassword: "" });
  const [adminActionLoading, setAdminActionLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    originalPrice: "",
    description: "",
    condition: "",
    mainImage: "",
  });
  const [offers, setOffers] = useState([]);
  const [openOffersDialog, setOpenOffersDialog] = useState(false);
  const [editingOffer, setEditingOffer] = useState(null);
  const [offersFormData, setOffersFormData] = useState({
    title: "",
    description: "",
    promoCode: "",
    discount: "",
    validFrom: "",
    validUntil: "",
    imageUrl: "",
  });

  // Fetch all products
  async function fetchProducts() {
    try {
      const response = await fetch(apiUrl("/api/products"));
      const data = await response.json();
      setProducts(data.data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  // Fetch all offers
  async function fetchOffers() {
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(apiUrl("/api/offers/admin/all"), {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setOffers(data.data || []);
    } catch (error) {
      console.error("Error fetching offers:", error);
    }
  }

  // Fetch all admin users
  async function fetchAdminUsers() {
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(apiUrl("/api/auth/admin-users"), {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setAdminUsers(data.data || []);
    } catch (error) {
      console.error("Error fetching admin users:", error);
    }
  }

  // Create new admin user
  const handleCreateAdmin = async () => {
    if (!newAdminForm.email || !newAdminForm.password) {
      alert("Email and password are required");
      return;
    }
    if (newAdminForm.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    setAdminActionLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(apiUrl("/api/auth/admin-users"), {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(newAdminForm),
      });
      const data = await response.json();
      if (data.success) {
        alert("Admin user created successfully!");
        setOpenNewAdminDialog(false);
        setNewAdminForm({ email: "", password: "", role: "admin" });
        fetchAdminUsers();
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setAdminActionLoading(false);
    }
  };

  // Reset admin password
  const handleResetPassword = async () => {
    if (!resetPasswordForm.newPassword || resetPasswordForm.newPassword.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    if (resetPasswordForm.newPassword !== resetPasswordForm.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setAdminActionLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(apiUrl(`/api/auth/admin-users/${selectedAdminId}/reset-password`), {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ newPassword: resetPasswordForm.newPassword }),
      });
      const data = await response.json();
      if (data.success) {
        alert("Password reset successfully!");
        setOpenResetPasswordDialog(false);
        setResetPasswordForm({ newPassword: "", confirmPassword: "" });
        setSelectedAdminId(null);
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setAdminActionLoading(false);
    }
  };

  // Check authentication on mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userStr = localStorage.getItem("user");

    if (!token || !userStr) {
      navigate("/admin/login");
      return;
    }

    try {
      const userData = JSON.parse(userStr);
      setUser(userData);
      fetchProducts();
      fetchAdminUsers();
      fetchOffers();
    } catch {
      // Corrupted data - clear and redirect to login
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      navigate("/admin/login");
    }
  }, [navigate]);

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
      setImagePreview(product.mainImage || null);
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
      setImagePreview(null);
    }
    setImageFile(null);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingProduct(null);
    setImageFile(null);
    setImagePreview(null);
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file");
        return;
      }
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size must be less than 5MB");
        return;
      }
      setImageFile(file);
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Upload image to backend
  const uploadImage = async () => {
    if (!imageFile) return formData.mainImage; // Return existing image if no new file

    setUploadingImage(true);
    try {
      const token = localStorage.getItem("authToken");
      const formDataObj = new FormData();
      formDataObj.append("image", imageFile);

      const response = await fetch(apiUrl("/api/products/upload-image"), {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataObj,
      });

      const data = await response.json();

      if (data.success) {
        return data.data.imagePath;
      } else {
        alert("Error uploading image: " + data.message);
        return null;
      }
    } catch (error) {
      alert("Error uploading image: " + error.message);
      return null;
    } finally {
      setUploadingImage(false);
    }
  };

  // Handle form submission
  const handleSaveProduct = async () => {
    const token = localStorage.getItem("authToken");

    try {
      // Upload image if a new one was selected
      let imagePath = formData.mainImage;
      if (imageFile) {
        imagePath = await uploadImage();
        if (!imagePath) return; // Image upload failed
      }

      const url = editingProduct
        ? apiUrl(`/api/products/${editingProduct.id}`)
        : apiUrl("/api/products");

      const method = editingProduct ? "PUT" : "POST";

      // Convert numeric fields
      const productData = {
        ...formData,
        price: parseFloat(formData.price) || 0,
        originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
        mainImage: imagePath?.trim() || null,
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
      const response = await fetch(apiUrl(`/api/products/${id}`), {
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

  // Open add/edit offers dialog
  const handleOpenOffersDialog = (offer = null) => {
    if (offer) {
      setEditingOffer(offer);
      setOffersFormData({
        title: offer.title,
        description: offer.description || "",
        promoCode: offer.promoCode || "",
        discount: offer.discount || "",
        validFrom: offer.validFrom ? offer.validFrom.split("T")[0] : "",
        validUntil: offer.validUntil ? offer.validUntil.split("T")[0] : "",
        imageUrl: offer.imageUrl || "",
      });
      setImagePreview(offer.imageUrl || null);
    } else {
      setEditingOffer(null);
      setOffersFormData({
        title: "",
        description: "",
        promoCode: "",
        discount: "",
        validFrom: "",
        validUntil: "",
        imageUrl: "",
      });
      setImagePreview(null);
    }
    setImageFile(null);
    setOpenOffersDialog(true);
  };

  const handleCloseOffersDialog = () => {
    setOpenOffersDialog(false);
    setEditingOffer(null);
    setImageFile(null);
    setImagePreview(null);
  };

  // Handle save offer
  const handleSaveOffer = async () => {
    const token = localStorage.getItem("authToken");

    if (!offersFormData.title || !offersFormData.promoCode || !offersFormData.discount || !offersFormData.validFrom || !offersFormData.validUntil) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const url = editingOffer
        ? apiUrl(`/api/offers/${editingOffer.id}`)
        : apiUrl("/api/offers");

      const method = editingOffer ? "PUT" : "POST";

      // Prepare offer data - send image as URL (either from form or placeholder)
      const offerData = {
        title: offersFormData.title,
        description: offersFormData.description,
        promoCode: offersFormData.promoCode,
        discount: parseInt(offersFormData.discount) || 0,
        validFrom: new Date(offersFormData.validFrom).toISOString(),
        validUntil: new Date(offersFormData.validUntil).toISOString(),
        imageUrl: offersFormData.imageUrl || "https://via.placeholder.com/300x200?text=Offer",
      };

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(offerData),
      });

      const data = await response.json();

      if (data.success) {
        fetchOffers();
        handleCloseOffersDialog();
        alert(editingOffer ? "Offer updated!" : "Offer created!");
      } else {
        alert("Error: " + (data.message || JSON.stringify(data)));
      }
    } catch (error) {
      alert("Error saving offer: " + error.message);
    }
  };

  // Handle delete offer
  const handleDeleteOffer = async (id) => {
    if (!window.confirm("Are you sure you want to delete this offer?")) return;

    const token = localStorage.getItem("authToken");

    try {
      const response = await fetch(apiUrl(`/api/offers/${id}`), {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        fetchOffers();
        alert("Offer deleted!");
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Error deleting offer: " + error.message);
    }
  };

  if (!user) return (
    <Box sx={{ backgroundColor: "#0b0b0b", minHeight: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <CircularProgress sx={{ color: "#d4af37" }} />
    </Box>
  );

  return (
    <Box sx={{ backgroundColor: "#0b0b0b", minHeight: "100vh", width: "100%" }}>
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

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onChange={(_, v) => setActiveTab(v)}
          sx={{
            mb: 4,
            borderBottom: "1px solid rgba(212, 175, 55, 0.3)",
            "& .MuiTab-root": { color: "#b0b0b0", fontWeight: 600, textTransform: "uppercase" },
            "& .Mui-selected": { color: "#d4af37 !important" },
            "& .MuiTabs-indicator": { backgroundColor: "#d4af37" },
          }}
        >
          <Tab icon={<Dashboard />} iconPosition="start" label="Products" />
          <Tab icon={<LocalOffer />} iconPosition="start" label="Offers" />
          <Tab icon={<AdminPanelSettings />} iconPosition="start" label="Admin Users" />
        </Tabs>

        {/* ═══════════ PRODUCTS TAB ═══════════ */}
        {activeTab === 0 && (
          <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
              <Typography sx={{ fontSize: "2rem", fontWeight: 800, color: "#d4af37", fontFamily: "'Playfair Display', serif" }}>
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
                  "&:hover": { boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)" },
                }}
              >
                Add Product
              </Button>
            </Box>

            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ background: "rgba(212, 175, 55, 0.08)", border: "1px solid rgba(212, 175, 55, 0.3)", p: 2 }}>
                  <Typography sx={{ color: "#b0b0b0", fontSize: "0.9rem" }}>Total Products</Typography>
                  <Typography sx={{ fontSize: "2rem", fontWeight: 800, color: "#d4af37", fontFamily: "'Playfair Display', serif" }}>
                    {products.length}
                  </Typography>
                </Card>
              </Grid>
            </Grid>

            <TableContainer component={Paper} sx={{ background: "rgba(212, 175, 55, 0.05)", border: "1px solid rgba(212, 175, 55, 0.3)" }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "rgba(212, 175, 55, 0.15)" }}>
                    <TableCell sx={{ color: "#d4af37", fontWeight: 700 }}>ID</TableCell>
                    <TableCell sx={{ color: "#d4af37", fontWeight: 700 }}>Name</TableCell>
                    <TableCell sx={{ color: "#d4af37", fontWeight: 700 }}>Category</TableCell>
                    <TableCell sx={{ color: "#d4af37", fontWeight: 700 }} align="right">Price</TableCell>
                    <TableCell sx={{ color: "#d4af37", fontWeight: 700 }}>Condition</TableCell>
                    <TableCell sx={{ color: "#d4af37", fontWeight: 700 }} align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id} sx={{ "&:hover": { backgroundColor: "rgba(212, 175, 55, 0.08)" }, borderBottom: "1px solid rgba(212, 175, 55, 0.2)" }}>
                      <TableCell sx={{ color: "#eaeaea" }}>{product.id}</TableCell>
                      <TableCell sx={{ color: "#eaeaea" }}>{product.name}</TableCell>
                      <TableCell sx={{ color: "#b0b0b0" }}>{product.category}</TableCell>
                      <TableCell sx={{ color: "#eaeaea" }} align="right">Rs. {product.price?.toLocaleString()}</TableCell>
                      <TableCell sx={{ color: "#b0b0b0" }}>{product.condition}</TableCell>
                      <TableCell align="center">
                        <IconButton size="small" onClick={() => handleOpenDialog(product)} sx={{ color: "#4caf50" }}><Edit /></IconButton>
                        <IconButton size="small" onClick={() => handleDeleteProduct(product.id)} sx={{ color: "#f44336" }}><Delete /></IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}

        {/* ═══════════ OFFERS TAB ═══════════ */}
        {activeTab === 1 && (
          <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
              <Typography sx={{ fontSize: "2rem", fontWeight: 800, color: "#d4af37", fontFamily: "'Playfair Display', serif" }}>
                Offers & Promotions
              </Typography>
              <Button
                startIcon={<Add />}
                onClick={() => handleOpenOffersDialog()}
                sx={{
                  background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
                  color: "#0b0b0b",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  "&:hover": { boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)" },
                }}
              >
                Add Offer
              </Button>
            </Box>

            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ background: "rgba(212, 175, 55, 0.08)", border: "1px solid rgba(212, 175, 55, 0.3)", p: 2 }}>
                  <Typography sx={{ color: "#b0b0b0", fontSize: "0.9rem" }}>Total Offers</Typography>
                  <Typography sx={{ fontSize: "2rem", fontWeight: 800, color: "#d4af37", fontFamily: "'Playfair Display', serif" }}>
                    {offers.length}
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ background: "rgba(212, 175, 55, 0.08)", border: "1px solid rgba(212, 175, 55, 0.3)", p: 2 }}>
                  <Typography sx={{ color: "#b0b0b0", fontSize: "0.9rem" }}>Active Offers</Typography>
                  <Typography sx={{ fontSize: "2rem", fontWeight: 800, color: "#4caf50", fontFamily: "'Playfair Display', serif" }}>
                    {offers.filter(o => o.isActive).length}
                  </Typography>
                </Card>
              </Grid>
            </Grid>

            <TableContainer component={Paper} sx={{ background: "rgba(212, 175, 55, 0.05)", border: "1px solid rgba(212, 175, 55, 0.3)" }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "rgba(212, 175, 55, 0.15)" }}>
                    <TableCell sx={{ color: "#d4af37", fontWeight: 700 }}>ID</TableCell>
                    <TableCell sx={{ color: "#d4af37", fontWeight: 700 }}>Title</TableCell>
                    <TableCell sx={{ color: "#d4af37", fontWeight: 700 }}>Promo Code</TableCell>
                    <TableCell sx={{ color: "#d4af37", fontWeight: 700 }} align="center">Discount</TableCell>
                    <TableCell sx={{ color: "#d4af37", fontWeight: 700 }}>Valid Until</TableCell>
                    <TableCell sx={{ color: "#d4af37", fontWeight: 700 }}>Status</TableCell>
                    <TableCell sx={{ color: "#d4af37", fontWeight: 700 }} align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {offers.map((offer) => (
                    <TableRow key={offer.id} sx={{ "&:hover": { backgroundColor: "rgba(212, 175, 55, 0.08)" }, borderBottom: "1px solid rgba(212, 175, 55, 0.2)" }}>
                      <TableCell sx={{ color: "#eaeaea" }}>{offer.id}</TableCell>
                      <TableCell sx={{ color: "#eaeaea" }}>{offer.title}</TableCell>
                      <TableCell sx={{ color: "#d4af37", fontWeight: 700 }}>{offer.promoCode}</TableCell>
                      <TableCell sx={{ color: "#eaeaea" }} align="center">{offer.discount}%</TableCell>
                      <TableCell sx={{ color: "#b0b0b0", fontSize: "0.85rem" }}>
                        {new Date(offer.validUntil).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={offer.isActive ? "Active" : "Inactive"}
                          size="small"
                          sx={{
                            backgroundColor: offer.isActive ? "rgba(76,175,80,0.2)" : "rgba(244,67,54,0.2)",
                            color: offer.isActive ? "#4caf50" : "#f44336",
                            fontWeight: 700,
                          }}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <IconButton size="small" onClick={() => handleOpenOffersDialog(offer)} sx={{ color: "#4caf50" }}><Edit /></IconButton>
                        <IconButton size="small" onClick={() => handleDeleteOffer(offer.id)} sx={{ color: "#f44336" }}><Delete /></IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}

        {/* ═══════════ ADMIN USERS TAB ═══════════ */}
        {activeTab === 2 && (
          <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
              <Typography sx={{ fontSize: "2rem", fontWeight: 800, color: "#d4af37", fontFamily: "'Playfair Display', serif" }}>
                Admin Users
              </Typography>
              <Button
                startIcon={<PersonAdd />}
                onClick={() => setOpenNewAdminDialog(true)}
                sx={{
                  background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
                  color: "#0b0b0b",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  "&:hover": { boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)" },
                }}
              >
                Add Admin User
              </Button>
            </Box>

            <TableContainer component={Paper} sx={{ background: "rgba(212, 175, 55, 0.05)", border: "1px solid rgba(212, 175, 55, 0.3)" }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "rgba(212, 175, 55, 0.15)" }}>
                    <TableCell sx={{ color: "#d4af37", fontWeight: 700 }}>ID</TableCell>
                    <TableCell sx={{ color: "#d4af37", fontWeight: 700 }}>Email</TableCell>
                    <TableCell sx={{ color: "#d4af37", fontWeight: 700 }}>Role</TableCell>
                    <TableCell sx={{ color: "#d4af37", fontWeight: 700 }}>Status</TableCell>
                    <TableCell sx={{ color: "#d4af37", fontWeight: 700 }}>Created</TableCell>
                    <TableCell sx={{ color: "#d4af37", fontWeight: 700 }} align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {adminUsers.map((admin) => (
                    <TableRow key={admin.id} sx={{ "&:hover": { backgroundColor: "rgba(212, 175, 55, 0.08)" }, borderBottom: "1px solid rgba(212, 175, 55, 0.2)" }}>
                      <TableCell sx={{ color: "#eaeaea" }}>{admin.id}</TableCell>
                      <TableCell sx={{ color: "#eaeaea" }}>{admin.email}</TableCell>
                      <TableCell>
                        <Chip label={admin.role} size="small" sx={{ backgroundColor: "rgba(212,175,55,0.2)", color: "#d4af37", fontWeight: 700 }} />
                      </TableCell>
                      <TableCell>
                        <Chip label={admin.isActive ? "Active" : "Inactive"} size="small" sx={{ backgroundColor: admin.isActive ? "rgba(76,175,80,0.2)" : "rgba(244,67,54,0.2)", color: admin.isActive ? "#4caf50" : "#f44336", fontWeight: 700 }} />
                      </TableCell>
                      <TableCell sx={{ color: "#b0b0b0", fontSize: "0.85rem" }}>
                        {new Date(admin.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          size="small"
                          title="Reset Password"
                          onClick={() => { setSelectedAdminId(admin.id); setResetPasswordForm({ newPassword: "", confirmPassword: "" }); setOpenResetPasswordDialog(true); }}
                          sx={{ color: "#ff9800" }}
                        >
                          <LockReset />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Container>

      {/* Add/Edit Product Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "#1a1a1a",
            border: "1px solid rgba(212, 175, 55, 0.4)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
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
            helperText="Use /images/products/col1.jpeg … col19.jpeg. Legacy DB paths like /images/products/table1.jpg also work. Leave empty for a neutral No image slot."
            FormHelperTextProps={{ sx: { color: "#888", fontSize: "0.75rem" } }}
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <Typography sx={{ color: "#d4af37", fontWeight: 600 }}>Upload New Image</Typography>
            <Box
              sx={{
                border: "2px dashed rgba(212, 175, 55, 0.4)",
                borderRadius: "8px",
                p: 2,
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s",
                "&:hover": {
                  borderColor: "rgba(212, 175, 55, 0.7)",
                  backgroundColor: "rgba(212, 175, 55, 0.05)",
                },
              }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="image-upload"
              />
              <label htmlFor="image-upload" style={{ cursor: "pointer", display: "block" }}>
                <Typography sx={{ color: "#b0b0b0", fontSize: "0.9rem", mb: 1 }}>
                  Click to upload or drag and drop
                </Typography>
                <Typography sx={{ color: "#888", fontSize: "0.8rem" }}>
                  PNG, JPG, GIF, WEBP up to 5MB
                </Typography>
              </label>
            </Box>
            {(imagePreview || formData.mainImage) && (
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "#000",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                }}
              >
                <img
                  src={imagePreview || apiUrl(formData.mainImage)}
                  alt="Preview"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                {uploadingImage && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    <CircularProgress size={40} sx={{ color: "#d4af37" }} />
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleCloseDialog} sx={{ color: "#b0b0b0" }}>Cancel</Button>
          <Button
            onClick={handleSaveProduct}
            disabled={uploadingImage}
            sx={{ background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)", color: "#0b0b0b", fontWeight: 700, "&:disabled": { opacity: 0.6 } }}
          >
            {uploadingImage ? "Uploading..." : editingProduct ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Create New Admin User Dialog */}
      <Dialog open={openNewAdminDialog} onClose={() => setOpenNewAdminDialog(false)} maxWidth="sm" fullWidth
        PaperProps={{ sx: { backgroundColor: "#1a1a1a", border: "1px solid rgba(212, 175, 55, 0.4)", boxShadow: "0 20px 60px rgba(0,0,0,0.8)" } }}>
        <DialogTitle sx={{ color: "#d4af37", fontWeight: 700, display: "flex", alignItems: "center", gap: 1 }}>
          <PersonAdd /> Create New Admin User
        </DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2 }}>
          <TextField fullWidth label="Email Address" type="email"
            value={newAdminForm.email}
            onChange={(e) => setNewAdminForm({ ...newAdminForm, email: e.target.value })}
            sx={{ "& .MuiOutlinedInput-root": { color: "#eaeaea", "& fieldset": { borderColor: "rgba(212, 175, 55, 0.3)" } }, "& .MuiInputLabel-root": { color: "#d4af37" } }}
          />
          <TextField fullWidth label="Password (min 6 characters)" type="password"
            value={newAdminForm.password}
            onChange={(e) => setNewAdminForm({ ...newAdminForm, password: e.target.value })}
            sx={{ "& .MuiOutlinedInput-root": { color: "#eaeaea", "& fieldset": { borderColor: "rgba(212, 175, 55, 0.3)" } }, "& .MuiInputLabel-root": { color: "#d4af37" } }}
          />
          <TextField fullWidth label="Role" select SelectProps={{ native: true }}
            value={newAdminForm.role}
            onChange={(e) => setNewAdminForm({ ...newAdminForm, role: e.target.value })}
            sx={{ "& .MuiOutlinedInput-root": { color: "#eaeaea", "& fieldset": { borderColor: "rgba(212, 175, 55, 0.3)" } }, "& .MuiInputLabel-root": { color: "#d4af37" }, "& select": { color: "#eaeaea", backgroundColor: "#1a1a1a" } }}
          >
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
          </TextField>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setOpenNewAdminDialog(false)} sx={{ color: "#b0b0b0" }}>Cancel</Button>
          <Button onClick={handleCreateAdmin} disabled={adminActionLoading}
            sx={{ background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)", color: "#0b0b0b", fontWeight: 700 }}>
            {adminActionLoading ? "Creating..." : "Create Admin"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add/Edit Offer Dialog */}
      <Dialog
        open={openOffersDialog}
        onClose={handleCloseOffersDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "#1a1a1a",
            border: "1px solid rgba(212, 175, 55, 0.4)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
          },
        }}
      >
        <DialogTitle sx={{ color: "#d4af37", fontWeight: 700 }}>
          {editingOffer ? "Edit Offer" : "Add New Offer"}
        </DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2 }}>
          <TextField
            fullWidth
            label="Offer Title"
            value={offersFormData.title}
            onChange={(e) => setOffersFormData({ ...offersFormData, title: e.target.value })}
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
            rows={2}
            value={offersFormData.description}
            onChange={(e) => setOffersFormData({ ...offersFormData, description: e.target.value })}
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
            label="Promo Code"
            value={offersFormData.promoCode}
            onChange={(e) => setOffersFormData({ ...offersFormData, promoCode: e.target.value.toUpperCase() })}
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
            label="Discount (%)"
            type="number"
            inputProps={{ min: 0, max: 100 }}
            value={offersFormData.discount}
            onChange={(e) => setOffersFormData({ ...offersFormData, discount: e.target.value })}
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
            label="Valid From"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={offersFormData.validFrom}
            onChange={(e) => setOffersFormData({ ...offersFormData, validFrom: e.target.value })}
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
            label="Valid Until"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={offersFormData.validUntil}
            onChange={(e) => setOffersFormData({ ...offersFormData, validUntil: e.target.value })}
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <Typography sx={{ color: "#d4af37", fontWeight: 600 }}>Upload Promotional Image</Typography>
            <Box
              sx={{
                border: "2px dashed rgba(212, 175, 55, 0.4)",
                borderRadius: "8px",
                p: 2,
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s",
                "&:hover": {
                  borderColor: "rgba(212, 175, 55, 0.7)",
                  backgroundColor: "rgba(212, 175, 55, 0.05)",
                },
              }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="offer-image-upload"
              />
              <label htmlFor="offer-image-upload" style={{ cursor: "pointer", display: "block" }}>
                <Typography sx={{ color: "#b0b0b0", fontSize: "0.9rem", mb: 1 }}>
                  Click to upload or drag and drop
                </Typography>
                <Typography sx={{ color: "#888", fontSize: "0.8rem" }}>
                  PNG, JPG, GIF, WEBP up to 5MB
                </Typography>
              </label>
            </Box>
            {(imagePreview || offersFormData.imageUrl) && (
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "#000",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                }}
              >
                <img
                  src={imagePreview || apiUrl(offersFormData.imageUrl)}
                  alt="Preview"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                {uploadingImage && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    <CircularProgress size={40} sx={{ color: "#d4af37" }} />
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleCloseOffersDialog} sx={{ color: "#b0b0b0" }}>
            Cancel
          </Button>
          <Button
            onClick={handleSaveOffer}
            disabled={uploadingImage}
            sx={{
              background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
              color: "#0b0b0b",
              fontWeight: 700,
              "&:disabled": { opacity: 0.6 },
            }}
          >
            {uploadingImage ? "Uploading..." : editingOffer ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Reset Password Dialog */}
      <Dialog open={openResetPasswordDialog} onClose={() => setOpenResetPasswordDialog(false)} maxWidth="sm" fullWidth
        PaperProps={{ sx: { backgroundColor: "#1a1a1a", border: "1px solid rgba(212, 175, 55, 0.4)", boxShadow: "0 20px 60px rgba(0,0,0,0.8)" } }}>
        <DialogTitle sx={{ color: "#d4af37", fontWeight: 700, display: "flex", alignItems: "center", gap: 1 }}>
          <LockReset /> Reset Password
        </DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2 }}>
          <TextField fullWidth label="New Password (min 6 characters)" type="password"
            value={resetPasswordForm.newPassword}
            onChange={(e) => setResetPasswordForm({ ...resetPasswordForm, newPassword: e.target.value })}
            sx={{ "& .MuiOutlinedInput-root": { color: "#eaeaea", "& fieldset": { borderColor: "rgba(212, 175, 55, 0.3)" } }, "& .MuiInputLabel-root": { color: "#d4af37" } }}
          />
          <TextField fullWidth label="Confirm New Password" type="password"
            value={resetPasswordForm.confirmPassword}
            onChange={(e) => setResetPasswordForm({ ...resetPasswordForm, confirmPassword: e.target.value })}
            error={resetPasswordForm.confirmPassword !== "" && resetPasswordForm.newPassword !== resetPasswordForm.confirmPassword}
            helperText={resetPasswordForm.confirmPassword !== "" && resetPasswordForm.newPassword !== resetPasswordForm.confirmPassword ? "Passwords do not match" : ""}
            sx={{ "& .MuiOutlinedInput-root": { color: "#eaeaea", "& fieldset": { borderColor: "rgba(212, 175, 55, 0.3)" } }, "& .MuiInputLabel-root": { color: "#d4af37" } }}
          />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setOpenResetPasswordDialog(false)} sx={{ color: "#b0b0b0" }}>Cancel</Button>
          <Button onClick={handleResetPassword} disabled={adminActionLoading}
            sx={{ background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", color: "#0b0b0b", fontWeight: 700 }}>
            {adminActionLoading ? "Resetting..." : "Reset Password"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AdminDashboard;
