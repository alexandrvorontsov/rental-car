import styled from "@emotion/styled";
import Image from "../../img/homepage.png";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Text = styled.p`
  display: flex;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  width: 1000px;
  margin-top: 380px;
  margin-left: auto;
  margin-right: auto;
`;

export const Hero = styled.h1`
  display: flex;
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  width: 800px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled(Link)`
  display: flex;
  width: 140px;
  height: 2px;
  padding: 24px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  font-family: "Manrope";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-decoration: none;
  box-shadow: none;
  &:hover {
    background-color: #0b44cd;
  }
`;
