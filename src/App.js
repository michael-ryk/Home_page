import Header from './components/Header';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Footer from './components/Footer';

import styled from 'styled-components';

function App() {
  return (
    <AppStyled>
      {/* <Header /> */}
      <main>
        <Welcome />
        <Projects />
      </main>
      {/* <Footer /> */}
    </AppStyled>
  );
}

const AppStyled = styled.div`
  main {
    /* display: flex; */
    /* flex-direction: column; */
  }
`

export default App;
