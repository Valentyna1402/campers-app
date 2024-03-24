import React from "react";
import { Icon } from "../Icon/Icon";
import {
  Container,
  TitleWrapper,
  RatingContainer,
  Title,
  CloseBtn,
  Wrapper,
  Text,
  Description,
  ImgList,
  ImgItem,
  ScrollContainer,
  Subtitle,
  SubtitleWrapper,
  SubtitleContainer,
  BottomContainer,
} from "./TrailerDetails.styled";
import { Features } from "../Features/Features";
import { BookForm } from "../BookForm/BookForm";
import { Reviews } from "../Reviews/Reviews";

export const TrailerDetails = ({ trailer, close }) => {
  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <TitleWrapper>
        <Title>{trailer.name}</Title>
        <CloseBtn type="button" onClick={close}>
          <Icon iconid={"icon-close"} width={32} height={32} />
        </CloseBtn>
      </TitleWrapper>
      <RatingContainer>
        <Wrapper>
          <Icon iconid={"icon-star-yellow"} width={16} height={16} />
          <Text>
            {trailer.rating}({trailer.reviews.length} Reviews)
          </Text>
        </Wrapper>
        <Wrapper>
          <Icon iconid={"icon-map-pin"} width={16} height={16} />
          <p>{trailer.location}</p>
        </Wrapper>
      </RatingContainer>
      <Title>€{trailer.price}</Title>
      <ScrollContainer>
        <ImgList>
          {trailer.gallery.map((img) => {
            return <ImgItem key={img} src={img} />;
          })}
        </ImgList>
        <Description>{trailer.description}</Description>
        <SubtitleWrapper>
          <Subtitle>Features</Subtitle>
          <Subtitle>Reviews</Subtitle>
        </SubtitleWrapper>
        <BottomContainer>
        <Reviews reviews={trailer.reviews} />
          {/* <Features trailer={trailer} /> */}
          <BookForm reviews={trailer} />
        </BottomContainer>
      </ScrollContainer>
    </Container>
  );
};
