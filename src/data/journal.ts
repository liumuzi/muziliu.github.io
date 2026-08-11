import { JournalEntry } from '@/types/content';

export const journalEntries: JournalEntry[] = [
  {
    id: 'when-to-refactor-ai-written-code',
    date: '2026-08-11',
    title: {
      zh: '用 AI 写代码时，什么时候该重构？',
      en: 'When should you refactor AI-written code?',
    },
    paragraphs: [
      {
        zh: '功能确认后，立即重构。每完成一个子系统或相对完整的功能模块，并确认它运行正确，就应该重新梳理相关系统，让代码尽量保持精简。',
        en: 'Refactor as soon as a feature is proven. After completing a subsystem or a self-contained feature and confirming that it works, revisit the surrounding system and keep the code as lean as possible.',
      },
      {
        zh: '久改不好的问题，往往需要系统级重构。如果一个 bug 怎么改都改不好，或者和 AI 来回调整三四轮仍未解决，问题可能不在某一行代码，而在整个相关系统的结构。重新梳理之后，问题通常会容易解决得多。',
        en: 'Persistent bugs often call for system-level refactoring. If a bug survives every attempted fix—or three or four rounds of iteration with AI—the problem may lie in the structure of the surrounding system rather than in one line of code. Once the system is reorganized, the fix is often much easier.',
      },
      {
        zh: '代码和文档要一起重构。文档不只是写给未来的自己，也是写给后来接手上下文的 AI。结构清晰、与代码同步的文档，会直接影响下一轮协作的质量。',
        en: 'Refactor the documentation alongside the code. Documentation is no longer written only for your future self; it is also context for the next AI that works on the project. Clear, synchronized documentation directly improves the quality of the next collaboration.',
      },
    ],
    tags: [
      { zh: 'AI 编程', en: 'AI CODING' },
      { zh: '重构', en: 'REFACTORING' },
    ],
  },
];
