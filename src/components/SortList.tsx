import { Button, Menu, Portal } from '@chakra-ui/react'

interface Props {
    onSelect: (string) => void;
    sortOrder: string;
}

const SortList = ({onSelect, sortOrder}: Props) => {
    const sortArray = 
        [   
            {value: '', name: "Relavance"},
            {value: '-added', name: "Date added"},
            {value: 'name', name: "Name"},
            {value: '-released', name: "Release data"},
            {value: '-metacritic', name: "Popularity"},
            {value: '-rating', name: "Average rating"}   
        ]
    
    const currentSortOrder = sortArray.filter(order => order.value === sortOrder )  

  return (
      <Menu.Root>
            <Menu.Trigger>
                <Button variant="outline" size="lg">
                    Sort: {currentSortOrder[0] ? ` ${currentSortOrder[0]?.name}` : 'Relavance'}
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {sortArray.map((sort)=> <Menu.Item value={sort.value} key={sort.value} onClick={() => onSelect(sort.value)}>{sort.name}</Menu.Item>)}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
  )
}

export default SortList