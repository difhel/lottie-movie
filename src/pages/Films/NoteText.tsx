import { memo } from 'react'
import { Card, IconButton } from '@telegram-apps/telegram-ui'
import { CardCell } from '@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell';
import styles from './Films.module.scss'
import { Icon20DeleteOutlineAndroid, Icon20WriteOutline, Icon24WriteOutline } from '@vkontakte/icons';

interface OwnProps {
  title: string;
  urlPreview?: string;
  subtitle?: string;
  onClick: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export const NoteText = memo<OwnProps>(({ title, urlPreview, subtitle, onClick, onEdit, onDelete }) => {
  return (
    <Card type="plain" onClick={onClick} className={styles.film}>
      <>
        <div className={styles.filmActions}>
          <IconButton mode="gray" size="s" onClick={onEdit}>
            <Icon20WriteOutline />
          </IconButton>
          <IconButton mode="gray" size="s" onClick={onDelete}>
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
  )
});
