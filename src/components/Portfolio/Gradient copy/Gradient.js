import classes from "./Gradient.module.css";

const Gradient = ({ primary, secondary }) => {
  return (
    <div className={classes.container}>
      <div className={classes.gradient}>
        <span className={classes.color} style={{ background: primary }} />
        <span className={classes.color} style={{ background: secondary }} />
        <span className={classes.color} style={{ background: secondary }} />
        <span className={classes.color} style={{ background: primary }} />
        <span className={classes.color} style={{ background: primary }} />
        <span className={classes.color} style={{ background: secondary }} />
        <span className={classes.color} style={{ background: secondary }} />
        <span className={classes.color} style={{ background: primary }} />
      </div>
      <span className={classes.overlay} />
    </div>
  );
};

export default Gradient;
