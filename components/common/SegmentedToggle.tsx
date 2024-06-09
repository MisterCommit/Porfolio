import { useMantineColorScheme, ActionIcon, Group } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

export function SegmentedToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Group position="center" my="xl">
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "green"}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {colorScheme === "dark" ? (
          <IconSun size={18} />
        ) : (
          <IconMoonStars size={18} />
        )}
      </ActionIcon>
    </Group>
  );
}
