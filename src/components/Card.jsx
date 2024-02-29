const Card = ({userName, address, favoriteColor}) => {
    return (
    <div className="card-container">
        <h4>Hola {userName}!</h4>
        <h4>Enviaremos a <strong>{address}</strong> tu color favorito:</h4>
        <div className="card-color" style={{ backgroundColor: "gray" }}>
            <h3 className="card-text" style={{ color: favoriteColor }}>{favoriteColor}</h3>
        </div>
    </div>
    );
};

export default Card;
