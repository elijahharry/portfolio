import classes from "./Gradient.module.css";

const Gradient = ({ primary, secondary }) => {
  return (
    <div className={classes.container}>
      <div className={classes.gradient}>
        <span
          className={classes.color}
          style={{ backgroundColor: primary + "F7" }}
        />
        <span
          className={classes.color}
          style={{ backgroundColor: secondary + "a8" }}
        />
        <span
          className={classes.color}
          style={{ backgroundColor: secondary + "D6" }}
        />
        <span
          className={classes.color}
          style={{ backgroundColor: primary + "D6" }}
        />
        <span
          className={classes.color}
          style={{ backgroundColor: primary + "CC" }}
        />
        <span
          className={classes.color}
          style={{ backgroundColor: secondary + "98" }}
        />
        <span className={classes.color} style={{ backgroundColor: primary }} />
        <span
          className={classes.color}
          style={{ backgroundColor: secondary + "BF" }}
        />
        <span
          className={classes.color}
          style={{ backgroundColor: primary + "F7" }}
        />
        <span
          className={classes.color}
          style={{ backgroundColor: secondary + "a8" }}
        />
        <span
          className={classes.color}
          style={{ backgroundColor: secondary + "D6" }}
        />
        <span
          className={classes.color}
          style={{ backgroundColor: primary + "D6" }}
        />
        <span
          className={classes.color}
          style={{ backgroundColor: primary + "CC" }}
        />
        <span
          className={classes.color}
          style={{ backgroundColor: secondary + "98" }}
        />
        <span className={classes.color} style={{ backgroundColor: primary }} />
        <span
          className={classes.color}
          style={{ backgroundColor: secondary + "BF" }}
        />
        <span
          className={classes.color}
          style={{ backgroundColor: primary + "F7" }}
        />
        <span
          className={classes.color}
          style={{ backgroundColor: secondary + "a8" }}
        />
        <span
          className={classes.color}
          style={{ backgroundColor: secondary + "D6" }}
        />
        <span
          className={classes.color}
          style={{ backgroundColor: primary + "D6" }}
        />
        <span
          className={classes.color}
          style={{ backgroundColor: primary + "CC" }}
        />
        <span
          className={classes.color}
          style={{ backgroundColor: secondary + "98" }}
        />
        <span className={classes.color} style={{ backgroundColor: primary }} />
        <span
          className={classes.color}
          style={{ backgroundColor: secondary + "BF" }}
        />
        <span className={classes.color} style={{ backgroundColor: primary }} />
      </div>
      <span className={classes.overlay} />
    </div>
  );
};

export default Gradient;
