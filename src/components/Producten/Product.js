import React from "react";

function Product ({label, afbeelding, afText, text, prijs}){
    return(
            <article>
                <span>{label}</span>
                <img src={afbeelding} alt={afText} />
                <p>{text}</p>
                <h4>{prijs}</h4>
            </article>
    )
}

export default Product;