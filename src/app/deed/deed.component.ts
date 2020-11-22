import { Deed } from './../../Types';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deed',
  templateUrl: './deed.component.html',
  styleUrls: ['./deed.component.css'],
})
export class DeedComponent implements OnInit {
  @Input() deed: Deed;
  @Input() onCLick: (id: string) => void;
  constructor() {}
  ngOnInit(): void {}
}
