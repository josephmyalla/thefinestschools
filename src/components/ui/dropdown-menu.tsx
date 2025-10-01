import { useState } from 'react';
import { BookOpen, Brain, Sparkles, FileText } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { PDFUpload } from '../../components/PDFUpload';
import { LessonPlanGenerator } from '../LessonPlanGenerator';
import { ExamGenerator } from '../ExamGenerator';
import {heroImage} from '../../assets/';

const Index = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [pdfContent, setPdfContent] = useState<string>('');

  const handleFileUpload = (file: File, content: string) => {
    setUploadedFile(file);
    setPdfContent(content);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">AI-Powered Education Tools</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Automate Your Teaching Tasks with{' '}
                <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
                  AI
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Transform your educational workflow with intelligent lesson planning and exam generation. 
                Upload your PDFs and let AI create comprehensive lesson plans and assessments tailored to your content.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Start Creating Lessons
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <FileText className="w-5 h-5 mr-2" />
                  Generate Exams
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20" />
              <img 
                src={heroImage} 
                alt="AI-powered education tools" 
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful AI Tools for Educators</h2>
            <p className="text-xl text-muted-foreground">
              Streamline your teaching preparation with intelligent automation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Smart PDF Processing</CardTitle>
                <CardDescription>
                  Upload educational PDFs and extract key content for lesson creation
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="shadow-soft hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-secondary-foreground" />
                </div>
                <CardTitle>Lesson Plan Generation</CardTitle>
                <CardDescription>
                  Create comprehensive lesson plans with objectives, activities, and assessments
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="shadow-soft hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle>Intelligent Exam Creation</CardTitle>
                <CardDescription>
                  Generate varied question types and assessments based on your content
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Application */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Create Your Educational Content</h2>
            <p className="text-xl text-muted-foreground">
              Upload a PDF document and generate lesson plans or exams
            </p>
          </div>

          <div className="space-y-8">
            {/* PDF Upload */}
            <div className="max-w-2xl mx-auto">
              <PDFUpload onFileUpload={handleFileUpload} />
            </div>

            {/* Content Generation Tabs */}
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="lesson-plan" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="lesson-plan" className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Lesson Plans</span>
                  </TabsTrigger>
                  <TabsTrigger value="exam" className="flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>Exam Generator</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="lesson-plan">
                  <LessonPlanGenerator 
                    pdfContent={pdfContent} 
                    fileName={uploadedFile?.name}
                  />
                </TabsContent>
                
                <TabsContent value="exam">
                  <ExamGenerator 
                    pdfContent={pdfContent} 
                    fileName={uploadedFile?.name}
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;