import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Lalisa: {
    userID: "Lalisa",
    profilePic:
      "https://images.squarespace-cdn.com/content/v1/5c34764c297114ca20d6777b/1603093680446-LKPVK04AMMLQY80U0I9H/image-asset.jpeg?format=1000w",
    followers: "177M",
    following: 0,
    name: "Lalisa Manoban",
    category: "Artist",
    bio: "BlackPink Official",
    verified: true
  },

  ramelaine20: {
    userID: "ramelaine20",
    profilePic:
      "https://images.pexels.com/photos/1391495/pexels-ph…s-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1391495.jpg&fm=jpg",
    followers: "1M",
    following: 200,
    name: "Ramelaine Dayaba",
    category: "Youtuber",
    bio: "Dream don't work unless you do.",
    verified: true
  },
  Saiprasad365: {
    userID: "Saiprasad365",
    profilePic:"	https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg",
    followers: "1M",
    following: 100,
    name: "Saiprasad devid",
    category: "Web Developer",
    bio: "DREAM IT. BELIEVE IT. BUILD IT."
  }
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    getUserData: (state, action) => {
      const [id, name] = action.payload;
      state[id] = {
        userID: id,
        profilePic:
          "https://energies2050.org/wp-content/uploads/2017/01/beweship-contact-placeholder.jpg",
        followers: 0,
        following: 0,
        name,
        bio: "",
        category: "",
        verified: false
      };
    }
  }
});

export const { getUserData } = userProfileSlice.actions;

export default userProfileSlice.reducer;
