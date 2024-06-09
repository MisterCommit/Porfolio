import { createStyles, SimpleGrid, Title } from "@mantine/core";
import { Projects } from "@/constants/Projects";
import Link from "next/link";
import Image from "next/image";

export const Work = () => {
  const { classes } = useStyles();

  return (
    <div id="work" className={classes.container}>
      <Title order={1} mb={20}>
        Project and Products
      </Title>
      <SimpleGrid
        cols={3}
        spacing="xl"
        breakpoints={[
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        {Projects.map((project) => {
          return (
            <Link href={project.url} target="_blank" key={project.title}>
              <Image
                style={{ borderRadius: 10, margin: 20 }}
                layout="responsive"
                src={project.imageUrl}
                alt={`Image of project  ${project.title}`}
                width={400}
                height={280}
              />
            </Link>
          );
        })}
      </SimpleGrid>
    </div>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: "5%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
