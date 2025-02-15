import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../../services/investment.service';
import { InvestorData } from '../../models/investment-data.model';
@Component({
  selector: 'app-investor-data',
  imports: [FormsModule],
  templateUrl: './investor-data.component.html',
  styleUrl: './investor-data.component.scss',
})
export class InvestorDataComponent {
  investmentData = signal<InvestorData>({
    investmentType: 'sip',
  } as InvestorData);
  showError = signal(false);

  private investmentService = inject(InvestmentService);

  onSubmit() {
    if (
      this.investmentData().investmentAmount &&
      this.investmentData().expectedReturn &&
      this.investmentData().timePeriod
    ) {
      this.investmentService.calculateInvestment(this.investmentData());
      this.investmentData.set({} as InvestorData);
    } else {
      this.showError.set(true);
    }
  }
}
