import Radio from "./inputs/Radio";
import Checkbox from "./inputs/Checkbox";

const Questions = ({ values }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        {values &&
          values.questions?.map((val, key) => {
            return (
              <div key={key} className="w-6/12 p-6">
                <b>{val.label}</b>
                <ul>
                  {val.type_name === "radio" ? (
                    <li>
                      <Radio values={val} />
                    </li>
                  ) : val.type_name === "checkbox" ? (
                    <li>
                      <Checkbox values={val} />
                    </li>
                  ) : question.type_name === "text" ? (
                    <li>text</li>
                  ) : question.type_name === "select" ? (
                    <li>select</li>
                  ) : question.type_name === "textarea" ? (
                    <li>textarea</li>
                  ) : (
                    <li>Bilinmiyor</li>
                  )}
                </ul>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Questions;
