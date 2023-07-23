import React, { Component } from "react";
import "../Friends/Friends.module.css";
import styles from "./Friends.module.css";
import axios from "axios";

class Friends extends Component {
  constructor(props) {
    super(props);
    axios
      .get("https://api.sampleapis.com/futurama/characters")
      .then((response) => {
        this.props.setFriends(response.data.items);
      });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <button onClick={this.getFriends}> Get Friends</button>
        {this.props.friendsData.map((friend) => (
          <div key={friend.id}>
            <span>
              <div className={styles.friends_block}>
                <img
                  src={friend.photoURL}
                  className={styles.avatar}
                  alt="friend"
                />
                <div>{friend.firstName}</div>
                <div>{friend.secondName}</div>
                {/* <div>{friend.username}</div>
              <div>{friend.full_name}</div> */}
              </div>
            </span>
            <span>
              <span className={styles.row}></span>
              <span>
                <div>{friend.status}</div>
                <div>{friend.location.country}</div>
                <div>{friend.location.city}</div>
                <div>
                  {friend.followed ? (
                    <button
                      onClick={() => {
                        this.props.unfollow(friend.id);
                      }}
                    >
                      Delete from friends
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(friend.id);
                      }}
                    >
                      Add to friends
                    </button>
                  )}
                </div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Friends;
