import React from "react";

class ButtonCard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            like: 0
        };

    }
    

    takeLikes = () => {
        let likes = 0;
        likes = this.state.like + 1;
        this.setState({ like: likes })
    }

    render() {
        const { firstName, lastName } = this.props;
        return(
            <fieldset>
                <p>Age: { this.state.like }</p>
                <button onClick={ this.takeLikes }>Birthday button for { firstName } { lastName }</button>
            </fieldset>
        );
    };
};

export default ButtonCard;