import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


const SkeletonCard = () => {
  return (
    <Card.Root width='300px'>
        <Skeleton height='200px'/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card.Root>
  )
}

export default SkeletonCard