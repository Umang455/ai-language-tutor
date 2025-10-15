'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  BookOpen, 
  Target, 
  Trophy, 
  Users, 
  Settings, 
  BarChart3,
  Play,
  Clock,
  Star,
  TrendingUp,
  Calendar,
  Bell,
  Search,
  Plus,
  Menu,
  X
} from 'lucide-react';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { icon: <BookOpen className="h-6 w-6" />, label: "Lessons Completed", value: "24", change: "+12%" },
    { icon: <Target className="h-6 w-6" />, label: "Current Streak", value: "7 days", change: "+3 days" },
    { icon: <Trophy className="h-6 w-6" />, label: "XP Earned", value: "2,450", change: "+180" },
    { icon: <Users className="h-6 w-6" />, label: "Friends", value: "12", change: "+2" }
  ];

  const recentActivity = [
    { type: "lesson", title: "Spanish Conversation Practice", time: "2 hours ago", xp: 50 },
    { type: "achievement", title: "7-Day Streak!", time: "1 day ago", xp: 100 },
    { type: "lesson", title: "French Grammar Basics", time: "2 days ago", xp: 30 },
    { type: "challenge", title: "Weekly Challenge Completed", time: "3 days ago", xp: 75 }
  ];

  const upcomingLessons = [
    { title: "Spanish: Restaurant Ordering", time: "10:00 AM", duration: "15 min", difficulty: "Intermediate" },
    { title: "French: Daily Conversations", time: "2:00 PM", duration: "20 min", difficulty: "Beginner" },
    { title: "German: Travel Phrases", time: "6:00 PM", duration: "25 min", difficulty: "Advanced" }
  ];

  const sidebarItems = [
    { id: 'overview', icon: <BarChart3 className="h-5 w-5" />, label: 'Overview' },
    { id: 'learn', icon: <BookOpen className="h-5 w-5" />, label: 'Learn' },
    { id: 'stats', icon: <TrendingUp className="h-5 w-5" />, label: 'Statistics' },
    { id: 'friends', icon: <Users className="h-5 w-5" />, label: 'Friends' },
    { id: 'settings', icon: <Settings className="h-5 w-5" />, label: 'Settings' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-white/5 backdrop-blur-sm border-b border-white/10 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                LinguaAI
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search lessons, friends..."
                className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 w-64"
              />
            </div>
            
            <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-sm font-semibold">
                JD
              </div>
              <span className="hidden md:block font-medium">John Doe</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <motion.aside
          initial={false}
          animate={{ width: sidebarOpen ? 280 : 0 }}
          className={`fixed lg:relative lg:w-80 h-full bg-white/5 backdrop-blur-sm border-r border-white/10 z-50 lg:z-auto overflow-hidden`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-semibold">Dashboard</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-1 hover:bg-white/10 rounded transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-blue-500/20 border border-blue-400/30 text-blue-400'
                      : 'hover:bg-white/10 text-gray-300'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Quick Actions */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-400 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  <Plus className="h-5 w-5" />
                  <span>Start New Lesson</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Practice</span>
                </button>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Welcome Section */}
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
                    <p className="text-gray-300 text-lg">Ready to continue your Spanish learning journey?</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    <Play className="h-5 w-5" />
                    <span>Continue Learning</span>
                  </motion.button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                        {stat.icon}
                      </div>
                      <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                    </div>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-lg ${
                          activity.type === 'lesson' ? 'bg-blue-500/20 text-blue-400' :
                          activity.type === 'achievement' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>
                          {activity.type === 'lesson' ? <BookOpen className="h-5 w-5" /> :
                           activity.type === 'achievement' ? <Trophy className="h-5 w-5" /> :
                           <Target className="h-5 w-5" />}
                        </div>
                        <div>
                          <div className="font-medium">{activity.title}</div>
                          <div className="text-gray-400 text-sm">{activity.time}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-green-400">
                        <Star className="h-4 w-4" />
                        <span className="font-medium">+{activity.xp} XP</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Upcoming Lessons */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-6">Upcoming Lessons</h2>
                <div className="space-y-4">
                  {upcomingLessons.map((lesson, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">{lesson.title}</div>
                          <div className="text-gray-400 text-sm">{lesson.duration} • {lesson.difficulty}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{lesson.time}</div>
                        <button className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                          Join
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Other tabs content would go here */}
          {activeTab !== 'overview' && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4 capitalize">{activeTab}</h2>
              <p className="text-gray-300">Content for {activeTab} tab coming soon...</p>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}



