import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const MySpaceSvg = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={props.width || 24} // Default width if not provided
    height={props.height || 24} // Default height if not provided
    fill={props.color || "#666"} // Default fill color if not provided
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const BellSvg = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={props.width || 24} // Default width if not provided
    height={props.height || 24} // Default height if not provided
    fill={props.color || "white"} // Default fill color if not provided
    {...props}
  >
    <Path d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" />
  </Svg>
);

export const SearchSvg = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={props.width || 24}
    height={props.height || 24}
    fill={props.color || "white"}
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const TimeSvg = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={props.width || 24}
    height={props.height || 24}
    fill={props.color || "#666"}
    stroke={props.stroke || "#666"}
    strokeWidth={props.strokeWidth || 2}
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </Svg>
);

export const Star = (props: SvgProps) => (
  <Svg
    stroke={props.stroke || "black"}
    width={props.width || 24}
    height={props.height || 24}
    fill={props.color || "#666"}
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </Svg>
);

export const World = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    fill={props.color || "white"}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={props.stroke || "black"}
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
    />
  </Svg>
);

export const Plus = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    fill={props.color || "white"}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={props.stroke || "black"}
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </Svg>
);

export const Ellips = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={props.width || 24}
    height={props.height || 24}
    fill={props.color || "black"}
    stroke-width="2.5"
    stroke={props.stroke || "black"}
    {...props}
  >
    <Path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
    />
  </Svg>
);

export const MapPin = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    fill={props.color || "white"}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={props.stroke || "white"}
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    />
  </Svg>
);

export const CommentSvg = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    fill={props.color || "white"}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={props.stroke || "black"}
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
    />
  </Svg>
);

export const ValidateSvg = (props: SvgProps) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={props.stroke || "black"}
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </Svg>
);

export const BookMarkSvg = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    fill={props.color || "white"}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={props.stroke || "black"}
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
    />
  </Svg>
);

export const InBoxSvg = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    fill={props.color || "white"}
    viewBox="0 0 24 24"
    strokeWidth={0.5}
    stroke={props.stroke || "black"}
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M5.478 5.559A1.5 1.5 0 0 1 6.912 4.5H9A.75.75 0 0 0 9 3H6.912a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H15a.75.75 0 0 0 0 1.5h2.088a1.5 1.5 0 0 1 1.434 1.059l2.213 7.191H17.89a3 3 0 0 0-2.684 1.658l-.256.513a1.5 1.5 0 0 1-1.342.829h-3.218a1.5 1.5 0 0 1-1.342-.83l-.256-.512a3 3 0 0 0-2.684-1.658H3.265l2.213-7.191Z"
      clipRule="evenodd"
    />
    <Path
      fillRule="evenodd"
      d="M12 2.25a.75.75 0 0 1 .75.75v6.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const ChatBubbleSvg = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    fill={props.color || "white"}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={props.stroke || "black"}
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
    />
  </Svg>
);

export const ArrowUp = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    fill={props.color || "white"}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={props.stroke || "black"}
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const ArrowUp1 = (props: SvgProps) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    width={props.width || 24}
    height={props.height || 24}
    stroke="white"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
    />
  </Svg>
);

export const SmileEmojiSvg = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    fill={props.color || "white"}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={props.stroke || "black"}
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
    />
  </Svg>
);

export const PaperPlanSvg = (props: SvgProps) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    width={props.width || 24}
    height={props.height || 24}
    stroke="white"
    {...props}
  >
    <Path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
  </Svg>
);

export const MicrophoneSvg = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="white" {...props}>
    <Path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
    <Path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
  </Svg>
);

export const HomeSvg = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    fill="white"
    {...props}
    width={props.width || 24}
    height={props.height || 24}
  >
    <Path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
    <Path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
  </Svg>
);

export const ChatBubbleFillSvg = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="white" {...props}>
    <Path
      fillRule="evenodd"
      d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const ShoppingCardSvg = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="white" {...props}>
    <Path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
  </Svg>
);

export const PlusSvg = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="white" {...props}>
    <Path
      fillRule="evenodd"
      d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const CogSvg = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="white" {...props}>
    <Path
      fillRule="evenodd"
      d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
