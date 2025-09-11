import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const attendanceData = [
  { month: 'Jan', percentage: 85 },
  { month: 'Feb', percentage: 78 },
  { month: 'Mar', percentage: 92 },
  { month: 'Apr', percentage: 88 },
  { month: 'May', percentage: 95 },
  { month: 'Jun', percentage: 87 }
];

const viewsData = [
  { content: 'Live Classes', views: 1245 },
  { content: 'Recorded Videos', views: 2134 },
  { content: 'Study Materials', views: 892 },
  { content: 'Practice Tests', views: 1567 }
];

const engagementBreakdown = [
  { name: 'Active Participants', value: 68, color: '#E73121' },
  { name: 'Passive Viewers', value: 22, color: '#F59E0B' },
  { name: 'Irregular Attendees', value: 10, color: '#6B7280' }
];

export function EngagementAnalytics() {
  return (
    <div className="space-y-6">
      <Card className="lms-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Class Attendance %</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="percentage" fill="#E73121" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="lms-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Content Views</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={viewsData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="content" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="views" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="lms-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Student Engagement Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={engagementBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {engagementBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {engagementBreakdown.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-muted-foreground">{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}