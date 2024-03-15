import styled from "styled-components";

import { list } from "../data";
import ListItems from "./ListItems";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const List = () => {
  return (
    <Container>
      {list.map((item) => (
        <ListItems item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default List;
