import React, { Component, Fragment } from 'react'

class CheckRate extends Component {
    // constructor(props) {
    //     super(props);
    // }

    state = {
        value: '',
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

    }

    render() {
            
        return (
            <Fragment>
                    <div className="CheckRate">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                            <button onClick={this.handleSubmit}>Check</button>
                        </form>
                    </div>
                </Fragment>
        )
    }
}

export default CheckRate