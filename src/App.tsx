import { Icon28MagicWandOutline, Icon28Video, Icon28ListLikeFill } from '@vkontakte/icons'
import styles from './App.module.scss'
import { Tabbar } from '@telegram-apps/telegram-ui'
import { useState } from 'react'
enum TabbarItems {
  FILMS = 'films',
  FEELING_LUCKY = 'feeling_lucky',
  REELS = 'reels',
}

function App() {
  const [currentTab, setCurrentTab] = useState<TabbarItems>(TabbarItems.FILMS);
  return (
    <>
      <Tabbar>
        <Tabbar.Item text="Фильмы" onClick={() => setCurrentTab(TabbarItems.FILMS)} selected={currentTab === TabbarItems.FILMS}>
         <Icon28ListLikeFill />
        </Tabbar.Item>
        <Tabbar.Item
          text="Мне повезет"
          className={styles.feelingLucky}
          onClick={() => setCurrentTab(TabbarItems.FEELING_LUCKY)}
        >
          <Icon28MagicWandOutline />
        </Tabbar.Item>
        <Tabbar.Item text="Reels" onClick={() => setCurrentTab(TabbarItems.REELS)} selected={currentTab === TabbarItems.REELS}>
          <Icon28Video />
        </Tabbar.Item>
      </Tabbar>
    </>
  )
}

export default App
