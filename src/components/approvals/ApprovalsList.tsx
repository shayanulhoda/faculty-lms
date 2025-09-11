import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Video, Calendar, AlertCircle, CheckCircle, XCircle, Edit } from "lucide-react";

const approvals = [
  {
    id: "1",
    type: "video",
    title: "Physics Chapter 5 - Electromagnetic Induction",
    submittedOn: "2 days ago",
    status: "approved",
    reason: null,
    icon: Video
  },
  {
    id: "2",
    type: "test", 
    title: "Chemistry Organic Reactions Test",
    submittedOn: "1 day ago",
    status: "pending",
    reason: null,
    icon: FileText
  },
  {
    id: "3",
    type: "class",
    title: "Biology Live Class - Cell Division", 
    submittedOn: "3 hours ago",
    status: "rejected",
    reason: "Please provide more detailed learning objectives",
    icon: Calendar
  },
  {
    id: "4",
    type: "video",
    title: "Mathematics Calculus Basics",
    submittedOn: "5 days ago", 
    status: "approved",
    reason: null,
    icon: Video
  }
];

interface ApprovalsListProps {
  filter: string;
}

export function ApprovalsList({ filter }: ApprovalsListProps) {
  const filteredApprovals = filter === "all" 
    ? approvals 
    : approvals.filter(approval => approval.status === filter);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved": return <CheckCircle className="h-4 w-4 text-success" />;
      case "rejected": return <XCircle className="h-4 w-4 text-destructive" />;
      case "pending": return <AlertCircle className="h-4 w-4 text-warning" />;
      default: return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved": return <Badge className="bg-success text-success-foreground">Approved</Badge>;
      case "rejected": return <Badge variant="destructive">Rejected</Badge>;
      case "pending": return <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
      default: return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-4">
      {filteredApprovals.length === 0 ? (
        <Card className="lms-card">
          <CardContent className="text-center py-12">
            <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No items found</h3>
            <p className="text-muted-foreground">
              No content matches your current filter selection.
            </p>
          </CardContent>
        </Card>
      ) : (
        filteredApprovals.map((approval) => (
          <Card key={approval.id} className="lms-card">
            <CardContent className="flex items-start justify-between p-6">
              <div className="flex items-start gap-4">
                <div className="bg-highlight rounded-lg p-3">
                  <approval.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">{approval.title}</h3>
                    {getStatusBadge(approval.status)}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    {getStatusIcon(approval.status)}
                    <span>Submitted {approval.submittedOn}</span>
                  </div>
                  {approval.reason && (
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 mt-2">
                      <p className="text-sm text-destructive">
                        <strong>Rejection Reason:</strong> {approval.reason}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {approval.status === "rejected" && (
                  <Button size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Fix & Resubmit
                  </Button>
                )}
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}