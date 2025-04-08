import React from "react";
import "./legend1.css";
import data from "./jsons/sheets9.json";

var datalist0 = data["0"];
var datalist1 = data["1"];
var datalist2 = data["2"];
var datalist3 = data["3"];

class tableLeg extends React.Component {
  render() {
    return ( 
        <div>
            <table class="legend"  border={2} height={130} >
                <tbody >
                    <tr>
                        <td ><img src={require('./imOrPov33.png')} width={20} height={130}/></td>
                        <td height={125} width={300}>
                            <ul>
                                <li> номер заказа: {datalist0["order"]}</li>
                                <li> номер плавки: {datalist0["melting"]}</li>
                                <li> марка стали: {datalist0["steel_grade"]}</li>
                                <li> размер листа: {datalist0["size"][0]} {datalist1["size"][1]} {datalist1["size"][2]}</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td ><img src={require('./imOrPov22.png')} width={20} height={130}/></td>
                        <td height={125} width={300}>
                            <ul>
                                <li> номер заказа: {datalist2["order"]}</li>
                                <li> номер плавки: {datalist2["melting"]}</li>
                                <li> марка стали: {datalist2["steel_grade"]}</li>
                                <li> размер листа: {datalist2["size"][0]} {datalist1["size"][1]} {datalist1["size"][2]}</li>
                            </ul>
                        </td>
                    </tr>
                   
            
                </tbody>
            </table>
        </div>
    );
    }
}

export default tableLeg;