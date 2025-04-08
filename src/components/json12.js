import {useState} from 'react';
import Table23 from './table23';
import Table24 from './table24';
import Legend from './legend2324';
import './json1.css';


function Box() {
    
    return (
      <div>
        <div class="container">
            <div > 
              <Table24 /> 
            </div>
            <div>
              <Table23/>
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
      <button onClick={handleClick}>json12</button>


      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
}


