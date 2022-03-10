import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_BASE_URL} from './../../config';

export const createShortLink: any = createAsyncThunk(
  'links/createShortLink',
  async (url: string) => {
    const response = await fetch(API_BASE_URL + url, {method: 'POST'})
    return await response.json();
  }
)

const initialState = {
  items: [] as ItemsType[],
  loading: 'idle',
}

export type ItemsType = {
  code: string,
  short_link: string,
  full_short_link: string,
  short_link2: string,
  full_short_link2: string,
  short_link3: string,
  full_short_link3: string,
  share_link: string,
  full_share_link: string,
  original_link: string,
}

const linkSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {},
  extraReducers: {
    [createShortLink.rejected]: (state) => {
      state.loading = 'rejected';
    },
    [createShortLink.pending]: (state) => {
      state.loading = 'loading';
    },
    [createShortLink.fulfilled]: (state, action) => {
      const {ok, result} = action.payload;

      if (ok)
      {
        state.items.push(result);
        state.loading = 'idle';
      } else
      {
        state.loading = 'error';
      }
    },
  }
});

export const selectedLoading = (state: any) => state.links.loading;
export const selectLinks = (state: any) => state.links.items;
export default linkSlice.reducer;



