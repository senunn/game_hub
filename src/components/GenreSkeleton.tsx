import { HStack, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const GenreSkeleton = () => {
  return (
    <HStack gap={4} marginY={3}>
        <Skeleton height="32px" width="32px" borderRadius={5}/>
        <Skeleton height="16px" width="120px" />
   </HStack>
  )
}

export default GenreSkeleton