import { useEffect, useState } from "react";

const Radio = ({ values }) => {
  const [radio, setRadio] = useState("");

  useEffect(() => {
    console.log(radio);
  }, [radio]);
  return (
    <>
      <div>
        {values.answers?.map((val, key) => {
          return (
            <div key={key}>
              <label
                className={`step-value ` + (radio === val.id ? "active" : "")}
                onChange={() => setRadio(val.id)}
                htmlFor={"step" + val.id}>
                <input
                  type="radio"
                  className="hidden"
                  name={"step" + values.id}
                  id={"step" + val.id}
                  value={val.id}
                />
                {val.value}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Radio;
