import './styles/main.scss';

import { checkForm } from './app/utils/checkForm';

const run = () => {
  document.getElementById('submit').addEventListener('click', checkForm);
};

run();
