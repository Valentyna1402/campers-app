import styled from "styled-components";

const List = styled.ul`
  width: 430px;
  padding: 0;
`;

const Item = styled.li`
  width: 430px;
  padding: 0;
  margin-bottom: 24px;
`;

const TopWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const NameWrapper = styled.div`
  padding: 8px 0;
`;

const RatingWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-end;
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background: #f2f4f7;
  padding: 15px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
  margin-bottom: 4px;
`;

const Text = styled.p`
  color: var(--text-grey-color);
  font-size: 16px;
  line-height: 1.5;
`;

export {
  Item,
  List,
  TopWrapper,
  NameWrapper,
  RatingWrapper,
  Avatar,
  Name,
  Text,
};
