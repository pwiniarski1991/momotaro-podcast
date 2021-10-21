interface Current {
  heading: string;
  time: string;
}

interface Next {
  heading: string;
  duration: string;
}

export interface Player {
  current: Current;
  next: Next;
}