import { useState } from "react";
import TariffCard from "../TariffCard/TariffCard";
import tariffs from "../../data/tariffs";
import styles from "./TariffsList.module.css";

const tariffStyles = {
  1: {
    card: "basicCard",
    name: "basicName",
    price: "basicPrice",
  },
  2: {
    card: "standardCard",
    name: "standardName",
    price: "standardPrice",
  },
  3: {
    card: "premiumCard",
    name: "premiumName",
    price: "premiumPrice",
  },
  4: {
    card: "businessCard",
    name: "businessName",
    price: "businessPrice",
  },
};

function TariffsList() {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const handleSelectTariff = (tariffId) => {
    setSelectedTariff(selectedTariff === tariffId ? null : tariffId);
  };

  return (
    <div className={styles.container}>
      {tariffs.map((tariff) => (
        <TariffCard
          key={tariff.id}
          tariff={tariff}
          customStyles={tariffStyles[tariff.id]}
          isSelected={selectedTariff === tariff.id}
          onSelect={handleSelectTariff}
        />
      ))}
    </div>
  );
}

export default TariffsList;
