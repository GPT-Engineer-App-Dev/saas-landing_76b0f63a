import { Box, Button, Container, Flex, Heading, Image, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaCloud, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex align="center" justify={{ base: "center", md: "space-around", xl: "space-between" }} direction={{ base: "column-reverse", md: "row" }} wrap="no-wrap" minH="70vh" px={8} mb={16}>
        <Stack spacing={4} w={{ base: "80%", md: "40%" }} align={["center", "center", "flex-start", "flex-start"]}>
          <Heading as="h1" size="xl" fontWeight="bold" color={useColorModeValue("gray.700", "white")} textAlign={["center", "center", "left", "left"]}>
            Simplify Your Business With Our SaaS Solution
          </Heading>
          <Heading as="h2" size="md" color={useColorModeValue("gray.800", "gray.200")} opacity="0.8" fontWeight="normal" lineHeight={1.5} textAlign={["center", "center", "left", "left"]}>
            Manage, analyze, and grow your business with ease. Try our platform today!
          </Heading>
          <Button colorScheme="blue" borderRadius="8px" py="4" px="4" lineHeight="1" size="md" rightIcon={<FaArrowRight />}>
            Get Started
          </Button>
          <Text fontSize="xs" mt={2} textAlign="center" color={useColorModeValue("gray.600", "gray.400")}>
            No credit card required.
          </Text>
        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          <Image src="https://images.unsplash.com/photo-1630673348540-f48385105436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcHJvZHVjdHxlbnwwfHx8fDE3MDk3MzMxOTB8MA&ixlib=rb-4.0.3&q=80&w=1080" size="100%" rounded="1rem" shadow="2xl" />
        </Box>
      </Flex>

      <VStack spacing={8}>
        <Flex align="center" justify="center" direction={{ base: "column", md: "row" }} wrap="no-wrap" minH="20vh" px={8} mb={16}>
          <Box w={{ base: "80%", sm: "60%", md: "50%" }} textAlign="center">
            <FaCloud size="50px" color={useColorModeValue("#F56565", "#FC8181")} />
            <Heading as="h3" size="lg" fontWeight="bold" color={useColorModeValue("gray.700", "white")}>
              Cloud-Based
            </Heading>
            <Text color={useColorModeValue("gray.600", "gray.200")} fontSize="md" p={4}>
              Access your data from anywhere in the world, at any time.
            </Text>
          </Box>
          <Box w={{ base: "80%", sm: "60%", md: "50%" }} textAlign="center">
            <FaRocket size="50px" color={useColorModeValue("#68D391", "#9AE6B4")} />
            <Heading as="h3" size="lg" fontWeight="bold" color={useColorModeValue("gray.700", "white")}>
              Fast Performance
            </Heading>
            <Text color={useColorModeValue("gray.600", "gray.200")} fontSize="md" p={4}>
              Quick setup and fast loading times for efficiency.
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
