import styled from "styled-components";

const Item = styled.li`
  display: flex;
  gap: 24px;
  width: 888px;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid var(--grey-border-color);
`;

const Image = styled.img`
  width: 290px;
  height: 310px;
  object-position: 80% 0;
  border-radius: 10px;
`;

const InfoContainer = styled.div``;

const TitleWrapper = styled.div`
  width: 526px;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;

const PriceWrapper = styled.div`
  display: flex;
  gap: 11px;
`;

const FavoriteBtn = styled.button`
  border: none;
  background-color: inherit;
`;

const ReviewWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 1.5;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Text = styled.p`
  text-decoration-line: underline;
`;

const Description = styled.p`
  max-width: 525px;
  color: var(--text-grey-color);
  font-size: 16px;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 24px;
`;

const DetailsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const DetailsItem = styled.li`
  display: flex;
  padding: 12px 18px;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  background: var(--input-white-color);
`;

const ShowMoreBtn = styled.button`
  padding: 16px 40px;
  border-radius: 200px;
  background: var(--button-color);
  color: var(--main-white-color);
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.08px;
`;

export {
  Item,
  Image,
  InfoContainer,
  TitleWrapper,
  Title,
  PriceWrapper,
  FavoriteBtn,
  ReviewWrapper,
  Wrapper,
  Text,
  Description,
  DetailsList,
  DetailsItem,
  ShowMoreBtn,
};
