import React from "react";
import { useDispatch } from "react-redux";

import { Icon } from "../Icon/Icon";
import { Button, Text, Wrapper } from "./FilterButton.styled";
import { setEquipment } from "../../redux/filterSlice";

export const FilterButton = (props) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    dispatch(setEquipment(value));
  };
  const { iconid, text, value, width = 32, height = 32 } = props;
  return (
    <Wrapper>
      <Button
        type="checkbox"
        id={text}
        name="filter"
        value={value}
        onChange={handleChange}
      />
      <Icon iconid={iconid} width={width} height={height} />
      <Text>{text}</Text>
    </Wrapper>
  );
};
