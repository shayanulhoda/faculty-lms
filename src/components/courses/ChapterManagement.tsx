import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, Video, FileText, Play, Upload, Eye, BookOpen } from "lucide-react";
import { useState } from "react";
import { ChapterForm } from "./ChapterForm";
import { RecordedContentForm } from "@/components/lms/RecordedContentForm";
import { LiveClassForm } from "@/components/lms/LiveClassForm";

const chapters = [
  {
    id: "1",
    title: "Introduction to Mechanics",
    videos: 5,
    lastUpdated: "2 days ago",
    status: "Active"
  },
  {
    id: "2", 
    title: "Laws of Motion",
    videos: 8,
    lastUpdated: "1 week ago",
    status: "Active"
  },
  {
    id: "3",
    title: "Work and Energy",
    videos: 3,
    lastUpdated: "3 days ago", 
    status: "Draft"
  }
];

interface ChapterManagementProps {
  courseId: string;
  onBack: () => void;
}

export function ChapterManagement({ courseId, onBack }: ChapterManagementProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Button>
          <div>
            <h2 className="text-2xl font-bold">Physics - Mechanics</h2>
            <p className="text-muted-foreground">Manage chapters and content</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button onClick={() => setActiveModal("new-chapter")}>
            <Plus className="h-4 w-4 mr-2" />
            Add New Chapter
          </Button>
          <Button variant="outline" onClick={() => setActiveModal("upload-content")}>
            <Upload className="h-4 w-4 mr-2" />
            Upload Content
          </Button>
          <Button variant="outline" onClick={() => setActiveModal("live-class")}>
            <Video className="h-4 w-4 mr-2" />
            Start Live Class
          </Button>
        </div>

        {/* Chapters List */}
        <div className="grid grid-cols-1 gap-4">
          {chapters.map((chapter) => (
            <Card key={chapter.id} className="lms-card">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-highlight rounded-lg p-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{chapter.title}</h3>
                      <Badge variant={chapter.status === "Active" ? "default" : "secondary"}>
                        {chapter.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Video className="h-4 w-4" />
                        {chapter.videos} videos
                      </span>
                      <span>Updated {chapter.lastUpdated}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Content
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveModal("upload-content")}>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload
                  </Button>
                  <Button size="sm" onClick={() => setActiveModal("live-class")}>
                    <Play className="h-4 w-4 mr-2" />
                    Live Class
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modals */}
      {activeModal === "new-chapter" && (
        <ChapterForm onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "upload-content" && (
        <RecordedContentForm onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "live-class" && (
        <LiveClassForm onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}