import Welcome from './components/Welcome';
import styled from 'styled-components';

function App() {
  return (
    <AppStyle>
      <Welcome />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export default App;
