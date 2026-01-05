
export interface TestElement {
  id: string;
  name: string;
  type: string;
  locatorHint: string;
}

export interface TableRow {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive' | 'Pending';
  lastLogin: string;
}

export interface AICase {
  title: string;
  scenario: string;
  htmlSnippet: string;
  targetXPath: string;
}

export interface SandboxState {
  currentChallenge: AICase | null;
  totalChallengesGenerated: number;
  completedChallenges: string[]; // IDs or titles of completed tasks
}
