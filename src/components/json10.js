import {useState} from 'react';
import Table19 from './table19';
import Table20 from './table20';
import Legend from './legend1920';
import './json1.css';


function Box() {
    
    return (
      <div>
        <div class="container">
            <div > 
              <Table20 /> 
            </div>
            <div>
              <Table19/>
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
      <button onClick={handleClick}>json10</button>


      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
}


