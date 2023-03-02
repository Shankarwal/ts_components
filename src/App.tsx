import "./App.css";
import Shifter from "./components/polymorphic/Shifter";

function App() {
  return (
    <div className="App">
      <Shifter as="h1" size="sm" color="primary">
        Heading
      </Shifter>
      <Shifter as="p" size="md" color="secondary">
        Paragraph
      </Shifter>
      <Shifter as="label" htmlFor="name" size="sm">
        Label
      </Shifter>
    </div>
  );
}

export default App;
