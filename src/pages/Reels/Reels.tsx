import { memo, useEffect, useState } from 'react'
import { Reel } from '../../components/Reel/Reel';
import { ReelType } from '../../types';
import styles from './Reels.module.scss';
import { TabsItem } from '@telegram-apps/telegram-ui/dist/components/Navigation/TabsList/components/TabsItem/TabsItem';
import { TabsList } from '@telegram-apps/telegram-ui';
import { buildClassName } from '../../util/buildClassName';

const reel: ReelType = {
  id: 1,
  film: {
    id: 1,
    title: 'Матрица',
    image: 'https://sun9-73.userapi.com/impg/SuIoCR_TkYHE31B_lwJFu6qyxwMhPp8UhVHQfw/X6_kd-GHxiE.jpg?size=600x338&quality=95&sign=226a56aed1b0978856b878cece18467c&type=album',
    description: 'Жизнь Томаса Андерсона разделена на две части: днём он — самый обычный офисный работник, получающий нагоняи от начальства, а ночью превращается в хакера по имени Нео, и нет места в сети, куда он бы не смог проникнуть. Но однажды всё меняется. Томас узнаёт ужасающую правду о реальности.',
    status: 'none',
  },
  isLiked: false,
  likesCount: 23,
}

export const Reels = memo(() => {
  const [isUnfoldedDescription, setIsUnfoldedDescription] = useState(false);

  useEffect(() => {
    if (!window.Telegram?.WebApp) return undefined;

    try {
      window.Telegram.WebApp.MainButton.setParams({
        text: 'Поделиться',
      })
      window.Telegram.WebApp.requestFullscreen();
      window.Telegram.WebApp.lockOrientation();
    } catch { /* do nothing - error can only be thrown on incorrect environment */ }

    return () => {
      try {
        window.Telegram!.WebApp.exitFullscreen();
        window.Telegram!.WebApp.unlockOrientation();
      } catch { /* do nothing - error can only be thrown on incorrect environment */ }
    }
  }, []);

  return (
    <div className={buildClassName(styles.reels, isUnfoldedDescription && styles.withUnfoldedDescription)}>
      <div className={styles.reelsHeader}>
        <TabsList>
          <TabsItem
            onClick={function noRefCheck() { }}
            selected
          >
            Рекомендации
          </TabsItem>
          <TabsItem
            onClick={function noRefCheck() { }}
          >
            Любимое
          </TabsItem>
        </TabsList>
      </div>
      <Reel {...reel} setIsUnfoldedDescription={setIsUnfoldedDescription} />
    </div>
  )
});
