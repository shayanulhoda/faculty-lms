import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const scoreData = [
  { test: 'Physics Test 1', average: 76 },
  { test: 'Chemistry Test 1', average: 82 },
  { test: 'Biology Test 1', average: 79 },
  { test: 'Physics Test 2', average: 84 },
  { test: 'Chemistry Test 2', average: 78 },
  { test: 'Biology Test 2', average: 86 }
];

const topicPerformance = [
  { topic: 'Mechanics', score: 85, difficulty: 'Easy' },
  { topic: 'Thermodynamics', score: 72, difficulty: 'Medium' },
  { topic: 'Electromagnetism', score: 68, difficulty: 'Hard' },
  { topic: 'Optics', score: 79, difficulty: 'Medium' },
  { topic: 'Modern Physics', score: 74, difficulty: 'Hard' }
];

const trendData = [
  { month: 'Jan', score: 72 },
  { month: 'Feb', score: 75 },
  { month: 'Mar', score: 78 },
  { month: 'Apr', score: 81 },
  { month: 'May', score: 85 },
  { month: 'Jun', score: 83 }
];

export function PerformanceAnalytics() {
  return (
    <div className="space-y-6">
      <Card className="lms-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Average Test Scores</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={scoreData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="test" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="average" fill="#E73121" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="lms-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Performance Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#10B981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="lms-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Topic-wise Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topicPerformance.map((topic, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <div className="font-medium">{topic.topic}</div>
                  <div className="text-sm text-muted-foreground">
                    Difficulty: {topic.difficulty}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold">{topic.score}%</div>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${topic.score}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}