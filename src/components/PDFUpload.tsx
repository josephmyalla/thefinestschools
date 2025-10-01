import { useState } from 'react';
import { Upload, FileText, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useToast } from '../hooks/use-toast';

interface PDFUploadProps {
  onFileUpload: (file: File, content: string) => void;
  isLoading?: boolean;
}

export const PDFUpload = ({ onFileUpload, isLoading }: PDFUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFile = async (file: File) => {
    if (file.type !== 'application/pdf') {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file.",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      toast({
        title: "File too large",
        description: "Please upload a PDF smaller than 10MB.",
        variant: "destructive",
      });
      return;
    }

    setUploadedFile(file);
    
    // Simulate PDF text extraction (in real app, use pdf-parse or similar)
    const mockContent = `Sample content from ${file.name}. This would be the extracted text from the PDF document that will be used to generate lesson plans and exams.`;
    
    toast({
      title: "PDF uploaded successfully",
      description: `${file.name} is ready for processing.`,
    });

    onFileUpload(file, mockContent);
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  return (
    <Card className="p-8 border-2 border-dashed border-border transition-all duration-300 hover:shadow-soft">
      {!uploadedFile ? (
        <div
          className={`text-center transition-all duration-300 ${
            dragActive ? 'bg-primary/5 border-primary' : ''
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="mx-auto mb-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
            <Upload className="w-8 h-8 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-foreground">Upload PDF Document</h3>
          <p className="text-muted-foreground mb-6">
            Drag and drop your PDF file here, or click to browse
          </p>
          <Button
            variant="outline"
            className="mb-4"
            onClick={() => document.getElementById('file-input')?.click()}
            disabled={isLoading}
          >
            Choose File
          </Button>
          <input
            id="file-input"
            type="file"
            accept=".pdf"
            onChange={(e) => e.target.files && handleFile(e.target.files[0])}
            className="hidden"
          />
          <p className="text-sm text-muted-foreground">
            Supports PDF files up to 10MB
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="font-medium text-foreground">{uploadedFile.name}</p>
              <p className="text-sm text-muted-foreground">
                {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={removeFile}
            disabled={isLoading}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}
    </Card>
  );
};