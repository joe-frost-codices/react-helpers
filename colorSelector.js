import React, {Component} from "react"

class Dynamic extends Component{

    state={value:"aa"}

    percent = (num1,num2) => {
        return num1/num2 * 100
    }

    updateValue = (e) => {
        this.setState({value:e.target.value})
    }
    
    render() {
        return (
            <div>
                Current Value: {this.percent(this.props.currentValue,this.props.topValue)}%
                <br />
                <input type="color" id="myColor" onChange={this.updateValue} />
                <p>{this.state.value}</p>
            </div>

        )
    }
}

export default Dynamic
