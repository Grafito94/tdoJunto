import React from "react";

class PersonCard extends React.Component{
    render(){
        /*  Destructuring nos permite usarlos como variables. Esto es solo una pequeña cantidad de azúcar sintáctico 
        Props, abreviatura de propiedades, es un objeto vacío  que se pasa a cada componente React de forma predeterminada */
        const { firstName, lastName, age, hairColor  } = this.props;
        return(
            <div>
                <h2>{ firstName }</h2>
                <h2>{ lastName }</h2>
                <h2>{ age }</h2>
                <h2>{ hairColor }</h2>
            </div>
        );
    }
}

export default PersonCard;
