import Brand from "./Brand/Brand";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={`${classes.nav}`}>
      <div className="container">
        <div className={classes.bar}>
          <Brand />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
