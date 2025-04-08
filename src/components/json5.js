import {useState} from 'react';
import Table9 from './table9';
import Table10 from './table10';
import Legend from './legend910';
import './json1.css';


function Box() {
    
    return (
      <div>
        <div class="container">
            <div > 
              <Table10 /> 
            </div>
            <div>
              <Table9/>
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
      <button onClick={handleClick}>json5</button>


      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
}


