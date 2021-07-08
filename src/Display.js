import useCustomHook from "./CustomHook";

export default function Display() {
  const { currentUser } = useCustomHook();
  console.log("currentUser in Display=== ", currentUser);

  return <div><h1>"currentUser: {currentUser}"</h1><hr></hr></div>
}
