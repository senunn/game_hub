import { Platform } from "@/hooks/useGame";
import usePlatform from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";

interface Props {
  onSelect: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlaformListButton = ({ onSelect, selectedPlatform }: Props) => {
  const { data, error } = usePlatform();

  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button variant="outline" size="md">
          {selectedPlatform?.name || "Platform"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.id.toString()}
                onClick={() => onSelect(platform)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlaformListButton;
