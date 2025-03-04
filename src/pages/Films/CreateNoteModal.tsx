import { Cell, Input, Modal, Spinner, Tappable, Title } from "@telegram-apps/telegram-ui"
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader"
import { Icon24CancelCircleOutline, Icon28VideoAddSquareOutline } from "@vkontakte/icons";
import { memo, useCallback, useState } from "react"
import styles from './Films.module.scss'
import { SearchSuggestion } from "../../components/SearchSuggestions/SearchSuggestion";
import { useSearch } from "../../hooks/useSearch";
import { EditNoteModal } from "./EditNoteModal";
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

  const handleClickNewText = useCallback(() => {
    setIsCreateTextModalOpen(true);
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

      <EditNoteModal
        open={isCreateTextModalOpen}
        setIsOpen={setIsCreateTextModalOpen}
        setIsOpenParent={setIsOpen}
        modalType="new"
        currentName={value}
      />
    </>
  )
});
