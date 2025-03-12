import { useNavigationState } from "@react-navigation/native";

export default function useHideNavigations() {
  const currentRoute = useNavigationState(
    (state) => state?.routes[state.index]?.name ?? "Service"
  );

  return currentRoute === "Messages" ||
    currentRoute === "inBox" ||
    currentRoute === "Messages" ||
    currentRoute === "Messages" ||
    currentRoute === "MySpace" ||
    currentRoute === "Auth"
    ? true
    : false;
}
