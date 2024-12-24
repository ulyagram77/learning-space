import CoursesService from './core/services/CoursesService';
import { hideSpinner, showSpinner } from './utils/spinner';

document.addEventListener('DOMContentLoaded', () => {
  async function displayCourses() {
    try {
      const coursesContainer = document.querySelector('.pick__list');
      showSpinner(coursesContainer);
      //test delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      const courses = await CoursesService.getAllCourses();
      coursesContainer.innerHTML = '';

      courses.forEach(course => {
        const courseCard = document.createElement('li');
        courseCard.classList.add('pick__item');
        courseCard.innerHTML = `
          <a href='/selection/index.html?courseId=${course.id}' class='pick__link'>
            <h4 class="pick__title heading heading_course">
              <div class="heading_course-bg"></div>
              <span>${course.name}</span>
            </h4>
            <div class="pick__img">
              <img src="${course.img}" alt="course" width='300' height='300'>
            </div>
          </a>
        `;

        coursesContainer.appendChild(courseCard);
      });

      hideSpinner();
    } catch (error) {
      console.error('Error fetching courses:', error);
      hideSpinner();
    }
  }

  displayCourses();
});
