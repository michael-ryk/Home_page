import Header from './components/Header';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Footer from './components/Footer';

import styled from 'styled-components';

function App() {
  return (
    <AppStyle>
      <Header />
      <main>
        <Welcome />
        <Projects />
      </main>
      <Footer />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  text-align: center;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export default App;
