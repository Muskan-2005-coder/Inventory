import styles from "../styles/TransportDashboard.module.css";
import ModeSelector from "../components/Transport/ModeSelector";
import CarbonTracker from "../components/Transport/CarbonTracker";

const TransportDashboard = () => {
  return (
    <div className={styles.container}>
           <h1 className={styles.TransportTitle}>📦 Transportation</h1>
      
      <div className={styles.gridLayout}>
        <ModeSelector />
        <CarbonTracker />
      </div>
    </div>
  );
};

export default TransportDashboard;
