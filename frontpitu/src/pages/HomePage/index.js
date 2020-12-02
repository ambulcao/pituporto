import React from 'react';
import Header from '../../components/index';
import { Container, InputGroup, FormControl, Button, Alert, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { ContentContainer, Form } from './styles';
import ShortenerService from '../../services/shortenerService';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Container>
                <Header>Seu novo encurtador de URL :) </Header>
                
            </Container>
        )
    }

}

export default HomePage;