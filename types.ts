export interface DevotionalResponse {
  title: string;
  scripture: string;
  reflection: string;
  prayer: string;
}

export interface MinistryEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}