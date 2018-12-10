import Aside from '../aside/index';
import Content from '../content/index';
import './main.scss';

class Main extends Component {

  render() {

    return (
      <main className="main">
        <Aside/>
        <Content title="Some title" />
      </main>
    )
  }
};

export default Main;
