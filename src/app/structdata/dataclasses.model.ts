export interface Classes {
    id_Class: number;
    NameClass: string;
    teacherClass:string;    
    stateClass: string; 
  }


export interface CreateClassesData {
    NameClass: string;
    teacherClass:string;    
    stateClass: string; 
 }
 
 export interface UpdateClassesData {
    NameClass?: string;
    teacherClass?: string;
    stateClass?: string;  
 }