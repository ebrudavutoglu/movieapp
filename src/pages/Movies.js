import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardBody,
    CardTitle, Row, Col, Alert, Spinner, Input, CardColumns
} from 'reactstrap';


class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            movies: [],
            error: null,
            loading: false,
            q: 'batman'
        }
        this.inputChanged = this.inputChanged.bind(this)
    }
    inputChanged(event) {
        this.setState({
            search: event.target.value
        })
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?s=netflix&apikey=4a3b711b`).then(resp => resp)
            .then(resp => resp.json())
            .then(response => {
                if (response.Response === 'False') {
                    this.setState({ error: response.error });
                }
                else {
                    this.setState({ movies: response.Search });
                }

                this.setState({ loading: false });
            })
            .catch(({ message }) => {
                this.setState({ error: message });
                this.setState({ loading: false });
            })
    }


    render() {
        const { search } = this.state;
        const filteredMovies = this.state.movies.filter(movie => {
            return movie.Title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        return (
            <Row>
                <Col md="12" className="mt-15" span={12} offset={6}>
                    <Input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="with a placeholder"
                        value={this.state.search}
                        onChange={this.inputChanged}

                    />
                </Col>
                <Col md="12">

                    {
                        this.state.loading && <Spinner color="primary" />
                    }
                    {
                        filteredMovies !== null && filteredMovies.length > 0 ? (
                            <CardColumns className="mt-15">
                                {filteredMovies !== null && filteredMovies.length > 0 && filteredMovies.map((movie) =>


                                    <Card key={movie.imdbID}>
                                        <Link className="movie-card" to={`/movie/${movie.imdbID}`}>
                                            <CardImg className="card-image" top width="100%" src={movie.Poster === 'N/A' ? 'https://placehold.it/198x264&text=Default+Image' : movie.Poster} alt={movie.Title} />
                                            <CardBody>
                                                <small className="mb-15 year badge badge-info">{movie.Year}</small>
                                                <CardTitle> {movie.Title} </CardTitle>
                                            </CardBody>
                                        </Link>
                                    </Card>

                                )}
                            </CardColumns>
                        ) : (
                                <Alert className="mt-15 float-left" color="danger" message={this.state.error} type="error"> Movie is not found</Alert>
                            )



                    }

                </Col>
            </Row>
        )
    }
}
/* 
function Movies() {

    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [q, setQuery] = useState('batman');


    useEffect(() => {
        setLoading(true);
        setError(null);
        setMovies(null);

        fetch(`https://www.omdbapi.com/?s=batman&apikey=4a3b711b`).then(resp => resp)
            .then(resp => resp.json())
            .then(response => {
                if (response.Response === 'False') {
                    setError(response.Error);
                }
                else {
                    setMovies(response.Search);
                }

                setLoading(false);
            })
            .catch(({ message }) => {
                setError(message);
                setLoading(false);
            })
    }, [q])

    return (
        <Row>
            <Col md="12" className="mt-15" span={12} offset={6}>
                <SearchBox onSearchMovie={this.onSearchMovie} />
            </Col>

            {
                loading && <Spinner color="primary" />
            }

            {
                error !== null && <Alert color="danger" message={error} type="error">
                    Data is not found
                </Alert>
            }
            {
                movies !== null && movies.length > 0 && movies.map((movie) =>
                    <Col md="3" key={movie.Title} className="mb-15 mt-15">
                        <Link className="movie-card" to={`/movie/${movie.imdbID}`}>
                            <Card>
                                <CardImg className="card-image" top width="100%" src={movie.Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : movie.Poster} alt={movie.Title} />
                                <CardBody>
                                    <small className="mb-15 year badge badge-info">{movie.Year}</small>
                                    <CardTitle> {movie.Title} </CardTitle>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>
                )
            }
        </Row>
    )
}
 */


export default Movies;