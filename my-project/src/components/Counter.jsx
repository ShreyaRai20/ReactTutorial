import { Component } from "react";


class Counter extends Component {

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.number !== this.props.number) {
            console.log("compoenet updated")
        }
    }

    componentWillUnmount() {
        console.log("removed")
    }

    render() {
        return (
            <div>
                {this.props.number}
            </div>
        )
    }
}

export default Counter