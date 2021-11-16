import { MdEmail, MdPhoneEnabled } from "react-icons/md";
import { BsFillTriangleFill } from "react-icons/bs";
import classes from "./Contact.module.css";

const Contact = ({ dark, type, value }) => {
  return (
    <a
      href={`${
        type === "phone" ? "tel:" : type === "email" ? "mailto:" : ""
      }${value}`}
      key={type}
      className={classes.container}
    >
      <div
        className={`${classes.link} ${
          dark ? classes.link_dark : classes.link_light
        }`}
      >
        {type === "phone" ? (
          <MdPhoneEnabled />
        ) : type === "email" ? (
          <MdEmail />
        ) : (
          ""
        )}
        <a className={classes.popup}>
          <div className={classes.contents}>
            <span>
              <BsFillTriangleFill />
            </span>
            {value}
          </div>
        </a>
      </div>
    </a>
  );
};

export default Contact;
