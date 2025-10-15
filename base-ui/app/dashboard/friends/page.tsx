'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  Users, 
  UserPlus, 
  Search, 
  MessageCircle, 
  Trophy,
  Target,
  Clock,
  Star,
  Filter,
  MoreVertical,
  Send,
  Heart,
  ThumbsUp,
  BookOpen,
  Calendar,
  Globe
} from 'lucide-react';

export default function FriendsPage() {
  const [activeTab, setActiveTab] = useState('friends');
  const [searchQuery, setSearchQuery] = useState('');

  const friends = [
    { 
      id: 1, 
      name: 'Sarah Johnson', 
      avatar: 'SJ', 
      status: 'online', 
      level: 'Advanced Spanish', 
      streak: 12,
      xp: 3420,
      lastActive: '2 minutes ago',
      mutualFriends: 5
    },
    { 
      id: 2, 
      name: 'Mike Chen', 
      avatar: 'MC', 
      status: 'offline', 
      level: 'Intermediate French', 
      streak: 8,
      xp: 2890,
      lastActive: '1 hour ago',
      mutualFriends: 3
    },
    { 
      id: 3, 
      name: 'Emma Rodriguez', 
      avatar: 'ER', 
      status: 'online', 
      level: 'Beginner German', 
      streak: 15,
      xp: 1560,
      lastActive: '5 minutes ago',
      mutualFriends: 7
    },
    { 
      id: 4, 
      name: 'Alex Kim', 
      avatar: 'AK', 
      status: 'away', 
      level: 'Advanced Japanese', 
      streak: 3,
      xp: 4250,
      lastActive: '30 minutes ago',
      mutualFriends: 2
    }
  ];

  const friendRequests = [
    { 
      id: 5, 
      name: 'David Wilson', 
      avatar: 'DW', 
      level: 'Intermediate Italian', 
      streak: 6,
      mutualFriends: 4,
      requestDate: '2 hours ago'
    },
    { 
      id: 6, 
      name: 'Lisa Park', 
      avatar: 'LP', 
      level: 'Advanced Korean', 
      streak: 9,
      mutualFriends: 1,
      requestDate: '1 day ago'
    }
  ];

  const suggestedFriends = [
    { 
      id: 7, 
      name: 'Tom Anderson', 
      avatar: 'TA', 
      level: 'Intermediate Spanish', 
      mutualFriends: 3,
      commonLanguages: ['Spanish', 'English']
    },
    { 
      id: 8, 
      name: 'Nina Patel', 
      avatar: 'NP', 
      level: 'Advanced French', 
      mutualFriends: 2,
      commonLanguages: ['French', 'English']
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Sarah Johnson', xp: 3420, streak: 12, avatar: 'SJ' },
    { rank: 2, name: 'Alex Kim', xp: 4250, streak: 3, avatar: 'AK' },
    { rank: 3, name: 'You', xp: 2450, streak: 7, avatar: 'JD', isCurrentUser: true },
    { rank: 4, name: 'Mike Chen', xp: 2890, streak: 8, avatar: 'MC' },
    { rank: 5, name: 'Emma Rodriguez', xp: 1560, streak: 15, avatar: 'ER' }
  ];

  const recentActivity = [
    { type: 'lesson', user: 'Sarah Johnson', action: 'completed Spanish Conversation', time: '10 min ago', xp: 50 },
    { type: 'achievement', user: 'Mike Chen', action: 'earned 7-day streak badge', time: '1 hour ago', xp: 100 },
    { type: 'lesson', user: 'Emma Rodriguez', action: 'completed German Basics', time: '2 hours ago', xp: 30 },
    { type: 'challenge', user: 'Alex Kim', action: 'won weekly challenge', time: '3 hours ago', xp: 75 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online': return 'Online';
      case 'away': return 'Away';
      case 'offline': return 'Offline';
      default: return 'Offline';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Friends & Social</h1>
            <p className="text-gray-300">Connect with fellow learners and compete together</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            <UserPlus className="h-5 w-5" />
            <span>Add Friends</span>
          </motion.button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1">
          {[
            { id: 'friends', label: 'Friends', count: friends.length },
            { id: 'requests', label: 'Requests', count: friendRequests.length },
            { id: 'leaderboard', label: 'Leaderboard', count: null },
            { id: 'activity', label: 'Activity', count: null }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                  : 'hover:bg-white/10 text-gray-300'
              }`}
            >
              <span>{tab.label}</span>
              {tab.count !== null && (
                <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search friends..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300">
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </button>
        </div>

        {/* Friends Tab */}
        {activeTab === 'friends' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {friends.map((friend, index) => (
              <motion.div
                key={friend.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {friend.avatar}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(friend.status)} rounded-full border-2 border-white`}></div>
                    </div>
                    <div>
                      <h3 className="font-semibold">{friend.name}</h3>
                      <p className="text-sm text-gray-400">{friend.level}</p>
                      <p className="text-xs text-gray-500">{friend.lastActive}</p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Current Streak</span>
                    <div className="flex items-center space-x-1">
                      <Target className="h-4 w-4 text-orange-400" />
                      <span className="font-medium">{friend.streak} days</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Total XP</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="font-medium">{friend.xp.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Mutual Friends</span>
                    <span className="font-medium">{friend.mutualFriends}</span>
                  </div>
                </div>

                <div className="flex space-x-2 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center space-x-2 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg hover:bg-blue-500/30 transition-all duration-300"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Chat</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center space-x-2 py-2 bg-green-500/20 border border-green-400/30 rounded-lg hover:bg-green-500/30 transition-all duration-300"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Study</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Friend Requests Tab */}
        {activeTab === 'requests' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Friend Requests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {friendRequests.map((request, index) => (
                <motion.div
                  key={request.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {request.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold">{request.name}</h3>
                      <p className="text-sm text-gray-400">{request.level}</p>
                      <p className="text-xs text-gray-500">{request.requestDate}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Streak</span>
                      <span className="font-medium">{request.streak} days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Mutual Friends</span>
                      <span className="font-medium">{request.mutualFriends}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-2 bg-green-500/20 border border-green-400/30 rounded-lg hover:bg-green-500/30 transition-all duration-300"
                    >
                      Accept
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-2 bg-red-500/20 border border-red-400/30 rounded-lg hover:bg-red-500/30 transition-all duration-300"
                    >
                      Decline
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Suggested Friends */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Suggested Friends</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {suggestedFriends.map((suggestion, index) => (
                  <motion.div
                    key={suggestion.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {suggestion.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold">{suggestion.name}</h3>
                        <p className="text-sm text-gray-400">{suggestion.level}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Mutual Friends</span>
                        <span className="font-medium">{suggestion.mutualFriends}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Common Languages</span>
                        <div className="flex space-x-1">
                          {suggestion.commonLanguages.map((lang, idx) => (
                            <span key={idx} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg hover:bg-blue-500/30 transition-all duration-300"
                    >
                      Send Request
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6">Weekly Leaderboard</h2>
            
            <div className="space-y-4">
              {leaderboard.map((user, index) => (
                <motion.div
                  key={user.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center space-x-4 p-4 rounded-xl ${
                    user.isCurrentUser 
                      ? 'bg-blue-500/20 border border-blue-400/30' 
                      : 'bg-white/5 hover:bg-white/10'
                  } transition-all duration-300`}
                >
                  <div className="text-2xl font-bold w-8">
                    {user.rank === 1 && '🥇'}
                    {user.rank === 2 && '🥈'}
                    {user.rank === 3 && '🥉'}
                    {user.rank > 3 && user.rank}
                  </div>
                  
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {user.avatar}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold">{user.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{user.xp.toLocaleString()} XP</span>
                      <span>{user.streak} day streak</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-400">#{user.rank}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`p-2 rounded-lg ${
                    activity.type === 'lesson' ? 'bg-blue-500/20 text-blue-400' :
                    activity.type === 'achievement' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {activity.type === 'lesson' ? <BookOpen className="h-5 w-5" /> :
                     activity.type === 'achievement' ? <Trophy className="h-5 w-5" /> :
                     <Target className="h-5 w-5" />}
                  </div>
                  
                  <div className="flex-1">
                    <div className="font-medium">{activity.user}</div>
                    <div className="text-sm text-gray-400">{activity.action}</div>
                    <div className="text-xs text-gray-500">{activity.time}</div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-green-400">
                    <Star className="h-4 w-4" />
                    <span className="font-medium">+{activity.xp} XP</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



