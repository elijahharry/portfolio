import Brand from "./Brand/Brand";
import Mode from "./Mode/Mode";
import Contact from "./Contact/Contact";
import classes from "./Nav.module.css";

const Nav = ({ dark, toggleMode }) => {
  return (
    <nav className={`${classes.nav} ${dark ? classes.dark : classes.light}`}>
      <div className="container">
        <div className={classes.bar}>
          <Brand dark={dark} />
          <div className={classes.item}>
            <Contact dark={dark} type="email" value="elijah@elijahharry.com" />
            <Contact dark={dark} type="phone" value="262-210-6064" />
            <Mode dark={dark} toggleMode={toggleMode} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
