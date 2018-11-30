import Aside from '../aside/index';
import Content from '../content/index';
import './main.scss';

const Main = () => (
    <main className="main">
        <Aside/>
        <Content/>
    </main>
);

export default Main;