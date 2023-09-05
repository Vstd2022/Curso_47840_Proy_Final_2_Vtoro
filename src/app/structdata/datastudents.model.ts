
 export interface Student {
     id_Stu: number;
     firstNameStu: string;
     lastNameStu: string;
     telephoneStu: string;
     emailStu: string;
     courseStu: string;   
   }

export interface CreateStudentData {
    firstNameStu: string;
     lastNameStu: string;
     telephoneStu: string;
     emailStu: string;
     courseStu: string;
  }
  
  export interface UpdateStudentData {
    firstNameStu?: string;
     lastNameStu?: string;
     telephoneStu?: string;
     emailStu?: string;
     courseStu?: string;
  }

