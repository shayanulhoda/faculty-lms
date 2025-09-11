import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Clock, User, Reply, Paperclip, Link as LinkIcon } from "lucide-react";
import { useState } from "react";

const doubts = [
  {
    id: "1",
    student: "Priya Sharma",
    subject: "Physics",
    topic: "Electromagnetic Induction",
    question: "Can someone explain why the induced EMF is always opposite to the change in magnetic flux according to Lenz's law?",
    timeAgo: "15 minutes ago",
    status: "pending",
    image: null
  },
  {
    id: "2",
    student: "Rahul Kumar",
    subject: "Chemistry", 
    topic: "Organic Reactions",
    question: "What's the mechanism for SN1 vs SN2 reactions? I'm confused about when each occurs.",
    timeAgo: "1 hour ago",
    status: "pending",
    image: null
  },
  {
    id: "3",
    student: "Ananya Patel",
    subject: "Biology",
    topic: "Cell Division",
    question: "What are the key differences between mitosis and meiosis in terms of chromosome behavior?",
    timeAgo: "2 hours ago", 
    status: "answered",
    image: null
  }
];

export function DoubtsPanel() {
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  const handleReply = (doubtId: string) => {
    console.log("Replying to doubt:", doubtId, "with:", replyText);
    setReplyingTo(null);
    setReplyText("");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Student Doubts</h2>
          <p className="text-sm text-muted-foreground">
            {doubts.filter(d => d.status === "pending").length} pending responses
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline">All Subjects</Badge>
          <Badge variant="outline">Latest First</Badge>
        </div>
      </div>

      {/* Doubts List */}
      <div className="space-y-4">
        {doubts.map((doubt) => (
          <Card key={doubt.id} className="lms-card">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-highlight rounded-full p-2">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{doubt.student}</h3>
                      <Badge variant="secondary">{doubt.subject}</Badge>
                      <Badge 
                        variant={doubt.status === "pending" ? "destructive" : "default"}
                        className="text-xs"
                      >
                        {doubt.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Clock className="h-3 w-3" />
                      <span>{doubt.timeAgo}</span>
                      <span>•</span>
                      <span>Topic: {doubt.topic}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-sm">{doubt.question}</p>
              </div>

              {replyingTo === doubt.id ? (
                <div className="space-y-3">
                  <Textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Type your response here..."
                    rows={4}
                  />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => handleReply(doubt.id)}>
                      <Reply className="h-4 w-4 mr-2" />
                      Send Reply
                    </Button>
                    <Button variant="outline" size="sm">
                      <Paperclip className="h-4 w-4 mr-2" />
                      Attach File
                    </Button>
                    <Button variant="outline" size="sm">
                      <LinkIcon className="h-4 w-4 mr-2" />
                      Link Content
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setReplyingTo(null)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    onClick={() => setReplyingTo(doubt.id)}
                    disabled={doubt.status === "answered"}
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    {doubt.status === "answered" ? "Answered" : "Reply"}
                  </Button>
                  <Button variant="outline" size="sm">
                    <LinkIcon className="h-4 w-4 mr-2" />
                    Link to Content
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}