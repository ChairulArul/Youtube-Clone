import React from "react";
import styled from "styled-components";
import Comment from "./comment";

const Container = styled.div`
  padding: 10px;
`;

const NewComment = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Input = styled.input`
  padding: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent !important;
  outline: none;
  width: 100%;
`;
export const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar
          src="https://avatar.iran.liara.run/public/8"
          alt="User Avatar"
        />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
