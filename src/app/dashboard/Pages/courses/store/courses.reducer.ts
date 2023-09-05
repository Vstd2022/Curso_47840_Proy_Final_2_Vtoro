import { createFeature, createReducer, on } from '@ngrx/store';
import { CoursesActions } from './courses.actions';
import { Courses } from 'src/app/structdata/datacourses.model';
import { COURSES_MOCK } from '../mocks';

export const coursesFeatureKey = 'courses';

export interface State {
  courses: Courses[],
  coursesDetail: Courses | null,
}

export const initialState: State = {
  courses: [],
  coursesDetail: null,
};

export const reducer = createReducer(
  initialState,

  // loadCategories
  on(CoursesActions.loadCourses, state => {
    return {
      ...state,
      courses: COURSES_MOCK,
    }
  }),

  on(CoursesActions.loadCourseDetail, (state, action) => {
    return {
      ...state,
      coursesDetail: COURSES_MOCK.find((c) => c.id_cour == action.id_cour) || null,
    }
  })

);

export const coursesFeature = createFeature({
  name: coursesFeatureKey,
  reducer,
});






