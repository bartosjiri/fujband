import React from 'react'
import PropTypes from 'prop-types'

import contentStyle from './assets/Content.module.scss'

const Content = ({children}) => (
  <section className={contentStyle.content}>
    {children}
  </section>
)

Content.propTypes = {
  children: PropTypes.node.isRequired
}

export default Content
