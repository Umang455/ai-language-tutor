'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SUPPORTED_LANGUAGES } from '@/lib/constants';
import { Language } from '@/lib/types';
import { Dispatch, SetStateAction } from 'react';
import { motion } from 'motion/react';
import { 
  Coffee, 
  MessageSquare, 
  Plane, 
  Globe, 
  Sparkles, 
  ArrowRight,
  Briefcase,
  Heart,
  BookOpen,
  Gamepad2
} from 'lucide-react';

const SCENARIOS = [
  {
    name: 'Daily Conversations',
    description: 'Everyday dialogues and casual chats',
    icon: <MessageSquare className="h-12 w-12 text-blue-500" />,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    hoverColor: 'hover:border-blue-400',
  },
  { 
    name: 'Food & Dining', 
    description: 'Restaurant orders and culinary discussions',
    icon: <Coffee className="h-12 w-12 text-orange-500" />,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    hoverColor: 'hover:border-orange-400',
  },
  { 
    name: 'Travel & Tourism', 
    description: 'Exploring new places and cultures',
    icon: <Plane className="h-12 w-12 text-green-500" />,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    hoverColor: 'hover:border-green-400',
  },
  { 
    name: 'Business & Work', 
    description: 'Professional meetings and office talk',
    icon: <Briefcase className="h-12 w-12 text-purple-500" />,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    hoverColor: 'hover:border-purple-400',
  },
  { 
    name: 'Relationships', 
    description: 'Personal connections and friendships',
    icon: <Heart className="h-12 w-12 text-pink-500" />,
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    hoverColor: 'hover:border-pink-400',
  },
  { 
    name: 'Education', 
    description: 'Learning and academic discussions',
    icon: <BookOpen className="h-12 w-12 text-indigo-500" />,
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    hoverColor: 'hover:border-indigo-400',
  },
];

export function ScenarioSelection({
  targetLanguage,
  setTargetLanguage,
  onScenarioSelected,
}: {
  targetLanguage: Language | undefined;
  setTargetLanguage: Dispatch<SetStateAction<Language | undefined>>;
  onScenarioSelected: (scenario: string) => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-6xl"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg"
          >
            <Sparkles className="h-10 w-10 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl font-bold text-gray-900 font-secondary mb-4"
          >
            What do you want to <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">practice</span>?
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 font-primary text-lg max-w-2xl mx-auto"
          >
            Choose a conversation scenario that interests you most
          </motion.p>
        </div>

        {/* Language Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg mb-8 max-w-md mx-auto"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Globe className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <label className="text-lg font-semibold text-gray-800 font-secondary">Practice Language</label>
              <p className="text-sm text-gray-500 font-primary">Choose your target language</p>
            </div>
          </div>
          
          <Select
            onValueChange={(value) => {
              const language = SUPPORTED_LANGUAGES.find((lang) => lang.code === value);
              if (language) setTargetLanguage(language);
            }}
            value={targetLanguage?.code}
          >
            <SelectTrigger className="w-full bg-white/50 border border-gray-200 rounded-xl py-3 text-gray-900 hover:border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 font-primary">
              <SelectValue placeholder="Select a language to practice" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border border-gray-200 shadow-xl">
              {SUPPORTED_LANGUAGES.map((language) => (
                <SelectItem 
                  key={language.code} 
                  value={language.code}
                  className="font-primary hover:bg-indigo-50 focus:bg-indigo-50"
                >
                  {language.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        {/* Scenario Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SCENARIOS.map((scenario, index) => (
            <motion.div
              key={scenario.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              onClick={() => onScenarioSelected(scenario.name)}
              className={`group cursor-pointer ${scenario.bgColor} border-2 ${scenario.borderColor} ${scenario.hoverColor} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-white/80 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300">
                  {scenario.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 font-secondary mb-2">
                    {scenario.name}
                  </h3>
                  <p className="text-gray-600 font-primary text-sm">
                    {scenario.description}
                  </p>
                </div>

                <div className={`w-full h-1 bg-gradient-to-r ${scenario.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <ArrowRight className="h-5 w-5 text-indigo-600" />
              <span className="text-gray-700 font-primary font-medium">
                Select a scenario to start your conversation practice
              </span>
            </div>
            <p className="text-sm text-gray-500 font-primary">
              Each scenario includes realistic dialogues, vocabulary, and cultural context
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 