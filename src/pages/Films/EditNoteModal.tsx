import { ButtonCell, Input, Modal, Tappable, Textarea, Title } from "@telegram-apps/telegram-ui"
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader"
import { Icon24CancelCircleOutline, Icon28Done } from "@vkontakte/icons";
import { memo, useCallback, useState } from "react"
import styles from './Films.module.scss'

interface OwnProps {
  open: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setIsOpenParent?: (isOpen: boolean) => void;
  modalType: "new" | "edit";
  currentName?: string;
  currentDescription?: string;
}

export const EditNoteModal = memo<OwnProps>(({
  open, setIsOpen, setIsOpenParent, modalType, currentName, currentDescription
}) => {
  const [textNoteName, setTextNoteName] = useState(currentName || '');
  const [textNoteDescription, setTextNoteDescription] = useState(currentDescription || '');

  const handleSaveTextNote = useCallback(() => {
    // TODO: create a new note or update existing one
    setIsOpen(false);
    setIsOpenParent?.(false);
  }, []);

  return (
    <Modal
      open={open}
      onOpenChange={setIsOpen}
      header={<ModalHeader />}
      className={styles.modal}
      nested={modalType === 'new'}
    >
      <Title level="2" weight="1" plain>
        {modalType === 'new' ? 'Создание текстовой заметки' : 'Редактирование заметки'}
      </Title>
      <Input
        status="focused"
        header="Заголовок"
        placeholder="Заголовок заметки"
        value={textNoteName}
        onChange={e => setTextNoteName(e.target.value)}
        after={<Tappable Component="div" style={{
          display: 'flex'
        }}
          onClick={() => setTextNoteName('')}
        >
          <Icon24CancelCircleOutline />
        </Tappable>} />
      <Textarea
        header="Описание заметки (необязательно)"
        placeholder="Например, ссылка на видео или описание, почему вам хотелось бы в будущем вернуться к этому фильму."
        value={textNoteDescription}
        onChange={e => setTextNoteDescription(e.target.value)}
      />
      <ButtonCell
        before={<Icon28Done />}
        onClick={handleSaveTextNote}
        className={styles.modalCell}
      >
        Сохранить
      </ButtonCell>

    </Modal>
  )
});
