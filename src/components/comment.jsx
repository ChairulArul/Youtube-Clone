import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  color: ${({ theme }) => theme.textSoft};
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 14px;
`;

export const Comment = () => {
  return (
    <Container>
      <Avatar src="" />
      <Details>
        <Name>
          Ngabbrull <Date>1 hours ago</Date>
        </Name>
        <Text>
          loremSit officia minim eu voluptate voluptate eiusmod est aute
          incididunt quis irure. Fugiat anim aute sunt exercitation velit
          laborum id laborum ullamco voluptate. Enim laboris ex consequat in
        </Text>
      </Details>
    </Container>
  );
};
export default Comment;
