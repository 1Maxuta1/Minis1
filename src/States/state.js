

let rerenderTree = () => {
console.log('state changed')
}

  let state = {

ProfilePage: { myPostsData: [
        {id:1 , message: "Hi, it's me", likesCount: 2, },
        {id:2 , message: "Nah, you're fake", likesCount: 6},
        {id:3 , message: "Maybe, he is real", likesCount: 4}],
          newPostText: 'Hi'
      },
MessagesPage: {
      dialogsData: [   {id:1 , name: 'Max', nickname: "@_maxuta_"},
      {id:2 , name: 'Timofey', nickname: "@tifomey.png"},
      {id:3 , name: 'Danya', nickname: "@irritatingnator"},
      {id:4 , name: 'Maria', nickname: "@kostamarina"},
      {id:5 , name: 'Yehor', nickname: "@teengor"},
      {id:6 , name: 'Anya', nickname: "@anya"}],
      messagesData: [
        {id:1 , message: "Привіт, як ти?"},
        {id:2 , message: "Ого, а вона що?"},
        {id:3 , message: "No, i've just come to LA"},
        {id:4 , message: "Та ні, я завтра заберу"},
        {id:5 , message: "Yep, man, gotcha"},
        {id:6 , message: "Думаю, что можна будет в пятницу это отпраздновать"},
      ]},
Sidebar: {
  Friends:[{id:1}]},
  };

  window.state = state;

  export const addPost = () => {
    let newPost = {
      id:5,
      message: state.ProfilePage.newPostText,
      likesCount: 0
    };
 state.ProfilePage.myPostsData.push(newPost);
 state.ProfilePage.newPostText = '';
 rerenderTree(state);
}

export const updateNewPostText = (newText) => {
state.ProfilePage.newPostText = newText;
rerenderTree(state)
}

export const subcribe = (observer) => {
 rerenderTree = observer;
}

  export default state
