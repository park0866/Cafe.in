import styled from 'styled-components';

export const MainInfoSection = {};

MainInfoSection.InfoSec = styled.div`
  color: #D7AC87;
  padding: 235px 0;
  background: ${({ lightBg }) => ('#D7AC87')};
`;

MainInfoSection.InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

MainInfoSection.InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 600px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

MainInfoSection.TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

MainInfoSection.ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

MainInfoSection.TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#635949' : '#fff')};
  font-size: 18px;
  font-weight: 800;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

MainInfoSection.Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

MainInfoSection.Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#361a05' : '#1c2237')};
`;

MainInfoSection.Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#361a05' : '#1c2237')};
`;
