import React from 'react';

class StatsPage extends React.Component {
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
            <p>StatsPage Pitu :) </p>
        )
    }
}

export default StatsPage;