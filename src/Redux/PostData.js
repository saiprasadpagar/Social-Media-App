import { createSlice } from "@reduxjs/toolkit";

let postID = 0;

const viewerData = {
  id: "",
  name: ""
};

const initialState = [
  {
    profilePic:
      "	https://res.cloudinary.com/jerrick/image/upload/v1621532182/60a69e15cafcc0001e2dc589.jpg",
    userID: "Raj Mahotra",
    location: "india",
    postLink:"https://i.ytimg.com/vi/OVHXTBZu-Zs/maxresdefault.jpg",
    likes: 6947,
    isLiked: false,
    caption: "BlackPink Comback",
    comments: [["margaret", "💖 Love it"]],
    postID: postID++
  },
  {
    profilePic:
      "https://mail.google.com/mail/u/0?ui=2&ik=348e6b4486&attid=0.1&permmsgid=msg-a:r-8144657906550332486&th=1842364cef10577a&view=att&disp=safe&realattid=1842363e79769ed4fca1",
    userID: "ramelaine20",
    location: "South Korea",
    postLink:
      "data:image/jpeg;base64,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",
    likes: 9999,
    isLiked: false,
    caption: "Trip Ends. but memories last a lifetime.",
    comments: [["Saiprasad365", `🔥`]],
    postID: postID++
  },
  {
    profilePic:
      "https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg",
    userID: "Zayn Malik",
    location: "USA",
    postLink:
      "data:image/jpeg;base64,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",
    likes: 9139,
    isLiked: false,
    caption: "MirrorShot",
    comments: [["ramelaine", "nice 🔥🔥"]],
    postID: postID++
  },
  {
    profilePic:
      "https://images.pexels.com/photos/4090599/pexels-photo-4090599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userID: "Saiprasad365",
    location: "India",
    postLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDX5fkSQ3F1bu5QmtahxJhrbsVmzivuSh_Ld6tjXggzqdrYN0pWhZNkHdgWXmdDuw7wFw&usqp=CAU",
    likes: 6051,
    isLiked: false,
    caption: "Something is Better Then Nothing",
    comments: [["ramelaine", "pretty"]],
    postID: postID++
  },
  {
    profilePic:
      "https://wallpaperboat.com/wp-content/uploads/2019/09/actress-aishwarya-Rai.jpg",
    userID: "ramelaine20",
    location: "South Korea",
    postLink:
      "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    likes: 6651,
    isLiked: false,
    caption: "No Caption!",
    comments: [["Saiprasad365", "So, Nice"]],
    postID: postID++
  },
  {
    profilePic:
      "https://images.squarespace-cdn.com/content/v1/5c34764c297114ca20d6777b/1603093680446-LKPVK04AMMLQY80U0I9H/image-asset.jpeg?format=1000w",
    userID: "Lalisa",
    location: "Thailand",
    postLink:"	https://www.codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg",
    likes: 21251,
    isLiked: false,
    caption: "#OOTD!",
    comments: [],
    postID: postID++
  }
];

export const postDataSlice = createSlice({
  name: "postData",
  initialState,
  reducers: {
    likePost: (state, action) => {
      let icon = document.querySelector(".like-post-" + action.payload);
      icon.classList.add("active");

      if (state[action.payload].isLiked) {
      } else {
        state[action.payload].isLiked = true;
        ++state[action.payload].likes;
      }

      setTimeout(() => {
        icon.classList.remove("active");
      }, 700);
    },
    handleLike: (state, action) => {
      if (state[action.payload].isLiked) {
        state[action.payload].isLiked = false;
        state[action.payload].likes--;
      } else {
        state[action.payload].isLiked = true;
        state[action.payload].likes++;
      }
    },
    postComment: (state, action) => {
      const [comment, id] = action.payload;

      if (comment === "") return;
      state[id].comments.push([viewerData.id, comment]);
    },
    sharePost: (state, action) => {
      const [caption, location, src] = action.payload;

      let newPostData = {
        profilePic:
          "https://energies2050.org/wp-content/uploads/2017/01/beweship-contact-placeholder.jpg",
        userID: viewerData.id,
        location,
        caption,
        postLink: src,
        likes: 0,
        isLiked: false,
        comments: [],
        postID: state.length
      };

      state.push(newPostData);
    },
    handleLogin: (state, action) => {
      viewerData.id += action.payload[0];
      viewerData.name += action.payload[1];
    }
  }
});

// export {viewerData };
export const {
  likePost,
  handleLike,
  postComment,
  sharePost,
  handleLogin
} = postDataSlice.actions;
export default postDataSlice.reducer;
