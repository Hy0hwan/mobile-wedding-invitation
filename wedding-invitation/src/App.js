// src/App.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function App() {
  return (
    <Container>
      <Image src="path_to_your_image.jpg" alt="Wedding Image" />
      <Heading>결혼식에 초대합니다!</Heading>
      <SubHeading>저희의 특별한 날에 함께 해주세요</SubHeading>
      <Details>
        날짜: 2024년 11월 16일
        <br />
        장소: 서울시 관악구 웨딩홀
      </Details>
      <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        더 알아보기
      </Button>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3f4f6;
  text-align: center;
  font-family: 'Arial, sans-serif';
  padding: 20px;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 1px solid #333333;
`;

const Heading = styled.h1`
  color: #333;
  margin-bottom: 10px;
`;

const SubHeading = styled.h2`
  color: #666;
  margin-bottom: 20px;
`;

const Details = styled.p`
  color: #555;
  margin-bottom: 30px;
`;

const Button = styled(motion.button)`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// 미디어 쿼리 예시
// @media (max-width: 600px) {
//   /* Styles for smaller screens */
//   img {
//     max-width: 100%;
//   }
// }
