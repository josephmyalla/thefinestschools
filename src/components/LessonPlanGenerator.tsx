import { useState } from 'react';
import { BookOpen, Target, HelpCircle, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea'
import { Badge } from './ui/badge';

interface LessonPlan {
  title: string;
  subject: string;
  gradeLevel: string;
  duration: string;
  objectives: string[];
  materials: string[];
  activities: string[];
  assessment: string[];
  questions: string[];
}

interface LessonPlanGeneratorProps {
  pdfContent?: string;
  fileName?: string;
}

export const LessonPlanGenerator = ({ pdfContent, fileName }: LessonPlanGeneratorProps) => {
  const [topic, setTopic] = useState('');
  const [subject, setSubject] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [duration, setDuration] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [lessonPlan, setLessonPlan] = useState<LessonPlan | null>(null);

  const generateLessonPlan = async () => {
    if (!topic || !subject || !gradeLevel) return;

    setIsGenerating(true);
    
    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock lesson plan generation
    const mockLessonPlan: LessonPlan = {
      title: topic,
      subject,
      gradeLevel,
      duration: duration || '45 minutes',
      objectives: [
        `Students will understand the key concepts of ${topic}`,
        `Students will be able to apply ${topic} principles in practical scenarios`,
        `Students will demonstrate comprehension through interactive activities`
      ],
      materials: [
        'Whiteboard and markers',
        'Student worksheets',
        'Interactive presentation slides',
        fileName ? `Reference material: ${fileName}` : 'Textbook chapters 3-4'
      ],
      activities: [
        'Introduction and warm-up discussion (10 minutes)',
        `Interactive lecture on ${topic} (15 minutes)`,
        'Group activity and hands-on practice (15 minutes)',
        'Review and Q&A session (5 minutes)'
      ],
      assessment: [
        'Participation in class discussions',
        'Completion of worksheet exercises',
        'Peer collaboration during group activities',
        'Exit ticket with key concept questions'
      ],
      questions: [
        `What are the main principles of ${topic}?`,
        `How does ${topic} relate to real-world applications?`,
        `Can you provide an example of ${topic} in action?`,
        `What challenges might arise when implementing ${topic}?`,
        `How would you explain ${topic} to a younger student?`
      ]
    };

    setLessonPlan(mockLessonPlan);
    setIsGenerating(false);
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-soft">
        <CardHeader className="bg-gradient-primary text-primary-foreground">
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5" />
            <span>Lesson Plan Generator</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="topic">Topic/Title</Label>
              <Input
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Introduction to Photosynthesis"
              />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g., Biology"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="grade">Grade Level</Label>
              <Input
                id="grade"
                value={gradeLevel}
                onChange={(e) => setGradeLevel(e.target.value)}
                placeholder="e.g., Grade 9"
              />
            </div>
            <div>
              <Label htmlFor="duration">Duration (optional)</Label>
              <Input
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g., 45 minutes"
              />
            </div>
          </div>

          {pdfContent && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                Using content from: <span className="font-medium">{fileName}</span>
              </p>
              <p className="text-sm text-foreground">
                The AI will reference your uploaded PDF to create contextually relevant lesson plans.
              </p>
            </div>
          )}

          <Button
            onClick={generateLessonPlan}
            disabled={!topic || !subject || !gradeLevel || isGenerating}
            className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating Lesson Plan...
              </>
            ) : (
              'Generate Lesson Plan'
            )}
          </Button>
        </CardContent>
      </Card>

      {lessonPlan && (
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl">{lessonPlan.title}</CardTitle>
            <div className="flex space-x-2">
              <Badge variant="secondary">{lessonPlan.subject}</Badge>
              <Badge variant="outline">{lessonPlan.gradeLevel}</Badge>
              <Badge variant="outline">{lessonPlan.duration}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="flex items-center text-lg font-semibold mb-3">
                <Target className="w-5 h-5 mr-2 text-primary" />
                Learning Objectives
              </h3>
              <ul className="space-y-2">
                {lessonPlan.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Materials Needed</h3>
              <ul className="grid grid-cols-2 gap-2">
                {lessonPlan.materials.map((material, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    <span className="text-sm">{material}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Lesson Activities</h3>
              <div className="space-y-3">
                {lessonPlan.activities.map((activity, index) => (
                  <div key={index} className="p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium text-primary">Step {index + 1}:</span>
                    <p className="text-sm mt-1">{activity}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Assessment Methods</h3>
              <div className="grid grid-cols-2 gap-3">
                {lessonPlan.assessment.map((method, index) => (
                  <div key={index} className="p-3 border border-border rounded-lg">
                    <p className="text-sm">{method}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="flex items-center text-lg font-semibold mb-3">
                <HelpCircle className="w-5 h-5 mr-2 text-accent" />
                Sample Questions
              </h3>
              <div className="space-y-2">
                {lessonPlan.questions.map((question, index) => (
                  <div key={index} className="p-3 bg-accent/5 border-l-4 border-accent rounded-r-lg">
                    <p className="text-sm font-medium">Q{index + 1}:</p>
                    <p className="text-sm mt-1">{question}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};