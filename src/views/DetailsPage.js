import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import withContext from 'hoc/withContext';
import { routes } from '../routes';

class DetailsPage extends Component {
  state = {
    pageContext: 'notes',
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.twitter:
        this.setState({ pageContext: 'twitters' });
        break;
      case routes.note:
        this.setState({ pageContext: 'notes' });
        break;
      case routes.article:
        this.setState({ pageContext: 'articles' });
        break;
      default:
        // eslint-disable-next-line no-console
        console.log('Something went wrong with matching paths');
    }
  }

  render() {
    const dummyArticle = {
      id: 1,
      title: 'Wake me up when Vue ends',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus vel. Amet volutpat consequat mauris nunc congue. Sodales ut eu sem integer vitae justo eget magna. Aliquet nec ullamcorper sit amet. Varius quam quisque id diam vel quam. Amet est placerat in egestas erat imperdiet. Risus quis varius quam quisque id diam vel. Quis vel eros donec ac. Eget dolor morbi non arcu risus quis varius quam quisque.Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Adipiscing elit ut aliquam purus sit amet. Eu volutpat odio facilisis mauris. Arcu dictum varius duis at consectetur lorem donec massa sapien. Justo eget magna fermentum iaculis eu non diam phasellus. Amet mauris commodo quis imperdiet massa tincidunt. Nisl vel pretium lectus quam id leo in vitae turpis. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Sed turpis tincidunt id aliquet. Massa vitae tortor condimentum lacinia quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Mollis nunc sed id semper risus in hendrerit. Dui id ornare arcu odio ut sem nulla. Aliquam sem et tortor consequat id porta nibh venenatis. Viverra justo nec ultrices dui sapien eget mi proin. Varius sit amet mattis vulputate. Ut enim blandit volutpat maecenas. Commodo odio aenean sed adipiscing diam donec adipiscing. Nibh nisl condimentum id venenatis. Enim praesent elementum facilisis leo.',
      twitterName: 'hello_roman',
      articleUrl: 'https://youtube.com/helloroman',
      created: '6 day',
    };

    const { pageContext } = this.state;

    return (
      <DetailsTemplate
        pageContext={pageContext}
        title={dummyArticle.title}
        created={dummyArticle.created}
        content={dummyArticle.content}
        articleUrl={dummyArticle.articleUrl}
        twitterName={dummyArticle.twitterName}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default withContext(DetailsPage);
