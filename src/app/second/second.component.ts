import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}