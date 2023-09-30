import { useContext } from "react";
import { MyContext } from "../../context/GlobalState";

const Subtitle = ({subtitle,color}) => {
    return ( 
        <h3 style={{color:color}}>{subtitle}</h3>
     );
}
 
export default Subtitle;