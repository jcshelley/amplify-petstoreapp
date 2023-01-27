/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Pet } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
  useDataStoreUpdateAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function PetProfile(props) {
  const { pet, overrides, ...rest } = props;
  const buttonThreeSixFiveOneTwoSevenZeroFiveOnClick = useDataStoreDeleteAction(
    { id: pet?.id, model: Pet, schema: schema }
  );
  const buttonThreeSixFiveOneTwoSixEightEightOnClick = useDataStoreUpdateAction(
    { fields: {}, id: pet?.id, model: Pet, schema: schema }
  );
  const buttonTwoNineSevenSixSixNineZeroSevenOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: pet?.about,
  });
  return (
    <Flex
      gap="24px"
      direction="column"
      width="367px"
      height="674px"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="25px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(77,7,119,0.37)"
      {...getOverrideProps(overrides, "PetProfile")}
      {...rest}
    >
      <Button
        width="107px"
        height="27px"
        shrink="0"
        size="large"
        isDisabled={false}
        variation="link"
        children="Delete"
        onClick={() => {
          buttonThreeSixFiveOneTwoSevenZeroFiveOnClick();
        }}
        {...getOverrideProps(overrides, "Button36512705")}
      ></Button>
      <Image
        width="160px"
        height="160px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={pet?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        width="151px"
        height="38px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Name29766901")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Name: "}${pet?.name}`}
          {...getOverrideProps(overrides, "Melinda Marcus")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="298px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Breed "}${pet?.breed}`}
          {...getOverrideProps(overrides, "Breed")}
        ></Text>
      </Flex>
      <Flex
        gap="8px"
        direction="column"
        width="318px"
        height="24px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Name36512699")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"About: "}${pet?.about}`}
          {...getOverrideProps(overrides, "About: Great Animal")}
        ></Text>
      </Flex>
      <Flex
        gap="8px"
        direction="column"
        width="232px"
        height="24px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Name36512702")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Age: "}${pet?.age}`}
          {...getOverrideProps(overrides, "Age: 2")}
        ></Text>
      </Flex>
      <View
        width="258px"
        height="52px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="57px"
          left="-9.5px"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 419")}
        >
          <Button
            width="258px"
            height="52px"
            shrink="0"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Update"
            onClick={() => {
              buttonThreeSixFiveOneTwoSixEightEightOnClick();
            }}
            {...getOverrideProps(overrides, "Button36512688")}
          ></Button>
        </Flex>
        <Button
          width="258px"
          height="52px"
          position="absolute"
          top="0px"
          left="0px"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Profile"
          onClick={() => {
            buttonTwoNineSevenSixSixNineZeroSevenOnClick();
          }}
          {...getOverrideProps(overrides, "Button29766907")}
        ></Button>
      </View>
    </Flex>
  );
}
