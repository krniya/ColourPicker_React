import './App.css';
import seedColour from './seedColour';
import Palette from './Palatte';

function App() {
  return (
    <div>
      <Palette {...seedColour[4]} />
    </div>
  );
}

export default App;
