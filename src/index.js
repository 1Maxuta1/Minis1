import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let myPostsData = [
  {id:1 , message: "Hi, it's me", likesCount: 2, },
  {id:2 , message: "Nah, you're fake", likesCount: 6},
  {id:3 , message: "Maybe, he is real", likesCount: 4}
]
  
let dialogsData = [
  {id:1 , name: 'Max'},
  {id:2 , name: 'Timofey'},
  {id:3 , name: 'Danya'},
  {id:4 , name: 'Maria'},
  {id:5 , name: 'Yehor'},
  {id:6 , name: 'Anya'},
]

let messagesData = [
  {id:1 , message: "Привіт, як ти?"},
  {id:2 , message: "Ого, а вона що?"},
  {id:3 , message: "No, i've just come to LA"},
  {id:4 , message: "Та ні, я завтра заберу"},
  {id:5 , message: "Yep, man, gotcha"},
  {id:6 , message: "Думаю, что можна будет в пятницу это отпраздновать"},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App myPostsData={myPostsData} dialogsData = {dialogsData} messagesData = {messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
