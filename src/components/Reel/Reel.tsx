import { memo, useCallback, useState } from 'react'
import styles from './Reel.module.scss'
import { ReelFilmInfo } from './ReelFilmInfo'
import { ReelFilmLike } from './ReelFilmLike';
import { Icon20CopyOutline, Icon28ChainOutline, Icon28DownloadOutline, Icon28ShareOutline, Icon28StoryAddOutline } from '@vkontakte/icons';
import { Cell, IconButton, Modal, Snackbar, Title } from '@telegram-apps/telegram-ui';
import { ModalHeader } from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader';
import { openUrl } from '../../util/openUrl';

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
  const [snackbar, setSnackbar] = useState<React.ReactNode>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenShareModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCopyLink = useCallback(() => {
    navigator.clipboard.writeText(`https://t.me/lottiemoviebot/app?startapp=reel_${id}`);
    setSnackbar(
      <Snackbar
        description="Ссылка на рилс скопирована"
        onClose={() => setSnackbar(undefined)} before={<Icon20CopyOutline />}
      />
    );
    setIsModalOpen(false);
  }, [id]);

  const handleShareChat = useCallback(() => {
    const url = `https://t.me/lottiemoviebot/app?startapp=reel_${id}`;
    const text = `${film.title} - Сохраните для просмотра в Lottie Movie`;
    openUrl(`http://t.me/share/url?url=${url}&text=${encodeURIComponent(text)}`);
    setIsModalOpen(false);
  }, [film.title, id]);

  const handleShareStory = useCallback(() => {
    const imgUrl = 'https://sun9-14.userapi.com/impg/7MwipDpm2gR7Tni-TYldJfjHi3d0rk6_gYD0nw/3mq9giu--e0.jpg?size=804x1430&quality=95&sign=fea2c30da72631bddc8b26780e80f7db&type=album';
    const url = `https://t.me/lottiemoviebot/app?startapp=reel_${id}`;
    window.Telegram?.WebApp.shareToStory(imgUrl, {
      text: `${film.title} - Сохраните для просмотра в Lottie Movie`,
      widget_link: {
        url,
        name: `${film.title} - Lottie Movie`,
      }
    })
    setIsModalOpen(false);
  }, [film.title, id]);

  return (
    <div className={styles.reel}>
      <video playsInline autoPlay loop muted className={styles.reelVideo}>
        <source src="https://static.mytonwallet.org/releases/3.4/ImprovedUi.mp4" type="video/mp4" />
        Your browser does not support the video tag. Please update your browser.
      </video>
      <ReelFilmInfo {...film} />
      <div className={styles.reelFilmVerticalButtons}>
        <ReelFilmLike isLiked={false} likesCount={23} />
        <IconButton mode="plain" size="l" onClick={handleOpenShareModal}>
          <Icon28ShareOutline className={styles.reelFilmVerticalButtonsIcon} />
        </IconButton>
        <IconButton mode="plain" size="l">
          <Icon28DownloadOutline className={styles.reelFilmVerticalButtonsIcon} />
        </IconButton>
      </div>
      {snackbar}
      <Modal
        onOpenChange={(open) => {
          if (!open) {
            setIsModalOpen(false);
          }
        }}
        header={<ModalHeader></ModalHeader>}
        open={isModalOpen}
        className={styles.reelShareModal}

      >
        <Title level="2" weight="1" plain>
          Поделиться рилсом
        </Title>
        <Cell before={<Icon28ShareOutline />} onClick={handleShareChat} className={styles.reelShareModalCell}>
          Поделиться в чате
        </Cell>
        <Cell before={<Icon28StoryAddOutline />} onClick={handleShareStory} className={styles.reelShareModalCell}>
          Поделиться в истории
        </Cell>
        <Cell before={<Icon28ChainOutline />} onClick={handleCopyLink} className={styles.reelShareModalCell}>
          Скопировать ссылку
        </Cell>
      </Modal>
    </div>
  )
});
