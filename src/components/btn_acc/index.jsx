import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

class AccModel {
  @observable num = 0;

  @action.bound
  add() {
    this.num++;
  }

  @action.bound
  clear() {
    this.num = 0;
  }
}

@observer
class BtnAcc extends React.Component {
  acc = new AccModel();
  render() {
    return (
      <div>
        <div>{this.acc.num}</div>
        <button onClick={this.acc.add}>add</button>
        <button onClick={this.acc.clear}>clear</button>
      </div>
    );
  }
}

export default BtnAcc;
