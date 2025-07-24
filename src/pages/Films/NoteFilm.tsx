import { memo, useState, useCallback } from 'react'
import { ButtonCell, Card, IconButton, Modal, Title } from '@telegram-apps/telegram-ui'
import { CardCell } from '@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell';
import styles from './Films.module.scss'
import { Icon20DeleteOutlineAndroid, Icon28CancelCircleOutline, Icon28DeleteOutlineAndroid } from '@vkontakte/icons';
import { ModalHeader } from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader';

interface OwnProps {
  title: string;
  image: string;
  subtitle: string;
  onClick: NoneToVoidFunction;
}

export const NoteFilm = memo<OwnProps>(({ title, image, subtitle, onClick }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = useCallback(() => {
    setIsDeleteModalOpen(true);
  }, []);

  return (
    <>
      <Card type="plain" onClick={onClick} className={styles.film}>
        <>
          <div className={styles.filmActions}>
            <IconButton mode="gray" size="s" onClick={handleDelete}>
              <Icon20DeleteOutlineAndroid />
            </IconButton>
          </div>

          <img
            alt="Dog"
            src={image}
            className={styles.filmImage}
            loading="lazy"
          />
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
        className={styles.modal}
      >
        <Title level="2" weight="1" plain>
          Вы уверены, что хотите удалить фильм?
        </Title>
        <ButtonCell
          before={<Icon28DeleteOutlineAndroid />}
          onClick={() => setIsDeleteModalOpen(false)}
          className={styles.modalCell}
          mode="destructive"
        >
          Удалить
        </ButtonCell>
        <ButtonCell
          before={<Icon28CancelCircleOutline />}
          onClick={() => setIsDeleteModalOpen(false)}
          className={styles.modalCell}
        >
          Отменить
        </ButtonCell>
      </Modal>
    </>
  )
});
