import { Input, InputGroup } from '@chakra-ui/react'
import React from 'react'
import { LuSearch } from 'react-icons/lu'

const InputBar = () => {
  return (
    <div>
        <InputGroup startElement={<LuSearch/>} marginX={5}>
           <Input borderRadius={20} placeholder="Search Games..." variant="outline" width="4/5" />
        </InputGroup>
    </div>
  )
}

export default InputBar