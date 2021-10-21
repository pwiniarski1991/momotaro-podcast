interface DailyPick {
  name: string;
  heading: string;
  description: string;
}

export interface Card {
  id: string;
  label?: string;
  title: string;
  postedAgo: string;
}

export interface Premium {
  title: string;
  subtitle: string;
}

export interface Data {
  dailyPick: DailyPick | null;
  cards: Card[];
  premium: Premium | null;
}