import React from 'react'
import './Stylesheet.css'
import styles from './styles.module.css'

function Stylesheets(props) {
    let className = props.primary? 'primary' : ''
  return (
    <div className={`${className} font-xl`}>
        <h5>Stylesheets</h5>
        <h3 className={styles.success}>Success</h3>
        <h4 className='error'>Error</h4>
    </div>
  )
}

export default Stylesheets