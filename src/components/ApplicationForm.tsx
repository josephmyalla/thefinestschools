"use client";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
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

  // 1. Define the reusable function outside the component (or memoize it)
const createDateHandler = (setter:any) => (dateValue:any) => {
  setter(dateValue);
};

export default function ApplicationMultiForm() {

  const [step, setStep] = useState("student");
  
  const [formStudentData, setFormStudentData] = useState({
  firstname:"",middlename:"",lastname:"",placeofbirth:"", email:"",grade:"",currentyeargrade:"",streetaddress:""});

  const [gender,setGender]=useState("")
  const [nationality,setNationality]=useState("")
  const [country,setCountry]=useState("")
  const [region,setRegion]=useState("")
  const [dateOfiBrth, setDateOfBirth]=useState<Date | undefined>(undefined);
	const handleChange = (dateOfiBrth:any) => {
		    setDateOfBirth(dateOfiBrth)
	}

  const [formParentData, setFormParentData] = useState({firstname:"",middlename:"",lastname:"",email: "",phone: "",relation:"" });
  const [parentnationality,setParentNationality]=useState("")

  const [formAcademicData, setFormAcademicData] = useState({currentschool:"",currentgrade:"",LanguageofInstruction:"",previousschool:"",previousgrade:"", prevLanguageofInstruction:"" });
  const [startDate, setStartDate]=useState<Date | undefined>(undefined);
  const [endDate, setEndDate]=useState<Date | undefined>(undefined);
  const [prevStartDate, setPrevstartDate]=useState<Date | undefined>(undefined);
  const [prevEndDate, setprevEndDate]=useState<Date | undefined>(undefined);

  const handleStartDateChange = createDateHandler(setStartDate);
  const handleEndDateChange = createDateHandler(setEndDate);
  const handleprevStartDateChange = createDateHandler(setPrevstartDate);
  const handleprevEndDateChange = createDateHandler(setprevEndDate);
  
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

  const handleStudentChange = (event:any) => {
     const { name, value, type, checked } = event.target;
     const newValue = type === 'checkbox' ? checked : value;
    setFormStudentData((prev) => ({
      ...prev,
     [name]: newValue
    }));
  };

   const handleParentChange = (event:any) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormParentData((prev) => ({
      ...prev,
     [name]: newValue
    }));
  };

  const handleAcademicChange = (event:any) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormAcademicData((prev) => ({
    ...prev,
     [name]: newValue
    }));
  };

 const handleStudentSave = () => {
    localStorage.setItem("applicationStudentForm", JSON.stringify(formStudentData));
    toast({
      title: "Form saved!",
      description: "Your progress has been saved locally.",
    });
  };

  const handleNext = () => {
    if (step === "student") setStep("parent");
    else if (step === "parent") setStep("academic");
};

  const handlePrevious = () => {
    if (step === "academic") setStep("parent");
    else if (step === "parent") setStep("student");
  };

  const handleStudentSubmit = () => {
    let sumbittedData = {}
    sumbittedData= {country,nationality,region,gender,dateOfiBrth,...formStudentData}
    toast({
      title: "Form submitted!",
      description: "Your application has been sent successfully.",
    });
    console.log("Submitted Data:", sumbittedData);
    // Clear localStorage after submission
    localStorage.removeItem("applicationStudentForm");
  };
  return (
    <Card className="w-full max-w-3xl mx-auto p-4 mb-10 mt-10">
      <CardHeader>
        <CardTitle>
          <div>
          
          <p className="text-base text-center">Application For Admission</p>
          <div className="mt-10 lg:mt-4">
           <Tabs value={step} onValueChange={setStep}>
            <TabsList className="flex flex-col gap-2 md:grid w-full grid-cols-3">
            <TabsTrigger value="student">Student Info</TabsTrigger>
            <TabsTrigger value="parent">Parent/Guardian</TabsTrigger>
            <TabsTrigger value="academic">Academic Info</TabsTrigger>
          </TabsList>
          </Tabs>
          </div>
          </div>
        </CardTitle>
        <br/>
        <div className="p-4 bg-n-6 rounded-md hidden md:block">
          <p className="text-[8px] text-gray-400 leading-loose">
           <span className="text-2xl">Welcome!</span><br/><br/>
This application for admission is divided into 3 sections: student, parent, and academic. Please fill out all sections in proper case.<br/><br/>
You can save your progress, log-in/log-out multiple times to complete the required information before clicking ‘Submit’. Once the application is submitted, you can add outstanding checklist items through the portal.<br/><br/>
The Finest Schools receives applications on a rolling basis. Completed applications for the {new Date().getFullYear()} school year will be reviewed once completed and parents will be notified soon thereafter about whether their child has been accepted. Applications for the {`${new Date().getFullYear()}  -   ${new Date().getFullYear()+1}`} school year will be reviewed and decisions communicated starting November {new Date().getFullYear()}.<br/><br/>
If you have any questions, please contact the Admissions Office (admissions@finestschool.ac.tz) or by phone (Elementary +255 (718) 469-019).
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={step} onValueChange={setStep}>
          {/* Tab Headers */}
       

          {/* Student Info */}
          <TabsContent value="student" className="space-y-4 pt-4">
            <div className="flex flex-col row-gap-2">
              <InputFile />
              <p className="text-[12px] mb-4 mt-4">This field is Required and cannot be left blank.</p>
              <div className="p-4 bg-n-6 rounded-md hidden md:block">
                <p className="text-[8px] text-gray-400 leading-loose">We use photographs you upload to print your student and parent ID cards for school access. Please ensure the photo is up to date, featuring only the main subject of the photo, and is on a plain background.</p>
              </div>
            </div>
            <div>
              <p className="text-[12px]">Student’s Name (As it appears on passport or birth certificate.)</p>
              <Label>Name</Label>
              <Input
                name="firstname"
                value={formStudentData.firstname}
                onChange={handleStudentChange}
                placeholder="Enter First name"
              />
            </div>
             <div>
              <Label>Name</Label>
              <Input
                name="middlename"
                value={formStudentData.middlename}
                onChange={handleStudentChange}
                placeholder="Enter Middle name"
              />
            </div>
             <div>
             <Label>Name</Label>
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
                 <Datepicker  className="w-[200px]" name="dateofbirth" value={dateOfiBrth} onChange={handleChange}/>
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
              <Select value={gender} name="gender" onValueChange={setGender}>
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
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={formStudentData.email}
                onChange={handleStudentChange}
                placeholder="Enter student email"
              />
            </div>
            <div>
              <Label>Nationality</Label>
              <Select value={nationality} name="nationality" onValueChange={setNationality}>
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
                name="currentyeargrade"
                value={formStudentData.currentyeargrade}
                onChange={handleStudentChange}
                placeholder="Enter Current year"
              />
            </div>
            <div>
              <Label>Grade</Label>
              <Input
                type="text"
                name="grade"
                value={formStudentData.grade}
                onChange={handleStudentChange}
                placeholder="Enter Grade"
              />
            </div>
            </div>
            <div>
              <p className="text-[12px]">Home Address</p>
              <div>
              <Label>Street Address</Label>
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
              <Select name="region" value={region} onValueChange={setRegion}>
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
            <div>
              <Label>Country</Label>
              <Select name="country" value={country} onValueChange={setCountry}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Pick Country" />
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
                
            </div>
          </TabsContent>

          {/* Parent Info */}
          <TabsContent value="parent" className="space-y-4 pt-4">
            <div className="flex flex-col row-gap-2">
              <InputFile />
              <p className="text-[12px] mb-4 mt-4">This field is Required and cannot be left blank.</p>
              <div className="p-4 bg-n-6 rounded-md hidden md:block">
                <p className="text-[8px] text-gray-400 leading-loose">We use photographs you upload to print your student and parent ID cards for school access. Please ensure the photo is up to date, featuring only the main subject of the photo, and is on a plain background.</p>
              </div>
            </div>
            <div>
              <Label>Parent/Guardian First Name</Label>
              <Input
                value={formParentData.firstname}
                name="firstname"
                onChange={handleParentChange}
                placeholder="Enter parent/guardian first name"
              />
            </div>
            <div>
              <Label>Parent/Guardian Middle Name</Label>
              <Input
                value={formParentData.middlename}
                name="middlename"
                onChange={handleParentChange}
                placeholder="Enter parent/guardian middle name"
              />
            </div>
            <div>
              <Label>Parent/Guardian Last Name</Label>
              <Input
                value={formParentData.lastname}
                name="lastname"
                onChange={handleParentChange}
                placeholder="Enter parent/guardian last name"
              />
            </div>
            <div>
              <Label>Phone</Label>
              <Input
                type="tel"
                name="phone"
                value={formParentData.phone}
                onChange={handleParentChange}
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={formParentData.email}
                onChange={handleParentChange}
                placeholder="Enter Email address"
              />
            </div>
            <div>
              <Label>Relation</Label>
              <Input
                name="relation"
                value={formParentData.relation}
                onChange={handleParentChange}
                placeholder="e.g., Mother, Father, Guardian"
              />
            </div>
             <div>
              <Label>Nationality</Label>
              <Select name="parentnatinality" value={parentnationality} onValueChange={setParentNationality}>
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
          </TabsContent>
          <TabsContent value="academic" className="space-y-4 pt-4">
            <p>Current School</p>
            <div>
              <Label>Grade</Label>
              <Input
                value={formAcademicData.currentschool}
                name="currentschool"
                onChange={handleAcademicChange}
                placeholder="Enter current school"
              />
            </div>
            <div>
              <Label>Grade</Label>
              <Input
                value={formAcademicData.currentgrade}
                name="currentgrade"
                onChange={handleAcademicChange}
                placeholder="Enter Grade"
              />
            </div>
            <div>
              <Label>Language of Instruction</Label>
              <Input
                value={formAcademicData.LanguageofInstruction}
                onChange={handleAcademicChange}
                name="LanguageofInstruction"
                placeholder="Enter Language of Instruction"
              />
            </div>
            <div>
              <Label>Start Date</Label>
              <ThemeInit />
                 <Datepicker  className="w-[200px]" name="startdate" value={startDate} onChange={handleStartDateChange}/>
            </div>
            <div>
              <Label>End Date</Label>
              <ThemeInit />
                 <Datepicker  className="w-[200px]" name="enddate" value={endDate} onChange={handleEndDateChange}/>
            </div>
             <p>Previous School</p>
             <div>
              <Label>School Name</Label>
              <Input
                value={formAcademicData.previousschool}
                name="previousschool"
                onChange={handleAcademicChange}
                placeholder="Enter previous school"
              />
            </div>
            <div>
              <Label>Grade</Label>
              <Input
                value={formAcademicData.previousgrade}
                name="previousgrade"
                onChange={handleAcademicChange}
                placeholder="Enter Grade"
              />
            </div>
            <div>
              <Label>Language of Instruction</Label>
              <Input
                value={formAcademicData.prevLanguageofInstruction}
                name="prevLanguageofInstruction"
                onChange={handleAcademicChange}
                placeholder="Enter Language of Instruction"
              />
            </div>
            <div>
              <Label>Start Date</Label>
              <ThemeInit />
                 <Datepicker  className="w-[200px]" name="prevstartdate" value={prevStartDate} onChange={handleprevStartDateChange}/>
            </div>
            <div>
              <Label>End Date</Label>
              <ThemeInit />
                 <Datepicker  className="w-[200px]" name="prevenddate" value={prevEndDate} onChange={handleprevEndDateChange}/>
            </div>
          </TabsContent>
        </Tabs>
       
        {/* Actions */}
        <div className="flex justify-between mt-6">
          <Button
            variant="secondary"
            onClick={handlePrevious}
            disabled={step === "student"}
          >
            Previous
          </Button>
          <div className="space-x-2">
            <Button variant="outline" onClick={handleStudentSave}>
              Save Draft
            </Button>
            {step !== "academic" ? (
              <Button onClick={handleNext}>Next</Button>
            ) : (
              <Button onClick={handleStudentSubmit}>Submit</Button>
            )}
          </div>
           <Button onClick={handleStudentSubmit}>Submit</Button>
        </div>
      </CardContent>
    </Card>
  );
}
