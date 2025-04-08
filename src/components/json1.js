import {useState} from 'react';
import Table6 from './table1';
import Table7 from './table2';
import Legend from './legend1';
import './json1.css';


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
      <button onClick={handleClick}>json1</button>


      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
}


