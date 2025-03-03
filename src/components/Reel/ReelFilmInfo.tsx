import { memo } from 'react'
import { Button, Headline, Text } from '@telegram-apps/telegram-ui'
import styles from './Reel.module.scss'
import { type FilmType } from '../../types';

type OwnProps = FilmType;

function getButtonMode(status: FilmType['status']) {
  switch (status) {
    case 'none':
      return 'outline';
    case 'saved':
      return 'gray';
    case 'watched':
      return 'bezeled';
  }
}

export const ReelFilmInfo = memo<OwnProps>(({ title, image, description, status }) => {
  return (
    <div className={styles.reelInfo}>
      <div className={styles.reelInfoContent}>
        <img src={image} alt={title} className={styles.reelImage} />
        <Headline plain weight="2">{title}</Headline>
        <Button size="s" mode={getButtonMode(status)}>
          {status === 'none' ? 'Сохранить' : status === 'saved' ? 'Сохранено' : 'Вы смотрели'}
        </Button>
      </div>
      <div className={styles.reelInfoDescription}>
        <Text weight="3">{description}</Text>
      </div>
    </div>
  )
});
