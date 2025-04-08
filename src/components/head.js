import React from "react";
import "./head.css";


class Head extends React.Component {
  render() {
    return ( 
        <div>
            <table class="text">
                <tr>
                    <td>Мнемосхема расположения листов</td>
                    <td>Информация о листах</td>
                </tr>
            </table>
        </div>
    );
    }
}

export default Head;