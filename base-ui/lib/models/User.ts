import { Schema, model, models, Document } from 'mongoose';

export interface IUser extends Document {
  _id: string;
  email: string;
  password: string;
  name: string;
  avatar?: string;
  bio?: string;
  location?: string;
  phone?: string;
  
  // Learning preferences
  nativeLanguage: string;
  targetLanguages: string[];
  learningGoals: {
    dailyMinutes: number;
    reminderTime: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced' | 'adaptive';
  };
  
  // Progress tracking
  progress: {
    totalXP: number;
    currentStreak: number;
    bestStreak: number;
    lessonsCompleted: number;
    totalStudyTime: number; // in minutes
    lastActiveDate: Date;
  };
  
  // Settings
  settings: {
    theme: 'light' | 'dark' | 'system';
    soundEnabled: boolean;
    soundVolume: number;
    autoPlay: boolean;
    language: string;
  };
  
  // Privacy settings
  privacy: {
    profileVisibility: 'public' | 'friends' | 'private';
    showProgress: boolean;
    showStreak: boolean;
    showXP: boolean;
    allowFriendRequests: boolean;
    showOnlineStatus: boolean;
  };
  
  // Notification preferences
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
    lessons: boolean;
    achievements: boolean;
    friendRequests: boolean;
    weeklyReport: boolean;
  };
  
  // Social features
  friends: string[]; // Array of user IDs
  friendRequests: {
    sent: string[];
    received: string[];
  };
  
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters'],
  },
  avatar: {
    type: String,
    default: '',
  },
  bio: {
    type: String,
    maxlength: [500, 'Bio cannot exceed 500 characters'],
    default: '',
  },
  location: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    default: '',
  },
  
  // Learning preferences
  nativeLanguage: {
    type: String,
    required: [true, 'Native language is required'],
    default: 'en',
  },
  targetLanguages: [{
    type: String,
    required: true,
  }],
  learningGoals: {
    dailyMinutes: {
      type: Number,
      default: 30,
      min: [5, 'Daily goal must be at least 5 minutes'],
      max: [120, 'Daily goal cannot exceed 120 minutes'],
    },
    reminderTime: {
      type: String,
      default: '19:00',
    },
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced', 'adaptive'],
      default: 'adaptive',
    },
  },
  
  // Progress tracking
  progress: {
    totalXP: {
      type: Number,
      default: 0,
    },
    currentStreak: {
      type: Number,
      default: 0,
    },
    bestStreak: {
      type: Number,
      default: 0,
    },
    lessonsCompleted: {
      type: Number,
      default: 0,
    },
    totalStudyTime: {
      type: Number,
      default: 0,
    },
    lastActiveDate: {
      type: Date,
      default: Date.now,
    },
  },
  
  // Settings
  settings: {
    theme: {
      type: String,
      enum: ['light', 'dark', 'system'],
      default: 'system',
    },
    soundEnabled: {
      type: Boolean,
      default: true,
    },
    soundVolume: {
      type: Number,
      default: 70,
      min: [0, 'Volume cannot be negative'],
      max: [100, 'Volume cannot exceed 100%'],
    },
    autoPlay: {
      type: Boolean,
      default: false,
    },
    language: {
      type: String,
      default: 'en',
    },
  },
  
  // Privacy settings
  privacy: {
    profileVisibility: {
      type: String,
      enum: ['public', 'friends', 'private'],
      default: 'friends',
    },
    showProgress: {
      type: Boolean,
      default: true,
    },
    showStreak: {
      type: Boolean,
      default: true,
    },
    showXP: {
      type: Boolean,
      default: true,
    },
    allowFriendRequests: {
      type: Boolean,
      default: true,
    },
    showOnlineStatus: {
      type: Boolean,
      default: true,
    },
  },
  
  // Notification preferences
  notifications: {
    email: {
      type: Boolean,
      default: true,
    },
    push: {
      type: Boolean,
      default: true,
    },
    sms: {
      type: Boolean,
      default: false,
    },
    lessons: {
      type: Boolean,
      default: true,
    },
    achievements: {
      type: Boolean,
      default: true,
    },
    friendRequests: {
      type: Boolean,
      default: true,
    },
    weeklyReport: {
      type: Boolean,
      default: false,
    },
  },
  
  // Social features
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  friendRequests: {
    sent: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }],
    received: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }],
  },
  
}, {
  timestamps: true,
});

// Index for better query performance
UserSchema.index({ email: 1 });
UserSchema.index({ 'progress.totalXP': -1 });
UserSchema.index({ 'progress.currentStreak': -1 });

// Virtual for avatar URL
UserSchema.virtual('avatarUrl').get(function() {
  if (this.avatar) {
    return this.avatar;
  }
  // Generate default avatar based on name initials
  const initials = this.name
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
  return `https://ui-avatars.com/api/?name=${initials}&background=random`;
});

// Method to update streak
UserSchema.methods.updateStreak = function() {
  const today = new Date();
  const lastActive = new Date(this.progress.lastActiveDate);
  const diffTime = today.getTime() - lastActive.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) {
    // Consecutive day
    this.progress.currentStreak += 1;
    this.progress.bestStreak = Math.max(this.progress.bestStreak, this.progress.currentStreak);
  } else if (diffDays > 1) {
    // Streak broken
    this.progress.currentStreak = 1;
  }
  
  this.progress.lastActiveDate = today;
  return this.save();
};

// Method to add XP
UserSchema.methods.addXP = function(amount: number) {
  this.progress.totalXP += amount;
  return this.save();
};

// Method to complete lesson
UserSchema.methods.completeLesson = function(duration: number, xp: number) {
  this.progress.lessonsCompleted += 1;
  this.progress.totalStudyTime += duration;
  this.progress.totalXP += xp;
  return this.updateStreak();
};

export const User = models.User || model<IUser>('User', UserSchema);



