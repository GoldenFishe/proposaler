import { MessageType } from "../../types/MessageType";
import { UserType } from "../../types/UserType";

export type DialogType = Record<UserType["id"], MessageType[]>;
