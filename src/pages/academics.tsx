import ButtonGradient from "../assets/svg/ButtonGradient";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {ExamGenerator} from "../components/ExamGenerator"
import {LessonPlanGenerator} from "../components/LessonPlanGenerator"
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast } from "../hooks/use-toast";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"


const Academics = ()=>{

   const [step, setStep] = useState("knowledgebase");
    
    return(
      <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-n-8">
        <Header />

        <div className="m-10">
            <h2 className="text-5xl section-title">Academics</h2>
        </div>

        <>
          <Card className="w-full max-w-3xl mx-auto p-4 mb-10 mt-10">
                <CardHeader>
                  <CardTitle>
                    <div>                    
                    <p className="text-base text-center">Lesson Planning and Examination Generations</p>
                    <div className="mt-10 lg:mt-4">
                     <Tabs value={step} onValueChange={setStep}>
                      <TabsList className="flex flex-col gap-2 md:grid w-full grid-cols-3">
                      <TabsTrigger value="knowledgebase">Knowlegde Base</TabsTrigger>
                      <TabsTrigger value="lessonplans">Lesson Plans</TabsTrigger>
                      <TabsTrigger value="examsgenerations">Exams Generations</TabsTrigger>
                    </TabsList>
                    </Tabs>
                    </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs value={step} onValueChange={setStep}>
                    {/* Student Info */}
                     <TabsContent value="knowledgebase" className="space-y-4 pt-4">
                      <h2>Knowledge Base</h2>
                    </TabsContent>
                    <TabsContent value="lessonplans" className="space-y-4 pt-4">
                      <LessonPlanGenerator/>
                    </TabsContent>
                    {/* Parent Info */}
                    <TabsContent value="examsgenerations" className="space-y-4 pt-4">
                      <ExamGenerator/>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
        </>
        <Footer />
      </div>
        <ButtonGradient />
    </>
    )
}

export default Academics