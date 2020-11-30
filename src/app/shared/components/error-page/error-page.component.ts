import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html'
})
export class ErrorPageComponent implements OnInit{

  message: string = null;

  constructor(
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit() {
    this.message = this.activatedRoute.snapshot.data['message'];
  }

}