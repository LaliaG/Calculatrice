

const Pressable = ({ children }) => {
  return <div className="pressable">{children}</div>;
};
export default Pressable;

.pressable {
  width: 340px;
  height: 540px;
  padding: 10px;
  border-radius: 10px;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
}   