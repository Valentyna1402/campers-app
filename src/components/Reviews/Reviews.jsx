import React from "react";
import { Icon } from "../Icon/Icon";
import {
  Item,
  List,
  TopWrapper,
  NameWrapper,
  RatingWrapper,
  Avatar,
  Name,
  Text,
} from "./Reviews.styled";

export const Reviews = ({ reviews }) => {
  return (
    <List>
      {reviews.map((review) => {
        console.log(review);
        return (
          <Item>
            <TopWrapper>
              <Avatar>
                <Icon
                  iconid={"icon-user"}
                  width={30}
                  height={30}
                  fill={"#E44848"}
                />
              </Avatar>
              <NameWrapper>
                <Name>{review.reviewer_name}</Name>
                <RatingWrapper>
                  <p>{review.reviewer_rating}</p>
                  <Icon iconid={"icon-star-yellow"} width={16} height={16} />
                </RatingWrapper>
              </NameWrapper>
            </TopWrapper>
            <Text>{review.comment}</Text>
          </Item>
        );
      })}
    </List>
  );
};
