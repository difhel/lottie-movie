export type FilmType = {
  id: number;
  title: string;
  image: string;
  description: string;
  status: 'none' | 'saved' | 'watched';
}

export type ReelType = {
  id: number;
  film: FilmType;
  isLiked: boolean;
  likesCount: number;
}

export type SearchSuggestionType = {
  id: number;
  title: string;
  description: string;
  subtitle: string;
  image: string;
}
