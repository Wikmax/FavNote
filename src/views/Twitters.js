import React, { Component } from 'react';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchItems } from 'actions';
import GridTemplate from '../templates/GridTemplate';

class Twitters extends Component {
  componentDidMount() {
    this.props.fetchTwitters();
  }

  render() {
    const { twitters } = this.props;

    return (
      <GridTemplate pageType="twitters">
        {twitters.map(({ title, content, twitterName, created, _id: id }) => (
          <Card id={id} cardType="twitters" title={title} content={content} twitterName={twitterName} created={created} key={id} />
        ))}
      </GridTemplate>
    );
  }
}
Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      fetchTwitters: PropTypes.func.isRequired,
      id: PropTypes.number.isRequired,
      cardType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};
Twitters.defaultProps = {
  twitters: [],
};
const mapDispatchToProps = dispatch => ({
  fetchTwitters: () => dispatch(fetchItems('twitters')),
});
const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Twitters);
