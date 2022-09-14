import { Component, OnInit } from '@angular/core';
import Step from 'src/app/self-management/interfaces/step.interface';
import SelfManagement from 'src/app/self-management/interfaces/self-management.interface';

@Component({
  selector: 'app-self-management',
  templateUrl: './self-management.component.html',
  styleUrls: ['./self-management.component.scss']
})
export class SelfManagementComponent implements OnInit {

  private _steps: Step[] = [
    { step: 1, stepText: 'Datos personales' },
    { step: 2, stepText: 'Documentos' },
    { step: 3, stepText: 'Identificación' },
    { step: 4, stepText: 'Ingresos' },
    { step: 5, stepText: 'Firmas' },
  ];
  private _selfManagement: SelfManagement = JSON.parse(localStorage.getItem('self-management')!);
  private _stepSelected: number = this._selfManagement?.stepSelected ?? 1;
  private _lastStep: number = this._selfManagement?.lastStep ?? 1;


  constructor() { }

  ngOnInit(): void { }

  public getClassStep(step: number): string {
    if (step === this._stepSelected) {
      return ' step-active';
    } else if (step <= this._lastStep) {
      return ' step-success';
    }
    return '';
  }

  public handleOnChangeLocalStroge(selfManagement: SelfManagement): void {
    localStorage.setItem('self-management', JSON.stringify({ ...this._selfManagement, ...selfManagement }));
    this.updateDataComponents()
  }

  public handleOnClickStep(step: number) {
    if (this._lastStep >= step) {
      localStorage.setItem('self-management', JSON.stringify({ ...this._selfManagement, stepSelected: step }));
      this.updateDataComponents();
    }
  }

  private updateDataComponents(): void {
    this._selfManagement = JSON.parse(localStorage.getItem('self-management')!);
    this._stepSelected = this._selfManagement?.stepSelected ?? 1;
    this._lastStep = this._selfManagement?.lastStep ?? 1;
  }

  public get steps(): Step[] {
    return [...this._steps];
  }

  public get stepSelected(): number {
    return this._stepSelected;
  }

  public get lastStep(): number {
    return this._lastStep;
  }

  public get selfManagement(): SelfManagement {
    return { ...this._selfManagement };
  }
}

