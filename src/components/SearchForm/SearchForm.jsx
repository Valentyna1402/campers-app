import { useDispatch } from "react-redux";
import { useState } from "react";

import { FilterButton } from "../FilterButton/FilterButton";
import { Icon } from "../Icon/Icon";
import {
  Form,
  TopWrapper,
  Label,
  InputWrapper,
  Input,
  BottomWrapper,
  Text,
  FilterWrapper,
  FilterTitle,
  FilterList,
  Button,
} from "./SearchForm.styled";
import {
  setLocation,
  setEquipment,
  setType,
} from '../../redux/filterSlice';


export const SearchForm = () => {
  const dispatch = useDispatch();
  const [location, setLocationQuery] = useState('');

  const handleChange = e => {
    setLocationQuery(e.target.value);
  };

  const handleSubmit = e => {
    const value = e.target.location.value;
    e.preventDefault();
    dispatch(setLocation(value));
  };

  const handleClick = e => {
    const value = e.target.value;
    dispatch(setEquipment(value))
  }

  return (
    <Form className="container" onSubmit={handleSubmit}>
      <TopWrapper>
        <Label htmlFor="adress">Location</Label>
        <InputWrapper>
          <Icon
            iconid={"icon-map-pin"}
            width={18}
            height={20}
            fill="var(--main-black-color)"
          />
          <Input placeholder="Kyiv, Ukraine" id="adress" name='location' onChange={handleChange} />
        </InputWrapper>
      </TopWrapper>
      <BottomWrapper>
        <Text>Filters</Text>
        <FilterWrapper>
          <FilterTitle>Vehicle equipment</FilterTitle>
          <Icon iconid={"icon-underline"} width={360} height={2} />
          <FilterList>
            <FilterButton iconid={"icon-ac"} text="AC" value='ac' />
            <FilterButton iconid={"icon-transmission"} text="Automatic" value='transmission' />
            <FilterButton iconid={"icon-kitchen"} text="Kitchen" value='kitchen' />
            <FilterButton iconid={"icon-tv"} text="TV" value='tv' />
            <FilterButton iconid={"icon-shower"} text="Shower/WC" value='shower' />
          </FilterList>
        </FilterWrapper>
        <FilterWrapper>
          <FilterTitle>Vehicle type</FilterTitle>
          <Icon iconid={"icon-underline"} width={360} height={2} />
          <FilterList>
            <FilterButton
              iconid={"icon-van"}
              text="Van"
              width={40}
              height={28}
            />
            <FilterButton
              iconid={"icon-fully-integrated"}
              text="Fully Integrated"
              width={40}
              height={28}
            />
            <FilterButton
              iconid={"icon-alcove"}
              text="Alcove"
              width={40}
              height={28}
            />
          </FilterList>
        </FilterWrapper>
      </BottomWrapper>
      <Button>Search</Button>
    </Form>
  );
};
