export interface Event {
  id: string;
  date: string; // Format: "28. maj"
  dateFull: string; // Format: "28. maj 2026"
  artist: string;
  description?: string;
  icon?: string;
}

export const events: Event[] = [
  {
    id: '1',
    date: '28. maj',
    dateFull: '28. maj 2026',
    artist: 'Helge Engelbrecht & Tommy Rasmussen',
    icon: '🎙️',
  },
  {
    id: '2',
    date: '29. juni',
    dateFull: '29. juni 2026',
    artist: 'TAKEOFF',
    icon: '🎙️',
  },
  {
    id: '3',
    date: '30. juni',
    dateFull: '30. juni 2026',
    artist: 'DJ Lounge Festival "7200"',
    icon: '🎙️',
  },
  {
    id: '4',
    date: '31. august',
    dateFull: '31. august 2026',
    artist: 'Rattlesnakes',
    icon: '🎙️',
  },
  {
    id: '5',
    date: 'september',
    dateFull: 'september 2026',
    artist: 'TBA',
    icon: '🎙️',
  },
];
