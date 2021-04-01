import {
  Component, OnInit, OnChanges, ViewChild, ElementRef, SimpleChanges,
  Input, ViewEncapsulation, Output, EventEmitter, AfterViewInit, HostListener
} from '@angular/core';
declare module gantt {
  export function gantt(): any;
}
import * as swapD3 from 'd3';
import * as $ from 'jquery'; // import Jquery here;
const d3: any = swapD3;
d3.gantt = function () {
  const FIT_TIME_DOMAIN_MODE = "fit";
  const FIXED_TIME_DOMAIN_MODE = "fixed";

  let margin = {
    top: 20,
    right: 40,
    bottom: 20,
    left: 150
  };
  let timeDomainStart = d3.timeDay.offset(new Date(), -3);
  let timeDomainEnd = d3.timeHour.offset(new Date(), +3);
  let timeDomainMode = FIT_TIME_DOMAIN_MODE;// fixed or fit
  let taskTypes = [];
  let taskStatus = [];
  let height = document.body.clientHeight - margin.top - margin.bottom - 5;
  let width = document.body.clientWidth - margin.right - margin.left - 5;

  let tickFormat = "%H:%M";

  const keyFunction = function (d) {
    return d.startDate + d.taskName + d.endDate;
  };

  const rectTransform = function (d) {
    return "translate(" + x(d.startDate) + "," + y(d.taskName) + ")";
  };

  let x = d3.scaleTime().domain([timeDomainStart, timeDomainEnd]).range([0, width]);

  let y = d3.scaleOrdinal().domain(taskTypes).range([0, 400]);

  let xAxis = d3.axisBottom()
    .scale(x);

  let yAxis = d3.axisLeft().scale(y);
  const initTimeDomain = function (tasks) {
    if (timeDomainMode === FIT_TIME_DOMAIN_MODE) {
      if (tasks === undefined || tasks.length < 1) {
        timeDomainStart = d3.timeDay.offset(new Date(), -3);
        timeDomainEnd = d3.timeHour.offset(new Date(), +3);
        return;
      }
      tasks.sort(function (a, b) {
        return a.endDate - b.endDate;
      });
      timeDomainEnd = tasks[tasks.length - 1].endDate;
      tasks.sort(function (a, b) {
        return a.startDate - b.startDate;
      });
      timeDomainStart = tasks[0].startDate;
    }
  };
console.log(taskTypes)
  const initAxis = function () {
    x = d3.scaleTime().domain([timeDomainStart, timeDomainEnd]).range([0, width]);
    y = d3.scaleOrdinal().domain(taskTypes).range([0, 400]);
    xAxis = d3.axisBottom()
      .scale(x);
    yAxis = d3.axisLeft().scale(y);
  };

  const gantt = function (tasks) {

    initTimeDomain(tasks);
    initAxis();
    const svg = d3.select("body")
      .append("svg")
      .attr("class", "chart")
      .attr("width", width + margin.left + margin.right)
      .attr("height", 500)
      .append("g")
      .attr("class", "gantt-chart")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");
console.log(+ margin.left + ", " + margin.top + 'tasks')
    svg.selectAll(".chart")
      .data(tasks, keyFunction).enter()
      .append("rect")
      .attr("rx", 5)
      .attr("ry", 5)
      .attr("class", function (d) {
        if (taskStatus[d.status] == null) { return "bar"; }
        return taskStatus[d.status];
      })
      .attr("y", 0)
      .attr("transform", rectTransform)
      .attr("height", function (d) { return 30; })
      .attr("width", function (d) {
        return (x(d.endDate) - x(d.startDate));
      });

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0, " + 410 + ")")
      .call(xAxis);

    svg.append("g").attr("class", "y axis").call(yAxis);

    return gantt;

  };

  gantt.redraw = function (tasks) {

    initTimeDomain(tasks);
    initAxis();

    const svg = d3.select("svg");

    const ganttChartGroup = svg.select(".gantt-chart");
    const rect = ganttChartGroup.selectAll("rect").data(tasks, keyFunction);

    rect.enter()
      .insert("rect", ":first-child")
      .attr("rx", 5)
      .attr("ry", 5)
      .attr("class", function (d) {
        if (taskStatus[d.status] == null) { return "bar"; }
        return taskStatus[d.status];
      })
      .transition()
      .attr("y", 0)
      .attr("transform", rectTransform)
      .attr("height", function (d) { return 30; })
      .attr("width", function (d) {
        return (x(d.endDate) - x(d.startDate));
      });

    rect.transition()
      .attr("transform", rectTransform)
      .attr("height", function (d) { return 30; })
      .attr("width", function (d) {
        return (x(d.endDate) - x(d.startDate));
      });

    rect.exit().remove();

    svg.select(".x").transition().call(xAxis);
    svg.select(".y").transition().call(yAxis);

    return gantt;
  };

  gantt.margin = function (value) {
    if (!arguments.length)
      return margin;
    margin = value;
    return gantt;
  };

  gantt.timeDomain = function (value) {
    if (!arguments.length)
      return [timeDomainStart, timeDomainEnd];
    timeDomainStart = +value[0], timeDomainEnd = +value[1];
    return gantt;
  };

  gantt.timeDomainMode = function (value) {
    if (!arguments.length)
      return timeDomainMode;
    timeDomainMode = value;
    return gantt;

  };

  gantt.taskTypes = function (value) {
    if (!arguments.length)
      return taskTypes;
    taskTypes = value;
    return gantt;
  };

  gantt.taskStatus = function (value) {
    if (!arguments.length)
      return taskStatus;
    taskStatus = value;
    return gantt;
  };

  gantt.width = function (value) {
    if (!arguments.length)
      return width;
    width = +value;
    return gantt;
  };

  gantt.height = function (value) {
    if (!arguments.length)
      return height;
    height = +value;
    return gantt;
  };

  gantt.tickFormat = function (value) {
    if (!arguments.length)
      return tickFormat;
    tickFormat = value;
    return gantt;
  };
  return gantt;
};
@Component({
  selector: 'app-bar-stacked-horizontal',
  templateUrl: './bar-stacked-horizontal.component.html',
  styleUrls: ['./bar-stacked-horizontal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BarStackedHorizontalComponent implements OnInit {

  constructor() {
    console.log(d3, 'd3')
  }
  //Gantt Chart code start
  ngOnInit() {
    this.example();
  }
  example() {
    const tasks = [];
    const json = [
      {
        "values": [
          {
            "from date": "20153",
            "to date": "20184",
            "Role": "VP of Product",
            "Company": "A Company"
          },
          {
            "from date": "20123",
            "to date": "20143",
            "Role": "CEO",
            "Company": "B Company"
          },
          {
            "from date": "20163",
            "to date": "20173",
            "Role": "VP of Product",
            "Company": "C Company"
          },
          {
            "from date": "20203",
            "to date": "20223",
            "Role": "CEO",
            "Company": "D Company"
          }
        ]
      }
    ];

    const taskNames = [];
    for (let i = 0; i < json.length; i++) {
      for (let j = 0; j < json[i].values.length; j++) {
        const role = json[i].values[j]["Role"];
        const Company = json[i].values[j]["Company"];
        // const Company = role + "(" + company + ")";
        const name = json[i]["name"];
        taskNames.push(Company);
        tasks.push({
          "startDate": new Date(json[i].values[j]["from date"]),
          "endDate": new Date(json[i].values[j]["to date"]),
          "taskName": Company
        });
      }
    }
    const format = "%b-%e-%y";
    const gantt = d3.gantt().taskTypes(taskNames).tickFormat(format);
    gantt(tasks);
  }

}
