import { FunctionComponent, useCallback, useContext } from "react";

import RedditContext from "../../context/redditContext";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  const { subReddit } = useContext(RedditContext);

  const getStyling = useCallback((): string => {
    switch (subReddit) {
      case "/r/ProgrammerHumor":
        return styles.programmingHumor;
      case "/r/programminhorror":
        return styles.programmingHorror;
    }
  }, []);

  return (
    <div className={`${styles.header} ${getStyling()}`}>
      <p>{`Today's Top Posts @ ${subReddit}`}</p>
    </div>
  );
};

export default Header;
