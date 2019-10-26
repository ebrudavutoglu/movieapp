import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Badge
} from 'reactstrap';



function Home() {
    useEffect(() => {
        fetchMovies();
    })

    const [movies, setMovies] = useState([])

    const fetchMovies = async () => {
        const data = await fetch('https://www.omdbapi.com/?s=marvel&apikey=4a3b711b')
        const movies = await data.json();
        console.log(movies.Search)
        setMovies(movies.Search)
    }

    return (
        <Row>
            {
                movies.map((movie) =>

                    <Col md="3" key={movie.Title} className="mb-15 mt-15">
                        <Link to={`/movie/${movie.imdbID}`}>
                            <Card>
                                <CardImg top width="100%" src={movie.Poster} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle> {movie.Title} </CardTitle>
                                    <CardSubtitle>
                                        <Badge href="#" className="mb-15" color="info">{movie.Year}</Badge>
                                    </CardSubtitle>
                                    <Button>Detail</Button>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>

                )
            }

        </Row>
    )
}



export default Home;