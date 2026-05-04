"use client";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast } from "../hooks/use-toast";
import {InputFile} from './FileUpload'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { Datepicker  } from "flowbite-react";
import { ThemeInit } from "../../.flowbite-react/init";
import { addFormData } from "../lib/api";

const initialFormState = {
  studentphoto: {},
  firstname: "",
  middlename: "",
  lastname: "",
  placeofbirth: "",
  grade: "",
  currentyeargrade: "",
  streetaddress: "",
  nationality: "",
  region: "",
  gender: "",
  dateofbirth: "",
  parentfirstname: "",
  parentmiddlename: "",
  parentlastname: "",
  parentemail: "",
  parentphone: "",
  parentgender: "",
  parentnationality: "",
  relation: "",
  currentschoolname: "",
  currentGradeYear: "",
  languageofinstruction: "",
  schoolemailaddress: "",
  schoolphonenumber: "",
  parentrelation: "",
  currentgrade: "",
  gradeyouwishtojoin: ""
};

export default function ApplicationMultiForm() {

  const [formStudentData, setFormStudentData] = useState(initialFormState);

  const [dateOfiBrth, setDateOfBirth]=useState<Date | any>(undefined);
	const handleChange = (dateOfiBrth:any) => {
		    setDateOfBirth(dateOfiBrth)
	}
    
  // Load saved form data from localStorage on mount

  useEffect(() => {
    const savedStudentData = localStorage.getItem("applicationStudentForm");
    if (savedStudentData) {
      try {
        setFormStudentData(JSON.parse(savedStudentData));
        toast({
          title: "Draft loaded",
          description: "We restored your saved application form.",
        });
      } catch {
        console.error("Invalid saved form data");
      }
    }
  }, []);

  const handleStudentChange = (
  eventOrValue: React.ChangeEvent<HTMLInputElement> | string,
  fieldName?: string
) => {
  if (typeof eventOrValue === "string" && fieldName) {
    // shadcn Select path
    setFormStudentData((prev) => ({ ...prev, [fieldName]: eventOrValue }));
  } else if (typeof eventOrValue === "object") {
    // Standard input path
    const { name, value, type, checked } = eventOrValue.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormStudentData((prev) => ({ ...prev, [name]: newValue }));
  }
};

 const handleStudentSave = () => {
    localStorage.setItem("applicationStudentForm", JSON.stringify(formStudentData));
    toast({
      title: "Form saved!",
      description: "Your progress has been saved locally.",
    });
  };

 const handleStudentSubmit = async () => {
    let sumbittedData = {}
    //sumbittedData= {formAcademicData,formParentData,formStudentData}
     console.log(dateOfiBrth)
      formStudentData.dateofbirth=dateOfiBrth
 const response = await addFormData(formStudentData)
    setFormStudentData(initialFormState)
    toast({
      title: "Form submitted!" + response,
      description: "Your application has been sent successfully.",
    });
    //console.log("Submitted Data:", sumbittedData);
    // Clear localStorage after submission
    localStorage.removeItem("applicationStudentForm");
  };
  return (
    <section className="w-full max-w-3xl mx-auto p-4 mb-10 mt-10">
     <div>
          
          <h2 className="text-base text-center">Application For Admission</h2>
   
        <div className="p-4 bg-n-6 rounded-md md:block">
          <p className="text-[14px] text-gray-400 leading-loose">
           <span className="text-2xl">Welcome!</span><br/><br/>
This application for admission is divided into 3 sections: student, parent, and academic. Please fill out all sections in proper case.<br/><br/>
The Finest Schools receives applications on a rolling basis. Completed applications for the {new Date().getFullYear()} school year will be reviewed once completed and parents will be notified soon thereafter about whether their child has been accepted. Applications for the {`${new Date().getFullYear()}  -   ${new Date().getFullYear()+1}`} school year will be reviewed and decisions communicated starting November {new Date().getFullYear()}.<br/><br/>
If you have any questions, please contact the Admissions Office (admissions@finestschool.ac.tz) or by phone (Elementary +255 (718) 469-019).
          </p>
      </div>
      </div>
      
      <div>
    
            <div>
              <p className="text-[12px]">Student’s Name (As it appears on passport or birth certificate.)</p>
              <Label>First Name</Label>
              <Input
                name="firstname"
                value={formStudentData.firstname}
                onChange={handleStudentChange}
                placeholder="Enter First name"
              />
            </div>
             <div>
              <Label>Middle Name</Label>
              <Input
                name="middlename"
                value={formStudentData.middlename}
                onChange={handleStudentChange}
                placeholder="Enter Middle name"
              />
            </div>
             <div>
             <Label>Last Name</Label>
              <Input
                name="lastname"
                value={formStudentData.lastname}
                onChange={handleStudentChange}
                placeholder="Enter Last name"
              />
            </div>
           <div className="flex flex-col gap-3">
                <Label htmlFor="date" className="px-1">
                   Date of birth
                </Label>
                  <ThemeInit />
                 <Datepicker  className="w-[200px]" name="dateOfiBrth" 
                 value={dateOfiBrth} onChange={handleChange}
                 />
              
                
            </div>
             <div>
              <Label>Place of Birth</Label>
              <Input
                type="text"
                name="placeofbirth"
                value={formStudentData.placeofbirth}
                onChange={handleStudentChange}
                placeholder="Enter Place of Birth"
              />
            </div>
             <div>
              <Label>Gender</Label>
              <Select onValueChange={(val) => handleStudentChange(val, "gender")}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Pick Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                  </SelectContent>
            </Select>
             
            </div>
            <div>
              <Label>Nationality</Label>
              <Select onValueChange={(val) => handleStudentChange(val, "nationality")}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Pick Nationality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tanzania">Tanzania</SelectItem>
                    <SelectItem value="kenya">Kenya</SelectItem>
                    <SelectItem value="uganda">Uganda</SelectItem>
                    <SelectItem value="rwanda">Rwanda</SelectItem>
                    <SelectItem value="burundi">burundi</SelectItem>
                  </SelectContent>
            </Select>
           
            </div>
            <div>
            <p className="text-[12px]">Current Year and Grade</p>
              <div>
              <Label>Year</Label>
              <Input
                type="text"
                name="currentGradeYear"
                value={formStudentData.currentGradeYear}
                onChange={handleStudentChange}
                placeholder="Enter Year"
              />
            </div>
            <div>
              <Label>Grade</Label>
              <Input
                type="text"
                name="grade"
                value={formStudentData.grade}
                onChange={handleStudentChange}
                placeholder="Enter Current Grade"
              />
            </div>
            <div>
              <Label>Language of Instructions</Label>
              <Input
                type="text"
                name="languageofinstruction"
                value={formStudentData.languageofinstruction}
                onChange={handleStudentChange}
                placeholder="Language of Instructions"
              />
            </div>
              <div>
              <Label>Grade wishing to Enroll</Label>
              <Input
                type="text"
                name="gradeyouwishtojoin"
                value={formStudentData.gradeyouwishtojoin}
                onChange={handleStudentChange}
                placeholder="Enter Grade To Enroll"
              />
            </div>
            </div>
            <div>
            <div>
              <Label>Home Address</Label>
              <Input
                type="text"
                name="streetaddress"
                value={formStudentData.streetaddress}
                onChange={handleStudentChange}
                placeholder="Enter Street Address"
              />
            </div>
            <div>
              <Label>Region</Label>
              <Select onValueChange={(val) => handleStudentChange(val, "region")}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Pick Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Arusha">Arusha</SelectItem>
                    <SelectItem value="Dodoma">Dodoma</SelectItem>
                    <SelectItem value="Kigoma">Kigoma</SelectItem>
                    <SelectItem value="Iringa">Iringa</SelectItem>
                    <SelectItem value="Mbeya">Mbeya</SelectItem>
                    <SelectItem value="Manyara">Manyara</SelectItem>
                    <SelectItem value="Singida">Singida</SelectItem>
                    <SelectItem value="Tabora">Tabora</SelectItem>
                    <SelectItem value="Shinyanga">Shinyanga</SelectItem>
                    <SelectItem value="Simiyu">Simiyu</SelectItem>
                    <SelectItem value="Ruvuma">Ruvuma</SelectItem>
                    <SelectItem value="Rukwa">Rukwa</SelectItem>
                    <SelectItem value="Katavi">Katavi</SelectItem>
                    <SelectItem value="Songea">Songea</SelectItem>
                    <SelectItem value="Njombe">Njombe</SelectItem>
                    <SelectItem value="Kilimanjaro">Kilimanjaro</SelectItem>
                    <SelectItem value="Mwanza">Mwanza</SelectItem>
                    <SelectItem value="Kagera">Kagera</SelectItem>
                    <SelectItem value="Mtwara">Mtwara</SelectItem>
                    <SelectItem value="Lindi">Lindi</SelectItem>
                  </SelectContent>
            </Select>
            </div>                
            </div>
        {/* Parent/Guardian Details*/}
            <div className="flex flex-col row-gap-2 mt-8">
               <div className="p-4 bg-n-6 rounded-md md:block">
                <p className="text-[14px] text-gray-400 leading-loose">Parent/Guardian Details.</p>
              </div>
            </div>

            <div>
              <p className="text-[12px]">Student’s Name (As it appears on passport or birth certificate.)</p>
              <Label>Parent First Name</Label>
              <Input
                name="parentfirstname"
                value={formStudentData.parentfirstname}
                onChange={handleStudentChange}
                placeholder="Enter Parent First name"
              />
            </div>
             <div>
              <Label>Parent Middle Name</Label>
              <Input
                name="parentmiddlename"
                value={formStudentData.parentmiddlename}
                onChange={handleStudentChange}
                placeholder="Enter Parent Middle name"
              />
            </div>
             <div>
             <Label>Parent Last Name</Label>
              <Input
                name="parentlastname"
                value={formStudentData.parentlastname}
                onChange={handleStudentChange}
                placeholder="Enter Parent Last name"
              />
            </div>
              <div>
              <Label>Parent Gender</Label>
              <Select onValueChange={(val) => handleStudentChange(val, "parentgender")}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Pick Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                  </SelectContent>
            </Select>
             
            </div>
              <div>
             <Label>Parent Relation</Label>
              <Input
                name="parentrelation"
                value={formStudentData.parentrelation}
                onChange={handleStudentChange}
                placeholder="Parent Relation"
              />
            </div>
              <div>
             <Label>Parent Email</Label>
              <Input
                name="parentemail"
                value={formStudentData.parentemail}
                onChange={handleStudentChange}
                placeholder="Parent Email"
              />
            </div>
            <div>
             <Label>Phone</Label>
              <Input
                name="parentphone"
                value={formStudentData.parentphone}
                onChange={handleStudentChange}
                placeholder="Phone"
              />
            </div>
            <div>
              <Label>Nationality</Label>
              <Select onValueChange={(val) => handleStudentChange(val, "parentnationality")}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Pick Nationality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tanzania">Tanzania</SelectItem>
                    <SelectItem value="kenya">Kenya</SelectItem>
                    <SelectItem value="uganda">Uganda</SelectItem>
                    <SelectItem value="rwanda">Rwanda</SelectItem>
                    <SelectItem value="burundi">burundi</SelectItem>
                  </SelectContent>
            </Select>
           
            </div>
            
             {/* Current School Information*/}
            <div className="flex flex-col row-gap-2 mt-8">
               <div className="p-4 bg-n-6 rounded-md md:block">
                <p className="text-[14px] text-gray-400 leading-loose">Current School Details</p>
              </div>
            </div>
              <div>
             <Label>Current School</Label>
              <Input
                name="currentschoolname"
                value={formStudentData.currentschoolname}
                onChange={handleStudentChange}
                placeholder="Current School"
              />
            </div>
              <div>
             <Label>Current Grade</Label>
              <Input
                name="currentgrade"
                value={formStudentData.currentgrade}
                onChange={handleStudentChange}
                placeholder="Current Grade"
              />
            </div>
            <div>
             <Label>School Email</Label>
              <Input
                name="schoolemailaddress"
                value={formStudentData.schoolemailaddress}
                onChange={handleStudentChange}
                placeholder="School Email"
              />
            </div>
             <div>
             <Label>School Phone</Label>
              <Input
                name="schoolphonenumber"
                value={formStudentData.schoolphonenumber}
                onChange={handleStudentChange}
                placeholder="School Phone"
              />
            </div>
            {/* Submit button*/}

          <div className="flex justify-center mt-6">
           
           <Button onClick={handleStudentSubmit}>Submit</Button>
        </div>

      </div>
    </section>
  );
}
