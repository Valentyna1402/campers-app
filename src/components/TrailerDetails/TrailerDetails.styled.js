import styled from "styled-components";

const Container = styled.div`
  background: var(--main-white-color);
  width: 982px;
  height: 720px;
  padding: 40px;
  border-radius: 20px;
  z-index: 100;
`;

const TitleWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 10px;
`;

const Title = styled.p`
font-size: 24px;
font-weight: 600;
line-height: 1.25; 
`;

const CloseBtn = styled.button`
border: none;
background-color: inherit;
`;

const RatingContainer = styled.div`
display: flex;
gap: 16px;
margin-bottom: 24px;
font-size: 16px;
line-height: 1.5; 
margin-bottom: 16px;
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
gap: 4px;
`;

const Text = styled.p`
text-decoration-line: underline;
`;

const ScrollContainer = styled.div`
overflow-y: scroll;
max-height: 498px;
width: 926px;
margin-top: 24px;
scrollbar-color: #D9D9D9;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: #D9D9D9;
      border-radius: 7px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
`;

const Description = styled.p`
width: 902px;
color: var(--text-grey-color);
font-size: 16px;
line-height: 1.5;
margin-bottom: 44px;
`;

const ImgList = styled.ul`
display: flex;
justify-content: space-between;
max-width: 902px;
margin-bottom: 24px;
`;

const ImgItem = styled.li`
min-width: 290px;
height: 310px;
padding: 0;
background-image: url(${(props) => props.src});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
border-radius: 10px;
`;

const BottomContainer = styled.div`
width: 902px;
display: flex;
justify-content: space-between;
`;

const Subtitle = styled.p`
font-size: 20px;
font-weight: 600;
line-height: 1.2; 
`;

const SubtitleWrapper = styled.div`
width: 902px;
display: flex;
gap: 40px;
padding-bottom: 24px;
border-bottom: 1px solid var(--grey-border-color);
margin-bottom: 44px;
`;

const SubtitleContainer = styled.div`

`;


export {
Container,
    TitleWrapper,
    Title,
    CloseBtn,
    Wrapper,
    Text,
    Description,
    RatingContainer,
    ImgList,
    ImgItem,
    ScrollContainer,
    Subtitle,
    SubtitleWrapper,
    BottomContainer
  };