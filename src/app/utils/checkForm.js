import { displayNotif } from '../services/notifs';
import { isISBN } from './confirmISBN';

export const checkForm = (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  if (title === '' || author === '' || isbn === '') {
    displayNotif('Please fill out all fields', 'is-danger', 'form');
  } else if (!(((!title === '') || (!author === '')) && (isISBN(isbn) === false))) {
    
displayNotif(
  'Please fill out all fields and input a valid ISBN-13',
  'is-danger',
  'form'
);
  }
};

export default checkForm;
