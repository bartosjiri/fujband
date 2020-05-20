import React from 'react'

import loaderStyle from './assets/Loader.module.scss'

const Loader = () => (
  <div className={loaderStyle.loader}>
    <div className={loaderStyle.animation} />
  </div>
)

export default Loader
