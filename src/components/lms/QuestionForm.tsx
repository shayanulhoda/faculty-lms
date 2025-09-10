import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Image as ImageIcon } from "lucide-react";

interface QuestionFormProps {
  onSubmit: (questionData: any) => void;
  onCancel: () => void;
}

export function QuestionForm({ onSubmit, onCancel }: QuestionFormProps) {
  const [questionData, setQuestionData] = useState({
    text: '',
    options: {
      a: '',
      b: '',
      c: '',
      d: ''
    },
    correct: '',
    explanation: '',
    image: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(questionData);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setQuestionData({ ...questionData, image: e.target.files[0] });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Add Question</CardTitle>
          <Button variant="ghost" size="icon" onClick={onCancel}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="questionText">Question Text</Label>
              <Textarea
                id="questionText"
                value={questionData.text}
                onChange={(e) => setQuestionData({ ...questionData, text: e.target.value })}
                placeholder="Enter the question"
                rows={3}
                required
              />
            </div>

            <div className="space-y-3">
              <Label>Answer Options</Label>
              <div className="grid gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 text-sm font-medium">A)</span>
                  <Input
                    value={questionData.options.a}
                    onChange={(e) => setQuestionData({
                      ...questionData,
                      options: { ...questionData.options, a: e.target.value }
                    })}
                    placeholder="Option A"
                    required
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-8 text-sm font-medium">B)</span>
                  <Input
                    value={questionData.options.b}
                    onChange={(e) => setQuestionData({
                      ...questionData,
                      options: { ...questionData.options, b: e.target.value }
                    })}
                    placeholder="Option B"
                    required
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-8 text-sm font-medium">C)</span>
                  <Input
                    value={questionData.options.c}
                    onChange={(e) => setQuestionData({
                      ...questionData,
                      options: { ...questionData.options, c: e.target.value }
                    })}
                    placeholder="Option C"
                    required
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-8 text-sm font-medium">D)</span>
                  <Input
                    value={questionData.options.d}
                    onChange={(e) => setQuestionData({
                      ...questionData,
                      options: { ...questionData.options, d: e.target.value }
                    })}
                    placeholder="Option D"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="correct">Correct Answer</Label>
              <Select
                value={questionData.correct}
                onValueChange={(value) => setQuestionData({ ...questionData, correct: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select correct answer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A">A) {questionData.options.a || 'Option A'}</SelectItem>
                  <SelectItem value="B">B) {questionData.options.b || 'Option B'}</SelectItem>
                  <SelectItem value="C">C) {questionData.options.c || 'Option C'}</SelectItem>
                  <SelectItem value="D">D) {questionData.options.d || 'Option D'}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Question Image (Optional)</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {questionData.image && (
                <p className="text-sm text-muted-foreground">
                  Selected: {questionData.image.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="explanation">Explanation (Optional)</Label>
              <Textarea
                id="explanation"
                value={questionData.explanation}
                onChange={(e) => setQuestionData({ ...questionData, explanation: e.target.value })}
                placeholder="Provide explanation for the correct answer"
                rows={2}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="lms-button-primary flex-1">
                Add Question
              </Button>
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}