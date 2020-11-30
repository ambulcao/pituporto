import React from 'react';

class NotFoundPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            url: '',
            code: '',
            errorMessage: '',
        }
    }

    render() {
        return (
            <p>Página não encontrada -- Pitu :) </p>
        )
    }
}

export default NotFoundPage;