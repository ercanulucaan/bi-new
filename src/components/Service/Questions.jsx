const Questions = ({ values }) => {
    
  return (
    <>
        <div>
        {values && values.questions?.map((val,key) => 
        {
          return (
            <div key={key}>
              <b>{val.label}</b>
            </div>
          )
        })}
        </div>
    </>
  )
}

export default Questions