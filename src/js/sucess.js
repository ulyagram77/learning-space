import CoursesService from './core/services/CoursesService';

document.addEventListener('DOMContentLoaded', () => {
  async function showMessage() {
    try {
      const textContainer = document.querySelector('.sucсess__message');

      const params = new URLSearchParams(window.location.search);
      const courseId = params.get('courseId');

      const course = await CoursesService.getCourseById(courseId);

      textContainer.innerHTML = `
          вітаю! <br>
          ви успішно записалися на курс <br><span>${course.name}</span><br> Приємного та продуктивного навчання!!!
      `;
    } catch (error) {
      console.error('Error fetching course:', error);
    }
  }

  showMessage();
});
