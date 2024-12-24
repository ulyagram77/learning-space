import CoursesService from './core/services/CoursesService';
import { hideSpinner, showSpinner } from './utils/spinner';

document.addEventListener('DOMContentLoaded', () => {
  //about courses page logic
  async function displayCourses(sliderContainerClass) {
    try {
      const sliderContainer = document.querySelector(sliderContainerClass);
      const sectionContainer = document.querySelector('.about-courses');

      showSpinner(sectionContainer, 'about-courses__spinner');

      //test delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      const courses = await CoursesService.getAllCourses();

      sliderContainer.innerHTML = '';

      courses.forEach(course => {
        const slide = document.createElement('swiper-slide');
        slide.classList.add('about-courses__slide');

        slide.innerHTML = `
            <article class="about-courses__course course">
              <h4 class="course__title heading heading_course">
                <div class="heading_course-bg"></div>
                <span>${course.name}</span>
              </h4>
    
              <div class="course__img">
                <img src="${course.img}" alt="slide" />
              </div>
    
              <div class="course__content">
                <h4 class="course__title-mobile heading heading_course">
                  <div class="heading_course-bg"></div>
                  <span>${course.name}</span>
                </h4>
  
                <p class="course__text">
                  ${course.description}
                </p>
    
                <div class="course__actions">
                  <a href="/reviews/index.html?courseId=${course.id}" class="course__button btn btn_white">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.3333 0.416748H2.66668C1.38334 0.416748 0.34501 1.50425 0.34501 2.83341L0.333344 24.5834L5.00001 19.7501H21.3333C22.6167 19.7501 23.6667 18.6626 23.6667 17.3334V2.83341C23.6667 1.50425 22.6167 0.416748 21.3333 0.416748ZM19 14.9167H5.00001V12.5001H19V14.9167ZM19 11.2917H5.00001V8.87508H19V11.2917ZM19 7.66675H5.00001V5.25008H19V7.66675Z" fill="#201A46" />
                    </svg>
                    <span>${course.reviewsCount} відгуків</span>
                  </a>
                  <a href="/details/index.html?courseId=${course.id}" class="course__button btn">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.0042 16.021L15.969 18.0562L3.75783 5.84506L3.75782 17.0386L0.867855 17.0386V0.919895H16.9866L16.9866 3.80987H5.79301L18.0042 16.021Z"
                        fill="#201A46" />
                    </svg>
                    <span>детальніше</span>
                  </a>
                </div>
              </div>
              <div class="course__actions-mobile">
                <a href="/reviews/index.html?courseId=${course.id}" class="course__button btn btn_white">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.3333 0.416748H2.66668C1.38334 0.416748 0.34501 1.50425 0.34501 2.83341L0.333344 24.5834L5.00001 19.7501H21.3333C22.6167 19.7501 23.6667 18.6626 23.6667 17.3334V2.83341C23.6667 1.50425 22.6167 0.416748 21.3333 0.416748ZM19 14.9167H5.00001V12.5001H19V14.9167ZM19 11.2917H5.00001V8.87508H19V11.2917ZM19 7.66675H5.00001V5.25008H19V7.66675Z" fill="#201A46" />
                  </svg>
                  <span>${course.reviewsCount} відгуків</span>
                </a>
  
                <a href="/details/index.html?courseId=${course.id}" class="course__button btn">
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.0042 16.021L15.969 18.0562L3.75783 5.84506L3.75782 17.0386L0.867855 17.0386V0.919895H16.9866L16.9866 3.80987H5.79301L18.0042 16.021Z"
                      fill="#201A46" />
                  </svg>
                  <span>детальніше</span>
                </a>
              </div>
            </article>
          `;

        sliderContainer.appendChild(slide);
      });

      hideSpinner();
    } catch (error) {
      console.error('Error fetching courses:', error);
      hideSpinner();
    }
  }

  displayCourses('.slider-about');
  displayCourses('.slider-about-mobile');
});
