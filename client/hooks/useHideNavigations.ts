import { useNavigationState } from "@react-navigation/native";

export default function useHideNavigations() {
  const currentRoute = useNavigationState(
    (state) => state?.routes[state.index]?.name ?? "Service"
  );

  return currentRoute === "MessagingStack" ||
    currentRoute === "inBox" ||
    currentRoute === "MessagingStack" ||
    currentRoute === "MySpaceStack" ||
    currentRoute === "Auth"
    ? true
    : false;
}
