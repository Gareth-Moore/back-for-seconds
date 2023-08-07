import axios from "axios";

export default axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    apiKey: "80c718f1a7c74661b43a3940d3a793ca",
  },
});
