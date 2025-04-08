import {useState} from 'react';
import Table21 from './table21';
import Table22 from './table22';
import Legend from './legend2122';
import './json1.css';


function Box() {
    
    return (
      <div>
        <div class="container">
            <div > 
              <Table22 /> 
            </div>
            <div>
              <Table21/>
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
      <button onClick={handleClick}>json11</button>


      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
}


