export interface Animelist {
  data: Datum[];
  paging: Paging;
}

export interface Datum {
  node: Node;
  list_status: ListStatus;
}

export interface ListStatus {
  status: string;
  score: number;
  num_watched_episodes?: number;
  is_rewatching: boolean;
  updated_at: Date;
  num_episodes_watched?: number;
}

export interface Node {
  id: number;
  title: string;
  main_picture: MainPicture;
}

export interface MainPicture {
  medium: string;
  large: string;
}

export interface Paging {
  next: string;
}
