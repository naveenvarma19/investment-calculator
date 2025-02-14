import { Injectable } from '@angular/core';
import { InvestorData } from '../models/investment-data.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  investmentTable: any[] = [];

  constructor() {}

  calculateInvestment(investmentData: InvestorData) {
    this.investmentTable.splice(0, this.investmentTable.length);

    const rate = investmentData.expectedReturn / 100;
    let cumulativeInvestment = 0;
    let cumulativeTotal = 0;

    for (let year = 1; year <= investmentData.timePeriod; year++) {
      const investment =
        investmentData.investmentType === 'sip'
          ? investmentData.investmentAmount * 12 * year
          : investmentData.investmentAmount;

      const returns = investment * Math.pow(1 + rate, year) - investment;
      const totalForYear = investment + returns;

      cumulativeInvestment += investment;
      cumulativeTotal += totalForYear;

      this.investmentTable.push({
        year: year,
        annualInvestment: investment,
        annualReturns: returns,
        totalInvestedToDate: cumulativeInvestment,
        cumulativeTotal: cumulativeTotal,
      });
    }
  }

  getInvestmentDetails() {
    return this.investmentTable;
  }
}
