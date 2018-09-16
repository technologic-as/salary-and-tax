import PropTypes from 'prop-types';
import React from 'react';
import { defineMessages, injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { inputHasChanged } from '../actions';
import { Button, Checkbox, FormGroup, InputWithLabel, Section } from './Ui';


const messages = defineMessages({
  header: {id: 'salary.parameters.header', defaultMessage: 'Parameters'},
  turnover: {id: 'salary.parameters.turnover', defaultMessage: 'Turnover'},
  hoursPerYear: {id: 'salary.parameters.hours.per.year', defaultMessage: 'Hours per year'},
  hourRate: {id: 'salary.parameters.hour.rate', defaultMessage: 'Hour rate'},
  subcontractor: {id: 'salary.parameters.subcontractor', defaultMessage: 'Subcontractor'},
  theCut: {id: 'salary.parameters.subcontractor.cut', defaultMessage: 'Cut (%)'},
  employerFee: {id: 'salary.parameters.employer.fee', defaultMessage: 'Employer Fee'},
  percentage: {id: 'salary.parameters.percentage', defaultMessage: '(%)'},
  includeInCalculation: {id: 'salary.parameters.include.in.calculation', defaultMessage: 'Include in calculation'},
  vacationSavings: {id: 'salary.parameters.vacation.savings', defaultMessage: 'Vacation savings'},
  pension: {id: 'salary.parameters.pension', defaultMessage: 'Pension'},
  pensionOneToSix: {id: 'salary.parameters.pension.one.to.six', defaultMessage: '(%) (1G-6G)'},
  pensionSixToTwelve: {id: 'salary.parameters.pension.six.to.twelve', defaultMessage: '(%) (6G-12G)'},
  submit: {id: 'salary.parameters.submit', defaultMessage: 'Calculate salary'},
});

export const SalaryParametersComponent = ({handleSubmit, submitting, intl: {formatMessage}}) => (
  <Section header={formatMessage(messages.header)} expanded>
    <form onSubmit={handleSubmit}>
      <FormGroup header={formatMessage(messages.turnover)}>
        <InputWithLabel name="hoursPerYear" label={formatMessage(messages.hoursPerYear)} />
        <InputWithLabel name="hourRate" label={formatMessage(messages.hourRate)} />
      </FormGroup>

      <FormGroup header={formatMessage(messages.subcontractor)}>
        <InputWithLabel name="cut" label={formatMessage(messages.theCut)} />
      </FormGroup>

      <FormGroup header={formatMessage(messages.employerFee)}>
        <Checkbox name="includeEmployerFee" label={formatMessage(messages.includeInCalculation)} />
        <InputWithLabel name="employerFeeRate" label={formatMessage(messages.percentage)} />
      </FormGroup>

      <FormGroup header={formatMessage(messages.vacationSavings)}>
        <Checkbox name="includeVacationSavings" label={formatMessage(messages.includeInCalculation)} />
        <InputWithLabel name="vacationSavingsRate" label={formatMessage(messages.percentage)} />
      </FormGroup>

      <FormGroup header={formatMessage(messages.pension)}>
        <Checkbox name="includePension" label={formatMessage(messages.includeInCalculation)} />
        <InputWithLabel name="pensionOneToSixRate" label={formatMessage(messages.pensionOneToSix)} />
        <InputWithLabel name="pensionSixToTwelveRate" label={formatMessage(messages.pensionSixToTwelve)} />
      </FormGroup>

      <Button type="submit" disabled={submitting}>{formatMessage(messages.submit)}</Button>
    </form>
  </Section>);

SalaryParametersComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export const SalaryParametersForm = reduxForm({form: 'parameters'})(SalaryParametersComponent);

const mapStateToProps = ({parameters}) => ({
  initialValues: parameters,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => dispatch(inputHasChanged(values)),
});

export const SalaryParameters = connect(mapStateToProps, mapDispatchToProps)(injectIntl(SalaryParametersForm));
export default SalaryParameters;
