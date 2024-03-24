import { Container, StyledLink, Text, Title } from "./Home.styled";

export const Home = () => {
  return (
    <Container>
      <Title>Everywhere at home. At any time.</Title>
      <Text>Reliable camper rentals in Ukraine</Text>
      <StyledLink to="/catalog">Discover</StyledLink>
    </Container>
  );
};
