export const displayNotif = (message, color, location) => {
  const notif = document.createElement('div');
  notif.classList.add('notification');
  notif.classList.add(color);
  notif.innerHTML = message;

  if (location === 'form') {
    const form = document.getElementById('form');
    notif.insertAdjacentElement('afterbegin', form);
    console.log('testing111');
  }
  // else if (location === 'table') {
  //   const table = document.getElementById('book-table');
  // }

  setTimeout(() => {
    notif.remove();
  }, 5000);
};

export default displayNotif;
