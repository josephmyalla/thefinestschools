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

import { Calendar } from "../components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover"
import { ChevronDownIcon} from "lucide-react";

import { Datepicker  } from "flowbite-react";
import { ThemeInit } from "../../.flowbite-react/init";

 


export default function ApplicationMultiForm() {
  const [step, setStep] = useState("student");
  const [formData, setFormData] = useState({
    student: { firstname: "",middlename:"",lastname:"",placeofbirth:"", email: "",gender:"",natinality:"",grade:"",currentyeargrade:"",expectedstartdate:"",street:"",region:"",streetaddress:"",country:"", city:"",open:false},
    parent: { name: "", phone: "", relation: "" },
    academic: { grade: "", subjects: "", remarks: "" },
  });
  const [open, setOpen] = useState(false)
  const [dateofbirth, setDate] = useState<Date | undefined>(undefined)

  // Load saved form data from localStorage on mount

  useEffect(() => {
    const savedData = localStorage.getItem("applicationForm");
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
        toast({
          title: "Draft loaded",
          description: "We restored your saved application form.",
        });
      } catch {
        console.error("Invalid saved form data");
      }
    }
  }, []);

  const handleChange = (section: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev, [field]: value },
    }));
  };

  const handleSave = () => {
    localStorage.setItem("applicationForm", JSON.stringify(formData));
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

  const handleSubmit = () => {
    toast({
      title: "Form submitted!",
      description: "Your application has been sent successfully.",
    });
    console.log("Submitted Data:", formData);

    // Clear localStorage after submission
    localStorage.removeItem("applicationForm");
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
                value={formData.student.firstname}
                onChange={(e) =>
                  handleChange("student", "firstname", e.target.value)
                }
                placeholder="Enter First name"
              />
            </div>
             <div>
              
              <Label>Name</Label>
              <Input
                value={formData.student.middlename}
                onChange={(e) =>
                  handleChange("student", "middlename", e.target.value)
                }
                placeholder="Enter Middle name"
              />
            </div>
             <div>
              
              <Label>Name</Label>
              <Input
                value={formData.student.lastname}
                onChange={(e) =>
                  handleChange("student", "lastname", e.target.value)
                }
                placeholder="Enter Last name"
              />
            </div>
           <div className="flex flex-col gap-3">
                <Label htmlFor="date" className="px-1">
                   Date of birth
                </Label>

                 <ThemeInit />
                 <Datepicker  className="w-[200px]"/>
      
           </div>

             <div>
              <Label>Place of Birth</Label>
              <Input
                type="text"
                value={formData.student.placeofbirth}
                onChange={(e) => handleChange("student", "placeofbirth", e.target.value)}
                placeholder="Enter Place of Birth"
              />
            </div>
             <div>
              <Label>Gender</Label>
              <Select>
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
                value={formData.student.email}
                onChange={(e) =>
                  handleChange("student", "email", e.target.value)
                }
                placeholder="Enter student email"
              />
            </div>
            <div>
              <Label>Nationality</Label>
              <Select name="natinality">
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
                value={formData.student.currentyeargrade}
                onChange={(e) => handleChange("student", "currentyeargrade", e.target.value)}
                placeholder="Enter Current year"
              />
            </div>

              <div>
              <Label>Grade</Label>
              <Input
                type="text"
                value={formData.student.grade}
                onChange={(e) => handleChange("student", "grade", e.target.value)}
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
                value={formData.student.streetaddress}
                onChange={(e) => handleChange("student", "streetaddress", e.target.value)}
                placeholder="Enter Street Address"
              />
            </div>

              <div>
              <Label>City</Label>
              <Input
                type="text"
                value={formData.student.city}
                onChange={(e) => handleChange("student", "city", e.target.value)}
                placeholder="Enter City"
              />
            </div>
            
                        <div>
              <Label>Country</Label>
              <Select name="country">
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
            <div>
              <Label>Parent/Guardian Name</Label>
              <Input
                value={formData.parent.name}
                onChange={(e) => handleChange("parent", "name", e.target.value)}
                placeholder="Enter parent/guardian name"
              />
            </div>
            <div>
              <Label>Phone</Label>
              <Input
                type="tel"
                value={formData.parent.phone}
                onChange={(e) =>
                  handleChange("parent", "phone", e.target.value)
                }
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <Label>Relation</Label>
              <Input
                value={formData.parent.relation}
                onChange={(e) =>
                  handleChange("parent", "relation", e.target.value)
                }
                placeholder="e.g., Mother, Father, Guardian"
              />
            </div>
          </TabsContent>

          {/* Academic Info */}
          <TabsContent value="academic" className="space-y-4 pt-4">
            <div>
              <Label>Grade</Label>
              <Input
                value={formData.academic.grade}
                onChange={(e) =>
                  handleChange("academic", "grade", e.target.value)
                }
                placeholder="Enter grade/class"
              />
            </div>
            <div>
              <Label>Subjects</Label>
              <Input
                value={formData.academic.subjects}
                onChange={(e) =>
                  handleChange("academic", "subjects", e.target.value)
                }
                placeholder="Enter main subjects"
              />
            </div>
            <div>
              <Label>Remarks</Label>
              <Input
                value={formData.academic.remarks}
                onChange={(e) =>
                  handleChange("academic", "remarks", e.target.value)
                }
                placeholder="Additional notes"
              />
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
            <Button variant="outline" onClick={handleSave}>
              Save Draft
            </Button>
            {step !== "academic" ? (
              <Button onClick={handleNext}>Next</Button>
            ) : (
              <Button onClick={handleSubmit}>Submit</Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
