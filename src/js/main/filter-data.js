import { calendarApiService } from '../api/calendar-api';
import getDateAndCategoryNews from './calander-and-categories-api';
import { createObj, fetchNews } from '../gallery';

const openCalendar = document.querySelector('.open_calendar_svg');
const closeCalendar = document.querySelector('.close_calendar_svg');
const calendarWrepper = document.querySelector('.calendar_wrapper_close');
const minusYear = document.querySelector('.minus_year');
const yearScrin = document.querySelector('.year');
const plusYear = document.querySelector('.plus_year');
const minusMonth = document.querySelector('.minus_month');
const monthScrin = document.querySelector('.month');
const plusMonth = document.querySelector('.plus_month');
const dayUl = document.querySelector('.days_of_month');
const calendarInput = document.querySelector('.calendar_input');
const calendarSvg = document.querySelector('.calendar_svg');
const calendarSearchInput = document.querySelector('.calendar_serch_input');
const notFound = document.querySelector('.empty-res');

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const date = new Date();

let calendarYear = date.getFullYear();
let calendarMonth = date.getMonth();
let calendarLiValue;
let calendarMonthValue;
let calendarYearValue;
let calendarInputValue;

const SELECTED_DATE_KEY = 'selected-date';
const CATEGORIES_KEY = 'selected-categories';
const newsContainer = document.querySelector('.news__container');

renderMarkup();
renderYear();
renderMonth();

openCalendar.addEventListener('click', onOpenCalendar);
closeCalendar.addEventListener('click', onCloseCalendar);
minusYear.addEventListener('click', onMinusYear);
plusYear.addEventListener('click', onPlusYear);
minusMonth.addEventListener('click', onMinusMonth);
plusMonth.addEventListener('click', onPlusMonth);
calendarInput.addEventListener('click', onOpenCalendar);
document.addEventListener('click', e => {
  const withinBoundaries = e.composedPath().includes(calendarSearchInput);

  if (!withinBoundaries) {
    onCloseCalendar();
  }
});

function onOpenCalendar() {
  calendarSvg.classList.add('calendar_svg_is-activ');
  calendarInput.classList.add('calendar_input_is-activ');
  closeCalendar.classList.remove('is-hidden_open-close_svg');
  openCalendar.classList.add('is-hidden_open-close_svg');
  calendarWrepper.classList.add('calendar_wrapper_open');
}

function onCloseCalendar(event) {
  calendarSvg.classList.remove('calendar_svg_is-activ');
  calendarInput.classList.remove('calendar_input_is-activ');
  closeCalendar.classList.add('is-hidden_open-close_svg');
  openCalendar.classList.remove('is-hidden_open-close_svg');
  calendarWrepper.classList.remove('calendar_wrapper_open');
}

function onCloseCalendarClickOutside() {}

function renderYear() {
  yearScrin.textContent = calendarYear;
}

function onMinusYear() {
  renderMarkup();
  calendarYear -= 1;
  renderYear();

  calendarInputValue = calendarInput.value;
  if (calendarInputValue) {
    calendarYearValue = yearScrin.textContent;
    calendarInput.value = `${calendarLiValue}/${calendarMonthValue}/${calendarYearValue}`;
  }
}

function onPlusYear() {
  renderMarkup();
  calendarYear += 1;
  renderYear();
  calendarInputValue = calendarInput.value;
  if (calendarInputValue) {
    calendarYearValue = yearScrin.textContent;
    calendarInput.value = `${calendarLiValue}/${calendarMonthValue}/${calendarYearValue}`;
  }
}

function renderMonth() {
  monthScrin.textContent = months[calendarMonth];
}

function onMinusMonth() {
  if (calendarMonth < 1) {
    calendarYear -= 1;
    calendarMonth = 11;
    renderYear();
    renderMarkup();
    renderMonth();

    calendarInputValue = calendarInput.value;
    if (calendarInputValue) {
      calendarMonthValue = addLeadingZero(calendarMonth + 1);
      calendarYearValue = yearScrin.textContent;
      calendarInput.value = `${calendarLiValue}/${calendarMonthValue}/${calendarYearValue}`;
    }
    return;
  }

  calendarInputValue = calendarInput.value;
  if (calendarInputValue) {
    calendarMonthValue = addLeadingZero(calendarMonth);
    calendarYearValue = yearScrin.textContent;
    calendarInput.value = `${calendarLiValue}/${calendarMonthValue}/${calendarYearValue}`;
  }

  calendarMonth -= 1;
  renderMonth();
  renderMarkup();
}

function onPlusMonth() {
  if (calendarMonth > 10) {
    calendarYear += 1;
    calendarMonth = 1;
    renderMarkup();
    renderYear();
    renderMonth();

    calendarInputValue = calendarInput.value;
    if (calendarInputValue) {
      calendarMonthValue = addLeadingZero(calendarMonth);
      calendarYearValue = yearScrin.textContent;
      calendarInput.value = `${calendarLiValue}/${calendarMonthValue}/${calendarYearValue}`;
    }
    return;
  }

  calendarMonth += 1;
  renderMonth();
  renderMarkup();

  calendarInputValue = calendarInput.value;
  if (calendarInputValue) {
    calendarMonthValue = addLeadingZero(calendarMonth + 1);
    calendarYearValue = yearScrin.textContent;
    calendarInput.value = `${calendarLiValue}/${calendarMonthValue}/${calendarYearValue}`;
  }
}

function renderMarkup() {
  calendarApiService(calendarYear, calendarMonth).then(days => {
    createMarkup(days);
  });
}

function createMarkup(days) {
  let markup = [];
  for (let i = 0; i <= 41; i += 1) {
    if (days[i].type === 'previous') {
      markup.push(`<li class="${days[i].type}-month"></li>`);
    }

    if (days[i].type === 'current') {
      markup.push(`<li class="${days[i].type}-month">${days[i].date}</li>`);
    }

    if (days[i].type === 'next') {
      markup.push(`<li class="${days[i].type}-month"></li>`);
    }
  }

  dayUl.innerHTML = markup.join(' ');
}

dayUl.addEventListener('click', onClick);

function onClick(e) {
  const liClass = e.target;

  if (liClass.classList[0] != 'current-month') {
    return;
  }

  const isActivLi = document.querySelector('.is-active_day');
  if (isActivLi) {
    isActivLi.classList.remove('is-active_day');
  }

  calendarLiValue = addLeadingZero(e.target.textContent);
  calendarMonthValue = addLeadingZero(calendarMonth + 1);
  calendarYearValue = yearScrin.textContent;
  calendarInput.value = `${calendarLiValue}/${calendarMonthValue}/${calendarYearValue}`;
  liClass.classList.add('is-active_day');

  let categoryName = '';
  let selectedDate = '';

  if (calendarInput.value) {
    let date = new Date(calendarInput.value);
    selectedDate =
      addLeadingZero(date.getFullYear()) +
      addLeadingZero(date.getMonth() + 1) +
      addLeadingZero(date.getDate());
    localStorage.setItem(SELECTED_DATE_KEY, selectedDate);
  }

  let selectedCategory = localStorage.getItem(CATEGORIES_KEY);

  if (selectedCategory) {
    categoryName = JSON.parse(selectedCategory).join('');
  }
  getDateAndCategoryNews(selectedDate, categoryName)
    .then(docs => {
      const refCard = document.querySelectorAll('.card');
      refCard.forEach(e => e.remove());

      notFound.classList.add('is-hidden');
      newsContainer.style.display = 'flex';

      return docs.map(article => createObj(article));
    })
    .then(articles => fetchNews(articles, newsContainer))
    .catch(error => {
      notFound.classList.remove('is-hidden');
      newsContainer.style.display = 'none';
      console.log(error);
    });

  onCloseCalendar();
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
