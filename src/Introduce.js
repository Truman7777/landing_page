import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import { Image } from "@chakra-ui/react";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Flex
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        mb={1}
        marginTop={"100px"}
      >
        <Image
          style={{ width: "200px", height: "200px" }}
          src={"../picture/TGM.png"}
        />
      </Flex>
      <Text fontWeight={500} fontSize={"32px"}>
        {title}
      </Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <Feature
        title={"팀프로젝트를 하고 보상을 받으세요"}
        text={
          "지금까지 팀프로젝트의 결과로 스트레스만 얻지 않으셨나요? 이제는 돈과 평판을 얻으세요"
        }
      />
    </Box>
  );
}
