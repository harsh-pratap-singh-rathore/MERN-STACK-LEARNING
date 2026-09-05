import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

const uploadToCloudinary = async (localPath) => {
    try {
        if (!localPath) return null;

        // Ensure config is fresh with env variables
        cloudinary.config({ 
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
            api_key: process.env.CLOUDINARY_API_KEY, 
            api_secret: process.env.CLOUDINARY_API_SECRET
        });

        const response = await cloudinary.uploader.upload(localPath, {
            resource_type: "auto"
        });

        // Remove local file after successful upload
        if (fs.existsSync(localPath)) {
            fs.unlinkSync(localPath);
        }
        return response;
    } catch (error) {
        console.error("Cloudinary upload error: ", error);
        // Remove local file if upload fails
        if (localPath && fs.existsSync(localPath)) {
            fs.unlinkSync(localPath);
        }
        return null;
    }
}
export { uploadToCloudinary }