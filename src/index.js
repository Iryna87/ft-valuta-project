/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import ReactDOM from 'react-dom';
import init from './init.jsx';

const app = async () => {
  const vdom = await init();
  ReactDOM.render(vdom, document.getElementById('valuta'));
};
app();
