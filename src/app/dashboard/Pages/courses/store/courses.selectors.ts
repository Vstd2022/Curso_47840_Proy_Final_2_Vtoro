import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCourses from './courses.reducer';

export const selectCoursesState = createFeatureSelector<fromCourses.State>(
  fromCourses.coursesFeatureKey
);

export const selectCoursesArray = createSelector(selectCoursesState, (state) => state.courses)

export const selectCategoryDetailName = createSelector(selectCoursesState, (state) => state.coursesDetail?.nameCourse)