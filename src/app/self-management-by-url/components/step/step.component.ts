import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input() step: number = 1;
  @Input() stepText: string = 'Datos personales';

  constructor() { }

  ngOnInit(): void { }

}
