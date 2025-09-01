import { Video, Upload, PlusCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const quickActions = [
  {
    title: "Start Live Class",
    description: "Begin an instant live session",
    icon: Video,
    variant: "default" as const,
    urgent: true,
  },
  {
    title: "Upload Content", 
    description: "Add new course materials",
    icon: Upload,
    variant: "secondary" as const,
  },
  {
    title: "Create Test",
    description: "Design new assessment",
    icon: PlusCircle, 
    variant: "secondary" as const,
  },
  {
    title: "Schedule Class",
    description: "Plan upcoming sessions",
    icon: Calendar,
    variant: "secondary" as const,
  },
];

export function QuickActions() {
  return (
    <Card className="lms-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <Button
              key={action.title}
              variant={action.variant}
              className={`w-full justify-start h-auto p-4 ${
                action.urgent ? 'bg-primary hover:bg-primary-hover text-primary-foreground' : ''
              }`}
            >
              <div className="flex items-center gap-3 w-full">
                <Icon className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">{action.title}</div>
                  <div className="text-xs opacity-75">{action.description}</div>
                </div>
              </div>
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
}