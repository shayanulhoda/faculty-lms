import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const performanceData = [
  { month: "Jan", engagement: 78, completion: 85, average: 82 },
  { month: "Feb", engagement: 82, completion: 88, average: 86 },
  { month: "Mar", engagement: 75, completion: 82, average: 79 },
  { month: "Apr", engagement: 88, completion: 92, average: 90 },
  { month: "May", engagement: 85, completion: 89, average: 87 },
  { month: "Jun", engagement: 90, completion: 94, average: 92 },
];

const topicPerformance = [
  { topic: "Data Structures", score: 92 },
  { topic: "Algorithms", score: 88 },
  { topic: "Database", score: 85 },
  { topic: "Web Dev", score: 94 },
  { topic: "Machine Learning", score: 79 },
];

export function StudentAnalytics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Student Engagement Trends */}
      <Card className="lms-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Student Engagement Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line 
                type="monotone" 
                dataKey="engagement" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                name="Engagement %"
              />
              <Line 
                type="monotone" 
                dataKey="completion" 
                stroke="hsl(var(--success))" 
                strokeWidth={2}
                name="Completion %"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Topic-wise Performance */}
      <Card className="lms-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Topic-wise Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topicPerformance} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                type="number" 
                domain={[0, 100]}
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                type="category" 
                dataKey="topic" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                width={80}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))", 
                  borderRadius: "8px",
                }}
              />
              <Bar 
                dataKey="score" 
                fill="hsl(var(--primary))"
                radius={[0, 4, 4, 0]}
                name="Average Score"
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}