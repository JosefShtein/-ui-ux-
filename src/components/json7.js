import {useState} from 'react';
import Table13 from './table13';
import Table14 from './table14';
import Legend from './legend1314';
import './json1.css';


function Box() {
    
    return (
      <div>
        <div class="container">
            <div > 
              <Table14 /> 
            </div>
            <div>
              <Table13/>
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
      <button onClick={handleClick}>json7</button>


      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
}


