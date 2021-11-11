import NextImg from "next/image";
import classes from "./Image.module.css";

const Image = ({ image, isMain, isNext, wasPrevious }) => {
  return (
    <div
      key={image.src}
      className={`${classes.img} ${
        isMain
          ? classes.img_main
          : isNext
          ? classes.img_next
          : wasPrevious
          ? classes.img_prev
          : classes.img_hidden
      }`}
    >
      <img src="/img/monitor.svg" className={classes.monitor} />
      <div className={classes.screen}>
        <div className={`${classes.nextimg_container}`}>
          <NextImg
            layout="fill"
            objectFit="cover"
            objectPosition="top center"
            src={`/img/${image.src}`}
            placeholder={image?.blur ? "blur" : "empty"}
            blurDataURL={image?.blur ? image.blur : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default Image;
