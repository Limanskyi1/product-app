import classes from '../styles/Logo.module.scss';
export const LogoBanner = () => {
  return (
    <div className={classes.logo}>
        <h1 className={classes.logoTitle}>Frontend</h1>
        <p className={classes.logoSubTitle}>Feedback Board</p>
    </div>
  )
}