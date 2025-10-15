'use client';

import { motion } from 'motion/react';
import { 
  Brain, 
  TrendingUp, 
  Calendar, 
  Target, 
  Trophy, 
  Clock,
  BookOpen,
  Users,
  Award,
  BarChart3,
  PieChart,
  Activity,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

export default function StatsPage() {
  const weeklyData = [
    { day: 'Mon', lessons: 2, xp: 120, time: 25 },
    { day: 'Tue', lessons: 3, xp: 180, time: 35 },
    { day: 'Wed', lessons: 1, xp: 80, time: 15 },
    { day: 'Thu', lessons: 4, xp: 240, time: 45 },
    { day: 'Fri', lessons: 2, xp: 140, time: 30 },
    { day: 'Sat', lessons: 3, xp: 160, time: 40 },
    { day: 'Sun', lessons: 1, xp: 90, time: 20 }
  ];

  const languageProgress = [
    { language: 'Spanish', progress: 75, level: 'Intermediate', xp: 1850 },
    { language: 'French', progress: 45, level: 'Beginner', xp: 920 },
    { language: 'German', progress: 20, level: 'Beginner', xp: 480 }
  ];

  const achievements = [
    { title: 'First Steps', description: 'Complete your first lesson', earned: true, date: '2 weeks ago' },
    { title: 'Week Warrior', description: 'Complete 7 lessons in a week', earned: true, date: '1 week ago' },
    { title: 'Language Master', description: 'Reach level 10 in any language', earned: false, date: null },
    { title: 'Social Butterfly', description: 'Connect with 5 friends', earned: false, date: null }
  ];

  const stats = [
    { icon: <BookOpen className="h-6 w-6" />, label: "Total Lessons", value: "156", change: "+12%", trend: 'up' },
    { icon: <Clock className="h-6 w-6" />, label: "Study Time", value: "42h", change: "+8%", trend: 'up' },
    { icon: <Trophy className="h-6 w-6" />, label: "XP Earned", value: "9,240", change: "+15%", trend: 'up' },
    { icon: <Target className="h-6 w-6" />, label: "Accuracy", value: "87%", change: "-2%", trend: 'down' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Statistics</h1>
            <p className="text-gray-300">Track your learning progress and achievements</p>
          </div>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>All time</option>
            </select>
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
                <div className={`flex items-center space-x-1 text-sm ${
                  stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stat.trend === 'up' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weekly Activity Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Weekly Activity</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Lessons</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 text-sm text-gray-400">{day.day}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="flex-1 bg-white/10 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(day.lessons / 4) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium w-8">{day.lessons}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{day.xp} XP</span>
                      <span>{day.time} min</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Language Progress */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold mb-6">Language Progress</h2>
            
            <div className="space-y-6">
              {languageProgress.map((lang, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{lang.language}</div>
                      <div className="text-sm text-gray-400">{lang.level}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{lang.xp} XP</div>
                      <div className="text-xs text-gray-400">{lang.progress}%</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${lang.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
        >
          <h2 className="text-xl font-semibold mb-6">Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  achievement.earned 
                    ? 'bg-green-500/10 border-green-400/30 hover:bg-green-500/20' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    achievement.earned 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {achievement.earned ? <Award className="h-6 w-6" /> : <Trophy className="h-6 w-6" />}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{achievement.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{achievement.description}</p>
                    {achievement.earned && (
                      <div className="text-xs text-green-400">Earned {achievement.date}</div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Study Time Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold mb-6">Study Time Distribution</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span>Speaking Practice</span>
                </div>
                <span className="font-medium">45%</span>
              </div>
              <div className="bg-white/10 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <span>Grammar Lessons</span>
                </div>
                <span className="font-medium">30%</span>
              </div>
              <div className="bg-white/10 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span>Vocabulary</span>
                </div>
                <span className="font-medium">25%</span>
              </div>
              <div className="bg-white/10 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
          </motion.div>

          {/* Learning Streak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold mb-6">Learning Streak</h2>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">7 days</div>
              <div className="text-gray-400 mb-6">Current streak</div>
              
              <div className="flex justify-center space-x-2 mb-6">
                {[...Array(7)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                  >
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-sm text-gray-400">
                Best streak: <span className="text-blue-400 font-medium">21 days</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}



