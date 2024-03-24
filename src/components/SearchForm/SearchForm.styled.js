import styled from "styled-components";

const Form = styled.form``;

const TopWrapper = styled.div`
  margin-bottom: 32px;
`;

const Label = styled.label`
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

const InputWrapper = styled.div`
  width: 360px;
  display: flex;
  padding: 18px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  background: var(--input-white-color);
  margin-top: 8px;
`;

const Input = styled.input`
  outline: none;
  border: none;
  background: transparent;
`;

const BottomWrapper = styled.div``;

const Text = styled.p`
  color: var(--text-grey-color);
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 14px;
`;

const FilterWrapper = styled.div``;

const FilterTitle = styled.h2`
  color: var(--main-black-color);
  font-family: var(--font-family);
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 10px;
`;

const FilterList = styled.div`
  margin-top: 24px;
  margin-bottom: 32px;
  display: flex;
  width: 360px;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
  padding: 0;
`;

const Button = styled.button`
  margin-top: 32px;
  padding: 16px 60px;
  border-radius: 200px;
  border: none;
  background: var(--button-color);
  color: var(--main-white-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.08px;
`;

export {
  Form,
  TopWrapper,
  Label,
  InputWrapper,
  Input,
  BottomWrapper,
  Text,
  FilterWrapper,
  FilterTitle,
  FilterList,
  Button,
};
