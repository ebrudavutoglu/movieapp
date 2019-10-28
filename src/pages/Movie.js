import React, { Component } from 'react';
import { CardImg, Col, Row, ListGroup, ListGroupItem, Alert, Spinner } from 'reactstrap';


class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            error: null,
            loading: false,
            matchId: props.match.params.id
        }
    }
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?i=${this.state.matchId}&apikey=925c18c6`).then(resp => resp)
            .then(resp => resp.json())
            .then(response => {
                if (response.Response === "False") {
                    this.setState({ error: response.Error });
                } else {
                    this.setState({ movie: response });
                }
                this.setState({ loading: false });

                console.log(response)
            })
            .catch(({ message }) => {
                this.setState({ error: message });
            })
    }
    render() {
        return (
            <Row className="mt-15">
                {
                    this.state.loading && <Spinner color="primary" />
                }
                {
                    this.state.error && <Alert> Movie is not found</Alert>
                }
                <Col md="4">
                    <CardImg top width="100%" src={this.state.movie.Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : this.state.movie.Poster} alt={this.state.movie.Title} />
                </Col>
                <Col md="8">
                    <div className="singlepage-right">
                        <div className="single-header">
                            <h1> {this.state.movie.Title}  <small> {this.state.movie.Year} </small></h1>
                            <span>Released: {this.state.movie.Released}  </span>
                            <hr></hr>
                        </div>
                        <div className="single-middle">
                            <ListGroup>
                                <ListGroupItem><strong>Runtime:</strong> {this.state.movie.Runtime} </ListGroupItem>
                                <ListGroupItem><strong>Genre:</strong> {this.state.movie.Genre}</ListGroupItem>
                                <ListGroupItem><strong>Director:</strong> {this.state.movie.Director}</ListGroupItem>
                                <ListGroupItem><strong>Writer:</strong> {this.state.movie.Writer}</ListGroupItem>
                                <ListGroupItem><strong>Actors:</strong> {this.state.movie.Actors}</ListGroupItem>
                                <ListGroupItem><strong>Awards:</strong> {this.state.movie.Awards}</ListGroupItem>
                            </ListGroup>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Movie;
