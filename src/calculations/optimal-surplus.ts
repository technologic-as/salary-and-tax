import { calculateG } from './calculate-g';
import { calculate } from './index';
import { defaultSalaryParameters } from './salary';
import { ParamProps } from '../constants';

export type OptimalSurplus = {
  total: number;
  surplus: any;
  salaryBasis: number;
  dividends: number;
  netIncome: number;
  grossIncome: number;
  salaryAboveSevenG: boolean;
};

export const optimalSurplus = (parameters: ParamProps = defaultSalaryParameters): OptimalSurplus[] => {
  const initialCalculation = calculate(parameters);
  const companyIncome = initialCalculation.salary.companyIncome;
  const increments = parameters.graph.increments;
  const steps = Math.round(companyIncome / increments);

  const sevenG = calculateG(7.1);

  return Array.from(Array(steps).keys())
    .map((i: number) => i * increments)
    .map((amount: number) =>
      calculate({
        ...parameters,
        surplus: {
          amount,
          include: true,
        },
      })
    )
    .map(
      ({
        afterTotal,
        dividends: { afterDividendsTax, surplus },
        salary: { withoutPension, withoutSurplus },
        tax: { afterTax },
      }) => ({
        total: afterTotal,
        surplus,
        dividends: afterDividendsTax,
        grossIncome: withoutPension,
        netIncome: afterTax,
        salaryBasis: withoutSurplus,
        salaryAboveSevenG: withoutPension > sevenG,
      })
    );
};

export default optimalSurplus;
