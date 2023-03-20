import { theme } from './Layout';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { ProductDetails } from "../pages/ProductDetails";
import { Products } from "../pages/Products";
import { Mission } from "./Mission";
import { Team } from "./Team";
import { Reviews } from "./Reviews";
import { Container, Header, Logo, Link } from "./App.styled";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Container>
    </ThemeProvider>
  );
};

// export const App = () => {
//   return (
//       <ThemeProvider theme={theme}>
//         <Layout>
//         <GlobalStyle />
//         <nav>
//         <StyledLink to="/" end>
//           Home
//         </StyledLink>
//         <StyledLink to="/about">About</StyledLink>
//         <StyledLink to="/products">Products</StyledLink>
//       </nav>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/products/:productId" element={<ProductDetails />} />
//           <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Layout>
//       </ThemeProvider>
//   );
// };