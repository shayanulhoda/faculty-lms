import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Upload, FileText, Calendar, MessageSquare } from "lucide-react";
import { useState } from "react";
import { LiveClassForm } from "@/components/lms/LiveClassForm";
import { RecordedContentForm } from "@/components/lms/RecordedContentForm";
import { TestCreationForm } from "@/components/lms/TestCreationForm";

export function QuickActions() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const actions = [
    {
      title: "Start Live Class",
      description: "Begin a live session",
      icon: Video,
      action: () => setActiveModal("live-class"),
      variant: "default" as const
    },
    {
      title: "Upload Content",
      description: "Add videos or materials",
      icon: Upload,
      action: () => setActiveModal("upload-content"),
      variant: "outline" as const
    },
    {
      title: "Create Test",
      description: "Design assessments",
      icon: FileText,
      action: () => setActiveModal("create-test"),
      variant: "outline" as const
    },
    {
      title: "Schedule Class",
      description: "Plan future sessions",
      icon: Calendar,
      action: () => setActiveModal("schedule-class"),
      variant: "outline" as const
    },
    {
      title: "View Doubts",
      description: "Answer student queries",
      icon: MessageSquare,
      action: () => window.location.href = "/communities",
      variant: "outline" as const
    }
  ];

  return (
    <>
      <Card className="lms-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              className="w-full justify-start h-auto p-4"
              onClick={action.action}
            >
              <div className="flex items-center gap-3">
                <action.icon className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">{action.title}</div>
                  <div className="text-sm text-muted-foreground">{action.description}</div>
                </div>
              </div>
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Modals */}
      {activeModal === "live-class" && (
        <LiveClassForm onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "upload-content" && (
        <RecordedContentForm onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "create-test" && (
        <TestCreationForm onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "schedule-class" && (
        <LiveClassForm onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}