import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ item }) => {
  const navigate = useNavigate();
  const { name, description } = item;
  const handleClick = (name) => {
    navigate(name);
  };

  return (
    <div className="bg-gradient-to-b gap-2 rounded-2xl from-black to-red-950 p-3 flex flex-col ">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p>{description}</p>
      <button onClick={() => handleClick(name)} className="cursor-pointer">
        Learn More
      </button>
    </div>
  );
};

export default ProjectCard;
