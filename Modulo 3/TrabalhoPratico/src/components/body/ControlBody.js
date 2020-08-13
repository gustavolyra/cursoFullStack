import React, { Component } from 'react';
import InputBar from './InputBar';
import InfoBar from './InfoBar';
import { percentageValues } from './helpers/salary.js';
import css from './body.module.css';
import ProgressBar from './ProgressBar/ProgressBar';

export default class ControlBody extends Component {
  constructor() {
    super();
    this.state = {
      salary: '',
    };
  }

  handleChange = (value) => {
    this.setState({
      salary: value,
    });
  };

  render() {
    const { salary } = this.state;
    const taxValues = percentageValues(salary);
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      percentageINSS,
      percentageIRPF,
    } = taxValues;

    const sizeBar2 = parseInt(percentageINSS);
    const sizeBar1 = parseInt(percentageIRPF) + sizeBar2;
    console.log(typeof sizeBar2);
    console.log(typeof sizeBar1);
    console.log('bar1');
    console.log(sizeBar1);
    console.log('bar2');
    console.log(sizeBar2);
    return (
      <div>
        <InputBar onFilterChange={this.handleChange} value={salary} />
        <div className="row">
          <div className="col l3 m4 s6">
            <InfoBar
              value={baseINSS}
              text={'Base INSS'}
              className={css.defaultText}
            />
          </div>
          <div className="col l3 m4 s6">
            <InfoBar
              value={discountINSS}
              text={'Desconto INSS'}
              className={css.discountINSS}
            />
          </div>
          <div className="col l3 m4 s6">
            <InfoBar
              value={baseIRPF}
              text={'Base IRPF'}
              className={css.defaultText}
            />
          </div>
          <div className="col l3 m4 s6">
            <InfoBar
              value={discountIRPF}
              text={'Desconto IRPF'}
              className={css.discountIRPF}
            />
          </div>
          <div className="col l3 m4 s6">
            <InfoBar
              value={netSalary}
              text={'Salário Líquido'}
              className={css.netSalary}
            />
          </div>
        </div>
        <ProgressBar progressBar1={sizeBar1} progressBar2={sizeBar2} />
      </div>
    );
  }
}
