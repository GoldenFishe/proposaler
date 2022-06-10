import { MessageType } from '../../types/MessageType';

export type MessageGroupBySenderId = Record<number, MessageType[]>;
