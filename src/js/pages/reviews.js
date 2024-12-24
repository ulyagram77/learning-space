import CoursesService from '../core/services/CoursesService';
import { showSpinner, hideSpinner } from '../utils/spinner';

document.addEventListener('DOMContentLoaded', () => {
  async function loadCourseInfo(id) {
    try {
      const cardContainer = document.querySelector('.reviews__card');
      const course = await CoursesService.getCourseById(id);

      cardContainer.innerHTML = '';
      cardContainer.innerHTML = `
        <div class="reviews__img">
          <img src="${course.img}" alt="course">
        </div>
        <div class="reviews__text">
           ${course.description}
        </div>
      `;
    } catch (error) {
      console.error('Error fetching course info', error);
    }
  }

  async function loadReviewsPage() {
    try {
      const params = new URLSearchParams(window.location.search);
      const courseId = params.get('courseId');
      const sectionContainer = document.querySelector('.reviews');
      const reviewsList = document.querySelector('.reviews__list');

      showSpinner(sectionContainer, 'about-courses__spinner');
      //test delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      loadCourseInfo(courseId);
      const reviews = await CoursesService.getReviewsForCourse(courseId);

      if (!courseId) {
        throw new Error('Course ID not found in URL');
      }

      reviewsList.innerHTML = '';

      reviews.forEach(review => {
        const reviewItem = document.createElement('li');
        reviewItem.classList.add('reviews__item');
        reviewItem.innerHTML = `
          <li class="reviews__item">
            <div class="reviews__item-bg"></div>
            <div class="reviews__item-content">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.5 24.4688C15.4256 24.4716 17.3177 23.9651 18.9844 23.0006V19.4062C18.9844 18.3993 18.5843 17.4335 17.8723 16.7215C17.1602 16.0094 16.1945 15.6094 15.1875 15.6094H11.8125C10.8055 15.6094 9.83976 16.0094 9.1277 16.7215C8.41565 17.4335 8.01562 18.3993 8.01562 19.4062V23.0006C9.6823 23.9651 11.5744 24.4716 13.5 24.4688ZM21.5156 19.4062V20.9874C22.9748 19.4253 23.9458 17.4709 24.3091 15.3644C24.6725 13.2579 24.4124 11.0911 23.5609 9.13043C22.7093 7.16974 21.3035 5.5006 19.5161 4.32817C17.7286 3.15575 15.6376 2.53115 13.5 2.53115C11.3624 2.53115 9.27135 3.15575 7.48394 4.32817C5.69654 5.5006 4.29066 7.16974 3.43912 9.13043C2.58759 11.0911 2.32752 13.2579 2.69088 15.3644C3.05423 17.4709 4.02519 19.4253 5.48438 20.9874V19.4062C5.48387 18.1015 5.88669 16.8285 6.63768 15.7615C7.38866 14.6945 8.45109 13.8858 9.6795 13.446C9.04228 12.7131 8.62933 11.8123 8.48993 10.8511C8.35052 9.88997 8.49052 8.909 8.89325 8.02522C9.29598 7.14144 9.94443 6.39215 10.7612 5.86674C11.5781 5.34132 12.5288 5.06195 13.5 5.06195C14.4712 5.06195 15.4219 5.34132 16.2388 5.86674C17.0556 6.39215 17.704 7.14144 18.1067 8.02522C18.5095 8.909 18.6495 9.88997 18.5101 10.8511C18.3707 11.8123 17.9577 12.7131 17.3205 13.446C18.5489 13.8858 19.6113 14.6945 20.3623 15.7615C21.1133 16.8285 21.5161 18.1015 21.5156 19.4062ZM13.5 27C17.0804 27 20.5142 25.5777 23.0459 23.0459C25.5777 20.5142 27 17.0804 27 13.5C27 9.91958 25.5777 6.4858 23.0459 3.95406C20.5142 1.42232 17.0804 0 13.5 0C9.91958 0 6.4858 1.42232 3.95406 3.95406C1.42232 6.4858 0 9.91958 0 13.5C0 17.0804 1.42232 20.5142 3.95406 23.0459C6.4858 25.5777 9.91958 27 13.5 27ZM16.0312 10.125C16.0312 10.7963 15.7646 11.4402 15.2899 11.9149C14.8152 12.3896 14.1713 12.6562 13.5 12.6562C12.8287 12.6562 12.1848 12.3896 11.7101 11.9149C11.2354 11.4402 10.9688 10.7963 10.9688 10.125C10.9688 9.45367 11.2354 8.80984 11.7101 8.33514C12.1848 7.86043 12.8287 7.59375 13.5 7.59375C14.1713 7.59375 14.8152 7.86043 15.2899 8.33514C15.7646 8.80984 16.0312 9.45367 16.0312 10.125Z"
                  fill="#201A46" />
              </svg>
              ${review.text}
            </div>
          </li>
        `;
        reviewsList.appendChild(reviewItem);
      });

      hideSpinner();
    } catch (error) {
      console.error('Error loading reviews:', error);
      hideSpinner();
    }
  }

  loadReviewsPage();
});
