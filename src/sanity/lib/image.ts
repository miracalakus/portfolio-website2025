import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client"; // Import your Sanity client

// Create a builder instance from Sanity's image URL builder
const builder = imageUrlBuilder(client);

// Define a more flexible type for the image source, making _type optional
interface SanityImageSource {
  _type?: "image";  // _type is optional
  asset: {
    _ref: string;
  };
}

// Function to return the image URL
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
