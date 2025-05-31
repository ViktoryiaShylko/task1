import TariffCard from "../TariffCard/TariffCard";
import tariffs from "../../data/tariffs";

import styles from "./TariffsList.module.css";

const tariffStyles = {
  1: {
    // ID базового тарифа
    card: "basicCard",
    name: "basicName",
    price: "basicPrice",
  },
  2: {
    // ID стандартного тарифа
    card: "standardCard",
    name: "standardName",
    price: "standardPrice",
  },
  3: {
    // ID премиум тарифа
    card: "premiumCard",
    name: "premiumName",
    price: "premiumPrice",
  },
  4: {
    // ID бизнес тарифа
    card: "businessCard",
    name: "businessName",
    price: "businessPrice",
  },
};

function TariffsList() {
  return (
    <div className={styles.container}>
      {tariffs.map((tariff, index) => (
        <TariffCard
          key={tariff.id}
          tariff={tariff}
          customStyles={tariffStyles[tariff.id]}
        />
      ))}
    </div>
  );
}

export default TariffsList;
