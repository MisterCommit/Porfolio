import { createStyles } from "@mantine/core";
import { Certifications } from "@/components/skills/Certifications";
import { Proficiency } from "@/components/skills/Proficiency";

export const Skills = () => {
  const { classes } = useStyles();
  return (
    <div id="skills" className={classes.container}>
      <Certifications />
      <Proficiency />
    </div>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 100,
  },
}));
