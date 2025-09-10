import { Users, BookOpen, Video, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const overviewData = [
  {
    title: "Total NEET Students",
    value: "2,156",
    change: "+18%",
    changeType: "positive" as const,
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "Active Classes",  
    value: "12",
    change: "+3",
    changeType: "positive" as const,
    icon: BookOpen,
    color: "text-green-600",
  },
  {
    title: "Upcoming Live Classes",
    value: "24",
    change: "This Week",
    changeType: "neutral" as const,
    icon: Video,
    color: "text-purple-600",
  },
  {
    title: "Pending Tests",
    value: "6",
    change: "Review Required",
    changeType: "attention" as const,
    icon: Clock,
    color: "text-orange-600",
  },
];

export function OverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {overviewData.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.title} className="lms-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {item.title}
              </CardTitle>
              <Icon className={`h-5 w-5 ${item.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{item.value}</div>
              <p className={`text-xs mt-1 ${
                item.changeType === 'positive' ? 'text-success' :
                item.changeType === 'attention' ? 'text-warning' :
                'text-muted-foreground'
              }`}>
                {item.change}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}