import React from 'react';

class RedirectPage extends React.Component {
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
            <p>RedirectPage Pitu :) </p>
        )
    }
}

export default RedirectPage;