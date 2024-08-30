import { defineStore } from "pinia";
import axios from "@/plugin/axios";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    dataPopular: [],
    dataUpCom: [],
    dataTrending: [],
    dataUpComVid: [],
    dataPerson: [],
    modalVid: false,
    popLoading: false,
    trenLoading: false,
    upLoading: false,
    perLoading: false,
    apiKey: import.meta.env.VITE_API_KEY_URL,
    imageUrl: "https://image.tmdb.org/t/p/original/",
    trendingUrl: "day",
    popularUrl: "movie",
  }),
  actions: {
    async populer() {
      try {
        this.popLoading = true;
        const response = await axios.get(`/${this.popularUrl}/popular?api_key=${this.apiKey}`);
        this.dataPopular = response.data.results;
        console.log(this.dataPopular);
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

    async person() {
      try {
        this.perLoading = true;
        const response = await axios.get(`/person/popular?api_key=${this.apiKey}`);
        this.dataPerson = response.data.results;
        console.log(this.dataPerson);
      } catch {
        if (error) {
          console.error(error);
        }
      } finally {
        this.perLoading = false;
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

    trendingBtn(stat) {
      this.trendingUrl = stat;
      this.trending();
    },

    popularBtn(stat) {
      this.popularUrl = stat;
      this.populer();
    },

    async getMovieId(id) {
      try {
        const response = await axios.get(`/movie/${id}/videos?api_key=${this.apiKey}`);
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
