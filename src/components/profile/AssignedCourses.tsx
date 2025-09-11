import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Calendar, Eye, MessageSquare } from "lucide-react";

const assignedCourses = [
  {
    id: "1",
    name: "Physics - Mechanics",
    code: "PHY101",
    semester: "Fall 2024",
    students: 156,
    chapters: 8,
    status: "Active",
    startDate: "Aug 15, 2024",
    endDate: "Dec 15, 2024",
    schedule: "Mon, Wed, Fri - 10:00 AM"
  },
  {
    id: "2",
    name: "Chemistry - Organic Chemistry",
    code: "CHE201", 
    semester: "Fall 2024",
    students: 134,
    chapters: 12,
    status: "Active",
    startDate: "Aug 15, 2024",
    endDate: "Dec 15, 2024",
    schedule: "Tue, Thu - 2:00 PM"
  },
  {
    id: "3",
    name: "Biology - Cell Structure and Function",
    code: "BIO101",
    semester: "Fall 2024", 
    students: 178,
    chapters: 6,
    status: "Active",
    startDate: "Aug 15, 2024",
    endDate: "Dec 15, 2024",
    schedule: "Mon, Wed - 9:00 AM"
  },
  {
    id: "4",
    name: "Physics - Thermodynamics",
    code: "PHY201",
    semester: "Spring 2024",
    students: 89,
    chapters: 10,
    status: "Completed",
    startDate: "Jan 15, 2024",
    endDate: "May 15, 2024", 
    schedule: "Tue, Thu, Fri - 11:00 AM"
  }
];

export function AssignedCourses() {
  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="lms-card">
          <CardContent className="flex items-center gap-3 p-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <div>
              <div className="text-2xl font-bold">4</div>
              <div className="text-sm text-muted-foreground">Total Courses</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="lms-card">
          <CardContent className="flex items-center gap-3 p-4">
            <Users className="h-8 w-8 text-blue-600" />
            <div>
              <div className="text-2xl font-bold">557</div>
              <div className="text-sm text-muted-foreground">Total Students</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="lms-card">
          <CardContent className="flex items-center gap-3 p-4">
            <Calendar className="h-8 w-8 text-green-600" />
            <div>
              <div className="text-2xl font-bold">3</div>
              <div className="text-sm text-muted-foreground">Active Courses</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="lms-card">
          <CardContent className="flex items-center gap-3 p-4">
            <MessageSquare className="h-8 w-8 text-purple-600" />
            <div>
              <div className="text-2xl font-bold">36</div>
              <div className="text-sm text-muted-foreground">Total Chapters</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Details */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Course Details</h2>
        
        {assignedCourses.map((course) => (
          <Card key={course.id} className="lms-card">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{course.name}</h3>
                    <Badge variant={course.status === "Active" ? "default" : "secondary"}>
                      {course.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Course Code: {course.code}</div>
                    <div>Semester: {course.semester}</div>
                    <div>Schedule: {course.schedule}</div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  {course.status === "Active" && (
                    <Button size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Manage
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span>{course.chapters} chapters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Start: {course.startDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>End: {course.endDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}