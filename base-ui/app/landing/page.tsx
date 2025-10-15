'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Brain, 
  Globe, 
  Zap, 
  Users, 
  Target, 
  Sparkles,
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  Rocket,
  MessageSquare,
  Coffee,
  Plane,
  Briefcase,
  Heart,
  BookOpen,
  Mic,
  Headphones,
  Video,
  Award,
  TrendingUp,
  Shield,
  Clock,
  Languages,
  GraduationCap,
  Lightbulb,
  ThumbsUp
} from 'lucide-react';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Learning",
      description: "Advanced AI tutors that adapt to your learning style and pace with personalized lesson plans"
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Voice Conversations",
      description: "Practice speaking with AI tutors through natural voice conversations and real-time feedback"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Feedback",
      description: "Get immediate pronunciation, grammar, and fluency corrections as you speak"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Scenario-Based Learning",
      description: "Learn through realistic conversations in restaurants, travel, business, and daily life"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Multiple Languages",
      description: "Learn Spanish, French, German, Italian, Portuguese, and more with native-level AI tutors"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and achievement tracking"
    }
  ];

  const stats = [
    { number: "10+", label: "Languages" },
    { number: "50K+", label: "Active Users" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Available" }
  ];

  const scenarios = [
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-500" />,
      title: "Daily Conversations",
      description: "Practice everyday dialogues and casual chats"
    },
    {
      icon: <Coffee className="h-6 w-6 text-orange-500" />,
      title: "Food & Dining",
      description: "Order at restaurants and discuss cuisine"
    },
    {
      icon: <Plane className="h-6 w-6 text-green-500" />,
      title: "Travel & Tourism",
      description: "Navigate airports, hotels, and tourist spots"
    },
    {
      icon: <Briefcase className="h-6 w-6 text-purple-500" />,
      title: "Business & Work",
      description: "Professional meetings and office conversations"
    },
    {
      icon: <Heart className="h-6 w-6 text-pink-500" />,
      title: "Relationships",
      description: "Personal connections and friendships"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-indigo-500" />,
      title: "Education",
      description: "Academic discussions and learning contexts"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safe Learning Environment",
      description: "Practice without judgment in a supportive AI environment"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Learn at Your Pace",
      description: "No pressure, no deadlines - learn when and how you want"
    },
    {
      icon: <Languages className="h-6 w-6" />,
      title: "Native-Level Practice",
      description: "Interact with AI that speaks like a native speaker"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Achievement System",
      description: "Earn badges and track your progress milestones"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
            animate={{
              x: [0, Math.random() * 100],
              y: [0, Math.random() * 100],
              opacity: [0.6, 0.1, 0.6],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-secondary">
            GoFluent
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center space-x-4"
        >
          <Link 
            href="/dashboard"
            className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
          >
            Dashboard
          </Link>
          <Link 
            href="/"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Begin Learning
          </Link>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 mb-6">
            <Sparkles className="h-4 w-4 text-blue-400 mr-2" />
            <span className="text-sm text-blue-300">AI-Powered Language Learning</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master Any Language with
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Tutors
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the future of language learning with personalized AI tutors, 
            real-time conversations, and immersive practice sessions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-8 py-4 border border-gray-600 rounded-full text-lg font-semibold hover:border-gray-500 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto px-6 py-16"
      >
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
              {stat.number}
            </div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Features Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-secondary">
            Why Choose <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">GoFluent</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Revolutionary features that make language learning effortless and engaging
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/50">
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-secondary">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed font-primary">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-secondary">
            How <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">GoFluent</span> Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-primary">
            Start your language learning journey in just 3 simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Choose Your Languages",
              description: "Select your native language and the language you want to learn",
              icon: <Languages className="h-12 w-12 text-indigo-400" />
            },
            {
              step: "02", 
              title: "Pick Your Scenario",
              description: "Choose from realistic conversation scenarios like dining, travel, or business",
              icon: <MessageSquare className="h-12 w-12 text-purple-400" />
            },
            {
              step: "03",
              title: "Start Speaking",
              description: "Begin natural conversations with AI tutors and get instant feedback",
              icon: <Mic className="h-12 w-12 text-pink-400" />
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 2.0 + index * 0.2 }}
              className="text-center"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <div className="text-sm text-indigo-400 font-semibold mb-2 font-secondary">{step.step}</div>
                <h3 className="text-xl font-semibold mb-4 font-secondary">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed font-primary">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scenarios Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-secondary">
            Learn Through <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Real Scenarios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-primary">
            Practice conversations in contexts you'll actually use
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 2.8 + index * 0.1 }}
              className="group text-center"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/50 group-hover:scale-105">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {scenario.icon}
                </div>
                <h3 className="text-sm font-semibold mb-2 font-secondary">{scenario.title}</h3>
                <p className="text-xs text-gray-400 font-primary">{scenario.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 3.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-secondary">
            Why Learn with <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">AI</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-primary">
            Experience the advantages of AI-powered language learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 3.6 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-green-400/50">
                <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-secondary">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed font-primary">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 0.8, delay: 4.0 }}
        className="relative z-10 text-center py-20"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-secondary">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Language Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-primary">
            Join thousands of learners who are already mastering new languages with AI. Start speaking confidently in just minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 font-secondary"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Start Learning Free
              </motion.button>
            </Link>
            
            <Link href="/dashboard">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-8 py-4 border border-gray-600 rounded-full text-lg font-semibold hover:border-gray-500 hover:bg-white/5 transition-all duration-300 font-secondary"
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                View Dashboard
              </motion.button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: <CheckCircle className="h-6 w-6 text-green-400" />, text: "100% Free to Start" },
              { icon: <Shield className="h-6 w-6 text-blue-400" />, text: "No Credit Card Required" },
              { icon: <Clock className="h-6 w-6 text-purple-400" />, text: "Start Speaking in Minutes" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 text-gray-300">
                {item.icon}
                <span className="font-primary">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
              <Brain className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-secondary">
              GoFluent
            </span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2024 GoFluent. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
