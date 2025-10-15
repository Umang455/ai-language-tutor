'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Palette, 
  Volume2,
  VolumeX,
  Moon,
  Sun,
  Monitor,
  Languages,
  Target,
  Trophy,
  Eye,
  EyeOff,
  Save,
  Trash2,
  Download,
  Upload,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Lock,
  Key,
  Smartphone,
  CreditCard,
  HelpCircle,
  LogOut,
  ChevronRight,
  Check,
  X,
  Edit3,
  Camera
} from 'lucide-react';

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('profile');
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    lessons: true,
    achievements: true,
    friendRequests: true,
    weeklyReport: false
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'friends',
    showProgress: true,
    showStreak: true,
    showXP: true,
    allowFriendRequests: true,
    showOnlineStatus: true
  });

  const [preferences, setPreferences] = useState({
    language: 'English',
    theme: 'dark',
    soundEnabled: true,
    soundVolume: 70,
    autoPlay: false,
    difficulty: 'adaptive',
    dailyGoal: 30,
    reminderTime: '19:00'
  });

  const settingsSections = [
    { id: 'profile', icon: <User className="h-5 w-5" />, label: 'Profile', description: 'Manage your personal information' },
    { id: 'notifications', icon: <Bell className="h-5 w-5" />, label: 'Notifications', description: 'Control how you receive updates' },
    { id: 'privacy', icon: <Shield className="h-5 w-5" />, label: 'Privacy & Security', description: 'Manage your privacy settings' },
    { id: 'preferences', icon: <Palette className="h-5 w-5" />, label: 'Preferences', description: 'Customize your experience' },
    { id: 'learning', icon: <Target className="h-5 w-5" />, label: 'Learning', description: 'Configure your learning goals' },
    { id: 'account', icon: <Key className="h-5 w-5" />, label: 'Account', description: 'Manage your account settings' },
    { id: 'billing', icon: <CreditCard className="h-5 w-5" />, label: 'Billing', description: 'Manage your subscription' },
    { id: 'help', icon: <HelpCircle className="h-5 w-5" />, label: 'Help & Support', description: 'Get help and support' }
  ];

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const handlePrivacyChange = (key: string) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const handlePreferenceChange = (key: string, value: any) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-gray-300">Customize your LinguaAI experience</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sticky top-6">
              <nav className="space-y-2">
                {settingsSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-start space-x-3 p-3 rounded-lg transition-all duration-200 text-left ${
                      activeSection === section.id
                        ? 'bg-blue-500/20 border border-blue-400/30 text-blue-400'
                        : 'hover:bg-white/10 text-gray-300'
                    }`}
                  >
                    {section.icon}
                    <div>
                      <div className="font-medium">{section.label}</div>
                      <div className="text-xs text-gray-400">{section.description}</div>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              
              {/* Profile Section */}
              {activeSection === 'profile' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-6">Profile Information</h2>
                  
                  {/* Profile Picture */}
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        JD
                      </div>
                      <button className="absolute -bottom-2 -right-2 p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
                        <Camera className="h-4 w-4" />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">John Doe</h3>
                      <p className="text-gray-400">john.doe@example.com</p>
                      <button className="text-blue-400 hover:text-blue-300 text-sm mt-1 transition-colors">
                        Change profile picture
                      </button>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Full Name</label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Email</label>
                      <input
                        type="email"
                        defaultValue="john.doe@example.com"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Phone</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Location</label>
                      <input
                        type="text"
                        placeholder="New York, NY"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Bio</label>
                    <textarea
                      placeholder="Tell us about yourself..."
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    <Save className="h-5 w-5" />
                    <span>Save Changes</span>
                  </motion.button>
                </div>
              )}

              {/* Notifications Section */}
              {activeSection === 'notifications' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-6">Notification Preferences</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Notification Channels</h3>
                      <div className="space-y-4">
                        {[
                          { key: 'email', label: 'Email Notifications', description: 'Receive updates via email' },
                          { key: 'push', label: 'Push Notifications', description: 'Receive push notifications on your device' },
                          { key: 'sms', label: 'SMS Notifications', description: 'Receive text message updates' }
                        ].map((item) => (
                          <div key={item.key} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                            <div>
                              <div className="font-medium">{item.label}</div>
                              <div className="text-sm text-gray-400">{item.description}</div>
                            </div>
                            <button
                              onClick={() => handleNotificationChange(item.key)}
                              className={`w-12 h-6 rounded-full transition-colors ${
                                notifications[item.key as keyof typeof notifications]
                                  ? 'bg-blue-500'
                                  : 'bg-gray-600'
                              }`}
                            >
                              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                notifications[item.key as keyof typeof notifications]
                                  ? 'translate-x-6'
                                  : 'translate-x-1'
                              }`} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Notification Types</h3>
                      <div className="space-y-4">
                        {[
                          { key: 'lessons', label: 'Lesson Reminders', description: 'Get reminded about your daily lessons' },
                          { key: 'achievements', label: 'Achievements', description: 'Celebrate your milestones' },
                          { key: 'friendRequests', label: 'Friend Requests', description: 'New friend requests and connections' },
                          { key: 'weeklyReport', label: 'Weekly Progress Report', description: 'Summary of your weekly progress' }
                        ].map((item) => (
                          <div key={item.key} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                            <div>
                              <div className="font-medium">{item.label}</div>
                              <div className="text-sm text-gray-400">{item.description}</div>
                            </div>
                            <button
                              onClick={() => handleNotificationChange(item.key)}
                              className={`w-12 h-6 rounded-full transition-colors ${
                                notifications[item.key as keyof typeof notifications]
                                  ? 'bg-blue-500'
                                  : 'bg-gray-600'
                              }`}
                            >
                              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                notifications[item.key as keyof typeof notifications]
                                  ? 'translate-x-6'
                                  : 'translate-x-1'
                              }`} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Privacy Section */}
              {activeSection === 'privacy' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-6">Privacy & Security</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Profile Visibility</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                          <div>
                            <div className="font-medium">Profile Visibility</div>
                            <div className="text-sm text-gray-400">Who can see your profile</div>
                          </div>
                          <select className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400">
                            <option value="friends">Friends Only</option>
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Progress Sharing</h3>
                      <div className="space-y-4">
                        {[
                          { key: 'showProgress', label: 'Show Learning Progress', description: 'Allow friends to see your progress' },
                          { key: 'showStreak', label: 'Show Learning Streak', description: 'Display your current streak' },
                          { key: 'showXP', label: 'Show XP and Achievements', description: 'Share your earned XP and badges' },
                          { key: 'allowFriendRequests', label: 'Allow Friend Requests', description: 'Let others send you friend requests' },
                          { key: 'showOnlineStatus', label: 'Show Online Status', description: 'Display when you are online' }
                        ].map((item) => (
                          <div key={item.key} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                            <div>
                              <div className="font-medium">{item.label}</div>
                              <div className="text-sm text-gray-400">{item.description}</div>
                            </div>
                            <button
                              onClick={() => handlePrivacyChange(item.key)}
                              className={`w-12 h-6 rounded-full transition-colors ${
                                privacy[item.key as keyof typeof privacy]
                                  ? 'bg-blue-500'
                                  : 'bg-gray-600'
                              }`}
                            >
                              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                privacy[item.key as keyof typeof privacy]
                                  ? 'translate-x-6'
                                  : 'translate-x-1'
                              }`} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Security</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                          <div>
                            <div className="font-medium">Change Password</div>
                            <div className="text-sm text-gray-400">Update your account password</div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg hover:bg-blue-500/30 transition-all duration-300"
                          >
                            Change
                          </motion.button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                          <div>
                            <div className="font-medium">Two-Factor Authentication</div>
                            <div className="text-sm text-gray-400">Add an extra layer of security</div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-lg hover:bg-green-500/30 transition-all duration-300"
                          >
                            Enable
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Preferences Section */}
              {activeSection === 'preferences' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-6">Preferences</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Appearance</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                          <div>
                            <div className="font-medium">Theme</div>
                            <div className="text-sm text-gray-400">Choose your preferred theme</div>
                          </div>
                          <div className="flex space-x-2">
                            {[
                              { key: 'light', icon: <Sun className="h-4 w-4" />, label: 'Light' },
                              { key: 'dark', icon: <Moon className="h-4 w-4" />, label: 'Dark' },
                              { key: 'system', icon: <Monitor className="h-4 w-4" />, label: 'System' }
                            ].map((theme) => (
                              <button
                                key={theme.key}
                                onClick={() => handlePreferenceChange('theme', theme.key)}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                                  preferences.theme === theme.key
                                    ? 'bg-blue-500/20 border border-blue-400/30 text-blue-400'
                                    : 'bg-white/10 hover:bg-white/20 text-gray-300'
                                }`}
                              >
                                {theme.icon}
                                <span className="text-sm">{theme.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                          <div>
                            <div className="font-medium">Language</div>
                            <div className="text-sm text-gray-400">Interface language</div>
                          </div>
                          <select 
                            value={preferences.language}
                            onChange={(e) => handlePreferenceChange('language', e.target.value)}
                            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                          >
                            <option value="English">English</option>
                            <option value="Spanish">Español</option>
                            <option value="French">Français</option>
                            <option value="German">Deutsch</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Audio</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                          <div>
                            <div className="font-medium">Sound Effects</div>
                            <div className="text-sm text-gray-400">Enable sound effects</div>
                          </div>
                          <button
                            onClick={() => handlePreferenceChange('soundEnabled', !preferences.soundEnabled)}
                            className={`w-12 h-6 rounded-full transition-colors ${
                              preferences.soundEnabled ? 'bg-blue-500' : 'bg-gray-600'
                            }`}
                          >
                            <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                              preferences.soundEnabled ? 'translate-x-6' : 'translate-x-1'
                            }`} />
                          </button>
                        </div>

                        {preferences.soundEnabled && (
                          <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                            <div>
                              <div className="font-medium">Volume</div>
                              <div className="text-sm text-gray-400">Adjust sound volume</div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <VolumeX className="h-4 w-4 text-gray-400" />
                              <input
                                type="range"
                                min="0"
                                max="100"
                                value={preferences.soundVolume}
                                onChange={(e) => handlePreferenceChange('soundVolume', parseInt(e.target.value))}
                                className="w-24"
                              />
                              <Volume2 className="h-4 w-4 text-gray-400" />
                              <span className="text-sm w-8">{preferences.soundVolume}%</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Learning</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                          <div>
                            <div className="font-medium">Auto-play Lessons</div>
                            <div className="text-sm text-gray-400">Automatically start next lesson</div>
                          </div>
                          <button
                            onClick={() => handlePreferenceChange('autoPlay', !preferences.autoPlay)}
                            className={`w-12 h-6 rounded-full transition-colors ${
                              preferences.autoPlay ? 'bg-blue-500' : 'bg-gray-600'
                            }`}
                          >
                            <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                              preferences.autoPlay ? 'translate-x-6' : 'translate-x-1'
                            }`} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                          <div>
                            <div className="font-medium">Difficulty Level</div>
                            <div className="text-sm text-gray-400">Set your preferred difficulty</div>
                          </div>
                          <select 
                            value={preferences.difficulty}
                            onChange={(e) => handlePreferenceChange('difficulty', e.target.value)}
                            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                          >
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                            <option value="adaptive">Adaptive</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Learning Section */}
              {activeSection === 'learning' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-6">Learning Goals</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Daily Goals</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                          <div>
                            <div className="font-medium">Daily Study Time</div>
                            <div className="text-sm text-gray-400">Set your daily learning goal</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <input
                              type="number"
                              min="5"
                              max="120"
                              value={preferences.dailyGoal}
                              onChange={(e) => handlePreferenceChange('dailyGoal', parseInt(e.target.value))}
                              className="w-20 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-center focus:outline-none focus:border-blue-400"
                            />
                            <span className="text-sm">minutes</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                          <div>
                            <div className="font-medium">Daily Reminder</div>
                            <div className="text-sm text-gray-400">When to remind you to study</div>
                          </div>
                          <input
                            type="time"
                            value={preferences.reminderTime}
                            onChange={(e) => handlePreferenceChange('reminderTime', e.target.value)}
                            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Learning Languages</h3>
                      <div className="space-y-4">
                        {[
                          { language: 'Spanish', progress: 75, level: 'Intermediate' },
                          { language: 'French', progress: 45, level: 'Beginner' },
                          { language: 'German', progress: 20, level: 'Beginner' }
                        ].map((lang, index) => (
                          <div key={index} className="p-4 bg-white/5 rounded-xl">
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <div className="font-medium">{lang.language}</div>
                                <div className="text-sm text-gray-400">{lang.level}</div>
                              </div>
                              <button className="text-red-400 hover:text-red-300 transition-colors">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="bg-white/10 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                                style={{ width: `${lang.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Account Section */}
              {activeSection === 'account' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-6">Account Management</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Data & Privacy</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                          <div>
                            <div className="font-medium">Download Data</div>
                            <div className="text-sm text-gray-400">Get a copy of your data</div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg hover:bg-blue-500/30 transition-all duration-300"
                          >
                            <Download className="h-4 w-4" />
                            <span>Download</span>
                          </motion.button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                          <div>
                            <div className="font-medium">Delete Account</div>
                            <div className="text-sm text-gray-400">Permanently delete your account</div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 border border-red-400/30 rounded-lg hover:bg-red-500/30 transition-all duration-300"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span>Delete</span>
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Sign Out</h3>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <div>
                          <div className="font-medium">Sign Out of All Devices</div>
                          <div className="text-sm text-gray-400">Sign out from all devices and sessions</div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 px-4 py-2 bg-orange-500/20 border border-orange-400/30 rounded-lg hover:bg-orange-500/30 transition-all duration-300"
                        >
                          <LogOut className="h-4 w-4" />
                          <span>Sign Out</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Other sections would follow similar patterns */}
              {['billing', 'help'].includes(activeSection) && (
                <div className="text-center py-12">
                  <div className="text-gray-400">
                    <h3 className="text-lg font-medium mb-2">{settingsSections.find(s => s.id === activeSection)?.label}</h3>
                    <p>This section is coming soon...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



