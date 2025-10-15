'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { SUPPORTED_LANGUAGES } from '@/lib/constants';
import { Language } from '@/lib/types';
import { Dispatch, SetStateAction } from 'react';
import { motion } from 'motion/react';
import { Globe, ArrowRight, Languages, Sparkles } from 'lucide-react';

export function LanguageSelection({
  nativeLanguage,
  setNativeLanguage,
  targetLanguage,
  setTargetLanguage,
  onSuccess,
}: {
  nativeLanguage: Language | undefined;
  setNativeLanguage: Dispatch<SetStateAction<Language | undefined>>;
  targetLanguage: Language | undefined;
  setTargetLanguage: Dispatch<SetStateAction<Language | undefined>>;
  onSuccess: () => void;
}) {
  const canContinue =
    nativeLanguage &&
    targetLanguage &&
    nativeLanguage.code !== targetLanguage.code;

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
        className="relative z-10 w-full max-w-2xl"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg"
          >
            <Languages className="h-10 w-10 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl font-bold text-gray-900 font-secondary mb-4"
          >
            Choose Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Languages</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 font-primary text-lg max-w-md mx-auto"
          >
            Tell us what you speak and what you'd like to learn
          </motion.p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-xl"
        >
          <div className="space-y-8">
            {/* Native Language Selection */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Globe className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <label className="text-lg font-semibold text-gray-800 font-secondary">I speak...</label>
                  <p className="text-sm text-gray-500 font-primary">Your native language</p>
                </div>
              </div>
              
              <Select
                onValueChange={(value) => {
                  const language = SUPPORTED_LANGUAGES.find((lang) => lang.code === value);
                  if (language) setNativeLanguage(language);
                }}
                value={nativeLanguage?.code}
              >
                <SelectTrigger className="w-full bg-white/50 border border-gray-200 rounded-xl py-4 text-gray-900 hover:border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 font-primary">
                  <SelectValue placeholder="Select your native language" />
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

            {/* Target Language Selection */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <label className="text-lg font-semibold text-gray-800 font-secondary">I want to learn...</label>
                  <p className="text-sm text-gray-500 font-primary">Your target language</p>
                </div>
              </div>
              
              <Select
                onValueChange={(value) => {
                  const language = SUPPORTED_LANGUAGES.find((lang) => lang.code === value);
                  if (language) setTargetLanguage(language);
                }}
                value={targetLanguage?.code}
              >
                <SelectTrigger className="w-full bg-white/50 border border-gray-200 rounded-xl py-4 text-gray-900 hover:border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 font-primary">
                  <SelectValue placeholder="Select the language to learn" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border border-gray-200 shadow-xl">
                  {SUPPORTED_LANGUAGES.filter((l) => l.code !== nativeLanguage?.code).map(
                    (language) => (
                      <SelectItem 
                        key={language.code} 
                        value={language.code}
                        className="font-primary hover:bg-indigo-50 focus:bg-indigo-50"
                      >
                        {language.name}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
            </motion.div>

            {/* Continue Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-4"
            >
              <Button
                onClick={onSuccess}
                disabled={!canContinue}
                className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl font-semibold text-white hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl font-secondary text-lg"
              >
                {canContinue ? (
                  <>
                    <span>Continue</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                ) : (
                  <span>Select both languages to continue</span>
                )}
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Language Preview */}
        {nativeLanguage && targetLanguage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-8 text-center"
          >
            <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg">
              <p className="text-gray-700 font-primary">
                Perfect! You'll be learning <span className="font-semibold text-indigo-600">{targetLanguage.name}</span> from <span className="font-semibold text-green-600">{nativeLanguage.name}</span>
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
} 