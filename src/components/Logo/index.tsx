import classes from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={classes.logo}>
        <h1 className={classes.logoTitle}>Frontend</h1>
        <p className={classes.logoSubTitle}>Feedback Board</p>
    </div>
  )
}
