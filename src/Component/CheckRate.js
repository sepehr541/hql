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
        let showing = null
        if (this.props.show) {
            showing =
                (<Fragment>
                    <div className="CheckRate">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                            <button onClick={this.handleSubmit}>Check</button>
                        </form>
                    </div>
                </Fragment>)
        }
        return (
            { showing }
        )
    }
}