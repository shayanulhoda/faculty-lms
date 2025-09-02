import { useState } from "react";
import { Calendar as CalendarIcon, Clock, Users, BookOpen, FileText, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { LMSLayout } from "@/components/lms/LMSLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const events = [
  { 
    id: 1, 
    title: "Physics - Mechanics Live Class", 
    date: "2024-01-15", 
    time: "10:00 AM", 
    type: "class", 
    students: 45,
    duration: "90 min"
  },
  { 
    id: 2, 
    title: "Chemistry Mock Test - Organic", 
    date: "2024-01-16", 
    time: "2:00 PM", 
    type: "test", 
    students: 38,
    duration: "3 hours"
  },
  { 
    id: 3, 
    title: "Biology Discussion Forum", 
    date: "2024-01-17", 
    time: "4:00 PM", 
    type: "community", 
    students: 22,
    duration: "60 min"
  },
  { 
    id: 4, 
    title: "Physics - Waves & Optics", 
    date: "2024-01-18", 
    time: "9:00 AM", 
    type: "class", 
    students: 42,
    duration: "90 min"
  },
  { 
    id: 5, 
    title: "NEET Full Length Test 3", 
    date: "2024-01-19", 
    time: "10:00 AM", 
    type: "test", 
    students: 156,
    duration: "3 hours"
  }
];

const getEventTypeColor = (type: string) => {
  switch (type) {
    case 'class': return 'bg-primary text-primary-foreground';
    case 'test': return 'bg-warning text-warning-foreground';
    case 'community': return 'bg-highlight text-highlight-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

const getEventIcon = (type: string) => {
  switch (type) {
    case 'class': return BookOpen;
    case 'test': return FileText;
    case 'community': return Users;
    default: return CalendarIcon;
  }
};

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');

  return (
    <LMSLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Calendar</h1>
            <p className="text-muted-foreground mt-1">
              Manage your NEET preparation schedule, classes, tests, and community events
            </p>
          </div>
          <Button className="lms-primary-button">
            <Plus className="h-4 w-4 mr-2" />
            Schedule Event
          </Button>
        </div>

        {/* Calendar Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <h2 className="text-xl font-semibold">
              {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h2>
          </div>
          
          <div className="flex gap-2">
            {['month', 'week', 'day'].map((viewType) => (
              <Button
                key={viewType}
                variant={view === viewType ? 'default' : 'outline'}
                size="sm"
                onClick={() => setView(viewType as any)}
                className={view === viewType ? 'lms-primary-button' : ''}
              >
                {viewType.charAt(0).toUpperCase() + viewType.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Event Legend */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-sm text-muted-foreground">Live Classes</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-warning"></div>
            <span className="text-sm text-muted-foreground">Tests & Assessments</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-highlight"></div>
            <span className="text-sm text-muted-foreground">Community Events</span>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar View */}
          <div className="lg:col-span-2">
            <Card className="lms-card h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  {view.charAt(0).toUpperCase() + view.slice(1)} View
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 35 }, (_, i) => {
                    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i - 6);
                    const dayEvents = events.filter(event => 
                      new Date(event.date).toDateString() === date.toDateString()
                    );
                    
                    return (
                      <div key={i} className="min-h-[100px] p-2 border border-border rounded-lg">
                        <div className="text-sm font-medium mb-1">
                          {date.getDate()}
                        </div>
                        <div className="space-y-1">
                          {dayEvents.slice(0, 2).map((event) => (
                            <div 
                              key={event.id}
                              className={`text-xs p-1 rounded text-center ${getEventTypeColor(event.type)}`}
                            >
                              {event.title.substring(0, 15)}...
                            </div>
                          ))}
                          {dayEvents.length > 2 && (
                            <div className="text-xs text-muted-foreground text-center">
                              +{dayEvents.length - 2} more
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events */}
          <div className="space-y-6">
            <Card className="lms-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {events.slice(0, 5).map((event) => {
                  const Icon = getEventIcon(event.type);
                  return (
                    <div key={event.id} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      <div className={`p-2 rounded-lg ${getEventTypeColor(event.type)}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm leading-tight mb-1">
                          {event.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{event.time}</span>
                          <span>•</span>
                          <span>{event.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {event.students} students
                          </Badge>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="lms-card">
              <CardHeader>
                <CardTitle>This Week</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Live Classes</span>
                  <Badge className="bg-primary text-primary-foreground">8</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Tests Scheduled</span>
                  <Badge className="bg-warning text-warning-foreground">3</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Community Events</span>
                  <Badge className="bg-highlight text-highlight-foreground">2</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Hours</span>
                  <Badge variant="outline">24.5h</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </LMSLayout>
  );
}