import app from "./app.js";
import cloudinary from "cloudinary";

// Configure Cloudinary with hard-coded values
cloudinary.v2.config({
  cloud_name: "duhqrzlzm", // Replace with your actual Cloudinary cloud name
  api_key: "129148664723623", // Replace with your actual Cloudinary API key
  api_secret: "Bms8vGvUX8qgXMuhL_d-WTdD1qQ", // Replace with your actual Cloudinary API secret
});

// Start the server
const PORT = 5000; // You can also hard-code the port if needed

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});