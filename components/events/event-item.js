import classes from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AdressIcon from "../icons/address-icon";
import ArrowRigthIcon from "../icons/arrow-right-icon";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const formatDate = new Date(date).toLocaleDateString("pt-br", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{formatDate}</time>
          </div>
          <div className={classes.address}>
            <AdressIcon />
            <address>{formatAddress}</address>
          </div>
          <div className={classes.date}>
            <Button link={exploreLink}>
              <span>Explore event</span>
              <span className={classes.icon}>
                <ArrowRigthIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
