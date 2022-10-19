import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isModalOpen: false
    },

reducers: {
        onOpenModal: ( state ) => {
            state.isModalOpen = true;
        },
        onCloseModalOpen: (state) => {
            state.isModalOpen = false;
        }
    }
});


export const { onOpenModal, onCloseModalOpen } = uiSlice.actions;