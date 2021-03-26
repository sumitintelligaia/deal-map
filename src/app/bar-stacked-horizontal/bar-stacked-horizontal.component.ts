import {
  Component, OnInit, OnChanges, ViewChild, ElementRef, SimpleChanges,
  Input, ViewEncapsulation, Output, EventEmitter, AfterViewInit, HostListener
} from '@angular/core';
// import * as d3 from 'd3';
import d3Tip from 'd3-tip';
import * as $ from 'jquery'; // import Jquery here;
import { AnalysisUtilitiesService } from '../analysis-utilities.service';
import * as gantt from 'gantt';

@Component({
  selector: 'app-bar-stacked-horizontal',
  templateUrl: './bar-stacked-horizontal.component.html',
  styleUrls: ['./bar-stacked-horizontal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BarStackedHorizontalComponent implements OnInit {

  // @ViewChild('barStackedHorizontal', { static: true }) private chartContainer: ElementRef;
  // // @Input() private chartData: any;
  // private tileData: any = {};
  // @Input() private chartInteractions: any;
  // @Output() chartInteractionsEvent = new EventEmitter<any>();
  // @Input() private chartSelectDeselectAll: any;
  // @Input() private expandCollapseChart: boolean;
  // @Output() chartInteractionsSalesUpdateEvent = new EventEmitter<any>();

  // private margin: any = { top: 0, right: 30, bottom: 0, left: 120 };
  // private chart: any;
  // private width: number;
  // private height: number;
  // private colors: any;
  // private yAxis: any;
  // private transitionDuration = 500;
  // private keys: Array<any>;
  // private table: any;
  // private chartRenderData: any;
  // public tip: any;
  // public tipForText: any;
  // private legendToolTipDiv: any;
  // private fullData: any;
  // private windowWidth: number;
  // private scrollPosition = 0;
  // private chartType: string;
  // // On window size change adjust charts to fit the tile
  // @HostListener('window:resize', ['$event'])
  // getScreenSize($event?) {
  //   this.windowWidth = window.innerWidth;
  //   if ($event) {
  //     // this.renderTile();
  //   }
  // }

  // constructor(private analysisUtilitiesService: AnalysisUtilitiesService) {
  // }

  // ngOnInit() {

  // }

  // ngAfterViewInit() {
  //   this.renderTile();
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   // tslint:disable-next-line:forin
  //   // for (const propName in changes) {
  //   //   const chng = changes[propName];
  //   //   const cur = JSON.stringify(chng.currentValue);
  //   //   const prev = JSON.stringify(chng.previousValue);
  //   //   if (propName === 'chartSelectDeselectAll') {
  //   //     if (cur !== prev) {
  //   //       this.updateChart();
  //   //       break;
  //   //     }
  //   //   }
  //   //   if (changes[propName]) {
  //   //     if (cur !== prev) {
  //   //       this.renderTile();
  //   //       break;
  //   //     }
  //   //   }
  //   // }
  // }

  // renderTile() {
  //   this.tip = this.createTip();
  //   this.tipForText = this.toolTipForText();
  //   this.setChartData();
  //   setTimeout(() => {
  //     this.createChart();
  //     this.createLegends();
  //   });
  // }

  // getColor(d) {
  //   return this.colors[d];
  // }

  // setChartData() {
  //   this.tileData.chartStates = ["Americas", "EMEAR-REGION", "APJC"];
  //   this.keys = ["Hardware", "Perpetual Software", "Subscription"];
  //   this.colors = this.analysisUtilitiesService.getColors(this.keys, false, true);
  //   this.chartRenderData = [
  //     {
  //       "end": 520552587184,
  //       "key": "Hardware",
  //       "lineCount": 309409124,
  //       "listAmount": 754258549216,
  //       "start": 0,
  //       "state": "Americas",
  //       "stateId": undefined,
  //       "total": 754258549216,
  //       "value": 520552587184
  //     },
  //     {
  //       "end": 741709249794,
  //       "key": "Perpetual Software",
  //       "lineCount": 309409124,
  //       "listAmount": 754258549216,
  //       "start": 520552587184,
  //       "state": "Americas",
  //       "stateId": undefined,
  //       "total": 754258549216,
  //       "value": 221156662610
  //     },
  //     {
  //       "end": 754258549216,
  //       "key": "Subscription",
  //       "lineCount": 309409124,
  //       "listAmount": 754258549216,
  //       "start": 741709249794,
  //       "state": "Americas",
  //       "stateId": undefined,
  //       "total": 754258549216,
  //       "value": 12549299422
  //     },
  //     {
  //       "end": 251435952463,
  //       "key": "Hardware",
  //       "lineCount": 192900797,
  //       "listAmount": 305840717284,
  //       "start": 0,
  //       "state": "EMEAR-REGION",
  //       "stateId": undefined,
  //       "total": 305840717284,
  //       "value": 251435952463
  //     },
  //     {
  //       "end": 302643209709,
  //       "key": "Perpetual Software",
  //       "lineCount": 192900797,
  //       "listAmount": 305840717284,
  //       "start": 251435952463,
  //       "state": "EMEAR-REGION",
  //       "stateId": undefined,
  //       "total": 305840717284,
  //       "value": 51207257246
  //     },
  //     {
  //       "end": 305840717284,
  //       "key": "Subscription",
  //       "lineCount": 192900797,
  //       "listAmount": 305840717284,
  //       "start": 302643209709,
  //       "state": "EMEAR-REGION",
  //       "stateId": undefined,
  //       "total": 305840717284,
  //       "value": 3197507575
  //     },
  //     {
  //       "end": 178311494817,
  //       "key": "Hardware",
  //       "lineCount": 111110097,
  //       "listAmount": 207313950101,
  //       "start": 0,
  //       "state": "APJC",
  //       "stateId": undefined,
  //       "total": 207313950101,
  //       "value": 178311494817
  //     },
  //     {
  //       "end": 205524026664,
  //       "key": "Perpetual Software",
  //       "lineCount": 111110097,
  //       "listAmount": 207313950101,
  //       "start": 178311494817,
  //       "state": "APJC",
  //       "stateId": undefined,
  //       "total": 207313950101,
  //       "value": 27212531847,
  //     },
  //     {
  //       "end": 207313950101,
  //       "key": "Subscription",
  //       "lineCount": 111110097,
  //       "listAmount": 207313950101,
  //       "start": 205524026664,
  //       "state": "APJC",
  //       "stateId": undefined,
  //       "total": 207313950101,
  //       "value": 1789923437
  //     },
  //     {
  //       "end": 207313950101,
  //       "key": "Subscription",
  //       "lineCount": 111110097,
  //       "listAmount": 207313950101,
  //       "start": 205524026664,
  //       "state": "Ludhiana",
  //       "stateId": undefined,
  //       "total": 207313950101,
  //       "value": 1789923437
  //     },
  //     {
  //       "end": 207313950101,
  //       "key": "Perpetual Software",
  //       "lineCount": 111110097,
  //       "listAmount": 207313950101,
  //       "start": 205524026664,
  //       "state": "Ludhiana",
  //       "stateId": undefined,
  //       "total": 207313950101,
  //       "value": 2789923437
  //     },
  //     {
  //       "end": 207313950101,
  //       "key": "Hardware",
  //       "lineCount": 111110097,
  //       "listAmount": 207313950101,
  //       "start": 205524026664,
  //       "state": "Bathinda",
  //       "stateId": undefined,
  //       "total": 207313950101,
  //       "value": 3789923437
  //     },
  //     {
  //       "end": 207313950101,
  //       "key": "Perpetual Software",
  //       "lineCount": 111110097,
  //       "listAmount": 207313950101,
  //       "start": 205524026664,
  //       "state": "Bathinda",
  //       "stateId": undefined,
  //       "total": 207313950101,
  //       "value": 2789923437
  //     },
  //     {
  //       "end": 207313950101,
  //       "key": "Hardware",
  //       "lineCount": 111110097,
  //       "listAmount": 207313950101,
  //       "start": 205524026664,
  //       "state": "Bathinda",
  //       "stateId": undefined,
  //       "total": 207313950101,
  //       "value": 3789923437
  //     },
  //     {
  //       "end": 207313950101,
  //       "key": "Hardware",
  //       "lineCount": 111110097,
  //       "listAmount": 207313950101,
  //       "start": 205524026664,
  //       "state": "Jhakhal",
  //       "stateId": undefined,
  //       "total": 207313950101,
  //       "value": 3789923437
  //     },
  //     {
  //       "end": 207313950101,
  //       "key": "Perpetual Software",
  //       "lineCount": 111110097,
  //       "listAmount": 207313950101,
  //       "start": 205524026664,
  //       "state": "Jhakhal",
  //       "stateId": undefined,
  //       "total": 207313950101,
  //       "value": 2789923437
  //     },
  //     {
  //       "end": 207313950101,
  //       "key": "Hardware",
  //       "lineCount": 111110097,
  //       "listAmount": 207313950101,
  //       "start": 205524026664,
  //       "state": "Jhakhal",
  //       "stateId": undefined,
  //       "total": 207313950101,
  //       "value": 3789923437
  //     },
  //     {
  //       "end": 207313950101,
  //       "key": "Hardware",
  //       "lineCount": 111110097,
  //       "listAmount": 207313950101,
  //       "start": 205524026664,
  //       "state": "Hisar",
  //       "stateId": undefined,
  //       "total": 207313950101,
  //       "value": 3789923437
  //     },
  //     {
  //       "end": 207313950101,
  //       "key": "Perpetual Software",
  //       "lineCount": 111110097,
  //       "listAmount": 207313950101,
  //       "start": 205524026664,
  //       "state": "Hisar",
  //       "stateId": undefined,
  //       "total": 207313950101,
  //       "value": 2789923437
  //     },
  //     {
  //       "end": 207313950101,
  //       "key": "Hardware",
  //       "lineCount": 111110097,
  //       "listAmount": 207313950101,
  //       "start": 205524026664,
  //       "state": "Hisar",
  //       "stateId": undefined,
  //       "total": 207313950101,
  //       "value": 3789923437
  //     },
  //     {
  //       "end": 207313950101,
  //       "key": "Hardware",
  //       "lineCount": 111110097,
  //       "listAmount": 207313950101,
  //       "start": 205524026664,
  //       "state": "Patiala",
  //       "stateId": undefined,
  //       "total": 207313950101,
  //       "value": 3789923437
  //     },
  //     {
  //       "end": 207313950101,
  //       "key": "Perpetual Software",
  //       "lineCount": 111110097,
  //       "listAmount": 207313950101,
  //       "start": 205524026664,
  //       "state": "Ambala",
  //       "stateId": undefined,
  //       "total": 207313950101,
  //       "value": 2789923437
  //     },
  //     {
  //       "end": 207313950101,
  //       "key": "Hardware",
  //       "lineCount": 111110097,
  //       "listAmount": 207313950101,
  //       "start": 205524026664,
  //       "state": "Amritsar",
  //       "stateId": undefined,
  //       "total": 207313950101,
  //       "value": 3789923437
  //     }
  //   ];
  //   this.fullData = [
  //     {
  //       "freq": {
  //         "Hardware": 520552587184,
  //         "Perpetual Software": 221156662610,
  //         "Subscription": 12549299422
  //       },
  //       "lineCount": 309409124,
  //       "listAmount": 754258549216,
  //       "state": "Americas",
  //       "total": 754258549216,
  //     },
  //     {
  //       "freq": {
  //         "Hardware": 251435952463,
  //         "Perpetual Software": 51207257246,
  //         "Subscription": 3197507575
  //       },
  //       "lineCount": 192900797,
  //       "listAmount": 305840717284,
  //       "state": "EMEAR-REGION",
  //       "total": 305840717284,
  //     },
  //     {
  //       "freq": {
  //         "Hardware": 178311494817,
  //         "Perpetual Software": 27212531847,
  //         "Subscription": 1789923437
  //       },
  //       "lineCount": 111110097,
  //       "listAmount": 207313950101,
  //       "state": "APJC",
  //       "total": 207313950101,
  //     }
  //   ];
  // }

  // createTip() {
  //   return d3Tip()
  //     .attr('class', 'd3-tip')
  //     .offset([-10, 0])
  //     .html(d => {
  //       return `Hello Cisco`;
  //     });
  // }

  // toolTipForText() {
  //   return d3Tip()
  //     .attr('class', 'd3-tip sm-tip')
  //     .offset([-10, 0])
  //     .html(d => {
  //       return `<span style='font-size:12px;font-weight:300;'>${d}</span>`;
  //     });
  // }

  // removeExistingChart() {
  //   const element = this.chartContainer.nativeElement;
  //   if (this.chartContainer.nativeElement.childElementCount > 0) {
  //     while (element.hasChildNodes()) {
  //       element.removeChild(element.firstChild);
  //     }
  //   }
  // }

  // updateAxisBottom(x) {
  //   const axisBottom = d3.axisBottom(x)
  //     .tickFormat(function (d) {
  //       let val = d3.format(',.3s')(d);
  //       val = (val.replace('G', 'B'));
  //       return val;
  //     }).ticks(4)
  //     .tickSize(-((document.getElementsByClassName('scrollContainer')[0].getElementsByTagName('svg')[0].clientHeight) || document.getElementsByClassName('scrollContainer')[0].getElementsByTagName('svg')[0].getBoundingClientRect().height));
  //   return axisBottom;
  // }

  // createBandScale() {
  //   const bandScale = d3.scaleBand().range([0, this.height])
  //     .domain(this.chartRenderData.map(function (d) {
  //       return d.state;
  //     }));
  //   return bandScale;
  // }

  // createChart() {
  //   const element = this.chartContainer.nativeElement;
  //   this.removeExistingChart();
  //   this.width = element.offsetWidth - this.margin.right;
  //   this.height = (55 * this.tileData.chartStates.length) - this.margin.top - this.margin.bottom;
  //   const svgContainer = d3.select(element).append('div').attr('class', 'scrollContainer')
  //     .on('scroll', function () {
  //       thisInstance.tip.hide();
  //       thisInstance.tipForText.hide();
  //       // getting states that are visible in the scroll
  //       const inViewStates = [];
  //       const scrollContainer = document.getElementsByClassName('scrollContainer')[0].getBoundingClientRect();
  //       thisInstance.fullData.forEach(function (stateObj) {
  //         const className = stateObj.state;
  //         const stateElement = document.getElementsByClassName(className)[0];
  //         const scrollContainerTop = scrollContainer.top;
  //         const scrollContainerBottom = scrollContainer.bottom;
  //         const stateElementInView = stateElement.getBoundingClientRect();
  //         const stateElementTop = stateElementInView.top;
  //         const stateElementBottom = stateElementInView.bottom;

  //         if ((stateElementTop <= scrollContainerBottom) && (stateElementBottom >= scrollContainerTop) && inViewStates.indexOf(stateObj.state) === -1) {
  //           inViewStates.push(stateObj.state);
  //         }
  //       });

  //       const horizontalBarStackedInView = [];
  //       thisInstance.chartRenderData.forEach(function (barData) {
  //         if (inViewStates.indexOf(barData.state) > -1) {
  //           horizontalBarStackedInView.push(barData);
  //         }
  //       });

  //       // getting max total value within the scroll elements
  //       maxValue = 0;
  //       chartXAxisValues = [];
  //       // if (thisInstance.chartInteractions && thisInstance.chartInteractions.activeLegends && thisInstance.chartInteractions.activeLegends.length) {
  //       //   thisInstance.chartInteractions.activeLegends.forEach(function (legend) {
  //       //     chartXAxisValues.push(d3.max(horizontalBarStackedInView.filter(function (d) {
  //       //       return d.key === legend;
  //       //     }), function (d) {
  //       //       return d.value;
  //       //     }));
  //       //     chartXAxisValues.forEach(function (value) {
  //       //       maxValue += value;
  //       //     });
  //       //   });
  //       // } else {
  //       maxValue = d3.max(horizontalBarStackedInView, function (d) {
  //         return d.total;
  //       });
  //       // }
  //       maxValue = (maxValue === 0) ? 20 : maxValue; // let 100 be default value of scale .
  //       maxValue += maxValue * 0.20;
  //       xAxisScale.domain([0, maxValue]);
  //       // update x-axis values
  //       xContainerSvg.selectAll('g.x.axis')
  //         .call(xAxis)
  //         .selectAll('.domain')
  //         .remove();
  //       xContainerSvg.selectAll('.x.axis .tick line').attr('y2', 0);

  //       thisInstance.chart.selectAll('g.x.axis')
  //         .call(xAxis)
  //         .selectAll('.domain')
  //         .remove();
  //       thisInstance.chart.selectAll('.x.axis .tick line').attr('stroke', 'lightgrey');
  //       // update the bars on scroll
  //       const barScroll = scrollChart.selectAll('.bar')
  //         .data(thisInstance.chartRenderData);
  //       // tslint:disable-next-line:no-shadowed-variable
  //       const end = {};

  //       barScroll.select('rect.front')
  //         .transition()
  //         .duration(thisInstance.transitionDuration)
  //         .attr('x', function (d) {
  //           // if (thisInstance.checkIfLegendIsDisabled(d)) {
  //           //   return 0;
  //           // }
  //           if (!end[d.state]) {
  //             end[d.state] = 0;
  //           }
  //           const ret = end[d.state];
  //           end[d.state] += d.value;
  //           return xAxisScale(ret);
  //         })
  //         .attr('width', function (d) {
  //           // if (thisInstance.checkIfLegendIsDisabled(d)) {
  //           //   return 0;
  //           // }
  //           const val = xAxisScale(d.value) - 2;
  //           return val > 0 ? val : 0;
  //         });
  //       /* thisInstance.tileData.showDropdownOptions = false; */
  //       thisInstance.scrollPosition = document.querySelector('.scrollContainer').scrollTop;
  //     });


  //   let subtractHeight = 0;
  //   if (this.chartRenderData.length <= 3) {
  //     subtractHeight = 15;
  //     const node = document.getElementsByClassName('scrollContainer')[0] as HTMLElement;
  //     node.style.overflowY = 'hidden';
  //   }
  //   let height = 0;
  //   // if (this.embedService.embed && this.chartType !== 'all') {
  //   //   const keyPerRow = 4;
  //   //   const numRows = Math.ceil(this.keys.length / keyPerRow);
  //   //   height = this.embedService.containerHeight - 163 - (numRows * 26);
  //   // } else {
  //   height = (this.height) > 275 ? (this.height) - subtractHeight : 275 - subtractHeight;
  //   // }
  //   const svg = svgContainer.append('svg')
  //     .attr('width', element.offsetWidth)
  //     .attr('height', height);

  //   const xContainerSvg = d3.select(element).append('div').attr('class', 'xContainerFixed').append('svg');
  //   const thisInstance = this;

  //   // chart plot area
  //   this.chart = svg.append('g')
  //     .attr('class', 'bars')
  //     .attr('transform', `translate(${this.margin.left}, -15)`);
  //   svg.call(thisInstance.tipForText); // calling the d3Tip tooltip Tip For text
  //   svg.call(thisInstance.tip); // calling the d3Tip tooltip Tip on svg
  //   this.legendToolTipDiv = d3.select('body').append('div')
  //     .attr('class', 'tooltip top');

  //   const xAxisScale = d3.scaleLinear().range([0, this.width - 120]);
  //   const scrollChart = this.chart;
  //   const xAxis = this.updateAxisBottom(xAxisScale);
  //   const yAxisScale = this.createBandScale();
  //   let maxValue = 0;
  //   let chartXAxisValues = [];
  //   // if (this.chartInteractions && this.chartInteractions.activeLegends && this.chartInteractions.activeLegends.length) {
  //   //   this.chartInteractions.activeLegends.forEach(function (legend) {
  //   //     chartXAxisValues.push(d3.max(thisInstance.chartRenderData.filter(function (d) {
  //   //       return d.key === legend;
  //   //     }), function (d) {
  //   //       return d.value;
  //   //     }));
  //   //     chartXAxisValues.forEach(function (value) {
  //   //       maxValue += value;
  //   //     });
  //   //   });
  //   // } else {
  //   maxValue = d3.max(this.chartRenderData, function (d) {
  //     return d.total;
  //   });
  //   // }
  //   // let 100 be default value of scale .
  //   if (maxValue === 0) {
  //     xAxisScale.domain([0, 100]);
  //   } else {
  //     xAxisScale.domain([0, maxValue + (maxValue * 0.20)]);
  //   }
  //   this.yAxis = d3.axisLeft(yAxisScale)
  //     .tickFormat(function (d) {
  //       return d;
  //     });
  //   xContainerSvg.attr('width', this.width)
  //     .attr('height', 20);

  //   xContainerSvg.append('g')
  //     .attr('class', 'x axis')
  //     .attr('transform', 'translate(' + (120) + ',' + (-1) + ')')
  //     .call(xAxis)
  //     .selectAll('.domain')
  //     .remove();

  //   xContainerSvg.selectAll('.x.axis .tick line').attr('y2', 0);
  //   const svgElement = document.getElementsByClassName('scrollContainer')[0].getElementsByTagName('svg')[0];
  //   this.chart.append('g')
  //     .attr('class', 'x axis')
  //     .attr('transform', 'translate(' + (0) + ',' + (
  //       svgElement.height.baseVal.value + 15) + ')')
  //     .call(xAxis)
  //     .selectAll('.domain,text')
  //     .remove();

  //   this.chart.selectAll('.axis .tick line').attr('stroke', 'lightgrey');
  //   this.chart.append('g').attr('class', 'y axis')
  //     .call(this.yAxis)
  //     .selectAll('.domain')
  //     .remove();

  //   this.chart.selectAll('.y.axis .tick text')
  //     .attr('class', function (state) {
  //       return state;
  //     })
  //     .call(thisInstance.analysisUtilitiesService.wrapAxisText, d3)
  //     .attr('exclude', 'axisText')
  //     .on('mouseover', function (d, i) {
  //       thisInstance.tipForText.show(d, this);
  //     })
  //     .on('mouseout', function (d, i) {

  //       thisInstance.tipForText.hide(d, this);
  //     })
  //     .on('click', function (this, d) {
  //       thisInstance.yAxisTickClick(this, d);
  //     });

  //   // this.chart.selectAll('.y.axis .tick text')
  //   //   .style('font-weight', function (d) {
  //   //     let c = '';
  //   //     if (thisInstance.chartInteractions.activeStates.indexOf(d) > -1) {
  //   //       c = '600';
  //   //     }
  //   //     return c;
  //   //   })
  //   //   .attr('class', function (d) {
  //   //     let c = d;
  //   //     if (thisInstance.chartInteractions.activeStates.indexOf(d) > -1) {
  //   //       c += ' quarter-selected';
  //   //     }
  //   //     return c;
  //   //   });
  //   if (this.showCheckboxes()) {
  //     this.chart.selectAll('.action-button')
  //       .data(this.tileData.chartStates)
  //       .enter()
  //       .append('svg:image')
  //       .attr('class', 'action-button')
  //       .attr('id', function (state) {
  //         return 'checkbox-' + state;
  //       })
  //       .attr('x', function () {
  //         return -116;
  //       })
  //       .attr('y', function (state) {
  //         return yAxisScale(state) + (yAxisScale.bandwidth() - 17) / 2;
  //       })
  //       .attr('width', 18)
  //       .attr('height', 18)
  //       .attr('xlink:href', function (state) {
  //         return thisInstance.checkboxImage(state);
  //       })
  //       .on('mouseover', function (d, i) {
  //         d3.select(this).attr('xlink:href', thisInstance.checkIfStateIsHovered(true, d));
  //       })
  //       .on('mouseout', function (d, i) {
  //         d3.select(this).attr('xlink:href', thisInstance.checkIfStateIsHovered(false, d));
  //       })
  //       .on('click', function (state) {
  //         thisInstance.toggleStates(state);
  //       });
  //   }

  //   const bars = this.chart.selectAll('.bar').data(this.chartRenderData).enter()
  //     .append('g').attr('class', 'bar').style('cursor', 'pointer');
  //   const end = {};

  //   bars.append('rect')
  //     .transition()
  //     .duration(this.transitionDuration)
  //     .attr('class', function (d, i) {
  //       return 'front front_' + i;
  //     })
  //     .attr('x', function (d) {
  //       // if (thisInstance.checkIfLegendIsDisabled(d)) {
  //       //   return 0;
  //       // }
  //       if (!end[d.state]) {
  //         end[d.state] = 0;
  //       }
  //       const ret = end[d.state];
  //       end[d.state] += d.value;
  //       return xAxisScale(ret);
  //     })
  //     .attr('y', function (d) {
  //       return yAxisScale(d.state) + (yAxisScale.bandwidth() - 15) / 2;
  //     })
  //     .attr('width', function (d) {
  //       // if (thisInstance.checkIfLegendIsDisabled(d)) {
  //       //   return 0;
  //       // }
  //       const val = xAxisScale(d.value) - 2;
  //       return val > 0 ? val : 0;
  //     })
  //     .attr('height', function (d) {
  //       return 15;
  //     })
  //     .attr('fill', function (d) {
  //       // if (thisInstance.checkIfLegendIsDisabled(d) || thisInstance.checkIfStateIsDisabled(d)) {
  //       //   return '#ccc';
  //       // }
  //       if (d.key === "Subscription") {console.log(thisInstance.getColor(d.key))
  //         return '#65338d';
  //       }
  //       return "#fff";
  //     }).on('end', function () {
  //       thisInstance.resetScrollPosition();
  //     });
  //   this.chart.selectAll('rect')
  //     .on('mouseover', function (d, i) {
  //       thisInstance.barMouseOver(i, thisInstance);
  //       thisInstance.tip.show(d, this);
  //     })
  //     .on('mouseout', function (d, i) {

  //       thisInstance.barMouseOut(i, thisInstance);
  //       thisInstance.tip.hide(d, this);
  //     })
  //     .on('click', function (d) {
  //       thisInstance.tip.hide(d, this);
  //       thisInstance.barClick(d);
  //     });
  // }

  // updateChart() {
  //   this.disableBars();
  //   this.updateYaxisTickOnClick();
  //   this.updateCheckboxSvg();
  // }

  // checkboxImage(state) {
  //   const thisInstance = this;
  //   if (thisInstance.checkIfStateIsChecked(state)) {
  //     return 'assets/images/checkbox-checked.svg';
  //   }
  //   return 'assets/images/checkbox-unchecked.svg';
  // }

  // checkIfStateIsHovered(mouseOver, state) {
  //   const thisInstance = this;
  //   let image: any;
  //   if (!thisInstance.checkIfStateIsChecked(state)) {
  //     mouseOver ? image = 'assets/images/checkbox-unchecked-hover.svg' : image = 'assets/images/checkbox-unchecked.svg';
  //   } else {
  //     image = 'assets/images/checkbox-checked.svg';
  //   }
  //   return image;
  // }

  // barMouseOver(i, thisInstance) {
  //   const bars = this.chart.selectAll('.bar').data(this.chartRenderData);
  //   bars.select('rect.front.front_' + i)
  //     .attr('fill', function (d) {
  //       const color = thisInstance.getColor(d.key);
  //       return thisInstance.analysisUtilitiesService.getDarkColor(color);
  //     });
  // }

  // barMouseOut(i, thisInstance) {
  //   const bars = this.chart.selectAll('.bar').data(this.chartRenderData);
  //   bars.select('rect.front.front_' + i)
  //     .attr('fill', function (d) {
  //       // if (thisInstance.checkIfLegendIsDisabled(d) || thisInstance.checkIfStateIsDisabled(d)) {
  //       //   return '#ccc';
  //       // }
  //       if (d.key === "Subscription") {
  //         return '#65338d';
  //       }
  //       return "#fff";
  //     });
  // }

  // disableBars() {
  //   const thisInstance = this;
  //   const bars = this.chart.selectAll('.bar');
  //   bars.select('rect.front').transition().duration(this.transitionDuration)
  //     .attr('fill', function (d) {
  //       // if (thisInstance.checkIfStateIsDisabled(d)) {
  //       //   return '#ccc';
  //       // }
  //       if (d.key === "Subscription") {
  //         return '#65338d';
  //       }
  //       return "#fff";
  //     });
  // }

  // updateCheckboxSvg() {
  //   const thisInstance = this;
  //   thisInstance.chart.selectAll('.action-button')
  //     .attr('xlink:href', function (d) {
  //       return thisInstance.checkboxImage(d);
  //     });
  // }

  // updateYaxisTickOnClick() {
  //   // const thisInstance = this;
  //   // this.chart.selectAll('.y.axis .tick text')
  //   //   .style('font-weight', function (d) {
  //   //     let c = '';
  //   //     if (thisInstance.chartInteractions.activeStates.indexOf(d) > -1) {
  //   //       c = '600';
  //   //     }
  //   //     return c;
  //   //   })
  //   //   .attr('class', function (d) {
  //   //     let c = d;
  //   //     if (thisInstance.chartInteractions.activeStates.indexOf(d) > -1) {
  //   //       c += ' quarter-selected';
  //   //     }
  //   //     return c;
  //   //   });
  // }

  // barClick(barData) {
  //   // const legendKey = barData.key ? barData.key : barData;
  //   // if (this.chartInteractions.activeLegends.length && this.chartInteractions.activeLegends.indexOf(legendKey) > -1) {
  //   //   this.chartInteractions.activeLegends.splice(this.chartInteractions.activeLegends.indexOf(legendKey), 1);
  //   // } else {
  //   //   this.chartInteractions.activeLegends = [];
  //   //   this.chartInteractions.activeLegends.push(legendKey);
  //   // }
  //   // this.chartInteractionsEvent.emit(this.chartInteractions);
  //   // this.chartInteractionsSalesUpdateEvent.emit(this.chartInteractions);
  //   // this.renderTile();
  // }

  // checkIfLegendIsDisabled(barData) {
  //   // const legendKey = barData.key ? barData.key : barData;
  //   // if (this.chartInteractions && this.chartInteractions.activeLegends.length &&
  //   //   this.chartInteractions.activeLegends.indexOf(legendKey) === -1) {
  //   //   return true;
  //   // }
  //   // return false;
  // }

  // yAxisTickClick(thisNew, state) {
  //   // validate here if we need to open the dropdown
  //   /* if (this.tileData.openDropdown && this.tileData.activeCategory === 'customer') {
  //     this.openDropdown(thisNew, state);
  //     return;
  //   // } */
  //   // if (this.chartInteractions.activeStates.length && this.chartInteractions.activeStates.indexOf(state) > -1) {
  //   //   this.chartInteractions.activeStates.splice(this.chartInteractions.activeStates.indexOf(state), 1);
  //   //   this.chartInteractions.activeStateIds.splice(this.chartInteractions.activeStateIds.indexOf(this.getActiveStateId(state)), 1);
  //   // } else {
  //   //   this.chartInteractions.activeStates = [];
  //   //   this.chartInteractions.activeStateIds = [];
  //   //   this.chartInteractions.activeStates.push(state);
  //   //   this.chartInteractions.activeStateIds.push(this.getActiveStateId(state));
  //   // }
  //   // this.chartInteractionsSalesUpdateEvent.emit(this.chartInteractions);
  //   // this.updateChart();
  // }

  // checkIfStateIsDisabled(barData) {
  //   // const stateKey = barData.state ? barData.state : barData;
  //   // if (this.chartInteractions && this.chartInteractions.activeStates.length &&
  //   //   this.chartInteractions.activeStates.indexOf(stateKey) === -1) {
  //   //   return true;
  //   // }
  //   // return false;
  // }

  // toggleStates(state) {
  //   let barData: any;
  //   this.chartRenderData.forEach(function (bar) {
  //     if (bar.state === state) {
  //       barData = bar;
  //     }
  //   });
  //   if (this.checkIfStateIsChecked(state)) {
  //     this.tileData.checkedStates.splice(this.tileData.checkedStates.indexOf(state), 1);
  //     if (barData.stateId) {
  //       this.tileData.checkedStateIds.splice(this.tileData.checkedStateIds.indexOf(this.getActiveStateId(state)), 1);
  //     }
  //     // tslint:disable-next-line:radix
  //     this.tileData.selectedLineCount -= parseInt(barData.lineCount);
  //     // tslint:disable-next-line:radix
  //     this.tileData.selectedListAmount -= parseInt(barData.listAmount);
  //   } else {
  //     // initializing checkStates array
  //     if (!this.tileData.checkedStates.length) {
  //       this.tileData.checkedStates = [];
  //       this.tileData.checkedStateIds = [];
  //       this.tileData.checkedBegeoIds = [];
  //       this.tileData.selectedLineCount = 0;
  //       this.tileData.selectedListAmount = 0;
  //     }
  //     this.tileData.checkedStates.push(state);
  //     this.tileData.checkedBegeoIds.push(barData.stateId);
  //     if (barData.stateId) {
  //       this.tileData.checkedStateIds.push(this.getActiveStateId(state));
  //     }
  //     // tslint:disable-next-line:radix
  //     this.tileData.selectedLineCount += parseInt(barData.lineCount);
  //     // tslint:disable-next-line:radix
  //     this.tileData.selectedListAmount += parseInt(barData.listAmount);
  //   }
  //   this.checkIfAllStatesAreSelected();
  //   this.updateChart();
  // }

  // // getting active state id for selected state
  // getActiveStateId(state) {
  //   return state.lastIndexOf('(') > -1 ? state.slice(state.lastIndexOf('(') + 1, state.length - 1) : '';
  // }

  // checkIfAllStatesAreSelected() {
  //   if (this.tileData.chartStates.length === this.tileData.checkedStates.length) {
  //     this.tileData.allStatesSelected = true;
  //   } else {
  //     this.tileData.allStatesSelected = false;
  //   }
  // }

  // checkIfStateIsChecked(barData) {
  //   const state = barData.state ? barData.state : barData;
  //   if (this.tileData.checkedStates && this.tileData.checkedStates.length &&
  //     this.tileData.checkedStates.indexOf(state) > -1) {
  //     return true;
  //   }
  //   return false;
  // }

  // showCheckboxes() {
  //   if (this.tileData.categoriesData && this.tileData.categoriesData[this.tileData.activeCategory].lineCount) {
  //     return true;
  //   }
  //   return false;
  // }

  // createLegends() {

  //   const element = this.chartContainer.nativeElement;
  //   const thisInstance = this;
  //   const legendKeysLength = this.keys.length;
  //   let legendClass = '';
  //   if (legendKeysLength > 3) {
  //     legendClass = 'threePlus';
  //   } else if (legendKeysLength === 3) {
  //     legendClass = 'three';
  //   } else if (legendKeysLength === 2) {
  //     legendClass = 'two';
  //   } else if (legendKeysLength === 1) {
  //     legendClass = 'one';
  //   }

  //   if (this.tileData.tabType === 'campaigns') {
  //     for (let i = 0; i < this.keys.length; i++) {
  //       if (this.keys[i].toLowerCase().includes('sfdc pipeline')) { // remove sfdc pipeline
  //         this.keys.splice(i, 1);
  //       }
  //     }
  //   }
  //   this.table = d3.select(element).append('table');
  //   const legend = this.table.attr('class', 'legend ' + legendClass);
  //   const tr = legend.append('tbody').append('tr');
  //   const td = tr.selectAll('td')
  //     .data(this.keys)
  //     .enter()
  //     .append('td')
  //     .attr('class', function (d) {
  //       // if (thisInstance.checkIfLegendIsDisabled(d)) {
  //       //   return 'disabled';
  //       // }
  //     })
  //     .on('click', function (d) {
  //       thisInstance.legendToolTipDiv.classed('in', false)
  //         .style('left', 0)
  //         .style('top', 0);
  //       thisInstance.barClick(d);
  //     });

  //   const svg = td.append('svg').attr('width', '10').attr('height', '10').append('circle')
  //     .attr('cx', '6').attr('cy', '6').attr('r', '4')
  //     .attr('fill', function (d) {
  //       if (d === "Subscription") {
  //         return '#65338d';
  //       }
  //       return "#fff";
  //       // const color = thisInstance.getColor(d);
  //       // return color;
  //     });
  //   td.append('text')
  //     .text(function (d) {
  //       return d;
  //     }).on('mouseover', function (d) {
  //       thisInstance.legendToolTipDiv.classed('in', true);
  //       thisInstance.legendToolTipDiv
  //         .html(`
  //           <div class="tooltip-arrow"></div>
  //           <div class="tooltip-inner"> ${d} </div>
  //           `)
  //         .style('left', (this.getBoundingClientRect().left + window.scrollX - 20) + 'px')
  //         .style('top', (this.getBoundingClientRect().top + window.scrollY - 45) + 'px');
  //     })
  //     .on('mouseout', function (d) {
  //       const toolTipContainer = document.getElementsByClassName('tooltip top');
  //       for (let i = 0; i < toolTipContainer.length; i++) {
  //         toolTipContainer[i].classList.remove('in');
  //       }

  //       thisInstance.legendToolTipDiv.classed('in', false);
  //     });
  // }
  // resetScrollPosition() {
  //   if (this.scrollPosition) {
  //     document.querySelector('.scrollContainer').scrollTop = this.scrollPosition;
  //   }
  // }

  //Gantt Chart code start
  ngOnInit() {
    this.example();
  }
  example() {
    var tasks = [];

    var taskStatus = {
      "Bill Johnson": "bar",
      "Joe Johnson": "bar-red",
    };

    const json = [
      {
        "name": "Joe Johnson",
        "values": [
          {
            "from date": "jan-2000",
            "to date": "jun-2002",
            "Role": "VP of Product",
            "Company": "A Company"
          },
          {
            "from date": "jun-2002",
            "to date": "apr-2004",
            "Role": "CEO",
            "Company": "B Company"
          },
          {
            "from date": "apr-2004",
            "to date": "jun-2013",
            "Role": "CEO",
            "Company": "C Company"
          }
        ]
      },
      {
        "name": "Bill Johnson",
        "values": [
          {
            "from date": "jan-2001",
            "to date": "jun-2005",
            "Role": "VP of Product",
            "Company": "C Company"
          },
          {
            "from date": "jun-2005",
            "to date": "july-2006",
            "Role": "CEO",
            "Company": "D Company"
          },
          {
            "from date": "july-2006",
            "to date": "jun-2013",
            "Role": "CEO",
            "Company": "A Company"
          }
        ]
      }
    ];
    var taskNames = [];
    for (var i = 0; i < json.length; i++) {
      for (var j = 0; j < json[i].values.length; j++) {
        var role = json[i].values[j]["Role"];
        var company = json[i].values[j]["Company"];
        var roleAndCompany = role + "(" + company + ")";
        var name = json[i]["name"];
        taskNames.push(roleAndCompany);
        tasks.push({
          "startDate": new Date(json[i].values[j]["from date"]),
          "endDate": new Date(json[i].values[j]["to date"]),
          "taskName": roleAndCompany,
          "status": name
        });
      }
    }
    var format = "%b-%e-%y";
    var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);
    gantt(tasks);console.log(gantt, 'gantt')
  }
  // d3.gantt = function () {
  //   var FIT_TIME_DOMAIN_MODE = "fit";
  //   var FIXED_TIME_DOMAIN_MODE = "fixed";

  //   var margin = {
  //     top: 20,
  //     right: 40,
  //     bottom: 20,
  //     left: 150
  //   };
  //   var timeDomainStart = d3.time.day.offset(new Date(), -3);
  //   var timeDomainEnd = d3.time.hour.offset(new Date(), +3);
  //   var timeDomainMode = FIT_TIME_DOMAIN_MODE;// fixed or fit
  //   var taskTypes = [];
  //   var taskStatus = [];
  //   var height = document.body.clientHeight - margin.top - margin.bottom - 5;
  //   var width = document.body.clientWidth - margin.right - margin.left - 5;

  //   var tickFormat = "%H:%M";

  //   var keyFunction = function (d) {
  //     return d.startDate + d.taskName + d.endDate;
  //   };

  //   var rectTransform = function (d) {
  //     return "translate(" + x(d.startDate) + "," + y(d.taskName) + ")";
  //   };

  //   var x = d3.time.scale().domain([timeDomainStart, timeDomainEnd]).range([0, width]).clamp(true);

  //   var y = d3.scale.ordinal().domain(taskTypes).rangeRoundBands([0, height - margin.top - margin.bottom], .1);

  //   var xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(d3.time.format(tickFormat)).tickSubdivide(true)
  //     .tickSize(8).tickPadding(8);

  //   var yAxis = d3.svg.axis().scale(y).orient("left").tickSize(0);

  //   var initTimeDomain = function (tasks) {
  //     if (timeDomainMode === FIT_TIME_DOMAIN_MODE) {
  //       if (tasks === undefined || tasks.length < 1) {
  //         timeDomainStart = d3.time.day.offset(new Date(), -3);
  //         timeDomainEnd = d3.time.hour.offset(new Date(), +3);
  //         return;
  //       }
  //       tasks.sort(function (a, b) {
  //         return a.endDate - b.endDate;
  //       });
  //       timeDomainEnd = tasks[tasks.length - 1].endDate;
  //       tasks.sort(function (a, b) {
  //         return a.startDate - b.startDate;
  //       });
  //       timeDomainStart = tasks[0].startDate;
  //     }
  //   };

  //   var initAxis = function () {
  //     x = d3.time.scale().domain([timeDomainStart, timeDomainEnd]).range([0, width]).clamp(true);
  //     y = d3.scale.ordinal().domain(taskTypes).rangeRoundBands([0, height - margin.top - margin.bottom], .1);
  //     xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(d3.time.format(tickFormat)).tickSubdivide(true)
  //       .tickSize(8).tickPadding(8);

  //     yAxis = d3.svg.axis().scale(y).orient("left").tickSize(0);
  //   };

  //   function gantt(tasks) {

  //     initTimeDomain(tasks);
  //     initAxis();

  //     var svg = d3.select("body")
  //       .append("svg")
  //       .attr("class", "chart")
  //       .attr("width", width + margin.left + margin.right)
  //       .attr("height", height + margin.top + margin.bottom)
  //       .append("g")
  //       .attr("class", "gantt-chart")
  //       .attr("width", width + margin.left + margin.right)
  //       .attr("height", height + margin.top + margin.bottom)
  //       .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

  //     svg.selectAll(".chart")
  //       .data(tasks, keyFunction).enter()
  //       .append("rect")
  //       .attr("rx", 5)
  //       .attr("ry", 5)
  //       .attr("class", function (d) {
  //         if (taskStatus[d.status] == null) { return "bar"; }
  //         return taskStatus[d.status];
  //       })
  //       .attr("y", 0)
  //       .attr("transform", rectTransform)
  //       .attr("height", function (d) { return y.rangeBand(); })
  //       .attr("width", function (d) {
  //         return (x(d.endDate) - x(d.startDate));
  //       });


  //     svg.append("g")
  //       .attr("class", "x axis")
  //       .attr("transform", "translate(0, " + (height - margin.top - margin.bottom) + ")")
  //       .transition()
  //       .call(xAxis);

  //     svg.append("g").attr("class", "y axis").transition().call(yAxis);

  //     return gantt;

  //   };

  //   gantt.redraw = function (tasks) {

  //     initTimeDomain(tasks);
  //     initAxis();

  //     var svg = d3.select("svg");

  //     var ganttChartGroup = svg.select(".gantt-chart");
  //     var rect = ganttChartGroup.selectAll("rect").data(tasks, keyFunction);

  //     rect.enter()
  //       .insert("rect", ":first-child")
  //       .attr("rx", 5)
  //       .attr("ry", 5)
  //       .attr("class", function (d) {
  //         if (taskStatus[d.status] == null) { return "bar"; }
  //         return taskStatus[d.status];
  //       })
  //       .transition()
  //       .attr("y", 0)
  //       .attr("transform", rectTransform)
  //       .attr("height", function (d) { return y.rangeBand(); })
  //       .attr("width", function (d) {
  //         return (x(d.endDate) - x(d.startDate));
  //       });

  //     rect.transition()
  //       .attr("transform", rectTransform)
  //       .attr("height", function (d) { return y.rangeBand(); })
  //       .attr("width", function (d) {
  //         return (x(d.endDate) - x(d.startDate));
  //       });

  //     rect.exit().remove();

  //     svg.select(".x").transition().call(xAxis);
  //     svg.select(".y").transition().call(yAxis);

  //     return gantt;
  //   };

  //   gantt.margin = function (value) {
  //     if (!arguments.length)
  //       return margin;
  //     margin = value;
  //     return gantt;
  //   };

  //   gantt.timeDomain = function (value) {
  //     if (!arguments.length)
  //       return [timeDomainStart, timeDomainEnd];
  //     timeDomainStart = +value[0], timeDomainEnd = +value[1];
  //     return gantt;
  //   };

  //   /**
  //    * @param {string}
  //    *                vale The value can be "fit" - the domain fits the data or
  //    *                "fixed" - fixed domain.
  //    */
  //   gantt.timeDomainMode = function (value) {
  //     if (!arguments.length)
  //       return timeDomainMode;
  //     timeDomainMode = value;
  //     return gantt;

  //   };

  //   gantt.taskTypes = function (value) {
  //     if (!arguments.length)
  //       return taskTypes;
  //     taskTypes = value;
  //     return gantt;
  //   };

  //   gantt.taskStatus = function (value) {
  //     if (!arguments.length)
  //       return taskStatus;
  //     taskStatus = value;
  //     return gantt;
  //   };

  //   gantt.width = function (value) {
  //     if (!arguments.length)
  //       return width;
  //     width = +value;
  //     return gantt;
  //   };

  //   gantt.height = function (value) {
  //     if (!arguments.length)
  //       return height;
  //     height = +value;
  //     return gantt;
  //   };

  //   gantt.tickFormat = function (value) {
  //     if (!arguments.length)
  //       return tickFormat;
  //     tickFormat = value;
  //     return gantt;
  //   };



  //   return gantt;
  // };
}
