import { useEffect, useState } from "react";

const Checkbox = ({ values }) => {
  const [checked, setChecked] = useState([]);

  const handleCheckbox = (event) => {
    setChecked({
      ...checked,
      [event.target.value]: !checked[event.target.value],
    });
  };
  return (
    <>
      <div>
        {values.answers?.map((val, key) => {
          return (
            <div key={key}>
              <label
                className={checked[val.id] ? "step-value active" : "step-value"}
                htmlFor={"step" + val.id}>
                <input
                  type="checkbox"
                  className="hidden"
                  id={"step" + val.id}
                  name={"step" + val.id}
                  value={val.id}
                  checked={checked[val.value]}
                  onChange={handleCheckbox}
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
export default Checkbox;
