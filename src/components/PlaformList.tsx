import usePlatform from '@/hooks/usePlatforms'
import { Button, Menu, Portal } from '@chakra-ui/react'

const PlaformListButton = () => {
    const {data, error} = usePlatform();

    if (error) return null;
  return (
    <Menu.Root>
        <Menu.Trigger>
            <Button variant="outline" size="lg">
                Platforms
            </Button>
        </Menu.Trigger>
        <Portal>
            <Menu.Positioner>
                <Menu.Content>
                    {data.map(platform => <Menu.Item key={platform.id} value={platform.id.toString()}>{platform.name}</Menu.Item>)}
                </Menu.Content>
            </Menu.Positioner>
        </Portal>
    </Menu.Root>
  )
}

export default PlaformListButton;