import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { InvestorDataComponent } from './components/investor-data/investor-data.component';
import { InvestmentDataComponent } from './components/investment-data/investment-data.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, InvestorDataComponent, InvestmentDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
