import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Plus, Eye } from "lucide-react";

const courses = [
  {
    id: "1",
    name: "Physics - Mechanics",
    chapters: 8,
    students: 156,
    status: "Active",
    lastUpdated: "2 days ago"
  },
  {
    id: "2", 
    name: "Chemistry - Organic",
    chapters: 12,
    students: 134,
    status: "Active",
    lastUpdated: "1 week ago"
  },
  {
    id: "3",
    name: "Biology - Cell Structure",
    chapters: 6,
    students: 178,
    status: "Active", 
    lastUpdated: "3 days ago"
  }
];

interface CourseListProps {
  onSelectCourse: (courseId: string) => void;
}

export function CourseList({ onSelectCourse }: CourseListProps) {
  return (
    <div className="space-y-6">
      {/* Header with Add Course */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Your Assigned Courses</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Request New Course
        </Button>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="lms-card hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <BookOpen className="h-8 w-8 text-primary" />
                <Badge variant="secondary">{course.status}</Badge>
              </div>
              <CardTitle className="text-lg">{course.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{course.chapters} chapters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{course.students} students</span>
                </div>
              </div>
              
              <div className="text-xs text-muted-foreground">
                Last updated: {course.lastUpdated}
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => onSelectCourse(course.id)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Chapters
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}