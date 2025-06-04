import styles from "./TariffCard.module.css";

function TariffCard({ tariff, customStyles, isSelected, onSelect }) {
  return (
    <div
      className={`${styles.card} ${styles[customStyles.card]} ${
        isSelected ? styles.selected : ""
      }`}
      onClick={() => onSelect(tariff.id)}
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
