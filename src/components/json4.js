import {useState} from 'react';
import Table7 from './table7';
import Table8 from './table8';
import Legend from './legend78';
import './json1.css';


function Box() {
    
    return (
      <div>
        <div class="container">
            <div > 
              <Table8 /> 
            </div>
            <div>
              <Table7/>
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
      <button onClick={handleClick}>json4</button>


      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
}


