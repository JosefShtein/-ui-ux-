import {useState} from 'react';
import Table27 from './table27';
import Table28 from './table28';
import Legend from './legend2728';
import './json1.css';


function Box() {
    
    return (
      <div>
        <div class="container">
            <div > 
              <Table28 /> 
            </div>
            <div>
              <Table27/>
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
      <button onClick={handleClick}>json14</button>


      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
}


