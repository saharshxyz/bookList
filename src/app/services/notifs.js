import { isISBN } from '../utils/confirmISBN';

const displayNotif = (message, color, location) => {
  const notif = document.createElement('div');
  notif.classList.add("notification");
  notif.classList.add(color);
  notif.innerHTML(message);

if (location == "form") {
const form = document.getElementById('form')
form.appendChild(notif);
} else if (location == "table") {
const table = document.getElementById('book-table');
table.appendChild(notif);
}
};


if (isISBN(ISBN)) {
} else {
}
