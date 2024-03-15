import styled from "styled-components";
import { Link } from "react-router-dom";
// import { list } from "../data";

import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 60vh;
  position: relative;
  border: 0.5px solid lightgrey;
  transition: transform .2s; 
  &:hover{
    transform: scale(1.05);
  }
`;
const Image = styled.img`
  width: 92%;
  height: 70%;
  position: relative;
  left: 4%;
  right: 5%;
  top: 5%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.p`
  color: black;
  margin: 20px;
  position: relative;
  top: 38%;
  font-size: 18px;

`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background: none;
  color: black;
  cursor: pointer;
  position: relative;
  top: 34%;
  font-size: 20px;

  font-weight: 600;
`;

const ListItems = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>{item.price}</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default ListItems;
