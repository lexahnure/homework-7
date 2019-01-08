import ReactDom from 'react-dom';
import AppComp from './appComponent';

import './reset.scss';
import './styles.scss';

const Wrapper = (
  <>
    <AppComp/>
  </>
)

ReactDom.render( Wrapper, document.getElementById('app') );