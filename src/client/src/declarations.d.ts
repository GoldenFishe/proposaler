declare module "@carbon/react";

declare module "@carbon/icons-react" {
  import { ComponentType } from "react";

  type Props = {
    className?: string;
    size?: number | string;
  };

  export const ThumbsUp: ComponentType<Props>;
  export const ThumbsDown: ComponentType<Props>;
  export const Search: ComponentType<Props>;
  export const Notification: ComponentType<Props>;
  export const Apps: ComponentType<Props>;
  export const UserAvatar: ComponentType<Props>;
  export const Add: ComponentType<Props>;
  export const Add: ComponentType<Props>;
  export const PreviousOutline: ComponentType<Props>;
  export const NextOutline: ComponentType<Props>;
  export const ZoomFit: ComponentType<Props>;
}

declare interface ObjectConstructor {
  keys<T>(object: T): Array<keyof T>;
}