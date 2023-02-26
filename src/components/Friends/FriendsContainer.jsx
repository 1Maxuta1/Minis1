import { connect } from "react-redux";
import Friends from "./Friends";
import {
  followAC,
  setFriendsAC,
  unfollowAC,
} from "../../States/friends-reducer ";

let mapStateToProps = (state) => {
  return {
    friendsData: state.FriendsPage.friendsData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (friendId) => {
      dispatch(followAC(friendId));
    },
    unfollow: (friendId) => {
      dispatch(unfollowAC(friendId));
    },
    setFriends: (friend) => {
      dispatch(setFriendsAC(friend));
    },
  };
};
let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
