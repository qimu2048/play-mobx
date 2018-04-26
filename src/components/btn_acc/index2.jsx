import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class BtnAcc extends React.Component {
  acc = observable({ num: 0 });

  @action.bound handleAdd () {
    this.acc.num++;
  }

  @action.bound handleClear() {
    this.acc.num = 0;
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAdd}>add</button>
        <button onClick={this.handleClear}>clear</button>
        <div>{this.acc.num}</div>
      </div>
    );
  }
}

export default BtnAcc;
