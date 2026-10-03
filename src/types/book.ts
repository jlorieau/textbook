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

export interface ReferenceCategory {
  category: string;
  items: string[];
}

export interface BookPart {
  title?: string; // Optional part / section grouping title (e.g., '📐 Background')
  chapters: ChapterData[];
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
  parts?: BookPart[]; // Nested part groupings
  chapters?: ChapterData[]; // Flattened or non-part chapter list
  referencesTitle?: string; // Custom title for references section (default: '📚 Bibliography & Reading')
  references?: ReferenceCategory[];
}

/**
 * Returns a flat array of all chapters in the book, ensuring each chapter has its inherited `part` title populated.
 */
export function getBookChapters(book: BookData): ChapterData[] {
  if (book.parts && book.parts.length > 0) {
    return book.parts.flatMap((p) =>
      p.chapters.map((ch) => ({
        ...ch,
        part: ch.part ?? p.title,
      }))
    );
  }
  return book.chapters ?? [];
}

/**
 * Helper to define a book with automatic `chapters` getter synthesized from `parts`.
 */
export function defineBook(data: BookData): BookData {
  return {
    ...data,
    get chapters(): ChapterData[] {
      return getBookChapters(data);
    },
  };
}
