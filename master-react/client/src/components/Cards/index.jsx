// import{ useContext } from "react";
// import { MyContext } from "../../context/GlobalState"; 
import Card from "../Card";
import "./style.css"
import { useSelector } from "react-redux";

const Cards = () => {
    const data = useSelector((state) => state.user.data)
    console.log(data);
    return ( 
        <div className="cards">
            {
                data.map((item) => <Card key={item.id} item={item}/>)
            }
        </div>
     );
}
 
export default Cards;