import React from "react";
import { DetailItem } from "../DetailItem/DetailItem";
import {
  Container,
  DetailsList,
  Text,
  Title,
  VehicleDetItem,
  VehicleDetList,
} from "./Features.styled";

export const Features = ({ trailer }) => {
  //console.log(trailer)
  const { form, length, width, height, tank, consumption } = trailer;

  return (
    <Container>
      <DetailsList>
        {Object.keys(trailer.details).map((key) => {
          return (
            <DetailItem key={key} value={trailer.details[key]} name={key} />
          );
        })}
      </DetailsList>
      <div>
        <Title>Vehicle details</Title>
        <VehicleDetList>
          <VehicleDetItem>
            <Text>Form</Text>
            <Text>{form}</Text>
          </VehicleDetItem>
          <VehicleDetItem>
            <Text>Length</Text>
            <Text>{length}</Text>
          </VehicleDetItem>
          <VehicleDetItem>
            <Text>Width</Text>
            <Text>{width}</Text>
          </VehicleDetItem>
          <VehicleDetItem>
            <Text>Height</Text>
            <Text>{height}</Text>
          </VehicleDetItem>
          <VehicleDetItem>
            <Text>Tank</Text>
            <Text>{tank}</Text>
          </VehicleDetItem>
          <VehicleDetItem>
            <Text>Consumption</Text>
            <Text>{consumption}</Text>
          </VehicleDetItem>
        </VehicleDetList>
      </div>
    </Container>
  );
};
