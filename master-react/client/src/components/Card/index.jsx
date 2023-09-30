import "./style.css"

const Card = ({item}) => {
    return ( 
        <div className="card">
            <img src={item.avatar} alt={item.firstName} className="card-img" />
            <p className="card-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, molestiae!</p>
            <h3 className="card-name">{item.firstName} {item.lastName}</h3>
            <p className="card-pos">{item.position}</p>
        </div>
     );
}
 
export default Card;