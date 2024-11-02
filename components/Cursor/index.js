import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { useTheme } from "next-themes";

const Cursor = () => {
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  const getCustomColor = () => {
    return theme.theme === "dark" ? "#fff" : "#000";
  };

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <>
      {mount && (
        <AnimatedCursor
          color="#fff"
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0}
          outerStyle={{
            mixBlendMode: 'exclusion'
          }}
        />
      )}
    </>
  );
};

export default Cursor;
