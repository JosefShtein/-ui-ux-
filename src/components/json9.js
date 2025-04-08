import {useState} from 'react';
import Table17 from './table17';
import Table18 from './table18';
import Legend from './legend1718';
import './json1.css';


function Box() {
    
    return (
      <div>
        <div class="container">
            <div > 
              <Table18 /> 
            </div>
            <div>
              <Table17/>
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
      <button onClick={handleClick}>json9</button>


      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
}


