import axios from "./axios";

export const signupRequest = (user) => axios.post("/signup", user);
export const signinRequest = (user) => axios.post("/signin", user);
export const profileRequest = () => axios.get("/profile");
export const verifyTokenRequest = () => axios.get("/verify");
