export interface Courses {
    id_cour: number;
    nameCourse: string;    
    campusCourse:string;  
    stateCourse: string; 
  }

export interface CreateCoursesData {
    nameCourse: string;    
    campusCourse:string;  
    stateCourse: string; 
 }
 
 export interface UpdateCoursesData {
    nameCourse?: string;
    campusCourse?: string;
    stateCourse?: string;  
 }