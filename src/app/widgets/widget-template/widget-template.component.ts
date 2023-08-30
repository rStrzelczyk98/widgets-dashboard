import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-template',
  templateUrl: './widget-template.component.html',
  styleUrls: ['./widget-template.component.scss'],
})
export class WidgetTemplateComponent implements OnInit {
  list: string[] = [];

  widgetData = {
    title: 'Widget Title',
    details: 'Widget Details',
  };

  ngOnInit() {
    for (let i = 0; i <= Math.random() * 10; i++) {
      this.list.push('lorem ipsum');
    }
  }
}
