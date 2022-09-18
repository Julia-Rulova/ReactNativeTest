import Header from './components/Header';
import Authorization from './components/Auth';
import Posts from './components/Posts';

function App() {
  return (
    <>
      <Header auth={true} />
      <Authorization />
    </>
  );
}

export default App;