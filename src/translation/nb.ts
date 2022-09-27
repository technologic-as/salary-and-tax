import { taxConstants } from '../constants';

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
const surplus = 'Overskudd';
const dividends = 'Utbytte';

const unit = 'NOK';

const nb = {
  'salary.calculations.header': 'Inntekstberegninger',
  'salary.calculations.turnover': turnover,
  'salary.calculations.subcontractor.cut': cut,
  'salary.calculations.surplus': surplus,
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
  'salary.parameters.surplus': surplus,
  'salary.parameters.surplus.amount': 'Beløp',
  'salary.parameters.submit': 'Beregn',
  'salary.parameters.locale': 'Språk',

  'surplus.graph.header': 'Inntekt vs. overskudd',
  'surplus.graph.chart.header': 'Inntekt vs. overskudd',
  'surplus.graph.x.axis.title': surplus,
  'surplus.graph.y.axis.title': unit,

  'surplus.series.income.net': afterTax,
  'surplus.series.income.gross': income,
  'surplus.series.dividends': dividends,
  'surplus.series.surplus': surplus,
  'surplus.series.total': 'Sammenlagt',
  'surplus.series.gross.seven.g': '7.1G brutto inntekt',
  'surplus.series.max.total': 'Maksimal inntjening',
  'surplus.suffix': unit,

  'summary.header': 'Sammendrag',
  'summary.turnover': turnover,
  'summary.total.cuts': `${cut}, ${`${surplus}, ${employerFee}, ${vacationSavings}, ${pension}`.toLocaleLowerCase()}`,
  'summary.total.tax': totalTax,
  'summary.income': `${afterTax} første år`,
  'summary.total.income': `Total inntjening første år (uten feriepenger)`,
  'summary.dividends': dividends,

  'tax.calculations.header': 'Skatteberegninger',
  'tax.calculations.income': income,
  'tax.calculations.income.header': 'Inntekt',
  'tax.calculations.minimum.deduction': `Minstefradrag (${taxConstants.minimumDeduction.rate}%)`,
  'tax.calculations.personal.allowance': 'Personfradrag',
  'tax.calculations.common.income': commonIncome,
  'tax.calculations.common.income.header': commonIncome,
  'tax.calculations.income.tax': `Inntektsskatt (${taxConstants.incomeTax.rate}%)`,
  'tax.calculations.social.security.deduction': `Trygdeavgift (${taxConstants.socialSecurityDeduction.rate}%)`,
  'tax.calculations.step.1': `${taxStep} 1 (${taxConstants.step1.rate}%)`,
  'tax.calculations.step.2': `${taxStep} 2 (${taxConstants.step2.rate}%)`,
  'tax.calculations.step.3': `${taxStep} 3 (${taxConstants.step3.rate}%)`,
  'tax.calculations.step.4': `${taxStep} 4 (${taxConstants.step4.rate}%)`,
  'tax.calculations.step.5': `${taxStep} 5 (${taxConstants.step5.rate}%)`,
  'tax.calculations.after.tax': afterTax,
  'tax.calculations.surplus.header': 'Overskudd',
  'tax.calculations.surplus.amount': 'Selskapets overskudd',
  'tax.calculations.surplus.tax': `Skatt på overskudd (${taxConstants.surplus.rate}%)`,
  'tax.calculations.dividends.tax': 'Skatt på utbytte',
  'tax.calculations.dividends.amount': dividends,
};

export default nb;
