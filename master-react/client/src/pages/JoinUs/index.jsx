import React from "react";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import Form from "../../components/Form";
import "./style.css"

const JoinUs = () => {
  return (
    <main className="join-us">
      <Title title="Join Our Program" color="#FFFFFF" />
      <Subtitle
        subtitle="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        color="#FFFFFFB2"
      />
      <Form />
    </main>
  );
};

export default JoinUs;
