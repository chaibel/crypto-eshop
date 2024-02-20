import { useState } from 'react'
import './Articles.css'

function Articles(props) {


    return <>

        <div id='card1' key={props.index}>
            <div>
                <img src={props.logo} alt="" />
            </div>
            <div><b>{props.index}{props.nom}</b></div>
            <div>Prix: {props.price}€</div>
            <p>Supply: {props.supply} en circulation</p>

                {
                    props.wallet >= props.price && props.supply > 0 ?
                        <button onClick={()=>{
                        props.acheter(props.index)
                        }}>{props.button}</button>
                    :
                    " "
                }






        </div>
            
    </>
}

export default Articles