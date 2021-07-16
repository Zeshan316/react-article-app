import { useState, Fragment } from "react";
import { connect } from "react-redux";
import { mostLiked, mostRecent } from "./store/actions/article";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function ArticleListing(props) {
  const [isDisabledMostLiked, setDisableMostLiked] = useState(true);
  const [isDisabledMostRecent, setDisableMostRecent] = useState(false);

  function sortByUpvotes(){
    setDisableMostRecent(false);
    setDisableMostLiked(true);
    props.sortByUpvotes();    
  }

  function sortByDate(){
    setDisableMostRecent(true);
    setDisableMostLiked(false);
    props.sortByDate();    
  }

  return (
    <Container>
      <Row>
        <Col sm={2}><Button variant="primary" disabled={isDisabledMostLiked} onClick={() => sortByUpvotes()}>Most Upvoted</Button></Col>
        <Col sm={2}><Button variant="primary" disabled={isDisabledMostRecent} onClick={() => sortByDate()}>Most Recent</Button></Col>
      </Row>
      
      
      <Row xs={1} md={3} className="g-4" style={{margin: "5px"}}>
        {
          props.articles.map((article, index) => {
            return (
                <Col key={index}>
                    <Card>
                      <Card.Body>
                        <Card.Title>{ article.title }</Card.Title>
                        <Card.Text>
                          Up Votes: <b>{ article.upVotes }</b>
                        </Card.Text>
                        <Card.Footer>
                          Date: {article.date}
                        </Card.Footer>
                      </Card.Body>
                    </Card>
                  </Col>
            )
          })
        }
      </Row>
    </Container>
  );

}


// Redux store connection
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
