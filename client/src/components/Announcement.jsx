import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container style={{background : "#D2B48C"}}>Super Deal! Free shipping on Orders Over Rs.50</Container>;
};

export default Announcement;
// #00AABB #5C4033