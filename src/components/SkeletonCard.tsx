import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


const SkeletonCard = () => {
  return (
    <Card.Root >
        <Skeleton height='200px'/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card.Root>
  )
}

export default SkeletonCard