import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  margin-top: 24px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  background-color: #fff;
`;
const Header = styled.div`
  height: 73px;
  padding: 24px;
  border-bottom: 1px solid #e6e6e6;
  font-family: PingFang SC;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
`;
const Main = styled.div`
  padding: 24px;
`;

interface IProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

export default function BlockContainer(props: IProps) {
  const { title, children } = props;

  return (
    <Container>
      <Header>{title}</Header>
      <Main>{children}</Main>
    </Container>
  );
}
