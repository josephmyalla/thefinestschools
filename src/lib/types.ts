export interface StudentData {
  studentphoto:object;
  firstname: string;
  middlename: string;
  lastname: string;
  dateofbirth?:any;
  placeofbirth: string;
  gender:string;
  nationality:string;
  currentGradeYear:string;
  grade:string;
  streetaddress:string;
  region:string;
  parentfirstname: string;
  parentmiddlename: string;
  parentlastname: string;
  parentphone: string;
  parentemail: string;
  parentrelation:string;
  parentnationality:string;
  parentgender:string;
  currentschoolname: string;
  currentgrade: string;
  schoolemailaddress:string;
  schoolphonenumber:string;
  languageofinstruction: string;
  gradeyouwishtojoin:string;
}

export interface FormEntry {
  formStudentData: StudentData;
}
