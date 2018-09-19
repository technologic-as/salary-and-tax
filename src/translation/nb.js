import { taxConstants } from '../calculations/tax';


const turnover = 'Omsetning';
const income = 'Brutto inntekt';
const totalTax = 'Skatt sammenlagt';
const afterTax = 'Netto inntekt';
const employerFee = 'Arbeidsgiveravgift';
const percentage = '(%)';
const vacationSavings = 'Feriepenger';
const pension = 'Pensjon';
const commonIncome = 'Inntektsskatt-grunnlag';
const cut = 'Andel til overleverandør';
const taxStep = 'Trinnskatt trinn';

export default {
  'salary.calculations.header': 'Inntekstberegninger',
  'salary.calculations.turnover': turnover,
  'salary.calculations.subcontractor.cut': cut,
  'salary.calculations.employer.fee': employerFee,
  'salary.calculations.vacation.savings': vacationSavings,
  'salary.calculations.pension': pension,
  'salary.calculations.income': income,

  'salary.parameters.header': 'Parametere',
  'salary.parameters.turnover': turnover,
  'salary.parameters.hours.per.year': 'Timer per år',
  'salary.parameters.hour.rate': 'Timepris',
  'salary.parameters.subcontractor': 'Overleverandør',
  'salary.parameters.subcontractor.cut': `Andel ${percentage}`,
  'salary.parameters.employer.fee': employerFee,
  'salary.parameters.percentage': percentage,
  'salary.parameters.include.in.calculation': 'Inkluder i utregningen',
  'salary.parameters.vacation.savings': vacationSavings,
  'salary.parameters.pension': pension,
  'salary.parameters.pension.step1': `${percentage} (1G-7.1G)`,
  'salary.parameters.pension.step2': `${percentage} (7.1G-12G)`,
  'salary.parameters.submit': 'Beregn',
  'salary.parameters.locale': 'Språk',

  'summary.header': 'Sammendrag',
  'summary.turnover': turnover,
  'summary.total.cuts': `${cut}, ${`${employerFee}, ${vacationSavings}, ${pension}`.toLocaleLowerCase()}`,
  'summary.total.tax': totalTax,

  'tax.calculations.header': 'Skatteberegninger',
  'tax.calculations.income': income,
  'tax.calculations.minimum.deduction': `Minstefradrag (${taxConstants.minimumDeduction.rate}%)`,
  'tax.calculations.common.income': commonIncome,
  'tax.calculations.income.tax': `Inntektsskatt (${taxConstants.incomeTaxRate}%)`,
  'tax.calculations.social.security.deduction': `Trygdeavgift (${taxConstants.socialSecurityDeductionRate}%)`,
  'tax.calculations.step.1': `${taxStep} 1 (${taxConstants.step1.rate}%)`,
  'tax.calculations.step.2': `${taxStep} 2 (${taxConstants.step2.rate}%)`,
  'tax.calculations.step.3': `${taxStep} 3 (${taxConstants.step3.rate}%)`,
  'tax.calculations.step.4': `${taxStep} 4 (${taxConstants.step4.rate}%)`,
  'tax.calculations.after.tax': afterTax,
}
