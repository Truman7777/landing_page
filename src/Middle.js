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
  RiEmotionUnhappyLine,
  RiEmotionNormalLine,
  RiEmotionSadLine,
} from "react-icons/ri";
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
        <Stack spacing={7}>
          <Heading>팀프로젝트의 현실</Heading>
          <Flex borderTop={"4px"} width={"30px"} color={"blue.400"}></Flex>
          <Text color={"gray.500"} fontSize={"lg"}>
            통계에 따르면 대학생의 62%가 조별 모임 경험이 있다고 합니다. 이렇게
            팀프로젝트는 대학 생활을 하며 대부분의 사람이 경험하지만 보상은 없고
            괴로움만 얻어가 안좋은 기억을 남겨주는 것이 대부분입니다.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon
                  as={RiEmotionNormalLine}
                  color={"yellow.500"}
                  w={5}
                  h={5}
                />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"조별 모임 개수 평균 3.34개"}
            />
            <Feature
              icon={
                <Icon
                  as={RiEmotionUnhappyLine}
                  color={"green.500"}
                  w={5}
                  h={5}
                />
              }
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"수강 신청 시 조별과제 여부 고려 62.8%"}
            />
            <Feature
              icon={
                <Icon as={RiEmotionSadLine} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"조별 과제 끝난 후 조원과 가급적 연락 안함 55%"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"../picture/man.jpg"}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
