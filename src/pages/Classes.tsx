import { useState } from "react";
import { LMSLayout } from "@/components/lms/LMSLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, BookOpen, Play, Upload, FileText, Users, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { LiveClassForm } from "@/components/lms/LiveClassForm";
import { RecordedContentForm } from "@/components/lms/RecordedContentForm";
import { TestCreationForm } from "@/components/lms/TestCreationForm";

const Classes = () => {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  // Mock data - replace with actual data from your backend
  const classes = [
    {
      id: 1,
      title: "Physics - Mechanics",
      description: "Comprehensive coverage of mechanics for NEET preparation",
      chapters: [
        {
          id: 1,
          title: "Motion in a Straight Line",
          liveClasses: 3,
          recordedContent: 5,
          tests: 2,
          status: "approved"
        },
        {
          id: 2,
          title: "Motion in a Plane",
          liveClasses: 2,
          recordedContent: 4,
          tests: 1,
          status: "pending"
        }
      ]
    },
    {
      id: 2,
      title: "Chemistry - Organic",
      description: "Organic chemistry fundamentals and reactions",
      chapters: [
        {
          id: 3,
          title: "Hydrocarbons",
          liveClasses: 4,
          recordedContent: 6,
          tests: 3,
          status: "approved"
        }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "pending":
        return <AlertCircle className="h-4 w-4 text-orange-600" />;
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      approved: "bg-green-100 text-green-800 border-green-200",
      pending: "bg-orange-100 text-orange-800 border-orange-200",
      rejected: "bg-red-100 text-red-800 border-red-200"
    };
    
    return (
      <Badge className={`${variants[status as keyof typeof variants]} border`}>
        {getStatusIcon(status)}
        <span className="ml-1 capitalize">{status}</span>
      </Badge>
    );
  };

  return (
    <LMSLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Classes</h1>
            <p className="text-muted-foreground mt-1">
              Manage your class content and chapters
            </p>
          </div>
          <Button className="lms-button-primary">
            <Plus className="h-4 w-4 mr-2" />
            Add New Class
          </Button>
        </div>

        {/* Classes Grid */}
        <div className="grid gap-6">
          {classes.map((classItem) => (
            <Card key={classItem.id} className="lms-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    {classItem.title}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedClass(selectedClass === classItem.id ? null : classItem.id)}
                  >
                    {selectedClass === classItem.id ? 'Hide Chapters' : 'View Chapters'}
                  </Button>
                </CardTitle>
                <p className="text-muted-foreground">{classItem.description}</p>
              </CardHeader>

              {selectedClass === classItem.id && (
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Chapters</h3>
                      <Button size="sm" className="lms-button-secondary">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Chapter
                      </Button>
                    </div>

                    <div className="grid gap-4">
                      {classItem.chapters.map((chapter) => (
                        <Card key={chapter.id} className="border border-border">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-medium text-foreground">{chapter.title}</h4>
                                {getStatusBadge(chapter.status)}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                <div className="flex items-center gap-4">
                                  <span className="flex items-center gap-1">
                                    <Play className="h-3 w-3" />
                                    {chapter.liveClasses} Live
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Upload className="h-3 w-3" />
                                    {chapter.recordedContent} Recorded
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <FileText className="h-3 w-3" />
                                    {chapter.tests} Tests
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-2 flex-wrap">
                              <Button 
                                size="sm" 
                                className="lms-button-primary"
                                onClick={() => setActiveModal('live-class')}
                              >
                                <Play className="h-4 w-4 mr-1" />
                                Start Live Class
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => setActiveModal('recorded-content')}
                              >
                                <Upload className="h-4 w-4 mr-1" />
                                Upload Content
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => setActiveModal('test-creation')}
                              >
                                <FileText className="h-4 w-4 mr-1" />
                                Create Test
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Modals */}
      {activeModal === 'live-class' && (
        <LiveClassForm onClose={() => setActiveModal(null)} />
      )}
      {activeModal === 'recorded-content' && (
        <RecordedContentForm onClose={() => setActiveModal(null)} />
      )}
      {activeModal === 'test-creation' && (
        <TestCreationForm onClose={() => setActiveModal(null)} />
      )}
    </LMSLayout>
  );
};

export default Classes;