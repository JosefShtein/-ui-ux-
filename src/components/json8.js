import {useState} from 'react';
import Table15 from './table15';
import Table16 from './table16';
import Legend from './legend1516';
import './json1.css';


function Box() {
    
    return (
      <div>
        <div class="container">
            <div > 
              <Table16 /> 
            </div>
            <div>
              <Table15/>
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
      <button onClick={handleClick}>json8</button>


      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
}


