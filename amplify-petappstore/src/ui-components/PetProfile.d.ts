/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pet } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetProfileOverridesProps = {
    PetProfile?: PrimitiveOverrideProps<FlexProps>;
    Button36512705?: PrimitiveOverrideProps<ButtonProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Name29766901?: PrimitiveOverrideProps<FlexProps>;
    "Melinda Marcus"?: PrimitiveOverrideProps<TextProps>;
    Breed?: PrimitiveOverrideProps<TextProps>;
    Name36512699?: PrimitiveOverrideProps<FlexProps>;
    "About: Great Animal"?: PrimitiveOverrideProps<TextProps>;
    Name36512702?: PrimitiveOverrideProps<FlexProps>;
    "Age: 2"?: PrimitiveOverrideProps<TextProps>;
    "Frame 418"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 419"?: PrimitiveOverrideProps<FlexProps>;
    Button36512688?: PrimitiveOverrideProps<ButtonProps>;
    Button29766907?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type PetProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    pet?: Pet;
} & {
    overrides?: PetProfileOverridesProps | undefined | null;
}>;
export default function PetProfile(props: PetProfileProps): React.ReactElement;
