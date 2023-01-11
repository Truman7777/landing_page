import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"../picture/teamProject-features-two.jpg"}
            objectFit={"cover"}
          />
        </Flex>
        <Stack spacing={7}>
          <Heading>팀프로젝트 + 블록체인</Heading>
          <Flex borderTop={"4px"} width={"30px"} color={"blue.400"}></Flex>
          <Text color={"gray.500"} fontSize={"lg"}>
            팀프로젝트의 과정과 결과를 블록체인에 기록합니다. 투명성과 불변성을
            지닌 블록체인 기록은 여러분의 평판이 되어줄 것입니다.
          </Text>
          <Text color={"gray.500"} fontSize={"lg"}>
            여러분에게 새로운 P2E, Project to Earn을 소개합니다. 피할 수도 즐길
            수도 없는 곳에서 프로젝트를 하며 돈과 평판을 얻어가십시오.
          </Text>
          {/* <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Business Planning"}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Financial Planning"}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Market Analysis"}
            />
          </Stack> */}
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
