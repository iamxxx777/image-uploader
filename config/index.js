const dev = process.env.NODE_ENV !== 'production';

export const domain = dev ? "https://localhost:3000" : "https://imagesjet.com";
