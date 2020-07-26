import { displayNotif } from '../services/notifs';
import { isISBN } from './confirmISBN';

export const checkForm = () => {
  // const title = document.getElementById("title").innerHTML;
  // const author= document.getElementById("author").innerHTML;
  const isbn = document.getElementById('isbn').innerHTML;

  if (isISBN(isbn) === false) {
    displayNotif(
      "Invalid ISBN. Please make sure it's in ISBN-13 format.",
      'is-danger',
      'form'
    );
  }
};

export default checkForm;
