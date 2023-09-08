import {Row, Col, Container, Carousel, Badge} from 'react-bootstrap'
import Component from 'react'

class FirstRow extends Component {
    state= {
        filmSelection: null
    };
render () {
    return (

        const response = await fetch("http://www.omdbapi.com/?apikey=7f0f8943&s=avengers") {
            
        <Container className={props.className}>
        <Row>
            <h3 className={props.fontSize}>TV Shows</h3>
          <Col lg={3}>
            <Carousel>
                {/* TROVARE ARRAY */}
              {film.map((film) => (
                <Carousel.Item key={film.imdbId} onClick={() => this.setState({ filmSelection: film })}>
                  <img src={film.Poster} alt={film.Title} />
                  <Carousel.Caption>
                    <h4>{film.Title}</h4>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
            </Col>
        </Row>
    </Container>
}

    )
}
    }

    export default FirstRow;