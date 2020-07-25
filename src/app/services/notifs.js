import { isISBN } from '../utils/confirmISBN';

const displayNotif = (message, color, location) => {
  const notif = document.createElement('div');
  notif.classList.add('notification');
  notif.classList.add(color);
  notif.innerHTML(message);

  if (location == 'form') {
    const form = document.getElementById('form');
    form.appendChild(notif);
  } else if (location == 'table') {
    const table = document.getElementById('book-table');
    table.appendChild(notif);
  }

  setTimeout(() => {
    notif.remove();
  }, 5000);
};

if (isISBN(ISBN) == false) {
  displayNotif(
    "Invalid ISBN. Please make sure it's in ISBN-13 format.",
    'is-danger',
    'form'
  );
}
