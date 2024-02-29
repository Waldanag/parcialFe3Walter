import { useState } from "react";
import Card from "./Card";
import '../styles/Form.css'

const Form = () => {

    const [userName, setUserName] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');
    const [address, setAddress] = useState('');

    const [err, setErr] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const [cardData, setCardData] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userName.trim().length >= 3 && address.length >= 6 && favoriteColor.length >= 3) {
            setErr(false)
            setShowCard(true)
            setCardData({userName, favoriteColor, address})
        } else {
            setErr(true)
            setShowCard(false)
        }
    }

    return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <h2 className="form-title">ELIGE UN COLOR Y ENVIAMOS TU PINTURA</h2>
            <div className="input-group">
            <label>Nombre:</label>
            <input placeholder="Ingresa tu nombre" type="text" onChange={(event) => setUserName(event.target.value)}/>
            </div>
            <div className="input-group">
            <label>Dirección:</label>
            <input placeholder="Ingresa tu dirección" type="text" onChange={(event) => setAddress(event.target.value)}/>
            </div>
            <div className="input-group">
            <label>Color Favorito:</label>
            <input placeholder="Ingresa EN INGLES tu color favorito" type="text" onChange={(event) => setFavoriteColor(event.target.value)}/>
            </div>



            <button>Enviar</button>
        </form>

        {err && <p style={{color: 'red'}}>Debe colocar su información correctamente</p> }
        {showCard && <Card userName={cardData.userName} address={cardData.address} favoriteColor={cardData.favoriteColor}/> }

    </div>);
};

export default Form;
