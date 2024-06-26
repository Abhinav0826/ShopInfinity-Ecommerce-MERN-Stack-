import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: black;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "10px", marginLeft: "5px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>EN</Language> */}
          <SearchContainer style={{border: "0.5px solid lightgrey", fontSize: 16, borderRadius: "50px"}}>
            <Input type="search" placeholder="Search" style={{border: "none", outline: "none", fontSize: 14, paddingLeft: 14}}/>
            {/* <Search style={{ color: "gray", fontSize: 16}} /> */}
            <button type="submit" style={{background: "none", padding: 0, margin: 0, border: "none", cursor: "pointer"}}><Search style={{background: "none", fontsize: 16, color: "grey", padding: 0, border: "none", margin: 0}} /></button>
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>ShopInfinite.</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/login" style={{ color: "black", textDecoration: "none" }}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to={"/cart"}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary" style={{color : "#5C4033"}}>
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
