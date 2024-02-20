import { useState } from 'react'
import './App.css'
import Articles from './components/Articles/Articles'
import Cart from './components/Cart/Panier'
import Cryptoall from './assets/data/cryptosall.json'


function App() {
  const [wallet, setWallet] = useState(20)
  const [stock, setStock] = useState(Cryptoall)
  const [panier, setPanier] = useState([])

  function Calcul(index) {
    let prix = stock[index].prix
    setWallet(wallet-prix)
    let newStock = [...stock]
    newStock[index].stock = newStock[index].stock-1
    setStock(newStock)
    setPanier([...panier, stock[index]])
  }

  return (
    <>
      <div>

        <div id='wallet'>
          <h1>Mon argent: {wallet} €</h1>
        </div>
        
        <div id='crypto'>
          {
            stock.map( (element, index) => ( 
              <>
              <Articles wallet={wallet} index={index} logo={element.image} nom={element.nom} price={element.prix} supply={element.stock} button = {element.button} acheter = {Calcul}/> 

              </>

            ))
          }

        </div>


        <div id='cart'>

            <div>
                <h1 id='wallet'>Mon Panier:</h1>
                <hr />
                <div>
                  {
                    panier.map((element, index)=>(
                      <>
                        
                        <div id='d-flex'>
                            <img src={element.image} alt="" />
                            <p>Pièces de {element.nom}:</p>
                            <button>Rendre</button>
                        </div>
                      </>

                    ))
                  }
                </div>
            </div>


        </div>

      </div>

    </>
  )
}

export default App
