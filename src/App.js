import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { articles } from "./dummy-data/data.js";

function App() {
  const [articlesData] = useState(articles);
  console.log("hello world", articlesData);
  return (
    <div className="App">
      {
        articlesData.map((article, index) => {
          return (
            <>
              <p>
                {
                  article.title +" Posted on "+ article.date +" with votes "+ article.upVotes
                }
              </p>
            </>
          )
        })
      }
    </div>
  );
}

export default App;
