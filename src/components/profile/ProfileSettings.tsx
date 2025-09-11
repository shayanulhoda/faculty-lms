import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Save } from "lucide-react";
import { useState } from "react";

export function ProfileSettings() {
  const [profile, setProfile] = useState({
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    qualification: "Ph.D. in Physics",
    subjects: "Physics, Mathematics",
    bio: "Experienced physics professor with 15+ years of teaching experience in undergraduate and graduate programs.",
    experience: "15 years",
    specialization: "Quantum Mechanics, Electromagnetism"
  });

  const handleSave = () => {
    console.log("Saving profile:", profile);
  };

  return (
    <div className="space-y-6">
      {/* Profile Picture */}
      <Card className="lms-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Profile Picture</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
            <AvatarFallback className="text-lg">SJ</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <Button variant="outline">
              <Camera className="h-4 w-4 mr-2" />
              Upload New Picture
            </Button>
            <p className="text-sm text-muted-foreground">
              JPG, PNG or GIF. Maximum file size 2MB.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Basic Information */}
      <Card className="lms-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={profile.phone}
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input
                id="experience"
                value={profile.experience}
                onChange={(e) => setProfile({...profile, experience: e.target.value})}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={profile.bio}
              onChange={(e) => setProfile({...profile, bio: e.target.value})}
              rows={4}
              placeholder="Tell students about yourself..."
            />
          </div>
        </CardContent>
      </Card>

      {/* Professional Details */}
      <Card className="lms-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Professional Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="qualification">Highest Qualification</Label>
              <Input
                id="qualification"
                value={profile.qualification}
                onChange={(e) => setProfile({...profile, qualification: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subjects">Teaching Subjects</Label>
              <Input
                id="subjects"
                value={profile.subjects}
                onChange={(e) => setProfile({...profile, subjects: e.target.value})}
                placeholder="e.g., Physics, Mathematics"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="specialization">Areas of Specialization</Label>
            <Input
              id="specialization"
              value={profile.specialization}
              onChange={(e) => setProfile({...profile, specialization: e.target.value})}
              placeholder="e.g., Quantum Mechanics, Electromagnetism"
            />
          </div>
        </CardContent>
      </Card>

      {/* Save Changes */}
      <div className="flex justify-end gap-3">
        <Button variant="outline">Cancel Changes</Button>
        <Button onClick={handleSave}>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );
}