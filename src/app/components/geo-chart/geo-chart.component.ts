import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { GeoPushpinChart, Model } from '@gooddata/react-components';
import {
  projectId,
  g_Latlon,
  m_SumPopulation,
  m_MinPopulation
} from '../../utils/fixtures';
interface GeoPushpinChartProps {
  projectId: any;
  location: any;
  size?: any;
  color? :any;
  config?: any;
}
@Component({
  selector: 'app-geo-chart',
  template: '<div class="geo-chart" style="height:600px; position:relative; width: 900px" [id]="rootDomID"></div>',
})
export class GeoChartComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  public rootDomID: string;
  xlocation = Model.attribute(g_Latlon).localIdentifier('location');
  xsize = Model.measure(m_SumPopulation).localIdentifier('sizeIndentifier');
  xcolor = Model.measure(m_MinPopulation);
 
  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  protected getProps(): GeoPushpinChartProps {
    return {
      projectId: projectId,
      location: this.xlocation,
      size: this.xsize,
      color:this.xcolor,
      config: {
        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg",
      },
    }
  }
  private isMounted(): boolean {
    return !!this.rootDomID;
  }
  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(GeoPushpinChart, this.getProps()), this.getRootDomNode());
    }
  }
  ngOnInit() {
    this.rootDomID = uuid.v1();
  }
  ngOnChanges() {
    this.render();
  }
  ngAfterViewInit() {
    this.render();
  }
  ngOnDestroy() {
    // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
    // ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }
}