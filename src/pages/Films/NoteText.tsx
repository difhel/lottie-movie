import { memo, useState, useCallback } from 'react'
import { ButtonCell, Card, Title, IconButton, Modal } from '@telegram-apps/telegram-ui'
import { CardCell } from '@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell';
import styles from './Films.module.scss'
import { Icon20DeleteOutlineAndroid, Icon20WriteOutline, Icon24WriteOutline, Icon28DeleteOutlineAndroid, Icon28CancelCircleOutline } from '@vkontakte/icons';
import { ModalHeader } from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader';

interface OwnProps {
  title: string;
  urlPreview?: string;
  subtitle?: string;
  onClick: NoneToVoidFunction;
}

export const NoteText = memo<OwnProps>(({ title, urlPreview, subtitle, onClick }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = useCallback(() => {
    setIsDeleteModalOpen(true);
  }, []);

  return (
    <>
      <Card type="plain" onClick={onClick} className={styles.film}>
        <>
          <div className={styles.filmActions}>
            <IconButton mode="gray" size="s" onClick={() => { }}>
              <Icon20WriteOutline />
            </IconButton>
            <IconButton mode="gray" size="s" onClick={handleDelete}>
              <Icon20DeleteOutlineAndroid />
            </IconButton>
          </div>

          {urlPreview ? (
            <img
              alt="Dog"
              src={urlPreview}
              className={styles.filmImage}
            />
          ) : (
            <div className={styles.filmNoLinkPreview}>
              <Icon24WriteOutline />
            </div>
          )}
          <CardCell
            readOnly
            subtitle={subtitle}
          >
            {title}
          </CardCell>
        </>
      </Card>
      <Modal
        onOpenChange={(open) => {
          if (!open) {
            setIsDeleteModalOpen(false);
          }
        }}
        header={<ModalHeader />}
        open={isDeleteModalOpen}
        className={styles.deleteFilmModal}

      >
        <Title level="2" weight="1" plain>
          Вы уверены, что хотите удалить фильм?
        </Title>
        <ButtonCell
          before={<Icon28DeleteOutlineAndroid />}
          onClick={() => setIsDeleteModalOpen(false)}
          className={styles.deleteFilmModalCell}
          mode="destructive"
        >
          Удалить
        </ButtonCell>
        <ButtonCell
          before={<Icon28CancelCircleOutline />}
          onClick={() => setIsDeleteModalOpen(false)}
          className={styles.deleteFilmModalCell}
        >
          Отменить
        </ButtonCell>
      </Modal>  
    </>
  )
});
