import {useState} from 'react';
import Table5 from './table5';
import Table6 from './table6';
import Legend from './legend56';
import './json1.css';


function Box() {
    
    return (
      <div>
        <div class="container">
            <div > 
              <Table6 /> 
            </div>
            <div>
              <Table5/>
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
      <button onClick={handleClick}>json3</button>


      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
}


