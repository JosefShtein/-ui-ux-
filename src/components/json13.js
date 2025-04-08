import {useState} from 'react';
import Table25 from './table25';
import Table26 from './table26';
import Legend from './legend2526';
import './json1.css';


function Box() {
    
    return (
      <div>
        <div class="container">
            <div > 
              <Table26 /> 
            </div>
            <div>
              <Table25/>
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
      <button onClick={handleClick}>json13</button>


      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
}


