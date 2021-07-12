import React, { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    console.log(name);
  }, [name, number, address, gender]);

  // const onButtonClick = useCallback(()=>{
  //   setName('홍길동');
  // })

  const onButtonClick = () => {
    setName("홍길동");
    setNumber("010-0000-0000");
    setAddress("부산");
    setGender("남");
  };

  return (
    <div>
      {/* <span>{name}</span> */}
      {/* <button onClick={onButtonClick}>이름 바꾸기</button> */}

      <div>
        이름:<span>{name}</span>
      </div>
      <div>
        연락처:<span>{number}</span>
      </div>
      <div>
        주소:<span>{address}</span>
      </div>
      <div>
        성별:<span>{gender}</span>
      </div>

      <button onClick={onButtonClick}>클릭</button>
    </div>
  );
}

export default App;
