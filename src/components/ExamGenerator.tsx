import { useState } from 'react';
import { FileText, Clock, Users, Loader2, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';

interface Question {
  id: number;
  type: 'multiple-choice' | 'short-answer' | 'essay' | 'true-false';
  question: string;
  options?: string[];
  correctAnswer?: string;
  points: number;
}

interface Exam {
  title: string;
  subject: string;
  duration: string;
  totalPoints: number;
  questions: Question[];
  instructions: string[];
}

interface ExamGeneratorProps {
  pdfContent?: string;
  fileName?: string;
}

export const ExamGenerator = ({ pdfContent, fileName }: ExamGeneratorProps) => {
  const [examTitle, setExamTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [questionCount, setQuestionCount] = useState('');
  const [duration, setDuration] = useState('');
  const [questionTypes, setQuestionTypes] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [exam, setExam] = useState<Exam | null>(null);

  const handleQuestionTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setQuestionTypes([...questionTypes, type]);
    } else {
      setQuestionTypes(questionTypes.filter(t => t !== type));
    }
  };

  const generateExam = async () => {
    if (!examTitle || !subject || !difficulty || !questionCount) return;

    setIsGenerating(true);
    
    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    // Mock exam generation
    const mockQuestions: Question[] = [
      {
        id: 1,
        type: 'multiple-choice',
        question: `What is the primary focus of ${subject} in the context of ${examTitle}?`,
        options: [
          'Understanding theoretical concepts',
          'Practical application of principles',
          'Historical development',
          'All of the above'
        ],
        correctAnswer: 'All of the above',
        points: 5
      },
      {
        id: 2,
        type: 'short-answer',
        question: `Explain three key principles discussed in the reference material about ${subject}.`,
        points: 10
      },
      {
        id: 3,
        type: 'true-false',
        question: `${subject} concepts can be applied in real-world scenarios.`,
        correctAnswer: 'True',
        points: 3
      },
      {
        id: 4,
        type: 'essay',
        question: `Analyze and discuss the implications of ${subject} principles in modern education. Use examples from the reference material to support your answer.`,
        points: 15
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: `According to the reference document, which approach is most effective for teaching ${subject}?`,
        options: [
          'Lecture-based instruction',
          'Interactive learning activities',
          'Independent study',
          'Combination of all methods'
        ],
        correctAnswer: 'Combination of all methods',
        points: 5
      }
    ];

    const totalPoints = mockQuestions.reduce((sum, q) => sum + q.points, 0);

    const mockExam: Exam = {
      title: examTitle,
      subject,
      duration: duration || '60 minutes',
      totalPoints,
      questions: mockQuestions.slice(0, parseInt(questionCount)),
      instructions: [
        'Read all questions carefully before beginning',
        'Answer all questions to the best of your ability',
        'Show your work for partial credit where applicable',
        'Use the reference material concepts in your responses',
        'Manage your time effectively across all sections'
      ]
    };

    setExam(mockExam);
    setIsGenerating(false);
  };

  const exportExam = () => {
    if (!exam) return;
    
    // Create exam content for download
    let content = `${exam.title}\n`;
    content += `Subject: ${exam.subject}\n`;
    content += `Duration: ${exam.duration}\n`;
    content += `Total Points: ${exam.totalPoints}\n\n`;
    
    content += "INSTRUCTIONS:\n";
    exam.instructions.forEach((instruction, index) => {
      content += `${index + 1}. ${instruction}\n`;
    });
    
    content += "\n" + "=".repeat(50) + "\n\n";
    
    exam.questions.forEach((question, index) => {
      content += `Question ${index + 1} (${question.points} points) - ${question.type.toUpperCase()}\n`;
      content += `${question.question}\n`;
      
      if (question.options) {
        question.options.forEach((option, optIndex) => {
          content += `${String.fromCharCode(65 + optIndex)}. ${option}\n`;
        });
      }
      content += "\n" + "-".repeat(30) + "\n\n";
    });
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${exam.title.replace(/\s+/g, '_')}_Exam.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-soft">
        <CardHeader className="bg-gradient-secondary text-secondary-foreground">
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>Exam Generator</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="exam-title">Exam Title</Label>
              <Input
                id="exam-title"
                value={examTitle}
                onChange={(e) => setExamTitle(e.target.value)}
                placeholder="e.g., Midterm Biology Exam"
              />
            </div>
            <div>
              <Label htmlFor="exam-subject">Subject</Label>
              <Input
                id="exam-subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g., Biology"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="difficulty">Difficulty Level</Label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="question-count">Number of Questions</Label>
              <Select value={questionCount} onValueChange={setQuestionCount}>
                <SelectTrigger>
                  <SelectValue placeholder="Select count" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 Questions</SelectItem>
                  <SelectItem value="10">10 Questions</SelectItem>
                  <SelectItem value="15">15 Questions</SelectItem>
                  <SelectItem value="20">20 Questions</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="exam-duration">Duration (optional)</Label>
              <Input
                id="exam-duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g., 60 minutes"
              />
            </div>
          </div>

          <div>
            <Label className="text-base font-medium">Question Types</Label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { id: 'multiple-choice', label: 'Multiple Choice' },
                { id: 'short-answer', label: 'Short Answer' },
                { id: 'true-false', label: 'True/False' },
                { id: 'essay', label: 'Essay Questions' }
              ].map((type) => (
                <label key={type.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-border"
                    onChange={(e) => handleQuestionTypeChange(type.id, e.target.checked)}
                  />
                  <span className="text-sm">{type.label}</span>
                </label>
              ))}
            </div>
          </div>

          {pdfContent && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                Reference document: <span className="font-medium">{fileName}</span>
              </p>
              <p className="text-sm text-foreground">
                Questions will be generated based on the content from your uploaded PDF.
              </p>
            </div>
          )}

          <Button
            onClick={generateExam}
            disabled={!examTitle || !subject || !difficulty || !questionCount || isGenerating}
            className="w-full bg-gradient-secondary hover:shadow-glow transition-all duration-300"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating Exam...
              </>
            ) : (
              <span className='text-gray-700 hover:text-white'>Generate Exam</span>
            )}
          </Button>
        </CardContent>
      </Card>

      {exam && (
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-2xl">{exam.title}</CardTitle>
              <div className="flex space-x-2 mt-2">
                <Badge variant="secondary">{exam.subject}</Badge>
                <Badge variant="outline" className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{exam.duration}</span>
                </Badge>
                <Badge variant="outline" className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>{exam.totalPoints} points</span>
                </Badge>
              </div>
            </div>
            <Button onClick={exportExam} variant="outline" className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export Exam</span>
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Instructions</h3>
              <ul className="space-y-2">
                {exam.instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-sm">{instruction}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-4">Questions</h3>
              <div className="space-y-6">
                {exam.questions.map((question, index) => (
                  <Card key={question.id} className="border border-border">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium">Question {index + 1}</h4>
                        <div className="flex space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {question.type.replace('-', ' ').toUpperCase()}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {question.points} pts
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-foreground mb-3">{question.question}</p>
                      
                      {question.options && (
                        <div className="space-y-2">
                          {question.options.map((option, optIndex) => (
                            <div key={optIndex} className="flex items-center space-x-2">
                              <span className="w-6 h-6 border border-border rounded-full flex items-center justify-center text-sm">
                                {String.fromCharCode(65 + optIndex)}
                              </span>
                              <span className="text-sm">{option}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {question.type === 'short-answer' && (
                        <div className="mt-3 p-3 bg-muted rounded border-2 border-dashed">
                          <p className="text-sm text-muted-foreground">Answer space for students</p>
                        </div>
                      )}
                      
                      {question.type === 'essay' && (
                        <div className="mt-3 p-6 bg-muted rounded border-2 border-dashed">
                          <p className="text-sm text-muted-foreground">Extended answer space for essay response</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};