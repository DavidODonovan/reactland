import { select } from 'd3-selection';
import { Dimensions, Scales, Axes } from '../../../../D3Land';
import Letters from './Letters';

class D3Nexus {
  constructor(domNodeCurrent){
    this.svg = select(domNodeCurrent).append('svg');
    this.svg.attr('height', '100%').attr('width', '100%');
  };

  init=(data, dims)=>{
    this.data = data;
    this.dims = new Dimensions(dims);
    this.scales = new Scales(this.data, this.dims);
    this.chart = this.svg.append('g');
    this.chart.attr('transform', `translate(${this.dims.margin.left}, ${this.dims.margin.top})`);
    this.axes = new Axes(this.chart, this.scales, this.dims);
    this.letters = new Letters(this.chart, this.data, this.scales);
  };

  updateDims=(dims)=>{
    this.dims.setDims(dims);
    this.scales.setScales(this.data, this.dims);
    this.axes.updateAxes(this.scales, this.dims);
    this.letters.updateScales(this.scales);
  };

  updateData=(data)=>{
    this.letters.updateData(data);
  };

};

export default D3Nexus;
