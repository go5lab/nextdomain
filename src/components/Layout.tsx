import { FunctionComponent } from 'react'

import styles from '../styles/components/Layout.module.scss'

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.parent}>
      <main className={styles.main + ` container`}>{children}</main>
    </div>
  )
}

export default Layout