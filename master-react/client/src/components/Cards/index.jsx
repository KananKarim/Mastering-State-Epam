import { useContext } from "react";
import { MyContext } from "../../context/GlobalState";
import Card from "../Card";
import "./style.css"

const Cards = () => {
    const {data} = useContext(MyContext);
    return ( 
        <div className="cards">
            {
                data.map((item) => <Card key={item.id} item={item}/>)
            }
        </div>
     );
}
 
export default Cards;