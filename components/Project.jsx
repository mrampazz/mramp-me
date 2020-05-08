import React from 'react'
import styles from './styles/Project.module.scss'

const ButtonSmall = ({children, href}) => (
    <a href={href} className={styles['link']}>
        <div className={styles['button']}>
            {children}
        </div>
    </a>
)

export const Project = ({title, desc, link, img, id}) => (
    <div className={styles['proj-container']}>
        <div className={styles['img-container']}>
            <img src={img} alt={`project-${id}`}/>
        </div>
        <div className={styles['desc-container']}>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
        <div className={styles['button-container']}>
            <ButtonSmall href={link}>learn more</ButtonSmall>
        </div>
    </div>
)
