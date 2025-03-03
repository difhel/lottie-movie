import { memo } from 'react'
import styles from './Reel.module.scss'
import { ReelFilmInfo } from './ReelFilmInfo'
import { ReelFilmLike } from './ReelFilmLike';

interface OwnProps {
  film: {
    id: number;
    title: string;
    image: string;
    description: string;
    status: 'none' | 'saved' | 'watched';
  }
  id: number;
  isLiked: boolean;
  likesCount: number;
}

export const Reel = memo<OwnProps>(({ film, id, isLiked, likesCount }) => {
  return (
    <div className={styles.reel}>
      <video playsInline autoPlay loop muted className={styles.reelVideo}>
        <source src="https://static.mytonwallet.org/releases/3.4/ImprovedUi.mp4" type="video/mp4" />
        Your browser does not support the video tag. Please update your browser.
      </video>
      <ReelFilmInfo {...film} />
      <ReelFilmLike isLiked={false} likesCount={23} />
    </div>
  )
});
