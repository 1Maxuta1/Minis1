import state from './States/state';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost} from './States/state';
import { BrowserRouter } from 'react-router-dom';
import {updateNewPostText} from './States/state'




 let rerenderTree = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
      </BrowserRouter>
      
    );
  }
rerenderTree(state);
// subcribe(rerenderTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import state, { subcribe } from './States/state';
// import reportWebVitals from './reportWebVitals';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import {addPost, updateNewPostText} from './States/state';
// import { BrowserRouter } from 'react-router-dom';




//  let rerenderTree = (state) => {
//    const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(
//       <BrowserRouter>
//         <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
//       </BrowserRouter>
//     );
//   }
  
// rerenderTree(state);
// subcribe(rerenderTree);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
