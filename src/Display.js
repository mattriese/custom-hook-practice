import useCustomHook from "./CustomHook";

export default function Display() {
  const { currentUser } = useCustomHook();
  console.log("currentUser in Display=== ", currentUser);

  return <h1>"Hello, {currentUser}"</h1>
}
