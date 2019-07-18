import React from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Link, Redirect } from 'react-router-dom';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { routes } from 'routes';
import PropTypes from 'prop-types';
import { authenticate as authenticateAction } from 'actions';
import AuthTemplate from 'templates/AuthTemplate';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`;
const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const LoginPage = ({ userID, authenticate }) => (
  <AuthTemplate>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        authenticate(username, password);
      }}
    >
      {({ handleChange, handleBlur, values }) => {
        if (userID) {
          return <Redirect to={routes.home} />;
        }
        return (
          <>
            <Heading>Sign in</Heading>
            <StyledForm>
              <StyledInput type="text" name="username" placeholder="Login" onChange={handleChange} onBlur={handleBlur} value={values.title} />
              <StyledInput type="password" name="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur} value={values.title} />
              <Button activecolor="notes" type="submit">
                Sign in
              </Button>
              <StyledLink to={routes.register}>I want my new account</StyledLink>
            </StyledForm>
          </>
        );
      }}
    </Formik>
  </AuthTemplate>
);
LoginPage.propTypes = {
  userID: PropTypes.string.isRequired,
  authenticate: PropTypes.func.isRequired,
};
const mapStateToProps = ({ userID = null }) => ({
  userID,
});

const mapDispatchToProps = dispatch => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
