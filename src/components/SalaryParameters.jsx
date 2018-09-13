import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { inputHasChanged } from '../actions';
import { Button, Checkbox, FormGroup, InputWithLabel, Section } from './Ui';


export const SalaryParametersComponent = ({handleSubmit, submitting}) => (
  <Section header="Salary input">
    <form onSubmit={handleSubmit}>
      <FormGroup header="Turnover">
        <InputWithLabel name="hoursPerYear" label="Hours per year" />
        <InputWithLabel name="hourRate" label="Hour rate" />
      </FormGroup>

      <FormGroup header="Subcontractor">
        <InputWithLabel name="cut" label="Cut (%)" />
      </FormGroup>

      <FormGroup header="Employer Fee">
        <Checkbox name="includeEmployerFee" label="Include in calculation" />
        <InputWithLabel name="employerFeeRate" label="(%)" />
      </FormGroup>

      <FormGroup header="Vacation savings">
        <Checkbox name="includeVacationSavings" label="Include in calculation" />
        <InputWithLabel name="vacationSavingsRate" label="(%)" />
      </FormGroup>

      <FormGroup header="Pension">
        <Checkbox name="includePension" label="Include in calculation" />
        <InputWithLabel name="pensionOneToSixRate" label="Percentage (1G-6G)" />
        <InputWithLabel name="pensionSixToTwelveRate" label="Percentage (6G-12G)" />
      </FormGroup>

      <Button type="submit" disabled={submitting}>Calculate earnings</Button>
    </form>
  </Section>);

SalaryParametersComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export const SalaryParametersForm = reduxForm({form: 'calculations'})(SalaryParametersComponent);

const mapStateToProps = ({calculations: {data}}) => ({
  initialValues: data,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => dispatch(inputHasChanged(values)),
});

export const SalaryParameters = connect(mapStateToProps, mapDispatchToProps)(SalaryParametersForm);
export default SalaryParameters;
