import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProfileState {
  id: string;
  city: string;
  label: string;
  address: string;
  latitude: string;
  longitude: string;
  street : string;
  is_default: boolean;
  is_location_fetched: boolean;
  is_editable: boolean
}

const initialState: UserProfileState = {
    id: "",
    city: "",
    label: "",
    address: "",
    latitude: "",
    longitude: "",
    street : "",
    is_default: false,
    is_location_fetched: true,
    is_editable: true
};

const addAddressSlice = createSlice({
  name: 'addAddress',
  initialState,
  reducers: {
    updateFieldAddress: (
        state:any,
        action: PayloadAction<{ field: keyof UserProfileState; value: string }>
      ) => {
        state[action.payload.field] = action.payload.value;
      },
  },
});

export const { updateFieldAddress } = addAddressSlice.actions;
export default addAddressSlice.reducer;
