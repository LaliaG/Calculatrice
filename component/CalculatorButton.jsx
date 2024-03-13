// Wrapper.js
// import "./Wrapper.css";

// const Pressable = ({ children }) => {
//   return <div className="pressed">{children}</div>;
// };
// export default Pressable;

// .pressed{
//   width: 340px;
//   height: 540px;
//   padding: 10px;
//   border-radius: 10px;
//   background-color: #485461;
//   background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
// }    
// import "./Screen.css";

// const Screen = ({ value }) => {
//   return (
//     <Textfit className="screen" mode="single" max={70}>
//       {value}
//     </Textfit>
//   );
// };
// export default Screen;

// .screen {
//   height: 100px;
//   width: 100%;
//   margin-bottom: 10px;
//   padding: 0 10px;
//   background-color: #4357692d;
//   border-radius: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   color: white;
//   font-weight: bold;
//   box-sizing: border-box;
// }


// const ButtonBox = ({ children }) => {
//   return <div className="buttonBox">{children}</div>;
// };
// export default ButtonBox;

// .buttonBox {
//   width: 100%;
//   height: calc(100% - 110px);
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-template-rows: repeat(5, 1fr);
//   grid-gap: 10px;
// }
// Bouton.js


// const Button = ({ className, value, onClick }) => {
//   return (
//     <button className={className} onClick={onClick}>
//       {value}
//     </button>
//   );
// };
// export default Button;

// button {
//   border: none;
//   background-color: rgb(80, 60, 209);
//   font-size: 24px;
//   color: rgb(255, 255, 255);
//   font-weight: bold;
//   cursor: pointer;
//   border-radius: 10px;
//   outline: none;
// }
// button:hover {
//   background-color: rgb(61, 43, 184);
// }
// .equals {
//   grid-column: 3 / 5;
//   background-color: rgb(243, 61, 29);
// }
// .equals:hover {
//   background-color: rgb(228, 39, 15);
// } 



import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const CalculatorButton = ({ value, onPress }) => (
  <Pressable
  
    style={({ pressed }) => [
      {
        backgroundColor: pressed ? "#ddd" : "#fff",
        borderRadius: 8,
        padding: 10,
        margin: 5,
      },
    ]}
    onPress={onPress}
  >
    <Text>{value}</Text>

    const Screen = ({ value }) => {
//   return (
//     <Textfit className="screen" mode="single" max={70}>
//       {value}
//     </Textfit>
//   );
// };
   export default Screen;

    const ButtonBox = ({ children }) => {
  //   return <div className="buttonBox">{children}</div>;
  // };
  // export default ButtonBox;

  const Button = ({ className, value, onClick }) => {
       return (
         <button className={className} onClick={onClick}>
         {value}
        </button>
      );
     };
    export default Button;
  </Pressable>
);

export default CalculatorButton;
const styles = StyleSheet.create({
button {
  border: none;
  background-color: rgb(80, 60, 209);
  font-size: 24px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
}

button:hover {
  background-color: rgb(61, 43, 184);
}

.equals {
  grid-column: 3 / 5;
  background-color: rgb(243, 61, 29);
}

.equals:hover {
  background-color: rgb(228, 39, 15);
}
.buttonBox {
  width: 100%;
  height: calc(100% - 110px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
}
.screen {
  height: 100px;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  background-color: #4357692d;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  font-weight: bold;
  box-sizing: border-box;
}
.pressed {
  width: 340px;
  height: 540px;
  padding: 10px;
  border-radius: 10px;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
}

})