import { Box, Fab, Tooltip } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";

function FloatingWhatsApp() {
  const whatsappNumber = "+94718820809"; // Sri Lankan number without country code
  const whatsappMessage = "Hello! I'm interested in your antique collection.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <Tooltip title="Chat with us on WhatsApp" placement="left">
      <Fab
        onClick={handleWhatsAppClick}
        sx={{
          position: "fixed",
          bottom: { xs: 30, md: 40 },
          right: { xs: 20, md: 30 },
          backgroundColor: "#25D366",
          color: "white",
          boxShadow: "0 8px 25px rgba(37, 211, 102, 0.4)",
          zIndex: 50,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "scale(1.15) translateY(-5px)",
            boxShadow: "0 12px 35px rgba(37, 211, 102, 0.6)",
          },
          animation: "pulse 2s infinite",
          "@keyframes pulse": {
            "0%, 100%": {
              boxShadow: "0 8px 25px rgba(37, 211, 102, 0.4)",
            },
            "50%": {
              boxShadow: "0 8px 35px rgba(37, 211, 102, 0.8)",
            },
          },
        }}
        size="large"
      >
        <WhatsApp fontSize="large" />
      </Fab>
    </Tooltip>
  );
}

export default FloatingWhatsApp;
