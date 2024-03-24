import styled from "styled-components";

const Wrapper = styled.div`
padding: 40px 64px 100px 0;
`;

const List = styled.ul`
display: flex;
flex-direction: column;
gap: 24px;
margin-left: 0;
margin-bottom: 50px;
`;

const Button = styled.button`
display: block;
margin: 0 auto;
border-radius: 200px;
border: 1px solid var(--load-more-border-color);
background-color: inherit;
padding: 16px 32px;
font-size: 16px;
font-weight: 500;
line-height: 1.5; 
letter-spacing: -0.08px;
`;

export {Wrapper,List, Button}