const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://softkitec-web.vercel.app/"
    : "http://localhost:3000";

export default baseUrl;
