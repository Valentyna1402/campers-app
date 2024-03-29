import React from "react";
import { useDispatch } from "react-redux";

import { Icon } from "../Icon/Icon";
import { Button, Text, Wrapper } from "./FilterButton.styled";
import { setEquipment, setType } from "../../redux/filterSlice";

export const FilterButton = (props) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const value = e.target.value;
    if (e.target.type === 'checkbox') {
      dispatch(setEquipment(value));
    }
    if (e.target.type === 'radio') {
      dispatch(setType(value)); 
    }
    return;
  };
  const { iconid, text, value, type, width = 32, height = 32 } = props;
  return (
    <Wrapper>
      <Button
        type={type}
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
