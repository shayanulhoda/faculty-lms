import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  Share, 
  PenTool, 
  Users, 
  MessageCircle, 
  Send,
  Clock,
  Eye,
  X
} from "lucide-react";

interface LiveClassInterfaceProps {
  classTitle: string;
  onEndClass: () => void;
}

export function LiveClassInterface({ classTitle, onEndClass }: LiveClassInterfaceProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [elapsedTime, setElapsedTime] = useState(0);
  
  // Mock data for attendees and messages
  const [attendees] = useState([
    { id: 1, name: 'Rahul Sharma', joinTime: '2:00 PM', duration: '25 min', isActive: true },
    { id: 2, name: 'Priya Patel', joinTime: '2:05 PM', duration: '20 min', isActive: true },
    { id: 3, name: 'Arjun Kumar', joinTime: '2:03 PM', duration: '22 min', isActive: false },
    { id: 4, name: 'Sneha Singh', joinTime: '2:01 PM', duration: '24 min', isActive: true },
  ]);

  const [messages, setMessages] = useState([
    { id: 1, student: 'Rahul Sharma', message: 'Can you explain the formula again?', time: '2:15 PM' },
    { id: 2, student: 'Priya Patel', message: 'The diagram is very clear, thank you!', time: '2:16 PM' },
    { id: 3, student: 'Sneha Singh', message: 'What is the next topic?', time: '2:18 PM' },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const teacherMessage = {
        id: Date.now(),
        student: 'Teacher',
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, teacherMessage]);
      setNewMessage('');
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold">{classTitle}</h1>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{formatTime(elapsedTime)}</span>
          </div>
          <Badge variant="secondary" className="bg-white/20 text-white">
            <Eye className="h-3 w-3 mr-1" />
            {attendees.filter(a => a.isActive).length} Live
          </Badge>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => setIsVideoOff(!isVideoOff)}
          >
            {isVideoOff ? <VideoOff className="h-4 w-4" /> : <Video className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Share className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <PenTool className="h-4 w-4" />
          </Button>
          <Button
            className="lms-button-primary bg-red-600 hover:bg-red-700"
            onClick={onEndClass}
          >
            End Class
          </Button>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Video Area - 70% */}
        <div className="flex-1 bg-gray-900 flex items-center justify-center">
          {isVideoOff ? (
            <div className="text-white text-center">
              <VideoOff className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Video is turned off</p>
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
              <div className="text-white text-center">
                <Video className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg">Live Video Stream</p>
                <p className="text-sm opacity-75">Teaching in progress...</p>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar - 30% */}
        <div className="w-80 border-l border-border flex flex-col bg-background">
          {/* Attendance Panel */}
          <Card className="m-4 mb-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Users className="h-4 w-4" />
                Attendance ({attendees.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ScrollArea className="h-32">
                <div className="space-y-2">
                  {attendees.map((attendee) => (
                    <div key={attendee.id} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${attendee.isActive ? 'bg-green-500' : 'bg-gray-400'}`} />
                        <span className="font-medium">{attendee.name}</span>
                      </div>
                      <div className="text-muted-foreground">
                        <div>{attendee.joinTime}</div>
                        <div>{attendee.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Comments Panel */}
          <Card className="flex-1 mx-4 mb-4 flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Live Comments
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col pt-0">
              <ScrollArea className="flex-1 pr-3 mb-3">
                <div className="space-y-3">
                  {messages.map((msg) => (
                    <div key={msg.id} className="text-xs">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-foreground">{msg.student}</span>
                        <span className="text-muted-foreground">{msg.time}</span>
                      </div>
                      <p className="text-muted-foreground bg-muted p-2 rounded text-xs">
                        {msg.message}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 text-xs"
                />
                <Button type="submit" size="icon" className="h-8 w-8">
                  <Send className="h-3 w-3" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}