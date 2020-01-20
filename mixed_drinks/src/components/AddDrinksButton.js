import React, { Component } from 'react';


class AddDrinksButton extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    getDrink() {
        console.log('clicked');
    }

    render () {
        return(
            <div>
                <button type="submit" onClick={this.getDrink}>Submit</button>
            </div>
        )
    }  
}
export default AddDrinksButton;