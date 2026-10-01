export interface TimestampBookmark {
  time: string;
  seconds: number;
  label: string;
}

export interface PracticeProblem {
  number: number | string;
  title: string;
  question?: string;
  hint?: string;
  solution?: string;
  solutionSeconds?: number;
}

export interface ProblemSetData {
  title: string;
  youtubeId?: string;
  duration?: string;
  summary?: string;
  timestamps?: TimestampBookmark[];
  problems?: PracticeProblem[];
}

export interface ChapterData {
  id: string;
  title: string;
  shortTitle?: string;
  part?: string; // Optional part / section grouping
  duration?: string;
  youtubeId: string;
  summary: string;
  timestamps?: TimestampBookmark[];
  keyEquations?: string[];
  problemSet?: ProblemSetData; // Optional companion problem set
}

export interface BookData {
  id: string;
  volume: string;
  title: string;
  overviewTitle?: string; // Custom title for TOC overview item (default: 'Overview')
  tagline: string;
  description: string;
  coverImage?: string; // Path to 3:4 letter sheet cover thumbnail
  colorScheme: 'blue' | 'amber' | 'emerald' | 'purple';
  chapters: ChapterData[];
}
