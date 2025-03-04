import { Input, Modal, Tappable, Title } from "@telegram-apps/telegram-ui"
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader"
import { Icon24CancelCircleOutline } from "@vkontakte/icons";
import { memo, useState } from "react"
import styles from './Films.module.scss'

interface OwnProps {
  open: boolean;
  onOpenChange: NoneToVoidFunction;
}

export const CreateNoteModal = memo<OwnProps>(({ open, onOpenChange }) => {
  const [value, setValue] = useState('');

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      header={<ModalHeader />}
      className={styles.modal}
    >
      <Title level="2" weight="1" plain>
        Создание заметки
      </Title>
      <Input
        status="focused"
        header="Input"
        placeholder="Название фильма или заголовок заметки"
        value={value}
        onChange={e => setValue(e.target.value)}
        after={<Tappable Component="div" style={{
          display: 'flex'
        }}
        onClick={() => setValue('')}
      >
          <Icon24CancelCircleOutline />
        </Tappable>} />
    </Modal>
  )
});
