import Brand from "./Brand/Brand";
import Mode from "./Mode/Mode";
import classes from "./Nav.module.css";

const Nav = ({ dark, toggleMode }) => {
  return (
    <nav className={`${classes.nav} ${dark ? classes.dark : classes.light}`}>
      <div className="container">
        <div className={classes.bar}>
          <Brand dark={dark} />
          <Mode dark={dark} toggleMode={toggleMode} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
