import styles from './styles/Hero.module.scss';

export default () => (
  <div className={styles['logo-container']}>
    <svg width='62' height='68' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M56.298 53.554L41.514 10.55 0 24.823l14.784 43.003 41.514-14.272z' fill='#008BF8' />
      <path d='M18.3 60.29L2.739 15.024 46.438 0 62 45.266 18.3 60.29zM5.702 16.536l14.007 40.74 39.329-13.522L45.03 3.014 5.7 16.536z' fill='#3F3D56' />
      <path d='M37.988 41.276l-2.872-8.481-.598 6.85-2.287.776-4.638-5.078 2.873 8.481-4.29 1.453-5.453-16.101 4.685-1.587 5.93 6.434.823-8.721 4.663-1.58 5.454 16.102-4.29 1.453z' fill='#FCFAFB' />
    </svg>
  </div>
);
