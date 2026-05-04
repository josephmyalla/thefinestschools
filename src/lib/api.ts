import { FormEntry } from "./types";
import { StudentData } from "./types";
import { jsPDF } from 'jspdf';
import {logo} from "../assets"
let formArray: FormEntry[] = [];

const dateformat = (dateinput:string)=>{
   const dateString = dateinput
   // Method 1: Using Date object
   const date = new Date(dateString);

   const day = date.getDate();        // 8
   const month = date.getMonth() + 1; // 5 (May is month 4, so add 1)
   const year = date.getFullYear();   // 2026
   return day+'-'+month+'-'+year
}

export async function addFormData(studentData:StudentData) {
    try{
     
       await formArray.push({formStudentData:studentData})
       const childnames=`${studentData.firstname} ${studentData.middlename} ${studentData.lastname}`.toUpperCase()
       const gender = `${studentData.gender}`.toUpperCase()
       const nationality = `${studentData.nationality}`.toUpperCase()
       const homeaddress = `${studentData.streetaddress}`.toUpperCase()
       const region = `${studentData.region}`.toUpperCase()
       const currentschoolname = `${studentData.currentschoolname}`.toUpperCase()
       const schoolemailaddress = `${studentData.schoolemailaddress}`.toUpperCase()
       const schoolphonenumber = `${studentData.schoolphonenumber}`.toUpperCase()
       const parentguardian=`${studentData.parentfirstname} ${studentData.parentmiddlename} ${studentData.parentlastname}`.toUpperCase()
       const parentgender = `${studentData.parentgender}`.toUpperCase()
       const emailaddress = `${studentData.parentemail}`.toUpperCase()
       const phonenumber = `${studentData.parentphone}`.toUpperCase()
       const parentrelation = `${studentData.parentrelation}`.toUpperCase()
       const parentnationality = `${studentData.parentnationality}`.toUpperCase()
       const languageofinstruction = `${studentData.languageofinstruction}`.toUpperCase()
       const dateofbirth = `${dateformat(studentData.dateofbirth)}`.toUpperCase()
       const placeofbirth = `${studentData.placeofbirth}`.toUpperCase()
       const gradeyouwishtojoin = `${studentData.gradeyouwishtojoin}`.toUpperCase()
       const currentGradeYear = `${studentData.currentGradeYear}`.toUpperCase()
       const currentGrade = `${studentData.currentgrade}`.toUpperCase()

       await generatePDF(gender,childnames,nationality,homeaddress,region,gradeyouwishtojoin,currentschoolname,
        schoolemailaddress,schoolphonenumber,parentguardian,parentgender,emailaddress,phonenumber,parentrelation,
        parentnationality,languageofinstruction,dateofbirth,placeofbirth,currentGrade,currentGradeYear

       )
       return "Form Created"
    }catch{
       console.log("error")
    }
}

export async function getData() {
    try{
     console.log("get function called")
    }catch{
      console.log("error")
    }

}

export async function generatePDF (gender:string,childnames:string,nationality:string,homeaddress:string,
  region:string,gradeyouwishtojoin:string,currentschooname:string,schoolemailaddress:string,
  schoolphonenumber:string,parentguardian:string,parentgender:string,emailaddress:string,
  phonenumber:string,parentrelation:string,parentnationality:string,
  languageofinstruction:string,birthdate:string,placeofbirth:string,currentGrade:string,
  currentGradeYear:string

){

    const thefinestlogo = new Image();
    thefinestlogo.src = logo; 
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const W = 210, ml = 10, mr = 195, cw = W - ml - mr; // cw = 180

    const PURPLE: [number, number, number] = [120, 40, 180];
    const LPURPLE: [number, number, number] = [240, 225, 255];
    const BLACK: [number, number, number] = [30, 30, 30];
    const GRAY: [number, number, number] = [20, 40, 20];

    // ── Header background ──────────────────────────────────────────────
    doc.setFillColor(230, 210, 250);
    doc.rect(0, 0, W, 52, 'F');

    // School name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(15);
    doc.setTextColor(...PURPLE);
    const schoolName = 'THE FINEST PRE & PRIMARY SCHOOL';
    doc.text(schoolName, W / 2, 14, { align: 'center' });
    const snW = doc.getTextWidth(schoolName);
    doc.setDrawColor(...PURPLE);
    doc.setLineWidth(0.5);
    doc.line(W / 2 - snW / 2, 15.5, W / 2 + snW / 2, 15.5);


    // Address block
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(60, 60, 60);
    ['Pwani, Kibaha Mkuza', 'Phone: +255718469019',
      'Email: director@thefinestschools.ac.tz', 'Website: www.thefinestschools.ac.tz']
      .forEach((line, i) => doc.text(line, W / 2, 26 + i * 3.8, { align: 'center' }));

    // Logo placeholder (left)
    doc.setDrawColor(140, 100, 180);
    doc.setLineWidth(0.5);
    try { doc.addImage(thefinestlogo, 'JPEG', 0, 6, 60, 50); }
      catch { /* skip if image fails */ }
    
    // Photo box (right)
    doc.setDrawColor(140, 100, 180);
    doc.setLineWidth(0);
    try { doc.addImage(thefinestlogo, 'JPEG', 160, 6, 60, 50); }
      catch { /* skip if image fails */ }
    
    // ── Title ─────────────────────────────────────────────────────────
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(...PURPLE);
    doc.text('Application for Admission', W / 2, 61, { align: 'center' });
    const titleW = doc.getTextWidth('Application for Admission');
    doc.setDrawColor(...PURPLE);
    doc.setLineWidth(0.4);
    doc.line(W / 2 - titleW / 2, 62.5, W / 2 + titleW / 2, 62.5);

    // Instructions
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(...BLACK);
    doc.text('Please complete each section in ', ml, 69);
    const x1 = ml + doc.getTextWidth('Please complete each section in ');
    doc.setFont('helvetica', 'bold');
    doc.text('BLOCK LETTERS/UPPER CASE', x1, 69);
    const x2 = x1 + doc.getTextWidth('BLOCK LETTERS/UPPER CASE');
    doc.setDrawColor(...BLACK);
    doc.line(x1, 69.8, x2, 69.8);


    // ── Helpers ───────────────────────────────────────────────────────
    type Col = { label: string; value: string; w: number };

    const tableRow = (cols: Col[], y: number, rowH: number) => {
      let x = ml;
      doc.setLineWidth(0.3);
      doc.setDrawColor(180, 140, 220);
      cols.forEach(col => {
        doc.rect(x, y, col.w, rowH);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7.5);
        doc.setTextColor(...BLACK);
        doc.text(col.label, x + 1.5, y + 4);
        if (col.value) {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8);
          doc.text(col.value, x + 1.5, y + rowH - 2);
        }
        x += col.w;
      });
    };

    const sectionHeader = (label: string, y: number) => {
      doc.setFillColor(...LPURPLE);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(...PURPLE);
      doc.text(label, ml + 2, y + 5);
    };

     const textComponent = (label: string, y: number) => {
      doc.setFillColor(...LPURPLE);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(...BLACK);
      doc.text(label, ml + 2, y + 5);
    };

    const textComponentMultiple = (label1: string, y1: number,label2: string, y2: number) => {
      doc.setFillColor(...LPURPLE);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(...GRAY);
      doc.text(label1, ml + 2, y1 + 5);
      doc.setFontSize(8);
      doc.setTextColor(...BLACK);
      doc.text(label2, ml + 60, y2 + 5)
    };

    // ── Section 1 ─────────────────────────────────────────────────────
    let y = 74;
    sectionHeader("Section 1: CHILD'S PERSONAL DETAILS", y);
    y += 7;
    textComponent(`CHILD NAMES: ${childnames}`,y)
     y += 7;
   
    textComponent(`GENDER: ${gender}`,y)
     y += 7;
    
    textComponentMultiple(`DATE OF BIRTH: ${birthdate}`,y,`PLACE OF BIRTH: ${placeofbirth}`,y)

     y += 7;
   
    textComponentMultiple(`GRADE: ${currentGrade}`,y,`YEAR: ${currentGradeYear}`,y)

     y += 7;
  
    textComponent(`MEDIA OF INSTRUCTION: ${languageofinstruction}`,y)
     
     y += 7;
    textComponent(`REGION/CITY: ${region}`,y)
    y += 7;
    textComponentMultiple(`NATIONALITY: ${nationality}`,y,`HOME ADDRESS: ${homeaddress}`,y)
    y += 7;
    textComponent(`GRADE YOU WISH TO JOIN: ${gradeyouwishtojoin}`,y)
     y += 10;
    sectionHeader("Section 2: CURRENT SCHOOL DETAILS", y);
    y += 7;
    textComponent(`CURRENT SCHOOL: ${currentschooname}`,y)
    y += 7;
    textComponentMultiple(`EMAIL: ${schoolemailaddress}`,y,`PHONE NUMBER: ${schoolphonenumber}`,y) 

    y += 10;
    sectionHeader("Section 3: PARENT/GUARDIAN DETAILS", y);
    y += 7;
   
    textComponent(`PARENT NAMES: ${parentguardian}`,y)
    y += 7;
    textComponent(`GENDER: ${parentgender}`,y)
    y += 7;
    textComponentMultiple(`EMAIL: ${emailaddress}`,y,`PHONE NUMBER ${phonenumber}`,y) 
    y += 7;
    textComponentMultiple(`RELATION: ${parentrelation}`,y,`NATIONALITY: ${parentnationality}`,y) 

    y += 10;
    sectionHeader("Section 4: PARENT/GUARDIAN DECLARATION", y);
    y += 7;
    textComponent(`I HEREBY DECLARE THAT THE STATEMENTS MADE IN THIS APPLICATION ARE TRUE AND CORRECT: ${parentguardian}`,y)
    y += 7;
    
    textComponent(`PARENT/GUARDIAN SIGNATURE`,y)
    doc.setDrawColor(...BLACK);
    doc.line(60, 222, 180, 222);
    doc.save('application-for-admission.pdf');
  };
