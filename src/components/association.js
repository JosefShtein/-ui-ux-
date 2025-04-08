import {useState} from 'react';
import data from "./jsons/sheets10.json";

var datalist = data["1"];
function Box() {
    
    return (
      <div>
        <div class="container">
            <div > 
              <Table7 /> 
            </div>
            <div>
              <Table6/>
            </div>
            <div class='legend'>
              <Legend/>
            </div>
              
          </div>
      </div>
    );
  }
export default function App() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>

      {/* 👇️ show elements on click */}
      {isShown && (
        <div>
          <h2>Some content here</h2>
        </div>
      )}

      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
}


