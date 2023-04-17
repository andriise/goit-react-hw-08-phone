import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Footer, PageContainer } from './Layout.styles';
import Navigation from 'components/navigation/Navigation';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>

      <PageContainer>
        <Suspense fallback={null}>
          {}
          <Outlet />
        </Suspense>
      </PageContainer>

      <Footer>
        <p>
          Homework by
          <a href="https://github.com/andriise"> Andrii Marchuk</a>
        </p>
      </Footer>
    </Container>
  );
};

export default Layout;
