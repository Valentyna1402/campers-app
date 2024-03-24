import styled from "styled-components";

const Container = styled.div`
  max-width: 448px;
  padding: 24px;
  border-radius: 10px;
  border: 1px solid var(--grey-border-color);
`;

const Form = styled.form``;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 8px;
`;

const Text = styled.p`
  color: var(--text-grey-color);
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 24px;
`;

const Input = styled.input`
  min-width: 400px;
  display: block;
  padding: 18px;
  border: none;
  border-radius: 10px;
  background: var(--input-white-color);
  color: rgba(16, 24, 40, 0.6);
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 14px;
`;

const InputWrapper = styled.div`
  min-width: 400px;
  display: flex;
  justify-content: space-between;
  padding: 18px;
  border: none;
  border-radius: 10px;
  background: var(--input-white-color);
  color: rgba(16, 24, 40, 0.6);
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 14px;
`;

const InputDate = styled.input`
  border: none;
  background: transparent;
`;

const Textarea = styled.textarea`
  min-width: 400px;
  min-height: 200px;
  padding: 18px;
  border: none;
  border-radius: 10px;
  background: var(--input-white-color);
  color: rgba(16, 24, 40, 0.6);
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 24px;
`;

const Button = styled.button`
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
  Container,
  Form,
  Title,
  Text,
  Input,
  InputWrapper,
  InputDate,
  Textarea,
  Button,
};
