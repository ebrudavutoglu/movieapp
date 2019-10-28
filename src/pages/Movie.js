import React, { useState, useEffect } from 'react';
import { CardImg, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';

function Movie({ match }) {
    useEffect(() => {
        fetchMovie();
    })

    const [movie, setMovie] = useState({})


    const fetchMovie = async () => {
        const data = await fetch(`http://www.omdbapi.com/?i=${match.params.id}&apikey=925c18c6`)
        const movie = await data.json();
        setMovie(movie)
    }
    return (
        <Row className="mt-15">
            <Col md="4">
                <CardImg top width="100%" src={movie.Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : movie.Poster} alt={movie.Title} />
            </Col>
            <Col md="8">
                <div className="singlepage-right">
                    <div className="single-header">
                        <h1> {movie.Title}  <small> {movie.Year} </small></h1>
                        <span>Released: {movie.Released}  </span>
                        <hr></hr>
                    </div>
                    <div className="single-middle">
                        <ListGroup>
                            <ListGroupItem><strong>Runtime:</strong> {movie.Runtime} </ListGroupItem>
                            <ListGroupItem><strong>Genre:</strong> {movie.Genre}</ListGroupItem>
                            <ListGroupItem><strong>Director:</strong> {movie.Director}</ListGroupItem>
                            <ListGroupItem><strong>Writer:</strong> {movie.Writer}</ListGroupItem>
                            <ListGroupItem><strong>Actors:</strong> {movie.Actors}</ListGroupItem>
                            <ListGroupItem><strong>Awards:</strong> {movie.Awards}</ListGroupItem>
                        </ListGroup>


                    </div>
                </div>
            </Col>
        </Row >
    );
}
export default Movie;
