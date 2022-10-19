export type AppBarType = {
  home?: boolean;
  universal?: boolean;
};

export type HomeHeaderType = {
  setNotification?: () => void;
  onNotification?: any;
};

export type BackTextType = {
  exit?: boolean;
  back?: boolean;
  pageName?: boolean;
  label?: string;
  searchInput?: boolean;
  onlySearch?: boolean;
  onlyBasket?: boolean;
  onlyLike?: boolean;
  onlySettings?: boolean;
  profileChange?: boolean;
  profileAdd?: boolean;
  search?: boolean;
  basket?: boolean;
  onPressExit?: () => void;
  onPressBack?: () => void;
  onPressOnlySearch?: () => void;
  onPressOnlyLike?: () => void;
};
