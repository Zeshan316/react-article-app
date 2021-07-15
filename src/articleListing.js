import { useState, Fragment } from "react";
import { connect } from "react-redux";
import { mostLiked, mostRecent } from "./store/actions/article";

function ArticleListing(props) {

  function sortByUpvotes(){
    props.sortByUpvotes();    
  }

  function sortByDate(){
    props.sortByDate();    
  }

  return (
    <div className="App">
      <button onClick={() => sortByUpvotes()}>Most Upvoted</button>
      <button onClick={() => sortByDate()}>Most Recent</button>
      {
        props.articles.map((article, index) => {
          return (
            <Fragment key={index}>
              <p>
                {
                  article.title +" Posted on "+ article.date +" with votes "+ article.upVotes
                }
              </p>
            </Fragment>
          )
        })
      }
    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    articles: state.articleStore.articles
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sortByUpvotes: (payload = {}) => dispatch(mostLiked(payload)),
    sortByDate: (payload = {}) => dispatch(mostRecent(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListing);
