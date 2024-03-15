import styled from "styled-components";

import { list2 } from "../data";
import ListItems from "./ListItems";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const List2 = () => {
  return (
    <Container>
      {list2.map((item) => (
        <ListItems item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default List2;
