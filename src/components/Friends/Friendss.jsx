import React from "react";
import "../Friends/Friends.module.css";
import styles from "./Friends.module.css";
import axios from "axios";

const Friends = (props) => {
  let getFriends = () => {
    if (props.friends.length === 0) {
      axios
        .get("https://api.sampleapis.com/futurama/characters")
        .then((response) => {
          props.setFriends(response.data.items);
        });
    }
  };
  return (
    <div className={styles.wrapper}>
      <button onClick={getFriends}> Get Friends</button>
      {props.friendsData.map((friend) => (
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
                      props.unfollow(friend.id);
                    }}
                  >
                    Delete from friends
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(friend.id);
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
};

export default Friends;

// //    <div className={styles.container}>
// //             <div className={styles.row}>
// //               <div className={styles.d}>
// //                 <img
// //                   src="https://bootdey.com/img/Content/avatar/avatar7.png"
// //                   alt="user"
// //                   className={styles.d}
// //                 ></img>
// //               </div>
// //               <div className={styles.d}>
// //                 <h5>
// //                   <div className={styles.d}>Sophia Page</div>
// //                 </h5>
// //                 <p>Software Engineer</p>
// //                 <p className={styles.d}>500m away</p>
// //               </div>
// //               <div className={styles.d}>
// //                 <button className={styles.d}>Add Friend</button>
// //               </div>
// //             </div>
// //           </div>
