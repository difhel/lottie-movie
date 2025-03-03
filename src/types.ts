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
