import { select, selectAll } from 'd3-selection';

class Letters {
  constructor(chart, data, scales){
    this.chart = chart;
    this.data = data;
    this.scales = scales;
    this.t = 1000;
    this.updateData(this.data);
  };

  updateData=(data)=>{
    this.data = data;
    this.primordialChaos = this.chart.selectAll('.letter').data(this.data);

    this.primordialChaos
      .transition().duration(this.t)
      .text((d)=>d.letter)
      .attr('fill', 'orange')
      .attr('y', (d)=>this.scales.yScale(4))
      .attr('x', (d,i)=>this.scales.xScale(d.id))

    this.enter();
  };

  enter=()=>{
    this.primordialChaos.enter().append('text')
      .text((d)=>d.letter)
      .attr('fill', 'green')
      .attr('class', 'letter')
      .attr('x', (d,i)=>this.scales.xScale(d.id))
      .attr('y', (d)=>this.scales.yScale(12))
      .transition().duration(this.t)
      .attr('y', (d)=>this.scales.yScale(4))

    this.exit();
  };

  exit=()=>{
    this.primordialChaos.exit()
      .attr('fill', 'red')
      .transition().duration(this.t)
      .attr("y", this.scales.yScale(-1))
      .style("fill-opacity", 0)
      .remove();
  }

  updateScales=(scales)=>{
    this.scales = scales;
    this.primordialChaos = this.chart.selectAll('.letter')
      .transition().duration(500)
      .attr('x', (d, i)=>this.scales.xScale(d.id))
      .attr('y', (d)=>this.scales.yScale(4))
  };

};

export default Letters