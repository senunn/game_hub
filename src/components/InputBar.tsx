import { Input, InputGroup } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { LuSearch } from 'react-icons/lu'

interface props {
    onSearch : (search: String) => void;
}

const InputBar = ({onSearch}: props) => {

    const ref = useRef<HTMLInputElement>(null)
  return (
        <form onSubmit={(event) => {
            event.preventDefault();
            {
                if(ref.current){
                    onSearch(ref.current.value);
                }
            }
        }}>
            <InputGroup startElement={<LuSearch/>} marginX={5}>
               <Input borderRadius={20} placeholder="Search Games..." variant="outline" width="4/5"  ref={ref}/>
            </InputGroup>
        </form>
  )
}

export default InputBar