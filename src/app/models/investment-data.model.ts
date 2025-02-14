export interface InvestorData {
  investmentAmount: number;
  expectedReturn: number;
  timePeriod: number;
  investmentType: 'sip' | 'lumpsum';
}
