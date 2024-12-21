import $api from '../http/api';

export default class CoursesService {
  static async getAllCourses() {
    try {
      const response = await $api.get('/courses');
      return response.data;
    } catch (error) {
      console.error('Failed to get all courses');
    }
  }

  static async getReviewsForCourse(id) {
    try {
      const response = await $api.get(`/reviews?courseId=${id}`);
      return response.data;
    } catch (error) {
      console.error('Failed to get reviews for course', error);
    }
  }

  static async getCourseById(id) {
    try {
      const response = await $api.get(`/courses/${id}`);
      return response.data;
    } catch (error) {
      console.error('Failed to get course info', error);
    }
  }
}
