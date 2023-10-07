import { Link } from "react-router-dom";
import "./style.css"

const Card = ({item}) => {
    console.log(item);
    return ( 
        <div className="card">
            <img src={item.avatar} alt={item.firstName} className="card-img" />
            <p className="card-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, molestiae!</p>
            <Link to={`/community/${item.id}`} className="card-name">{item.firstName} {item.lastName}</Link>
            <p className="card-pos">{item.position}</p>
        </div>
     );
}
 
export default Card;