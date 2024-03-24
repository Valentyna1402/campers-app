import React from "react";
import { Icon } from "../Icon/Icon";
import { Item } from "./DetailItem.styled";

export const DetailItem = ({ value, name }) => {
  let content;

  switch (name) {
    case "CD":
      content = (
        <>
          <Icon iconid={"icon-cd"} width={20} height={20} />
          <p>{value} CD</p>
        </>
      );
      break;
    case "TV":
      content = (
        <>
          <Icon iconid={"icon-tv"} width={20} height={20} />
          <p>{value} TV</p>
        </>
      );
      break;
    case "airConditioner":
      content = (
        <>
          <Icon iconid={"icon-air-conditioner"} width={20} height={20} />
          <p>{value} Air Conditioner</p>
        </>
      );
      break;
    case "bathroom":
      content = (
        <>
          <Icon iconid={"icon-shower"} width={20} height={20} />
          <p>{value} Bathroom</p>
        </>
      );
      break;
    case "beds":
      content = (
        <>
          <Icon iconid={"icon-bed"} width={20} height={20} />
          <p>{value} Beds</p>
        </>
      );
      break;
    case "freezer":
      content = (
        <>
          <Icon iconid={"icon-freezer"} width={20} height={20} />
          <p>{value} Freezer</p>
        </>
      );
      break;
    case "gas":
      content = (
        <>
          <Icon iconid={"icon-gas"} width={20} height={20} />
          <p>{value}</p>
        </>
      );
      break;
    case "hob":
      content = (
        <>
          <Icon iconid={"icon-hob"} width={20} height={20} />
          <p>{value} Hob</p>
        </>
      );
      break;
    case "kitchen":
      content = (
        <>
          <Icon iconid={"icon-kitchen"} width={20} height={20} />
          <p>{value} Kitchen</p>
        </>
      );
      break;
    case "microwave":
      content = (
        <>
          <Icon iconid={"icon-microwave"} width={20} height={20} />
          <p>{value} Microwave</p>
        </>
      );
      break;
    case "radio":
      content = (
        <>
          <Icon iconid={"icon-radio"} width={20} height={20} />
          <p>{value} Radio</p>
        </>
      );
      break;
    case "shower":
      content = (
        <>
          <Icon iconid={"icon-shower"} width={20} height={20} />
          <p>{value} Shower</p>
        </>
      );
      break;
    case "toilet":
      content = (
        <>
          <Icon iconid={"icon-toilet-paper"} width={20} height={20} />
          <p>{value} Toilet</p>
        </>
      );
      break;
    case "water":
      content = (
        <>
          <Icon iconid={"icon-water"} width={20} height={20} />
          <p>{value}</p>
        </>
      );
      break;
    case "adults":
      content = (
        <>
          <Icon iconid={"icon-people"} width={20} height={20} />
          <p>{value} Adults</p>
        </>
      );
      break;
    case "transmission":
      content = (
        <>
          <Icon iconid={"icon-transmission"} width={20} height={20} />
          <p>{value}</p>
        </>
      );
      break;
    case "engine":
      content = (
        <>
          <Icon iconid={"icon-petrol"} width={20} height={20} />
          <p>{value}</p>
        </>
      );
      break;

    default:
      content = <>default</>;
  }
  return <Item>{content}</Item>;
};
