import React from "react";
import { Icon } from "../Icon/Icon";
import {
  Container,
  Form,
  Title,
  Text,
  Input,
  InputWrapper,
  Textarea,
  Button,
  InputDate,
} from "./BookForm.styled";

export const BookForm = () => {
  return (
    <Container>
      <Form>
        <Title>Book your campervan now</Title>
        <Text>Stay connected! We are always ready to help you.</Text>
        <Input placeholder="Name" type="string" />
        <Input placeholder="Email" type="email" />
        <InputWrapper>
          <InputDate placeholder="Booking date" />
          <Icon iconid={"icon-calendar"} width={20} height={20} />
        </InputWrapper>
        <Textarea placeholder="Comment" />
        <Button type="submit">Send</Button>
      </Form>
    </Container>
  );
};
