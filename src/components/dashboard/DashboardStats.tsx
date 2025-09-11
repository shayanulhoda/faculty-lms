import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const attendanceData = [
  { month: 'Jan', attendance: 85 },
  { month: 'Feb', attendance: 78 },
  { month: 'Mar', attendance: 92 },
  { month: 'Apr', attendance: 88 },
  { month: 'May', attendance: 95 },
  { month: 'Jun', attendance: 87 }
];

const submissionData = [
  { week: 'Week 1', submissions: 156 },
  { week: 'Week 2', submissions: 142 },
  { week: 'Week 3', submissions: 178 },
  { week: 'Week 4', submissions: 165 }
];

const engagementData = [
  { name: 'Videos Watched', value: 65, color: '#E73121' },
  { name: 'Tests Completed', value: 25, color: '#F59E0B' },
  { name: 'Doubts Asked', value: 10, color: '#10B981' }
];

export function DashboardStats() {
  return (
    <div className="space-y-6">
      {/* Attendance Trends */}
      <Card className="lms-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Student Attendance Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="attendance" stroke="#E73121" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Test Submissions */}
        <Card className="lms-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Test Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={submissionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="submissions" fill="#E73121" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Content Engagement */}
        <Card className="lms-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Content Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={engagementData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {engagementData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {engagementData.map((item, index) => (
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
    </div>
  );
}