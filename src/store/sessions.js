import { createSlice } from "@reduxjs/toolkit";

// the auth state and actions
const initialSessionsState = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    name: "Yoga",
    instructor: "Diana",
    duration: "60",
    isDisabled: false,
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/premium-photo/class-gym-doing-pilates-standing-lunges_126745-66.jpg?w=2000",
    name: "Pilates",
    instructor: "Erica",
    duration: "45",
    isDisabled: false,
  },
  {
    id: 3,
    image: "https://cdn.mos.cms.futurecdn.net/FLZZRPhyipbnNfYpf5mbB5.jpg",
    name: "Zumba",
    instructor: "Diana",
    duration: "30",
    isDisabled: false,
  },
  {
    id: 4,
    image:
      "https://st2.depositphotos.com/1518767/9017/i/600/depositphotos_90179356-stock-photo-fit-people-in-a-spin.jpg",
    name: "Spinning",
    instructor: "Emily",
    duration: "35",
    isDisabled: false,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y3Jvc3NmaXR8ZW58MHx8MHx8&w=1000&q=80",
    name: "CrossFit",
    instructor: "Adam",
    duration: "35",
    isDisabled: false,
  },
  {
    id: 6,
    image:
      "https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blta585249cb277b1c3/5fdcfa83a703d10ab87e827b/HIIT.jpg?width=1200&height=630&fit=crop",
    name: "HIIT",
    instructor: "Peter",
    duration: "40",
    isDisabled: false,
  },
  {
    id: 7,
    image:
      "https://media.istockphoto.com/photos/boxing-her-way-to-a-ripper-body-picture-id618981846?k=20&m=618981846&s=612x612&w=0&h=QSLkuPthBVxK0T5SA59B00CEGAkJKRrWsjcgyrUw2JY=",
    name: "Kickboxing",
    instructor: "John",
    duration: "50",
    isDisabled: false,
  },
];

const sessionSlice = createSlice({
  name: "sessions",
  initialState: initialSessionsState,
  reducers: {
    bookClass(state, action) {
      const id = action.payload;
      state.find((item) => item.id === id).isDisabled = true;
      return state;
    },
    unBookClass(state, action) {
      const id = action.payload;
      state.find((item) => item.id === id).isDisabled = false;
      return state;
    },
    clear(state) {
      state = initialSessionsState;
      return state;
    },
  },
});

// exposing the slice actions
export const sessionActions = sessionSlice.actions;

export default sessionSlice.reducer;
