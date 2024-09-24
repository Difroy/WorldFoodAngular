import { Component, Input } from '@angular/core';
import { Worker } from '../model/Worker';
import { NgIf } from '@angular/common';


@Component
({
  selector: 'app-worker',
  standalone: true,
  imports: [NgIf],
  templateUrl: './worker.component.html',
  styleUrl: './worker.component.css'
})
export class WorkerComponent {



  @Input()
  worker!:Worker

  fullview:boolean = false;

  toggleDetail():void
  {

    this.fullview = !this.fullview;

  }
  






}
