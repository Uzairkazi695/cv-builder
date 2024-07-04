import Container from "./Components/Container";
import { DataProvider } from "./Context/Context";

function App() {
  return (
    <>
      <DataProvider>
        <Container />
      </DataProvider>
    </>
  );
}

export default App;
