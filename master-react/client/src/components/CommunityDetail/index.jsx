import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CommunityDetail = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.user.data);

  const selectedItem = data.find((item) => item.id === id);

  if (!selectedItem) {
    return <div>Community card not found</div>;
  }

  return (
    <>
      <div className="card">
        <img
          src={selectedItem.avatar}
          alt={selectedItem.firstName}
          className="card-img"
        />
        <p className="card-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
          molestiae!
        </p>
        <h3 className="card-name">
          {selectedItem.firstName} {selectedItem.lastName}
        </h3>
        <p className="card-pos">{selectedItem.position}</p>
      </div>
      <Link to="/">Go home</Link>
    </>
  );
};

export default CommunityDetail;
