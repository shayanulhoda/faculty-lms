import { Play, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const upcomingClasses = [
  {
    id: 1,
    title: "Advanced Data Structures",
    time: "10:00 AM - 11:30 AM",
    date: "Today",
    students: 35,
    status: "starting-soon" as const,
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals", 
    time: "2:00 PM - 3:30 PM",
    date: "Today",
    students: 42,
    status: "scheduled" as const,
  },
  {
    id: 3,
    title: "Database Management Systems",
    time: "9:00 AM - 10:30 AM", 
    date: "Tomorrow",
    students: 28,
    status: "scheduled" as const,
  },
];

export function UpcomingClasses() {
  return (
    <Card className="lms-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Upcoming Live Classes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingClasses.map((classItem) => (
          <div
            key={classItem.id}
            className={`p-4 rounded-lg border ${
              classItem.status === 'starting-soon' 
                ? 'bg-highlight border-highlight-border' 
                : 'bg-background border-border'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-medium text-foreground">{classItem.title}</h4>
                <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {classItem.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {classItem.students} students
                  </div>
                </div>
              </div>
              <Badge 
                variant={classItem.status === 'starting-soon' ? 'destructive' : 'secondary'}
                className="text-xs"
              >
                {classItem.date}
              </Badge>
            </div>
            
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant={classItem.status === 'starting-soon' ? 'default' : 'secondary'}
                className={classItem.status === 'starting-soon' ? 'bg-primary hover:bg-primary-hover' : ''}
              >
                <Play className="h-4 w-4 mr-1" />
                {classItem.status === 'starting-soon' ? 'Join Now' : 'Launch Class'}
              </Button>
              <Button size="sm" variant="outline">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}