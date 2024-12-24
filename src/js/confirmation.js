import CoursesService from './core/services/CoursesService';
import { showSpinner, hideSpinner } from './utils/spinner';

document.addEventListener('DOMContentLoaded', () => {
  const timePickOptions = document.querySelectorAll('.confirmation__card-time-item');

  timePickOptions.forEach(option => {
    option.addEventListener('click', () => {
      timePickOptions.forEach(option =>
        option.classList.remove('confirmation__card-time-item_active'),
      );
      option.classList.add('confirmation__card-time-item_active');
    });
  });

  async function loadCourseInfo() {
    try {
      const cardContainer = document.querySelector('.confirmation__card_course');
      const confirmBtn = document.querySelector('.confirmation__button');

      const params = new URLSearchParams(window.location.search);
      const courseId = params.get('courseId');
      showSpinner(cardContainer);

      const course = await CoursesService.getCourseById(courseId);

      cardContainer.innerHTML = '';
      cardContainer.innerHTML = `
          <div class="confirmation__card-title heading">${course.name}</div>
          <div class="confirmation__card-img">
            <img src="${course.img}" alt="course">
          </div>
        `;

      confirmBtn.setAttribute('href', `/success/index.html?courseId=${course.id}`);
      hideSpinner();
    } catch (error) {
      console.error('Error fetching course info', error);
      hideSpinner();
    }
  }

  loadCourseInfo();
});
