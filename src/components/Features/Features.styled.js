import styled from "styled-components";

const Container = styled.div`
  width: 430px;
  padding: 0;
`;

const DetailsList = styled.ul`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 44px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--grey-border-color);
  margin-bottom: 24px;
`;

const VehicleDetList = styled.ul`
  width: 430px;
  // margin-bottom: 44px;
`;

const VehicleDetItem = styled.li`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;

const Text = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
`;

export { Container, DetailsList, VehicleDetList, VehicleDetItem, Title, Text };
