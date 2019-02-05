import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import PropTypes from 'prop-types';
import React from 'react';
import { defineMessages, injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { inputHasChanged } from '../actions';
import {
  Button,
  Checkbox,
  FormGroup,
  InputWithLabel,
  RadioGroup,
  Section,
} from './Ui';

const messages = defineMessages({
  header: { id: 'salary.parameters.header', defaultMessage: 'Parameters' },
  turnover: { id: 'salary.parameters.turnover', defaultMessage: 'Turnover' },
  hoursPerYear: {
    id: 'salary.parameters.hours.per.year',
    defaultMessage: 'Hours per year',
  },
  hourRate: { id: 'salary.parameters.hour.rate', defaultMessage: 'Hour rate' },
  subcontractor: {
    id: 'salary.parameters.subcontractor',
    defaultMessage: 'Subcontractor',
  },
  theCut: {
    id: 'salary.parameters.subcontractor.cut',
    defaultMessage: 'Cut (%)',
  },
  employerFee: {
    id: 'salary.parameters.employer.fee',
    defaultMessage: 'Employer Fee',
  },
  percentage: { id: 'salary.parameters.percentage', defaultMessage: '(%)' },
  includeInCalculation: {
    id: 'salary.parameters.include.in.calculation',
    defaultMessage: 'Include in calculation',
  },
  vacationSavings: {
    id: 'salary.parameters.vacation.savings',
    defaultMessage: 'Vacation savings',
  },
  pension: { id: 'salary.parameters.pension', defaultMessage: 'Pension' },
  pensionStep1: {
    id: 'salary.parameters.pension.step1',
    defaultMessage: '(%) (1G-7.1G)',
  },
  pensionStep2: {
    id: 'salary.parameters.pension.step2',
    defaultMessage: '(%) (7.1G-12G)',
  },
  surplus: { id: 'salary.parameters.surplus', defaultMessage: 'Surplus' },
  surplusAmount: {
    id: 'salary.parameters.surplus.amount',
    defaultMessage: 'Amount',
  },
  locale: { id: 'salary.parameters.locale', defaultMessage: 'Language' },
  submit: {
    id: 'salary.parameters.submit',
    defaultMessage: 'Calculate salary',
  },
});

export const SalaryParametersComponent = ({
  handleSubmit,
  submitting,
  intl: { formatMessage },
  locales,
}) => (
  <Section header={formatMessage(messages.header)} expanded>
    <form onSubmit={handleSubmit}>
      <FormGroup header={formatMessage(messages.turnover)}>
        <InputWithLabel
          name="hoursPerYear"
          label={formatMessage(messages.hoursPerYear)}
        />
        <InputWithLabel
          name="hourRate"
          label={formatMessage(messages.hourRate)}
        />
      </FormGroup>

      <FormGroup header={formatMessage(messages.subcontractor)}>
        <InputWithLabel name="cut" label={formatMessage(messages.theCut)} />
      </FormGroup>

      <FormGroup header={formatMessage(messages.employerFee)}>
        <Checkbox
          name="employerFee.include"
          label={formatMessage(messages.includeInCalculation)}
        />
        <InputWithLabel
          name="employerFee.rate"
          label={formatMessage(messages.percentage)}
        />
      </FormGroup>

      <FormGroup header={formatMessage(messages.vacationSavings)}>
        <Checkbox
          name="vacationSavings.include"
          label={formatMessage(messages.includeInCalculation)}
        />
        <InputWithLabel
          name="vacationSavings.rate"
          label={formatMessage(messages.percentage)}
        />
      </FormGroup>

      <FormGroup header={formatMessage(messages.pension)}>
        <Checkbox
          name="pension.include"
          label={formatMessage(messages.includeInCalculation)}
        />
        <InputWithLabel
          name="pension.step1.rate"
          label={formatMessage(messages.pensionStep1)}
        />
        <InputWithLabel
          name="pension.step2.rate"
          label={formatMessage(messages.pensionStep2)}
        />
      </FormGroup>

      <FormGroup header={formatMessage(messages.surplus)}>
        <Checkbox
          name="surplus.include"
          label={formatMessage(messages.includeInCalculation)}
        />
        <InputWithLabel
          name="surplus.amount"
          label={formatMessage(messages.surplusAmount)}
        />
      </FormGroup>

      <FormGroup header={formatMessage(messages.locale)}>
        <RadioGroup name="locale" label={formatMessage(messages.locale)}>
          {locales.map(locale => (
            <FormControlLabel
              value={locale.value}
              control={<Radio />}
              label={locale.label}
              key={locale.value}
            />
          ))}
        </RadioGroup>
      </FormGroup>

      <Button type="submit" disabled={submitting}>
        {formatMessage(messages.submit)}
      </Button>
    </form>
  </Section>
);

SalaryParametersComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
  onSubmit: PropTypes.func.isRequired,
  locales: PropTypes.arrayOf(
    PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })
  ).isRequired,
};

export const form = 'parameters';
export const SalaryParametersForm = reduxForm({ form })(
  SalaryParametersComponent
);

const mapStateToProps = ({ parameters, intl: { locales } }) => ({
  initialValues: parameters,
  destroyOnUnmount: false,
  locales,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(inputHasChanged(values)),
});

export const SalaryParameters = connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(SalaryParametersForm));
export default SalaryParameters;
