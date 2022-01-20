import React from "react";
import styled from "styled-components";
import Tilt from "react-tilt";

const Section = styled.section`
  background-color: #000000;
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? 1 : 2)};

  h1 {
    color: #ffffff;
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vq, 2rem);
  }

  p {
    color: #ffffff;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? 2 : 1)};
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? 2 : 1)};
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? 1 : 2)};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }

  h1 {
    color: #ffffff;
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vq, 2rem);
  }

  p {
    color: #ffffff;
    margin-bottom: 2rem;
  }
`;

const TiltWrapper = styled(Tilt)``;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  reverse,
  image,
}) => {
  return (
    <Section id="about">
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <TiltWrapper options={{ max: 25 }}>
            <img src={image} alt="home" />
          </TiltWrapper>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
