'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Brain, 
  BookOpen, 
  Target, 
  Play, 
  Clock, 
  Star,
  Trophy,
  Users,
  MessageCircle,
  Mic,
  Video,
  Volume2,
  Settings,
  ArrowRight,
  CheckCircle,
  Lock,
  Zap,
  Award,
  TrendingUp,
  Calendar
} from 'lucide-react';

export default function LearnPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('spanish');
  const [selectedLevel, setSelectedLevel] = useState('intermediate');

  const languages = [
    { code: 'spanish', name: 'Spanish', flag: '🇪🇸', progress: 75, level: 'Intermediate' },
    { code: 'french', name: 'French', flag: '🇫🇷', progress: 45, level: 'Beginner' },
    { code: 'german', name: 'German', flag: '🇩🇪', progress: 20, level: 'Beginner' }
  ];

  const lessons = [
    {
      id: 1,
      title: 'Restaurant Conversations',
      description: 'Learn how to order food and ask for recommendations',
      duration: '15 min',
      difficulty: 'Intermediate',
      type: 'conversation',
      completed: false,
      locked: false,
      xp: 50
    },
    {
      id: 2,
      title: 'Daily Greetings',
      description: 'Master common greetings and polite expressions',
      duration: '10 min',
      difficulty: 'Beginner',
      type: 'vocabulary',
      completed: true,
      locked: false,
      xp: 30
    },
    {
      id: 3,
      title: 'Travel Phrases',
      description: 'Essential phrases for traveling and asking directions',
      duration: '20 min',
      difficulty: 'Intermediate',
      type: 'conversation',
      completed: false,
      locked: false,
      xp: 60
    },
    {
      id: 4,
      title: 'Business Meetings',
      description: 'Professional communication and meeting etiquette',
      duration: '25 min',
      difficulty: 'Advanced',
      type: 'conversation',
      completed: false,
      locked: true,
      xp: 80
    }
  ];

  const challenges = [
    {
      id: 1,
      title: 'Weekly Speaking Challenge',
      description: 'Complete 5 speaking exercises this week',
      progress: 3,
      total: 5,
      reward: 100,
      type: 'speaking',
      deadline: '3 days left'
    },
    {
      id: 2,
      title: 'Grammar Master',
      description: 'Score 90% or higher in grammar quizzes',
      progress: 0,
      total: 3,
      reward: 75,
      type: 'grammar',
      deadline: '1 week left'
    }
  ];

  const getLessonTypeIcon = (type: string) => {
    switch (type) {
      case 'conversation': return <MessageCircle className="h-5 w-5" />;
      case 'vocabulary': return <BookOpen className="h-5 w-5" />;
      case 'grammar': return <Target className="h-5 w-5" />;
      default: return <BookOpen className="h-5 w-5" />;
    }
  };

  const getLessonTypeColor = (type: string) => {
    switch (type) {
      case 'conversation': return 'bg-blue-500/20 text-blue-400 border-blue-400/30';
      case 'vocabulary': return 'bg-green-500/20 text-green-400 border-green-400/30';
      case 'grammar': return 'bg-purple-500/20 text-purple-400 border-purple-400/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-400/30';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Learn</h1>
            <p className="text-gray-300">Continue your language learning journey</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                <Play className="h-5 w-5" />
                <span>Start Session</span>
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Language Selection */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Choose Your Language</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {languages.map((language, index) => (
              <motion.button
                key={language.code}
                onClick={() => setSelectedLanguage(language.code)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                  selectedLanguage === language.code
                    ? 'bg-blue-500/20 border-blue-400/30'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl">{language.flag}</span>
                  <div>
                    <div className="font-semibold">{language.name}</div>
                    <div className="text-sm text-gray-400">{language.level}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="font-medium">{language.progress}%</span>
                  </div>
                  <div className="bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${language.progress}%` }}
                    ></div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Lessons Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Lessons</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">Filter:</span>
                  <select className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-blue-400">
                    <option>All</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {lessons.map((lesson, index) => (
                  <motion.div
                    key={lesson.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      lesson.locked 
                        ? 'bg-gray-500/10 border-gray-500/20 opacity-60' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className={`p-2 rounded-lg border ${getLessonTypeColor(lesson.type)}`}>
                          {getLessonTypeIcon(lesson.type)}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold">{lesson.title}</h3>
                            {lesson.completed && (
                              <CheckCircle className="h-4 w-4 text-green-400" />
                            )}
                            {lesson.locked && (
                              <Lock className="h-4 w-4 text-gray-400" />
                            )}
                          </div>
                          
                          <p className="text-gray-400 text-sm mb-3">{lesson.description}</p>
                          
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <span className="text-gray-400">{lesson.duration}</span>
                            </div>
                            <div className={`px-2 py-1 rounded ${getDifficultyColor(lesson.difficulty)}`}>
                              {lesson.difficulty}
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-400" />
                              <span className="text-gray-400">{lesson.xp} XP</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {!lesson.locked && (
                          <Link href="/">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                                lesson.completed
                                  ? 'bg-green-500/20 border border-green-400/30 text-green-400 hover:bg-green-500/30'
                                  : 'bg-blue-500/20 border border-blue-400/30 text-blue-400 hover:bg-blue-500/30'
                              }`}
                            >
                              {lesson.completed ? (
                                <>
                                  <CheckCircle className="h-4 w-4" />
                                  <span>Review</span>
                                </>
                              ) : (
                                <>
                                  <Play className="h-4 w-4" />
                                  <span>Start</span>
                                </>
                              )}
                              <ArrowRight className="h-4 w-4" />
                            </motion.button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">Today's Progress</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Lessons Completed</span>
                  <span className="font-semibold">2/3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Study Time</span>
                  <span className="font-semibold">25 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">XP Earned</span>
                  <span className="font-semibold">120</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Current Streak</span>
                  <span className="font-semibold text-blue-400">7 days</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Daily Goal</span>
                  <span className="text-sm font-medium">25/30 min</span>
                </div>
                <div className="bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{ width: '83%' }}></div>
                </div>
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">Active Challenges</h3>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={challenge.id} className="p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">{challenge.title}</h4>
                      <div className="flex items-center space-x-1">
                        <Trophy className="h-4 w-4 text-yellow-400" />
                        <span className="text-xs text-yellow-400">{challenge.reward} XP</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{challenge.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Progress: {challenge.progress}/{challenge.total}</span>
                      <span className="text-blue-400">{challenge.deadline}</span>
                    </div>
                    <div className="mt-2 bg-white/10 rounded-full h-1">
                      <div 
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 h-1 rounded-full"
                        style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <Mic className="h-5 w-5 text-blue-400" />
                  <span>Speaking Practice</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <Video className="h-5 w-5 text-green-400" />
                  <span>Video Lessons</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <Users className="h-5 w-5 text-purple-400" />
                  <span>Group Practice</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
