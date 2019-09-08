import { select, selectAll } from 'd3-selection';

class Circles {
  constructor(chart, data, scales){
    this.chart = chart;
    this.scales = scales;
    this.updateData(data);
  };

  updateData=(data)=>{
    this.data = data;
    this.primordialChaos = this.chart.selectAll('.nodeGroup').data(this.data, (d)=>d.id);

    this.primordialChaos.select('circle')
      .transition().duration(1000)
      .attr('fill', 'orange')
      .attr('r', (d)=>d.stamina)

    this.primordialChaos.select('text')
      .text((d)=>d.id)

    this.primordialChaos
      .transition().duration(1000)
      .attr('transform', (d)=>`translate(${this.scales.xScale(d.x)}, ${this.scales.yScale(d.y)})`)

    this.enter();
  };

  enter=()=>{
    this.eachNode = this.primordialChaos.enter()
      .append('g')
        .attr('class', 'nodeGroup')
        .attr('transform', (d)=>`translate(${this.scales.xScale(d.x)}, ${this.scales.yScale(d.y)})`)

    this.eachNode.append('circle')
      .attr('opacity', '0.7')
      .attr('fill', 'green')
      .attr('stroke', 'black')
      .attr('r', (d)=>0)
      .transition().duration(1000)
      .attr('r', (d)=>d.stamina)

    this.eachNode
      .append('text')
        .text((d)=>d.id)
        .attr('dx', -9)
        .attr('dy', 4)

    this.exit();
  };

  exit=()=>{
    this.primordialChaos.exit().select('circle')
      .transition().duration(1000)
      .attr('fill', 'red')
      .attr('r', 0)
    this.primordialChaos.exit().select('text')
      .attr('opacity', 0)

    this.primordialChaos.exit()
      .transition().duration(1000)
      .remove();
  };

  updateScales=(scales)=>{
    this.scales = scales;
    this.primordialChaos = this.chart.selectAll('.nodeGroup')
    this.primordialChaos
      .transition().duration(500)
      .attr('transform', (d)=>`translate(${this.scales.xScale(d.x)}, ${this.scales.yScale(d.y)})`)
  };
};

export default Circles;
