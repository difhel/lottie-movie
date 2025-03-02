import { memo } from 'react'
import { Button, Title } from '@telegram-apps/telegram-ui'
import { NoteFilm } from './NoteFilm'
import { NoteText } from './NoteText'
import styles from './Films.module.scss'
import { Icon20VideoAddSquareOutline } from '@vkontakte/icons'

export const Films = memo(() => {
  return (
    <>
      <Title level="1" weight="1" plain={false}>
        Фильмы
      </Title>
      <Button
        before={<Icon20VideoAddSquareOutline />}
        className={styles.addFilmButton}
        mode="filled"
        size="s"
      >
        Сохранить фильм в коллекцию
      </Button>
      <div className={styles.films}>
        <NoteFilm
          title="Матрица"
          image="https://sun9-73.userapi.com/impg/SuIoCR_TkYHE31B_lwJFu6qyxwMhPp8UhVHQfw/X6_kd-GHxiE.jpg?size=600x338&quality=95&sign=226a56aed1b0978856b878cece18467c&type=album"
          subtitle="2021, Научно-фантастический боевик"
          onClick={() => { }}
          onEdit={() => { }}
          onDelete={() => { }}
        />
        <NoteFilm
          title="Не смотрите наверх"
          image="https://sun9-1.userapi.com/impg/XUMIljtQBITSg-9ZNHZP69-OyzkOIAIcixIp6A/hs-WKP3GCXk.jpg?size=1480x750&quality=95&sign=6cf6050340527d4ff120e6e82b6d73de&type=album"
          subtitle="2021, Сатирический научно-фантастический фильм"
          onClick={() => { }}
          onEdit={() => { }}
          onDelete={() => { }}
        />
        <NoteFilm
          title="Как Витька Чеснок вёз Лёху Штыря в дом инвалидов"
          image="https://sun9-10.userapi.com/impg/SpZLhDTmQbvkf3jq9L1c6cyXYMqdVF-acl8WXA/uICz4rs5d38.jpg?size=600x900&quality=95&sign=1d64cb8bf94132f8be367bdef4664a27&type=album"
          subtitle="2017, Драма про парня с детдомовским прошлым"
          onClick={() => { }}
          onEdit={() => { }}
          onDelete={() => { }}
        />
        <NoteText
          title="Фильм от Насти"
          //   urlPreview="https://i.imgur.com/892vhef.jpeg"
          subtitle="Бля я забыл там аниме чета хз"
          onClick={() => { }}
          onEdit={() => { }}
          onDelete={() => { }}
        />
        <NoteFilm
          title="Основатель"
          image="https://sun9-74.userapi.com/impg/izmQMUWcGGOTlqMgSMdxvH4attbu3W6EJGs5QA/YHrGR72psks.jpg?size=554x554&quality=95&sign=b0c3766e306cbbda9a4b487082da51fc&type=album"
          subtitle="2016, Драма о бурном подъеме гиганта быстрого питания McDonald's"
          onClick={() => { }}
          onEdit={() => { }}
          onDelete={() => { }}
        />
      </div>
    </>
  )
});
