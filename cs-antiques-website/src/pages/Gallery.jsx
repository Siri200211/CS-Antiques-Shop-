import { useState } from "react";
import { Box, Container, Typography, Grid, ImageList, ImageListItem, Modal } from "@mui/material";
import { Close } from "@mui/icons-material";

function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      title: "Carved Pettagam",
      category: "Storage Furniture",
      image: "/src/assets/images/gallery/pettagam1.jpg",
    },
    {
      title: "Vintage Gramophone",
      category: "Audio Equipment",
      image: "/src/assets/images/gallery/gramophone1.jpg",
    },
    {
      title: "Wooden Cabinet",
      category: "Storage Furniture",
      image: "/src/assets/images/gallery/cabinet1.jpg",
    },
    {
      title: "Dining Set",
      category: "Furniture",
      image: "/src/assets/images/gallery/dining1.jpg",
    },
    {
      title: "Antique Desk",
      category: "Office Furniture",
      image: "/src/assets/images/gallery/desk1.jpg",
    },
    {
      title: "Showroom Interior",
      category: "Showroom",
      image: "/src/assets/images/gallery/showroom1.jpg",
    },
    {
      title: "Craftsmanship Detail",
      category: "Restoration",
      image: "/src/assets/images/gallery/craft1.jpg",
    },
    {
      title: "Mirror & Frame",
      category: "Decorative",
      image: "/src/assets/images/gallery/mirror1.jpg",
    },
    {
      title: "Lamp Collection",
      category: "Lighting",
      image: "/src/assets/images/gallery/lamp1.jpg",
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box sx={{ backgroundColor: "#0b0b0b", minHeight: "100vh", width: "100vw" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
          py: { xs: 8, md: 12 },
          textAlign: "center",
          px: { xs: 2, md: 4 },
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontWeight: 800,
            color: "#d4af37",
            mb: 2,
            letterSpacing: "0.02em",
          }}
        >
          Gallery
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.25rem" },
            color: "#b0b0b0",
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          Explore the beauty and craftsmanship of our curated collections
        </Typography>
      </Box>

      {/* Gallery Grid */}
      <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 4 }, width: "100%" }}>
        <Box sx={{ maxWidth: "1600px", mx: "auto" }}>
          <ImageList
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
            "& .MuiImageListItem-root": {
              border: "1px solid rgba(212, 175, 55, 0.2)",
              borderRadius: "15px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                transform: "scale(1.05)",
                borderColor: "#d4af37",
                boxShadow: "0 15px 40px rgba(212, 175, 55, 0.3)",
              },
            },
          }}
          cols={1}
          rowHeight={300}
        >
          {galleryImages.map((item, index) => (
            <Box
              key={index}
              onClick={() => handleImageClick(item)}
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "15px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                "&:hover": {
                  transform: "scale(1.05)",
                  borderColor: "#d4af37",
                  boxShadow: "0 15px 40px rgba(212, 175, 55, 0.3)",
                  "& .overlay": {
                    opacity: 1,
                  },
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "300px",
                  background: `linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.05) 100%)`,
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#b0b0b0",
                    fontSize: "0.9rem",
                    fontStyle: "italic",
                  }}
                >
                  [Image Loading]
                </Typography>
              </Box>

              {/* Overlay */}
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(11, 11, 11, 0.7)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#d4af37",
                    textAlign: "center",
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "#b0b0b0",
                  }}
                >
                  {item.category}
                </Typography>
              </Box>
            </Box>
          ))}
        </ImageList>
        </Box>
      </Box>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1300,
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "90vw",
            maxHeight: "90vh",
            backgroundColor: "transparent",
          }}
        >
          {selectedImage && (
            <>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  background: `url(${selectedImage.image}) center/contain no-repeat`,
                  borderRadius: "15px",
                  border: "2px solid rgba(212, 175, 55, 0.3)",
                }}
              />
              <Box
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  backgroundColor: "rgba(11, 11, 11, 0.9)",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 50,
                  height: 50,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(212, 175, 55, 0.2)",
                    borderColor: "#d4af37",
                  },
                }}
              >
                <Close sx={{ color: "#d4af37", fontSize: "1.8rem" }} />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  backgroundColor: "rgba(11, 11, 11, 0.9)",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  borderRadius: "10px",
                  p: 2,
                }}
              >
                <Typography sx={{ color: "#d4af37", fontWeight: 700, mb: 0.5 }}>
                  {selectedImage.title}
                </Typography>
                <Typography sx={{ color: "#b0b0b0", fontSize: "0.9rem" }}>
                  {selectedImage.category}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

export default Gallery;
