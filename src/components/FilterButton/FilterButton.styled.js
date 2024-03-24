import styled from "styled-components";

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 114px;
  height: 95px;
  border-radius: 10px;
  border: 1px solid var(--grey-border-color);
`;

const Text = styled.p`
  color: var(--main-black-color);
  text-align: center;
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
`;

export { Button, Text };
