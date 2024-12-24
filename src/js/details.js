import CoursesService from './core/services/CoursesService';
import { showSpinner, hideSpinner } from './utils/spinner';

document.addEventListener('DOMContentLoaded', () => {
  async function getCourseDetailedData() {
    try {
      const pageContainer = document.querySelector('.details__wrapper');
      const cardContainer = document.querySelector('.details__card');
      const advContainer = document.querySelector('.details__advantages');

      const params = new URLSearchParams(window.location.search);
      const courseId = params.get('courseId');

      showSpinner(pageContainer);

      const course = await CoursesService.getCourseById(courseId);

      cardContainer.innerHTML = `
        <h4 class="details__card-title heading heading_course">
          <div class="heading_course-bg"></div>
          <span>${course.name}</span>
        </h4>
        <div class="details__card-img">
          <img src="${course.img}" alt="course">
        </div>
        <ul class="details__card-pluses">
          ${course.pluses
            .map(plus => `<li class="details__card-plus">${plus}</li>`)
            .join('')}
        </ul>
      `;

      advContainer.innerHTML = `
        <h2 class="details__advantages-title heading">після курсу ти зможеш</h2>
        <ul class="details__advantages-list">
          ${course.possibilities
            .map(item => `<li class="details__advantages-item">${item}</li>`)
            .join('')}
        </ul>
      `;

      hideSpinner();
    } catch (error) {
      console.error('Error fetching course data:', error);
      hideSpinner();
    }
  }

  getCourseDetailedData();
});
