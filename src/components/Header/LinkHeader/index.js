import { Button, Link } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const LinkHeader = ({ item }) => {
  const navigate = useNavigate();

  const OnClickHandler = () => {
    navigate(item.path);
  };

  return (
    <Button
      as={Button}
      background={"white"}
      textColor={"black"}
      onClick={() => OnClickHandler()}
    >
      {item.name}
    </Button>
  );
};

export default LinkHeader;
