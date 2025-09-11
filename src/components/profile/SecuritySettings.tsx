import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Shield, Key, Smartphone, AlertTriangle } from "lucide-react";
import { useState } from "react";

export function SecuritySettings() {
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  const handlePasswordChange = () => {
    console.log("Changing password");
    setPasswords({ current: "", new: "", confirm: "" });
  };

  return (
    <div className="space-y-6">
      {/* Change Password */}
      <Card className="lms-card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Key className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg font-semibold">Change Password</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input
              id="current-password"
              type="password"
              value={passwords.current}
              onChange={(e) => setPasswords({...passwords, current: e.target.value})}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input
              id="new-password"
              type="password"
              value={passwords.new}
              onChange={(e) => setPasswords({...passwords, new: e.target.value})}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input
              id="confirm-password"
              type="password"
              value={passwords.confirm}
              onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
            />
          </div>
          
          <Button onClick={handlePasswordChange}>
            Update Password
          </Button>
        </CardContent>
      </Card>

      {/* Two-Factor Authentication */}
      <Card className="lms-card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg font-semibold">Two-Factor Authentication</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Enable 2FA</h4>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account
              </p>
            </div>
            <Switch />
          </div>
          
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="flex items-start gap-2">
              <Shield className="h-4 w-4 text-success mt-0.5" />
              <div>
                <p className="text-sm font-medium">2FA is currently disabled</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Enable two-factor authentication for enhanced security
                </p>
              </div>
            </div>
          </div>
          
          <Button variant="outline">
            Setup 2FA
          </Button>
        </CardContent>
      </Card>

      {/* Security Preferences */}
      <Card className="lms-card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg font-semibold">Security Preferences</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Login Notifications</h4>
              <p className="text-sm text-muted-foreground">
                Get notified when someone logs into your account
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Session Timeout</h4>
              <p className="text-sm text-muted-foreground">
                Automatically log out after period of inactivity
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Password Recovery</h4>
              <p className="text-sm text-muted-foreground">
                Allow password reset via email
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Account Deletion */}
      <Card className="lms-card border-destructive/20">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle className="text-lg font-semibold text-destructive">Danger Zone</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium">Delete Account</h4>
            <p className="text-sm text-muted-foreground">
              Permanently delete your account and all associated data
            </p>
          </div>
          
          <Button variant="destructive" className="w-fit">
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}