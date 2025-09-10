import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, FileText, Upload, Plus } from "lucide-react";
import { QuestionForm } from "./QuestionForm";

interface TestCreationFormProps {
  onClose: () => void;
}

export function TestCreationForm({ onClose }: TestCreationFormProps) {
  const [testData, setTestData] = useState({
    name: '',
    duration: '',
    postDate: '',
    instructions: ''
  });
  const [questions, setQuestions] = useState<any[]>([]);
  const [showQuestionForm, setShowQuestionForm] = useState(false);

  const handleTestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Test data:', { ...testData, questions });
    onClose();
  };

  const handleBulkUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Handle bulk upload logic here
      console.log('Bulk upload file:', file);
    }
  };

  const addQuestion = (questionData: any) => {
    setQuestions([...questions, { ...questionData, id: Date.now() }]);
    setShowQuestionForm(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Create Test
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleTestSubmit} className="space-y-6">
            {/* Test Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="testName">Test Name</Label>
                <Input
                  id="testName"
                  value={testData.name}
                  onChange={(e) => setTestData({ ...testData, name: e.target.value })}
                  placeholder="Enter test name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input
                  id="duration"
                  type="number"
                  value={testData.duration}
                  onChange={(e) => setTestData({ ...testData, duration: e.target.value })}
                  placeholder="60"
                  min="1"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="postDate">When to Post (Admin Approval Required)</Label>
              <Input
                id="postDate"
                type="datetime-local"
                value={testData.postDate}
                onChange={(e) => setTestData({ ...testData, postDate: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="instructions">Instructions for Students</Label>
              <Textarea
                id="instructions"
                value={testData.instructions}
                onChange={(e) => setTestData({ ...testData, instructions: e.target.value })}
                placeholder="Enter instructions for students"
                rows={3}
                required
              />
            </div>

            {/* Question Management */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-lg font-medium">Questions ({questions.length})</Label>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById('bulk-upload')?.click()}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Bulk Upload
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    className="lms-button-secondary"
                    onClick={() => setShowQuestionForm(true)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Question
                  </Button>
                </div>
              </div>

              <input
                id="bulk-upload"
                type="file"
                accept=".xlsx,.xls,.csv"
                onChange={handleBulkUpload}
                className="hidden"
              />

              <Tabs defaultValue="manual" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="manual">Manual Entry</TabsTrigger>
                  <TabsTrigger value="bulk">Bulk Upload Guide</TabsTrigger>
                </TabsList>
                
                <TabsContent value="manual" className="space-y-4">
                  {questions.length > 0 ? (
                    <div className="space-y-3">
                      {questions.map((question, index) => (
                        <Card key={question.id} className="border border-border">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <p className="font-medium">Q{index + 1}: {question.text}</p>
                                <div className="grid grid-cols-2 gap-2 mt-2 text-sm text-muted-foreground">
                                  <span>A) {question.options.a}</span>
                                  <span>B) {question.options.b}</span>
                                  <span>C) {question.options.c}</span>
                                  <span>D) {question.options.d}</span>
                                </div>
                                <p className="text-sm mt-1">
                                  <span className="font-medium text-green-600">Correct: {question.correct}</span>
                                </p>
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => setQuestions(questions.filter(q => q.id !== question.id))}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      No questions added yet. Click "Add Question" to start.
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="bulk" className="space-y-4">
                  <div className="lms-highlight p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Bulk Upload Format</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Upload an Excel/CSV file with the following columns:
                    </p>
                    <div className="bg-white/50 p-3 rounded border text-xs font-mono">
                      Question | Option_A | Option_B | Option_C | Option_D | Correct_Answer | Explanation | Image_URL
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      • Correct_Answer should be A, B, C, or D
                      • Image_URL and Explanation are optional
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="lms-button-primary flex-1">
                <FileText className="h-4 w-4 mr-2" />
                Create Test (Send for Approval)
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>

          {showQuestionForm && (
            <QuestionForm
              onSubmit={addQuestion}
              onCancel={() => setShowQuestionForm(false)}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}