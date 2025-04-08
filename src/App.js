import React from 'react';
import Head from './components/head';
import Json1 from './components/json1';
import Json2 from './components/json2';
import Json3 from './components/json3';
import Json4 from './components/json4';
import Json5 from './components/json5';
import Json6 from './components/json6';
import Json7 from './components/json7';
import Json8 from './components/json8';
import Json9 from './components/json9';
import Json10 from './components/json10';
import Json11 from './components/json11';
import Json12 from './components/json12';
import Json13 from './components/json13';
import Json14 from './components/json14';
import Json15 from './components/json15';
import './App.css';

class App extends React.Component {
  render() {
        return (
          <div>
            <Head/>
            <div style={{display: 'flex'}}>
              <div class='container'>
                <div>
                  <Json1/>
                </div>
                <div>
                  <Json2/>
                </div>
                <div>
                  <Json3/>
                </div>
                <div>
                  <Json4/>
                </div>
                <div>
                  <Json5/>
                </div>
                <div>
                  <Json6/>
                </div>
                <div>
                  <Json7/>
                </div>
                <div>
                  <Json8/>
                </div>
                <div>
                  <Json9/>
                </div>
                <div>
                  <Json10/>
                </div>
                <div>
                  <Json11/>
                </div>
                <div>
                  <Json12/>
                </div>
                <div>
                  <Json13/>
                </div>
                <div>
                  <Json14/>
                </div>
                <div>
                  <Json15/>
                </div>
              </div>
            </div>
            
          </div>
        );
     }
}

export default App;