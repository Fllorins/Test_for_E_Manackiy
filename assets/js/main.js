/* burger */
const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1); //
const body = document.body;

hamb.addEventListener('click', hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle('open');
  hamb.classList.toggle('active');
  body.classList.toggle('noscroll');
  renderPopup();
}
function renderPopup() {
  popup.appendChild(menu);
}
const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener('click', closeOnClick);
});

function closeOnClick() {
  popup.classList.remove('open');
  hamb.classList.remove('active');
  body.classList.remove('noscroll');
}

//month/day btn

// convert
const convertAria = document.querySelector('.switch-items');
let cash;
let price;
const percent = 0.03;

//month/day btn

convertAria.querySelectorAll('.switch-item').forEach((priceBtnDev) => {
  priceBtnDev.querySelectorAll('.data-switch').forEach((priceBtn) => {
    priceBtn.querySelectorAll('.data-switch__btn').forEach((item) => {
      item.addEventListener('click', () => {
        if (item.classList.contains('switch-month')) {
          item.classList.remove('switch-month');
          item.classList.add('switch-day');
          forDay();
        } else {
          item.classList.remove('switch-day');
          item.classList.add('switch-month');
          forMonth();
        }
      });
    });
  });
});

function forDay() {
  if (convertAria) {
    convertAria.querySelectorAll('.switch-item').forEach((item) => {
      item.querySelectorAll('.switch-item__price').forEach((i) => {
        i.querySelectorAll('.price-switch').forEach((mDay) => {
          let dayCash = 0;
          dayCash = Math.round(mDay.getAttribute('data-value') * percent);
          mDay.innerHTML = +dayCash;
          price = dayCash;
        });
        i.querySelectorAll('.data-switch__btn').forEach((j) => {
          j.innerHTML = '/Days';
        });
      });
    });
  }
}
function forMonth() {
  if (convertAria) {
    convertAria.querySelectorAll('.switch-item').forEach((item) => {
      item.querySelectorAll('.switch-item__price').forEach((i) => {
        i.querySelectorAll('.price-switch').forEach((dMonth) => {
          let dayCash = dMonth.getAttribute('data-value');
          dMonth.innerHTML = +dayCash;
          print = dayCash;
        });
        i.querySelectorAll('.data-switch__btn').forEach((j) => {
          j.innerHTML = '/Months';
        });
      });
    });
  }
}

// convert USD
let dol = 100;
convertAria.querySelectorAll('.switch-item').forEach((priceBtnDev) => {
  priceBtnDev.querySelectorAll('.button-switch').forEach((dolBtn) => {
    dolBtn.querySelectorAll('.button-switch__btn').forEach((item) => {
      item.addEventListener('click', () => {
        if (item.classList.contains('ru')) {
          item.classList.remove('ru');
          item.classList.add('usd');
          forUsd();
        } else {
          item.classList.remove('usd');
          item.classList.add('ru');
          forMonth();
          forRub();
        }
      });
    });
  });
});

function forUsd() {
  if (convertAria) {
    convertAria.querySelectorAll('.switch-item').forEach((item) => {
      item.querySelectorAll('.switch-item__price').forEach((i) => {
        i.querySelectorAll('.price-switch').forEach((mDay) => {
          let dayCash = 0;
          dayCash = Math.round(mDay.getAttribute('data-value') / dol) + 0.1;
          mDay.innerHTML = +dayCash;
        });
        i.querySelectorAll('.button-switch__btn').forEach((j) => {
          j.innerHTML = '&#8381;';
        });
      });
    });
  }
}
function forRub() {
  if (convertAria) {
    convertAria.querySelectorAll('.switch-item').forEach((item) => {
      item.querySelectorAll('.switch-item__price').forEach((i) => {
        i.querySelectorAll('.button-switch__btn').forEach((j) => {
          j.innerHTML = '&#65284';
        });
      });
    });
  }
}
// animation

const blocks = Array.from(convertAria.querySelectorAll('.switch-item'));

function callBlock(i) {
  if (i <= blocks.length - 1) {
    blocks[i].style.opacity = 1;
    setTimeout(() => {
      callBlock(++i);
    }, 2000);
  }
}
window.addEventListener('load', () => {
  setTimeout(callBlock(0));
});