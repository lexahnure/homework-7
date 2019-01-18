import Loader from '../loader';

import './main.scss';

const Main = ({ loading, children }) => (
  <main className="wrapper">
    <div className="main">
      { loading ? <Loader /> : children }
    </div>
  </main>
);

export default Main;
