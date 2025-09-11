import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Video, Clock, FileText, MessageSquare } from "lucide-react";

const overviewData = [
  {
    title: "Assigned Courses",
    value: "12",
    change: "+2 this month",
    icon: BookOpen,
    color: "text-primary"
  },
  {
    title: "Total Students",
    value: "847",
    change: "+23 new enrollments",
    icon: Users,
    color: "text-blue-600"
  },
  {
    title: "Upcoming Live Classes",
    value: "8",
    change: "This week",
    icon: Video,
    color: "text-green-600"
  },
  {
    title: "Pending Test Approvals",
    value: "3",
    change: "Awaiting review",
    icon: Clock,
    color: "text-warning"
  },
  {
    title: "Uploaded Videos",
    value: "156",
    change: "+12 this week",
    icon: FileText,
    color: "text-purple-600"
  },
  {
    title: "Recent Doubts",
    value: "24",
    change: "Need response",
    icon: MessageSquare,
    color: "text-orange-600"
  }
];

export function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {overviewData.map((item, index) => (
        <Card key={index} className="lms-card hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {item.title}
            </CardTitle>
            <item.icon className={`h-5 w-5 ${item.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{item.value}</div>
            <div className="flex items-center mt-2">
              <Badge variant="secondary" className="text-xs">
                {item.change}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}