import classes from "./Gradient.module.css";

const Gradient = ({ primary, secondary }) => {
  return (
    <div className={classes.container}>
      <div className={classes.gradient}>
        <span className={classes.color} style={{ backgroundColor: primary }} />
        <span
          className={classes.color}
          style={{ backgroundColor: secondary }}
        />
        <span
          className={classes.color}
          style={{ backgroundColor: secondary }}
        />
        <span className={classes.color} style={{ backgroundColor: primary }} />
        <span className={classes.color} style={{ backgroundColor: primary }} />
        <span
          className={classes.color}
          style={{ backgroundColor: secondary }}
        />
        <span className={classes.color} style={{ backgroundColor: primary }} />
        <span
          className={classes.color}
          style={{ backgroundColor: secondary }}
        />
      </div>
      <span className={classes.overlay} />
    </div>
  );
};

export default Gradient;
