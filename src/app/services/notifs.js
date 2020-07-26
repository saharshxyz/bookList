export const displayNotif = (message, color, location) => {
  const notif = document.createElement('div');
  notif.classList.add('notification');
  notif.classList.add(color);
  notif.innerHTML = message;

    document.getElementById(location).insertAdjacentElement('afterbegin', notif);
    console.log('testing111');

  setTimeout(() => {
    notif.remove();
  }, 5000);
};

export default displayNotif;
