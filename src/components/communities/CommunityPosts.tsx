import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, MessageSquare, Heart, Share, User } from "lucide-react";
import { useState } from "react";

const posts = [
  {
    id: "1",
    title: "Important Update: NEET Exam Pattern Changes",
    content: "Dear students, please note the recent changes in NEET exam pattern for 2024. The number of questions in Physics section has been reduced from 50 to 45.",
    author: "You",
    timeAgo: "2 hours ago",
    likes: 24,
    comments: 8,
    type: "announcement"
  },
  {
    id: "2", 
    title: "Study Tips for Organic Chemistry",
    content: "Here are some effective strategies to master organic chemistry reactions. Focus on understanding mechanisms rather than memorizing.",
    author: "You",
    timeAgo: "1 day ago", 
    likes: 18,
    comments: 12,
    type: "tip"
  }
];

export function CommunityPosts() {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    type: "general"
  });

  const handleCreatePost = () => {
    console.log("Creating post:", newPost);
    setShowCreatePost(false);
    setNewPost({ title: "", content: "", type: "general" });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Community Posts</h2>
          <p className="text-sm text-muted-foreground">
            Share announcements, tips, and engage with your students
          </p>
        </div>
        <Button onClick={() => setShowCreatePost(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Create Post
        </Button>
      </div>

      {/* Create Post Form */}
      {showCreatePost && (
        <Card className="lms-card">
          <CardHeader>
            <CardTitle>Create New Post</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Post Title</Label>
              <Input
                id="title"
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                placeholder="Enter post title"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={newPost.content}
                onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                placeholder="Write your post content..."
                rows={4}
              />
            </div>
            
            <div className="flex gap-3">
              <Button onClick={handleCreatePost}>
                Publish Post
              </Button>
              <Button variant="outline" onClick={() => setShowCreatePost(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Posts List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="lms-card">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{post.title}</h3>
                      <Badge variant={post.type === "announcement" ? "default" : "secondary"}>
                        {post.type}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      By {post.author} • {post.timeAgo}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm">{post.content}</p>
              
              <div className="flex items-center gap-4 pt-2 border-t">
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  {post.comments} Comments
                </Button>
                <Button variant="ghost" size="sm">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}