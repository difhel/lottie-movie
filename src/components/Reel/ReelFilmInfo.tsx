import { memo, useCallback } from 'react'
import { Button, Headline, Text } from '@telegram-apps/telegram-ui'
import styles from './Reel.module.scss'
import { type FilmType } from '../../types';
import { useFlag } from '../../hooks/useFlag';
import Collapsible from '../Collapsible/Collapsible';
import { stopEvent } from '../../util/stopEvent';

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

export const ReelFilmInfo = memo<OwnProps>(({
  title, image, description, status,
}) => {
  const [isOneLineDescription, collapseDescription, unfoldDescription] = useFlag(true);

  const handleClick = useCallback(() => {
    if (isOneLineDescription) {
      unfoldDescription();
    } else {
      collapseDescription();
    }
  }, [isOneLineDescription, unfoldDescription, collapseDescription]);

  return (
    <div className={styles.reelInfo} onTouchStart={handleClick}>
      <div className={styles.reelInfoContent}>
        <img src={image} alt={title} className={styles.reelImage} />
        <Headline plain weight="2">{title}</Headline>
        <Button size="s" mode={getButtonMode(status)} onTouchStart={stopEvent}>
          {status === 'none' ? 'Сохранить' : status === 'saved' ? 'Сохранено' : 'Вы смотрели'}
        </Button>
      </div>
      <div className={styles.reelInfoDescription}>
        {isOneLineDescription && (
          <Text weight="3" className={styles.reelInfoDescriptionOneLine}>
            {description}
          </Text>
        )}
        <Collapsible isShown={!isOneLineDescription}>
          <Text weight="3" className={styles.reelInfoDescription}>
            {description}
          </Text>
        </Collapsible>
      </div>
    </div>
  )
});
