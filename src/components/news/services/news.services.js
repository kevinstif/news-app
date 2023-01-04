import axios from "axios";

class NewsServices {
  apiKey = "efbe04ba13684944960f6afbd25c8613";
  search = "Apple"
  getAll() {
    return axios.get(
        `https://newsapi.org/v2/everything?q=${this.search}&from=2023-01-04&sortBy=popularity&apiKey=${this.apiKey}`
    );
  }
}

export default new NewsServices();
