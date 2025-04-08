import {useState} from 'react';
import Table3 from './table3';
import Table4 from './table4';
import Legend from './legend1';
import './json1.css';


function Box() {
    
    return (
      <div>
        <div class="container">
            <div > 
              <Table4 /> 
            </div>
            <div>
              <Table3/>
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
      <button onClick={handleClick}>json2</button>


      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
}


