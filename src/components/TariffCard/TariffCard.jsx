import styles from "./TariffCard.module.css";

function TariffCard({ tariff, customStyles }) {
  return (
    <div
      className={`${styles.card} ${
        tariff.isHighlighted ? styles.highlighted : ""
      } ${styles[customStyles.card]}`}
    >
      <p className={`${styles.name} ${styles[customStyles.name]}`}>
        {tariff.name}
      </p>
      <p className={`${styles.price} ${styles[customStyles.price]}`}>
        руб {tariff.price}/мес
      </p>
      <p className={styles.speed}>до {tariff.speed} Мбит/сек</p>
      <p className={styles.description}>{tariff.description}</p>
    </div>
  );
}

export default TariffCard;
