interface Story {
  author: string;
  label: string;
  description: string;
}

interface SessionItem {
  id: number;
  title: string;
  info: string;
  isLocked: boolean;
}

interface Comment {
  id: number;
  author: {
    name: string;
    published: string;
    src: string;
  },
  rateNumber: number;
  content: string;
}

export interface Details {
  story: Story | null;
  info: {
    text: string;
    fileSize: string;
  }
  sessionItems: SessionItem[];
  comments: Comment[];
}