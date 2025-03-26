import { Button, Menu, Portal } from '@chakra-ui/react'

const SortList = () => {
  return (
      <Menu.Root>
            <Menu.Trigger>
                <Button variant="outline" size="lg">
                    Sort
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item value='1'>Item One</Menu.Item>
                        <Menu.Item value='1'>Item One</Menu.Item>
                        <Menu.Item value='1'>Item One</Menu.Item>
                        <Menu.Item value='1'>Item One</Menu.Item>
                        <Menu.Item value='1'>Item One</Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
  )
}

export default SortList