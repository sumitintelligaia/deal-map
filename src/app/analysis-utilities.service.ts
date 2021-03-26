import { Injectable } from '@angular/core';
import * as tinycolor from 'tinycolor2';
// import { DecimalPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AnalysisUtilitiesService {
  colorsPalette: any = {
    colors_2: ['#4770b3', '#cad93f'],
    colors_3: ['#4770b3', '#cad93f', '#65338d'],
    colors_6: [
      '#4770b3',
      '#267278',
      '#e4b031',
      '#50aed3',
      '#cad93f',
      '#9e9ea2'
    ],
    colors: [
      '#267278',
      '#65338d',
      '#4770b3',
      '#d21f75',
      '#3b3689',
      '#50aed3',
      '#48b24f',
      '#e57438',
      '#569dd2',
      '#569d79',
      '#58595b',
      '#e4b031',
      '#84d2f4',
      '#cad93f',
      '#f5c8af'
    ],
    // tslint:disable-next-line:max-line-length
    colors_more: [
      '#267278',
      '#65338d',
      '#4770b3',
      '#d21f75',
      '#3b3689',
      '#50aed3',
      '#48b24f',
      '#e57438',
      '#569dd2',
      '#569d79',
      '#58595b',
      '#e4b031',
      '#84d2f4',
      '#cad93f',
      '#f5c8af',
      '#9ac483',
      '#9e9ea2',
      '#f4dfad',
      '#eaf0b2',
      '#ba8268',
      '#a8c7c9',
      '#a385bb',
      '#91a9d1',
      '#eda5c8',
      '#b9dfed',
      '#b6e0b9',
      '#efac88',
      '#dedede'
    ]
  };
  resizeAllTile = true;
  constructor() { }

  public getModuleName: string;
  public bookmarkModule: string;
  public tabColors: any;

  formatValue(value) {
    // tslint:disable-next-line:no-bitwise
    if (typeof value === 'number') {
      return value;
    }
  }

  getUniqueKeys(chartData, noSorting?: boolean) {
    const keys: Array<any> = [];
    if (chartData) {
      chartData.forEach(element => {
        if (element.areas === undefined) {
          const object = element.freq;
          for (const key in object) {
            if (object.hasOwnProperty(key) && keys.indexOf(key) === -1) {
              keys.push(key);
            }
          }
        } else {
          element.areas.forEach(element_2 => {
            const object = element_2.freq;
            for (const key in object) {
              if (object.hasOwnProperty(key) && keys.indexOf(key) === -1) {
                keys.push(key);
              }
            }
          });
        }
      });
    }
    if (!noSorting) {
      keys.sort();
    }
    return keys;
  }

  getObjectTotal(obj) {
    let total = 0;
    if (typeof obj === 'object') {
      for (const key in obj) {
        if (obj[key]) {
          total += obj[key];
        }
      }
    }
    return total;
  }

  wrapAxisText(selection, d3, characters?: number, sliceText?: number) {
    selection.each(function () {
      const breakChars = [];
      const text = d3.select(this);
      const textContent = text.text();
      let quarter = false;
      let spanContent;
      let words;
      let indexOfQuarter;
      let count = 0;
      const charLength = characters ? characters : 10;
      const sliceLimit = sliceText ? sliceText : 8;


      indexOfQuarter = textContent.indexOf('FY');

      if (indexOfQuarter === -1) {
        indexOfQuarter = textContent.indexOf('yrs');
      }
      if (indexOfQuarter > 0) {
        words = [
          textContent.substring(0, indexOfQuarter).trim(),
          textContent.substring(indexOfQuarter, textContent.length).trim()
        ];
        const monthsCompareArray = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        const found = monthsCompareArray.some(r => words[0].indexOf(r) >= 0);
        if (!found && words[0].indexOf('Q') === -1) {
          quarter = false;
        } else {
          quarter = true;
        }
      }
      // for text with states to show with ellipsis
      if (!quarter) {
        let x = text.attr('x');
        x = x ? x : 0.5;
        const y = text.attr('y');
        const dy = parseFloat(text.attr('dy') || 0);
        const tspan = text
          .text(null)
          .append('tspan')
          .attr('x', x)
          .attr('y', y)
          .attr('dy', dy + 'em')
          .attr('class', 'axisText');
        let displayText = textContent;
        if (textContent.length > charLength) {
          displayText = textContent.slice(0, sliceLimit) + '...';
        }
        tspan.text(displayText);
      } else if (quarter) {
        // for quarters to split into two lines
        words.reverse();
        let word;
        let line = [];
        let lineNumber = 0;
        const lineHeight = 1.1; // ems
        let x = text.attr('x');
        x = x ? x : 0.5;
        const y = text.attr('y');
        const dy = parseFloat(text.attr('dy') || 0);
        let tspan = text
          .text(null)
          .append('tspan')
          .attr('x', x)
          .attr('y', y)
          .attr('dy', dy + 'em')
          .attr('class', 'axisText');
        while ((word = words.pop())) {
          line.push(word);
          tspan.text(line.join(''));
          if (quarter && count > 0) {
            line.pop();
            spanContent = line.join(' ');
            breakChars.forEach(char => {
              // Remove spaces trailing breakChars that were added above
              spanContent = spanContent.replace(char + ' ', char);
            });
            tspan.text(spanContent);
            line = [word];
            tspan = text
              .append('tspan')
              .attr('x', x)
              .attr('y', y)
              .attr('dy', ++lineNumber * lineHeight + dy + 'em')
              .attr('class', 'axisText')
              .text(word);
          }
          count++;
        }
      }
    });
  }

  getDarkColor(color) {
    return tinycolor(color)
      .darken(8)
      .toString();
  }

  getColors(legendKeys, noSorting?: boolean, subKeys?: boolean) {
    if (!noSorting) {
      legendKeys = legendKeys.sort();
    }
    const legendColorTheme = this.getThemeColors(legendKeys.length);
    const tempTabColors = {};
    const thisInstance = this;
    legendKeys.forEach(function (key, index) {
      tempTabColors[key] = thisInstance.colorsPalette[legendColorTheme][index];
    });
    if (!this.tabColors) {
      this.tabColors = tempTabColors;
    }
    // check if new chart legend colors are same as previous chart
    legendKeys.forEach(function (key) {
      if (!thisInstance.tabColors[key]) {
        // for existing keys but are not matching bcoz of upper and lower case mismatch
        const existingKeyIndex = Object.keys(thisInstance.tabColors)
          .map(existingKeys => existingKeys.toLowerCase())
          .indexOf(key.toLowerCase());
        if (existingKeyIndex > -1) {
          thisInstance.tabColors[key] = Object.values(thisInstance.tabColors)[
            existingKeyIndex
          ];
        } else {
          const lengthOfTabColors = Object.keys(thisInstance.tabColors).length;
          const colorTheme = thisInstance.getThemeColors(legendKeys.length);
          if (thisInstance.colorsPalette[colorTheme][lengthOfTabColors]) {
            thisInstance.tabColors[key] =
              thisInstance.colorsPalette[colorTheme][lengthOfTabColors];
          } else {
            // If new tile legends never match with prevoius then comes here
            thisInstance.tabColors[key] =
              thisInstance.colorsPalette['colors_more'][lengthOfTabColors];
          }
        }
      }
    });
    return this.tabColors;
  }
  getColorsForCreatePipeline(legendKeys) {
    const legendColorTheme = this.getThemeColors(legendKeys.length);
    const tempTabColors = {};
    const thisInstance = this;
    legendKeys.forEach(function (key, index) {
      tempTabColors[key] = thisInstance.colorsPalette[legendColorTheme][index];
    });
    return tempTabColors;
  }

  getThemeColors(legendKeysLength) {
    let colorTheme;
    if (legendKeysLength === 2) {
      colorTheme = 'colors_2';
    } else if (legendKeysLength <= 3) {
      colorTheme = 'colors_3';
    } else if (legendKeysLength <= 6) {
      colorTheme = 'colors_6';
    } else if (legendKeysLength <= 13) {
      colorTheme = 'colors';
    } else {
      colorTheme = 'colors_more';
    }
    return colorTheme;
  }

  resetTabColors() {
    delete this.tabColors;
  }

  getQuarterColorChart(keys) {
    const colors = [];
    const theme = 'colors';
    keys.forEach(element => {
      if (!colors[element]) {
        const size = Object.keys(colors).length;
        colors[element] = this.hexToRgb(this.colorsPalette[theme][size], 1);
      }
    });
    return colors;
  }

  getQuarterColorForTable(keys) {
    const colors = [];
    const theme = 'colors';
    keys.forEach(element => {
      if (!colors[element]) {
        const size = Object.keys(colors).length;
        colors[element] = this.hexToRgb(this.colorsPalette[theme][size], 0.2);
      }
    });
    return colors;
  }

  hexToRgb(hex, alpha) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const rgbObj = result
      ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
      : null;
    // tslint:disable-next-line:no-unused-expression
    const rgb =
      'rgba(' +
      rgbObj.r +
      ' , ' +
      rgbObj.g +
      ' , ' +
      rgbObj.b +
      ' , ' +
      alpha +
      ')';
    return rgb;
  }

  tileResize() {
    setTimeout(() => {
      const tile = document.getElementsByClassName('tile');
      let maxHeight = 0;
      for (let i = 0; i < tile.length; i++) {
        tile[i]['style'].height = null; // remove the height first from all tiles
        if (
          !tile[i].getElementsByClassName('icon-collapse_tile_bg').length &&
          tile[i].clientHeight > maxHeight
        ) {
          maxHeight = tile[i].clientHeight; // getting the max height of tile
        }
      }
      for (let i = 0; i < tile.length; i++) {
        if (!tile[i].getElementsByClassName('icon-collapse_tile_bg').length) {
          tile[i]['style'].height = maxHeight + 'px'; // setting max height to each tiles
        }
      }
    });
  }

  // setTile height based on the different message and combination of message which info and disclaimer
  setTileTopPaddingBasedOnCard() {
    setTimeout(() => {
      let cardsHeight = 0;
      cardsHeight += this.addDisclaimerCardHeight();
      cardsHeight += this.addInformationCardHeight();
      cardsHeight += this.addOtherCardHeight();
      let headerHeight = 0;
      let navTabHeight = 0;
      let subTabHeight = 0;
      if (document.querySelector('.header')) {
        headerHeight = document.querySelector('.header').getBoundingClientRect()
          .height;
      }
      if (document.querySelector('.tab-navbar')) {
        navTabHeight = document
          .querySelector('.tab-navbar')
          .getBoundingClientRect().height;
      }
      if (document.querySelector('.subTab-wrap')) {
        subTabHeight = document
          .querySelector('.subTab-wrap')
          .getBoundingClientRect().height;
      }

      const filterActionHeight = document
        .querySelector('.filter-switch')
        .getBoundingClientRect().height;

      const dynamicPaddingTopWithoutMsg =
        headerHeight +
        navTabHeight +
        subTabHeight +
        filterActionHeight +
        cardsHeight;
      const wrapperElement = document.getElementsByClassName(
        'page-content-wrapper'
      ) as HTMLCollectionOf<HTMLElement>;
      wrapperElement[0].style.paddingTop = dynamicPaddingTopWithoutMsg + 'px';
    }, 100);
  }

  addDisclaimerCardHeight() {
    let cardsHeight = 0;
    const allDisclaimerCards = Array.from(
      document.querySelectorAll('.disc-card')
    );
    if (allDisclaimerCards && allDisclaimerCards.length) {
      allDisclaimerCards.forEach(discSelector => {
        cardsHeight += discSelector.getBoundingClientRect().height;
      });
    }
    return cardsHeight;
  }

  addInformationCardHeight() {
    let cardsHeight = 0;
    const allInformationCards = Array.from(
      document.querySelectorAll('.inf0-card')
    );
    if (allInformationCards && allInformationCards.length) {
      allInformationCards.forEach(discSelector => {
        cardsHeight += discSelector.getBoundingClientRect().height;
      });
    }
    return cardsHeight;
  }

  addOtherCardHeight() {
    let cardsHeight = 0;
    const otherCards = Array.from(document.querySelectorAll('.long-message'));
    if (otherCards && otherCards.length) {
      otherCards.forEach(discSelector => {
        cardsHeight += discSelector.getBoundingClientRect().height;
      });
    }
    return cardsHeight;
  }

  removeMultiMessageClassInstantly() {
    setTimeout(() => {
      if (document.querySelector('.disc-card')) {
        const disclaimerPresent = document.querySelector('.disc-card');
        disclaimerPresent.classList.remove('alert--multiple');
      }
      if (document.querySelector('.inf0-card')) {
        const disclaimerPresent = document.querySelector('.inf0-card');
        disclaimerPresent.classList.remove('alert--multiple');
      }
      this.setTileTopPaddingBasedOnCard();
    }, 2);
  }

  navigateToNextgen(query, target) {
    const url = '/#/search/' + query.trim().split(' ').join('_');
    const host = window.location.origin.includes('dash') ? 'https://ciscoready.cloudapps.cisco.com' + url : 'https://ciscoreadystg.cisco.com' + url;
    window.open(host, target);
  }
}
