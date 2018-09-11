import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { inputHasChanged } from '../../actions';
import { InputWithLabel, Section } from '../Ui';
import { getGridClass } from '../Ui/Grid';


export const SalaryParametersComponent = ({handleSubmit, submitForm, submitting}) => (
  <form onSubmit={handleSubmit(submitForm)} onChange={submitForm} className={getGridClass(6)}>
    <Section header="Income" gridValue={6}>
      <InputWithLabel fieldName="hoursPerYear" labelText="Hours per year" />
      <InputWithLabel fieldName="hourRate" labelText="Hour rate" />
    </Section>

    <Section header="Vacation savings" gridValue={6}>
      <InputWithLabel fieldName="vacationSavingsRate" labelText="(%)" />
      <InputWithLabel fieldName="includeVacationSavings" labelText="Include in calculation" type="checkbox" component="input" />
    </Section>

    <Section header="Subcontractor" gridValue={6}>
      <InputWithLabel fieldName="cut" labelText="Cut (%)" />
    </Section>

    <Section header="Employer Fee" gridValue={6}>
      <InputWithLabel fieldName="employerFeeRate" labelText="(%)" />
      <InputWithLabel fieldName="includeEmployerFee" labelText="Include in calculation" type="checkbox" component="input" />
    </Section>

    <Section header="Pension" gridValue={6}>
      <InputWithLabel fieldName="pensionOneToSixRate" labelText="Percentage (1G-6G)" />
      <InputWithLabel fieldName="includePension" labelText="Include in calculation" type="checkbox" component="input" />
      <InputWithLabel fieldName="pensionSixToTwelveRate" labelText="Percentage (6G-12G)" />
    </Section>

    <button type="submit" disabled={submitting} className={getGridClass(6)}>Calculate earnings</button>
  </form>);

SalaryParametersComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const SalaryParametersForm = reduxForm({form: 'calculations'})(SalaryParametersComponent);

const mapStateToProps = ({calculations: {data}}) => ({
  initialValues: data,

});

const mapDispatchToProps = (dispatch) => ({
  submitForm: (values) => dispatch(inputHasChanged(values)),
});


export const SalaryParameters = connect(mapStateToProps, mapDispatchToProps)(SalaryParametersForm);
export default SalaryParameters;
