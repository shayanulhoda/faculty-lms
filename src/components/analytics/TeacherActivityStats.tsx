import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, FileText, Users, Calendar, TrendingUp, Clock } from "lucide-react";

const activityStats = [
  {
    title: "Classes Conducted",
    value: "47",
    change: "+5 this month",
    icon: Video,
    color: "text-primary"
  },
  {
    title: "Content Uploaded", 
    value: "156",
    change: "+12 this week",
    icon: FileText,
    color: "text-blue-600"
  },
  {
    title: "Tests Created",
    value: "23", 
    change: "+3 this month",
    icon: Calendar,
    color: "text-green-600"
  },
  {
    title: "Total Teaching Hours",
    value: "289",
    change: "+18 this month", 
    icon: Clock,
    color: "text-purple-600"
  },
  {
    title: "Active Students",
    value: "847",
    change: "+23 new",
    icon: Users,
    color: "text-orange-600"
  },
  {
    title: "Engagement Rate",
    value: "92%",
    change: "+2% improvement",
    icon: TrendingUp,
    color: "text-success"
  }
];

export function TeacherActivityStats() {
  return (
    <Card className="lms-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Your Teaching Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activityStats.map((stat, index) => (
            <div key={index} className="bg-muted/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.title}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}