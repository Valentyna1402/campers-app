import React from "react";
import { useDispatch } from "react-redux";

import { Icon } from "../Icon/Icon";
import { Button, Text } from "./FilterButton.styled";
import { setEquipment } from "../../redux/filterSlice";

export const FilterButton = (props) => {
  // const dispatch = useDispatch();
  // const handleClick = e => {
  //   const value = e.target.value;
  //   console.log(value)
  //   dispatch(setEquipment(value))
  // }
  const { iconid, text, width = 32, height = 32 } = props;
  return (
    <Button type="button">
      <Icon iconid={iconid} width={width} height={height} />
      <Text>{text}</Text>
    </Button>
  );
};
