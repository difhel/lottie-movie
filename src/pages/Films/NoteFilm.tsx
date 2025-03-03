import { memo } from 'react'
import { Card, IconButton } from '@telegram-apps/telegram-ui'
import { CardCell } from '@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell';
import styles from './Films.module.scss'
import { Icon20DeleteOutlineAndroid, Icon20WriteOutline } from '@vkontakte/icons';

interface OwnProps {
  title: string;
  image: string;
  subtitle: string;
  onClick: NoneToVoidFunction;
  onEdit: NoneToVoidFunction;
  onDelete: NoneToVoidFunction;
}

export const NoteFilm = memo<OwnProps>(({ title, image, subtitle, onClick, onEdit, onDelete }) => {
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

        <img
          alt="Dog"
          src={image}
          className={styles.filmImage}
        />
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
