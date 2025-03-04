import { ButtonCell, Cell, Input, Modal, Spinner, Tappable, Textarea, Title } from "@telegram-apps/telegram-ui"
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader"
import { Icon24CancelCircleOutline, Icon28Done, Icon28VideoAddSquareOutline } from "@vkontakte/icons";
import { memo, useCallback, useState } from "react"
import styles from './Films.module.scss'
import { SearchSuggestion } from "../../components/SearchSuggestions/SearchSuggestion";
import { useSearch } from "../../hooks/useSearch";
interface OwnProps {
  open: boolean;
  onOpenChange: NoneToVoidFunction;
  setIsOpen: (isOpen: boolean) => void;
}

export const CreateNoteModal = memo<OwnProps>(({ open, onOpenChange, setIsOpen }) => {
  const [value, setValue] = useState('');
  const { suggestions, isLoading } = useSearch(value);

  const handleClickSuggestion = useCallback((id: number) => {
    // TODO: create new note
    setIsOpen(false);
  }, []);

  const [isCreateTextModalOpen, setIsCreateTextModalOpen] = useState(false);
  const [textNoteName, setTextNoteName] = useState('');
  const [textNoteDescription, setTextNoteDescription] = useState('');

  const handleClickNewText = useCallback(() => {
    setIsCreateTextModalOpen(true);
    setTextNoteName(value);
  }, []);

  const handleSaveTextNote = useCallback(() => {
    // TODO: create new note
    setIsCreateTextModalOpen(false);
    setIsOpen(false);
  }, []);

  return (
    <>
      <Modal
        open={open}
        onOpenChange={onOpenChange}
        header={<ModalHeader />}
        className={styles.modal}
        nested
      >
        <Title level="2" weight="1" plain>
          Добавить фильм в список просмотра
        </Title>
        <Input
          status="focused"
          header="Поиск"
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

        <div className={styles.createNoteModalSuggestions}>
          {!isLoading && (
            (
              <Cell
                before={<Icon28VideoAddSquareOutline />}
                description="Сохранить заметку о фильме"
                onClick={handleClickNewText}
              >
                Добавить заметку
              </Cell>
            )
          )}
          {isLoading ? <Spinner size="m" className={styles.spinner} /> : suggestions.map(suggestion => (
            <SearchSuggestion
              key={suggestion.id}
              {...suggestion}
              onClick={handleClickSuggestion}
            />
          ))}
        </div>
      </Modal>

      <Modal
        open={isCreateTextModalOpen}
        onOpenChange={setIsCreateTextModalOpen}
        header={<ModalHeader />}
        className={styles.modal}
        nested
      >
        <Title level="2" weight="1" plain>
          Создание текстовой заметки
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
    </>
  )
});
