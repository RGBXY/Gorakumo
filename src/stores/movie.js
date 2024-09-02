import { defineStore } from "pinia";
import axios from "@/plugin/axios";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    dataPopular: [],
    dataUpCom: [],
    dataTrending: [],
    dataUpComVid: [],
    dataDetail: [],
    dataPerson: [],
    dataCast: [],
    modalVid: false,
    popLoading: false,
    trenLoading: false,
    upLoading: false,
    perLoading: false,
    castLoading: false,
    detLoading: false,
    apiKey: import.meta.env.VITE_API_KEY_URL,
    imageUrl: import.meta.env.VITE_IMG_URL,
    trendingUrl: "day",
    popularUrl: "movie",
  }),
  actions: {
    async populer() {
      try {
        this.popLoading = true;
        const response = await axios.get(`/${this.popularUrl}/popular?api_key=${this.apiKey}`);
        this.dataPopular = response.data.results;
      } catch {
        if (error) {
          console.error(error);
        }
      } finally {
        this.popLoading = false;
      }
    },

    async upComing() {
      try {
        this.upLoading = true;

        const response = await axios.get(`/movie/upcoming?api_key=${this.apiKey}`);
        this.dataUpCom = response.data.results;
      } catch {
        if (error) {
          console.error(error);
        }
      } finally {
        this.upLoading = false;
      }
    },

    async cast(movieUrl, movieId) {
      try {
        this.castLoading = true;
        const response = await axios.get(`/${movieUrl}/${movieId}/credits?api_key=${this.apiKey}`);
        this.dataCast = response.data.cast;
      } catch {
        if (error) {
          console.error(error);
        }
      } finally {
        this.castLoading = false;
      }
    },

    async person() {
      try {
        this.detLoading = true;
        const response = await axios.get(`/person/popular?api_key=${this.apiKey}`);
        this.dataPerson = response.data.results;
      } catch {
        if (error) {
          console.error(error);
        }
      } finally {
        this.detLoading = false;
      }
    },

    async trending() {
      try {
        this.trenLoading = true;

        const response = await axios.get(`trending/all/${this.trendingUrl}?api_key=${this.apiKey}`);
        this.dataTrending = response.data.results;
      } catch (error) {
        console.error(error);
      } finally {
        this.trenLoading = false;
      }
    },

    async detail(movieUrl, movieId) {
      try {
        this.detLoading = true;
        const response = await axios.get(`${movieUrl}/${movieId}?api_key=${this.apiKey}`);
        this.dataDetail = response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.detLoading = false;
      }
    },

    trendingBtn(stat) {
      this.trendingUrl = stat;
      this.trending();
    },

    popularBtn(stat) {
      this.popularUrl = stat;
      this.populer();
    },

    async getMovieId(url, id) {
      try {
        const response = await axios.get(`/${url}/${id}/videos?api_key=${this.apiKey}`);
        this.dataUpComVid = response.data.results[0].key;
        this.modalVid = true;
      } catch {
        if (error) {
          console.error(error);
        }
      }
    },

    closeModal() {
      this.modalVid = false;
      this.dataUpComVid = "";
    },
  },
});
