import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import Cards from "../../components/Cards";
import { useState } from "react";
import "./style.css"
import { useSelector,useDispatch } from "react-redux";
import { toggleShow } from "../../features/sectionSlice";

const Community = () => {
  // const [showSec, setShowSec] = useState(true);

  const showSec = useSelector((state) => state.section.show)
  const dispatch = useDispatch()

  function handleSec() {
    dispatch(toggleShow())
  }

  return (
    <>
      <button className="hide-sec" onClick={handleSec}>
        {showSec ? "Hide Section" : "Show Section"}
      </button>
      <main className="community">
        <Title title="Big Community of People Like You" color="#464547" />
        <Subtitle
          subtitle="We’re proud of our products, and we’re really excited when we get feedback from our users."
          color="#666666"
        />
        {showSec && <Cards />}
      </main>
    </>
  );
};

export default Community;
