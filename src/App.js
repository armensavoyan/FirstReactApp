import React from 'react';
import './styles/App.css';
import PostItem from "./components/UI/PostItem";

function App() {

   return (

       <div className = "App">
           <h1>
               Список постов
           </h1>

           <PostItem post = {{id: 1, title: 'JavaScript1', body: 'description1'}}/>
           <PostItem post = {{id: 2, title: 'JavaScript2', body: 'description2'}}/>
           <PostItem post = {{id: 3, title: 'JavaScript3', body: 'description3'}}/>
           <PostItem post = {{id: 4, title: 'JavaScript4', body: 'description4'}}/>

       </div>

  );
}

export default App;