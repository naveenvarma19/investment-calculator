import { CurrencyPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { InvestmentService } from '../../services/investment.service';

@Component({
  selector: 'app-investment-data',
  imports: [CurrencyPipe],
  templateUrl: './investment-data.component.html',
  styleUrl: './investment-data.component.scss',
})
export class InvestmentDataComponent {
  investmentTable = signal<any>(undefined);
  constructor(public investmentService: InvestmentService) {
    this.investmentTable.set(this.investmentService.getInvestmentDetails());
    console.log(this.investmentService.getInvestmentDetails());
  }
}
