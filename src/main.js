import 'bootstrap';
import MenuSpy from 'menuspy/dist/menuspy.js';
import 'simplycountdown.js/dist/simplyCountdown.min.js';
import '../scss/style.scss';

const lavalampElm = document.querySelector('.lavalamp');

const positionLavalamp = function (activeElm) {
  if (!lavalampElm || !activeElm?.elm) {
    return;
  }

  lavalampElm.style.width = `${activeElm.elm.offsetWidth}px`;
  lavalampElm.style.left = `${activeElm.elm.offsetLeft}px`;
};

const elm = document.querySelector('#main-header');
if (elm) {
  new MenuSpy(elm, {
    callback: positionLavalamp,
  });

  const activeItem = elm.querySelector('li.active');
  if (activeItem) {
    positionLavalamp({ elm: activeItem });
  }
}

const d = new Date(2024, 6, 22, 12, 0);

if (typeof simplyCountdown === 'function') {
  simplyCountdown('.simply-countdown-one', {
    year: d.getFullYear(),
    month: d.getMonth(),
    day: d.getDate(),
    hours: d.getHours(),
  });
}
