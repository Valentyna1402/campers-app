import React, { useState } from 'react';
import {Modal} from '../Modal/Modal';
import { Icon } from "../Icon/Icon";
import {
  Item,
  Image,
  InfoContainer,
  TitleWrapper,
  Title,
  PriceWrapper,
  FavoriteBtn,
  ReviewWrapper,
  Text,
  Description,
  DetailsList,
  DetailsItem,
  ShowMoreBtn,
  Wrapper,
} from "./TrailersItem.styled";

export const TrailersItem = ({trailer}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <Item> 
      <Image src={trailer.gallery[0]} alt={trailer.name} />
      <InfoContainer>
        <TitleWrapper>
          <Title>{trailer.name}</Title>
          <PriceWrapper>
            <p>€{trailer.price}</p>
            <FavoriteBtn>
              <Icon iconid={"icon-heart"} width={24} height={24} />
            </FavoriteBtn>
          </PriceWrapper>
        </TitleWrapper>
        <ReviewWrapper>
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
        </ReviewWrapper>
        <div>
          <Description>{trailer.description}</Description>
          <DetailsList>
            <DetailsItem>
              <Icon iconid={"icon-people"} width={18} height={13} />
              {trailer.adults} adults</DetailsItem>
            <DetailsItem>
            <Icon iconid={"icon-transmission"} width={18} height={13} />
              {trailer.transmission}</DetailsItem>
            <DetailsItem>
            <Icon iconid={"icon-petrol"} width={18} height={13} />
              {trailer.engine}</DetailsItem>
            {trailer.details.kitchen && (
              <DetailsItem>
                <Icon iconid={"icon-kitchen"} width={18} height={13} />
                Kitchen</DetailsItem>
            )}
            <DetailsItem>
            <Icon iconid={"icon-bed"} width={18} height={13} />
              {trailer.details.beds} beds</DetailsItem>
            {trailer.details.airConditioner && (
              <DetailsItem>
                <Icon iconid={"icon-ac"} width={18} height={13} />
                AC</DetailsItem>
            )}
          </DetailsList>
          <ShowMoreBtn type='button' onClick={openModal}>Show more</ShowMoreBtn>
        </div>
      </InfoContainer>
      <Modal show={showModal} close={closeModal} trailer={trailer} />
    </Item>
  );
};
