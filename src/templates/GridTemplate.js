import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import withContext from 'hoc/withContext';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 65px;
`;
const StyledPageHeader = styled.div`
  margin: 25px 0 25px;
`;
const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
  text-transform: capitalize;
`;
const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;
const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  border-radius: 50px;
  background-size: 35%;
`;
const GridTemplate = ({ children, pageContext }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledPageHeader>
        <Input search placeholder="SEARCH" />
        <StyledHeading big as="h1">
          {pageContext}
        </StyledHeading>
        <StyledParagraph>11 {pageContext}</StyledParagraph>
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
      <StyledButtonIcon icon={plusIcon} activecolor={pageContext} />
      <NewItemBar />
    </StyledWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};
export default withContext(GridTemplate);
