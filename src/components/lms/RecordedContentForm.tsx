import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Upload, FileVideo, FileText, File } from "lucide-react";

interface RecordedContentFormProps {
  onClose: () => void;
}

export function RecordedContentForm({ onClose }: RecordedContentFormProps) {
  const [formData, setFormData] = useState({
    topic: '',
    description: '',
  });
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle recorded content upload
    console.log('Recorded content data:', { ...formData, files });
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    if (['mp4', 'avi', 'mov', 'mkv'].includes(extension || '')) {
      return <FileVideo className="h-4 w-4 text-blue-600" />;
    }
    if (['pdf'].includes(extension || '')) {
      return <FileText className="h-4 w-4 text-red-600" />;
    }
    return <File className="h-4 w-4 text-gray-600" />;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5 text-primary" />
            Upload Recorded Content
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="topic">Topic Name</Label>
              <Input
                id="topic"
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                placeholder="Enter the topic name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Provide a description of the content"
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="files">Upload Files</Label>
              <Input
                id="files"
                type="file"
                multiple
                accept=".mp4,.avi,.mov,.mkv,.pdf,.doc,.docx,.ppt,.pptx"
                onChange={handleFileChange}
                required
              />
              <p className="text-xs text-muted-foreground">
                Supported formats: Videos (MP4, AVI, MOV, MKV), PDFs, Word Docs, PowerPoint presentations
              </p>
            </div>

            {files.length > 0 && (
              <div className="space-y-2">
                <Label>Selected Files</Label>
                <div className="lms-highlight p-3 rounded-lg space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      {getFileIcon(file.name)}
                      <span className="flex-1">{file.name}</span>
                      <span className="text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(1)} MB
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="lms-highlight p-4 rounded-lg">
              <h4 className="font-medium text-foreground mb-2">Content Guidelines</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Videos should be clear and well-lit</li>
                <li>• Audio should be clear without background noise</li>
                <li>• Documents should be properly formatted</li>
                <li>• All content will be reviewed before going live</li>
              </ul>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="lms-button-primary flex-1">
                <Upload className="h-4 w-4 mr-2" />
                Upload Content
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}