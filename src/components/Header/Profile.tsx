import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>
          Bruno Fukumori
        </Text>
        <Text color="gray.300" fontSize="small">
          brunofukumori@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Bruno Fukumori" src="https://github.com/bfukumori.png">

      </Avatar>
    </Flex>
  )
}