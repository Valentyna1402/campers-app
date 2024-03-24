import styled from "styled-components";
import { Link } from "react-router-dom";
import backgroundImage from "../../img/bg-home.jpg";

const Container = styled.div`
  width: 100%;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 82px);
  padding: 200px 64px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 56px;
  margin-bottom: 50px;
  text-shadow: var(--main-white-color) 1px 1px 0;
`;

const Text = styled.p`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 80px;
`;

const StyledLink = styled(Link)`
  border-radius: 200px;
  background-color: var(--blur-text-color);
  padding: 32px 64px;
  font-size: 24px;
  font-weight: 500;
  color: var(--main-white-color);
`;

export { Container, Title, Text, StyledLink };
