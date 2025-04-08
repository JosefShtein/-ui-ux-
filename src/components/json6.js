import {useState} from 'react';
import Table11 from './table11';
import Table12 from './table12';
import Legend from './legend1112';
import './json1.css';


function Box() {
    
    return (
      <div>
        <div class="container">
            <div > 
              <Table12 /> 
            </div>
            <div>
              <Table11/>
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
      <button onClick={handleClick}>json6</button>


      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
}


