import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ui',
  template: `
    <p>
      awesome ui works!!!!
    </p>
  `,
  styles: [
  ]
})
export class UiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
