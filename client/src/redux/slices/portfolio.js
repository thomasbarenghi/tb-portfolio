import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const client = sanityClient({
  projectId: "ltxzs899",
  dataset: "production",
  useCdn: true,
});

const url = `https://ltxzs899.api.sanity.io/v1/data/query/production?query=*[_type == "portfolio"]`;
//const url = "";
//creamos una funcion que nos permite obtener la url de la imagen
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const initialState = {
  items: [],
  currentItem: {},
};

export const getPortfolioItems = createAsyncThunk(
  "portfolio/getPortfolioItems",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(url);

      //hacemos map para obtener la url de la imagen
      const items = res.data.result.map((item) => {
        return {
          ...item,
          coverImage: urlFor(item.coverImage.asset._ref).url(),
        };
      });

      return { response: items };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setCurrentItem(state, action) {
      state.currentItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPortfolioItems.fulfilled, (state, action) => {
        state.items = action.payload.response;
      })
      .addCase(getPortfolioItems.rejected, (state, action) => {})
      .addCase(getPortfolioItems.pending, (state, action) => {});
  },
});

export const { setCurrentItem } = portfolioSlice.actions;

export default portfolioSlice.reducer;
