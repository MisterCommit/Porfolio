import { Title, Progress, Box } from "@mantine/core";
import { Text } from "@/components/common/Typography";
import { Skills } from "@/constants/Skills";

export const Proficiency = () => {
  return (
    <>
      <Title order={1} mt={100}>
        Proficiency
      </Title>

      <div>
        {Skills.map((skill) => (
          <Box key={skill.label} mb="sm">
            <Text>{skill.label} </Text>
            <Progress value={skill.level} size="xl" />
            <Box style={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {skill.technologies.map((technology, index) => (
                <Text size={14} key={technology} ml={2}>
                  {technology}
                  {index < skill.technologies.length - 1 ? "," : ""}
                </Text>
              ))}
            </Box>
          </Box>
        ))}
      </div>
    </>
  );
};
