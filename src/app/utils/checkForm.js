import { displayNotif } from '../services/notifs';
import { isISBN } from './confirmISBN';

export const checkForm = (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  if (isISBN(isbn) === false) {
    displayNotif(
      "Invalid ISBN. Please make sure it's in ISBN-13 format.",
      'is-danger',
      'form'
    );
  }
};

export default checkForm;
