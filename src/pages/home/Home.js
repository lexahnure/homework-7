import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './home.scss';

class Home extends React.PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    // eslint-disable-next-line react/require-default-props
    info: PropTypes.object,
  }

  render() {
    const {
      user = {},
      info,
    } = this.props;

    return (
      <>
        <div className="helloBoard">
          {user && <h2>Hello, {user.firstName}</h2>}
          {
            info && (
            <>
              <p>You have {info.categories} categories ({info.publishedCategories} published)</p>
              <p>You have {info.products} products</p>
              <a href="/">Go to categories</a>
            </>
            )
          }
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ info, user }) => ({ info, user });

export default connect(mapStateToProps)(Home);
