import col1 from "../assets/images/products/col1.jpeg";
import col2 from "../assets/images/products/col2.jpeg";
import col3 from "../assets/images/products/col3.jpeg";
import col4 from "../assets/images/products/col4.jpeg";
import col5 from "../assets/images/products/col5.jpeg";
import col6 from "../assets/images/products/col6.jpeg";
import col7 from "../assets/images/products/col7.jpeg";
import col8 from "../assets/images/products/col8.jpeg";
import col9 from "../assets/images/products/col9.jpeg";
import col10 from "../assets/images/products/col10.jpeg";
import col11 from "../assets/images/products/col11.jpeg";
import col12 from "../assets/images/products/col12.jpeg";
import col13 from "../assets/images/products/col13.jpeg";
import col14 from "../assets/images/products/col14.jpeg";
import col15 from "../assets/images/products/col15.jpeg";
import col16 from "../assets/images/products/col16.jpeg";
import col17 from "../assets/images/products/col17.jpeg";
import col18 from "../assets/images/products/col18.jpeg";
import col19 from "../assets/images/products/col19.jpeg";

export const productImageList = [
  col1,
  col2,
  col3,
  col4,
  col5,
  col6,
  col7,
  col8,
  col9,
  col10,
  col11,
  col12,
  col13,
  col14,
  col15,
  col16,
  col17,
  col18,
  col19,
];

const imageByFileName = {
  "col1.jpeg": col1,
  "col2.jpeg": col2,
  "col3.jpeg": col3,
  "col4.jpeg": col4,
  "col5.jpeg": col5,
  "col6.jpeg": col6,
  "col7.jpeg": col7,
  "col8.jpeg": col8,
  "col9.jpeg": col9,
  "col10.jpeg": col10,
  "col11.jpeg": col11,
  "col12.jpeg": col12,
  "col13.jpeg": col13,
  "col14.jpeg": col14,
  "col15.jpeg": col15,
  "col16.jpeg": col16,
  "col17.jpeg": col17,
  "col18.jpeg": col18,
  "col19.jpeg": col19,
};

/**
 * Neutral “no photo” graphic — not a real product image, so missing/invalid paths never look like
 * another listing’s photo (using col1 as placeholder caused many cards to show the same picture).
 */
export const placeholderProductImage =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <rect fill="#141414" width="512" height="512"/>
      <rect fill="none" stroke="#3d3520" stroke-width="2" x="48" y="48" width="416" height="416" rx="12"/>
      <rect fill="none" stroke="#8a7340" stroke-width="1.5" x="64" y="64" width="384" height="384" rx="8" opacity="0.5"/>
      <text x="256" y="248" fill="#6a6a6a" font-family="Georgia,serif" font-size="15" text-anchor="middle">No image</text>
      <text x="256" y="276" fill="#4a4a4a" font-family="system-ui,sans-serif" font-size="11" text-anchor="middle">Set Main Image in Admin</text>
    </svg>`
  );

/** Original seed paths in DB — map to bundled assets (files are not under Vite public/). */
const legacyFileNameMap = {
  "table1.jpg": col1,
  "mirror1.jpg": col3,
  "watch1.jpg": col2,
};

export function resolveProductImage(mainImage, _productId) {
  if (typeof mainImage === "string" && mainImage.trim()) {
    // If DB value is an absolute URL, use it as-is.
    if (/^https?:\/\//i.test(mainImage)) {
      return mainImage;
    }

    const normalized = mainImage.replace(/\\/g, "/");

    // Handle uploaded images from /uploads/ folder
    if (normalized.startsWith("/uploads/")) {
      // Construct full URL to API endpoint
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
      const fullUrl = `${apiBaseUrl}${normalized}`;
      console.log("📸 Resolving upload image:", { mainImage, normalized, fullUrl });
      return fullUrl;
    }

    // Map values like "/images/products/col16.jpeg" to bundled assets.
    const fileName = normalized.split("/").pop();
    if (fileName && imageByFileName[fileName]) {
      console.log("📸 Found bundled image:", fileName);
      return imageByFileName[fileName];
    }
    if (fileName && legacyFileNameMap[fileName]) {
      console.log("📸 Found legacy image:", fileName);
      return legacyFileNameMap[fileName];
    }

    // Do not return raw "/images/..." strings — they 404 in Vite dev.
    console.log("📸 No image found for:", mainImage, "- using placeholder");
    return placeholderProductImage;
  }

  console.log("📸 Empty/invalid mainImage, using placeholder");
  return placeholderProductImage;
}
