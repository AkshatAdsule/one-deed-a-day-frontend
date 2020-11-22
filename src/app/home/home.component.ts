import { Deed } from './../../Types';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public deeds: Deed[];

  constructor(private apiService: ApiService) {}

  onClick(id: string): void {
    console.log(id + ' was pressed.');
  }

  ngOnInit(): void {
    this.apiService.getDeeds().subscribe((res) => {
      this.deeds = res;
    });
  }
}
