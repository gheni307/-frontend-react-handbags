import React from "react";

function Tile({title, paragrafen, paragrafen1, afbeelding, afText}){
    return(
        <section>
            <h2>{title}</h2>
            <p>{paragrafen}</p>
            <p>{paragrafen1}</p>
            <img src={afbeelding} alt={afText} />
        </section>
    )
}

export default Tile;