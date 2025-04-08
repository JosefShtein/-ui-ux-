import {useState} from 'react';
import Table29 from './table29';
import Table30 from './table30';
import Legend from './legend2930';
import './json1.css';


function Box() {
    
    return (
      <div>
        <div class="container">
            <div > 
              <Table30 /> 
            </div>
            <div>
              <Table29/>
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
      <button onClick={handleClick}>json15</button>


      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
}


