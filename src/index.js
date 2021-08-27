import ReactDOM from 'react-dom';
import init from './init.jsx';

const app = async () => {
  const vdom = await init();
  ReactDOM.render(vdom, document.querySelector('#valuta'));
};
app();
