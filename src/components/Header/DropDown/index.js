import React, { useEffect, useState } from "react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

const DropDown = () => {
  const [categories = [], setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      ).then((res) => res.json());
      setCategories(response);
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <Menu>
        <MenuButton
          background={"white"}
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          Products
        </MenuButton>
        <MenuList>
          {categories.map((item, index) => {
            return (
              <MenuItem key={index}>
                <Link
                  textColor={"black"}
                  href={`/categories/${item}`}
                  textDecoration={"none"}
                >
                  {item}
                </Link>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
};

export default DropDown;
