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
}
