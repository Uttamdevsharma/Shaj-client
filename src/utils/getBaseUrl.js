export const getBaseUrl = () => {
    if (import.meta.env.PROD) {
        return "https://shaj-backend.vercel.app"
    }
    return "http://localhost:5000"
}