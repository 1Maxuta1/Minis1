const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_FRIENDS = "SET_FRIENDS";

let initialState = {
  friendsData: [
    {
      id: 1,
      followed: true,
      photoURL: "./img/avatar1.jpg",
      firstName: "Volodymyr",
      secondName: "Zelenskiy",
      status: "I am the President of Ukraine",
      location: {
        country: "Ukraine",
        city: "Kyiv",
      },
    },
    {
      id: 2,
      followed: true,
      photoURL: "./img/avatar-tima.jpeg",
      firstName: "Timofey",
      secondName: "Antonuk",
      status: "Dishes are like babies for me",
      location: {
        country: "Ireland",
        city: "Galway",
      },
    },
    {
      id: 3,
      followed: true,
      photoURL: "./img/avatar-danya.jpeg",
      firstName: "Danya",
      secondName: "Scherbakov",
      status: "I am crazy programmer",
      location: {
        country: "Poland",
        city: "Warsaw",
      },
    },
    {
      id: 4,
      followed: true,
      photoURL: "./img/avatar3.jpg",
      firstName: "Petro",
      secondName: "Poroshenko",
      status: "This happened during my tenure",
      location: {
        country: "Ukraine",
        city: "Kyiv",
      },
    },
    {
      id: 5,
      followed: true,
      photoURL: "./img/avatar2.jpg",
      firstName: "Yehor",
      secondName: "Turlo",
      status: "School boy and fortnite cyber athelet",
      location: {
        country: "Ireland",
        city: "Galway",
      },
    },
    {
      id: 6,
      followed: true,
      photoURL: "./img/hyperpopcover.webp",
      firstName: "Anya",
      secondName: "Solovina",
      status: "Girl-cosplayer",
      location: {
        country: "Ireland",
        city: "Galway",
      },
    },
  ],
  // newFriendsBody: "",
};
const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        friendsData: state.friendsData.map((friend) => {
          if (friend.id === action.friendId) {
            return { ...friend, followed: true };
          }
          return friend;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        friendsData: state.friendsData.map((friend) => {
          if (friend.id === action.friendId) {
            return { ...friend, followed: false };
          }
          return friend;
        }),
        // id: state.friendsData.length + 1,
      };
    case SET_FRIENDS:
      return {
        ...state,
        friendsData: [...state.friendsData, ...action.friendsData],
      };

    default:
      return state;
  }
};

export const followAC = (friendId) => ({ type: FOLLOW, friendId });
export const unfollowAC = (friendId) => ({
  type: UNFOLLOW,
  friendId,
});
export const setFriendsAC = (friends) => ({ type: SET_FRIENDS, friends });

export default friendsReducer;
