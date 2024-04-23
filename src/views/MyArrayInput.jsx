export default function ArrayInput({ value, onChange }) {
    const handleChange = (index, newValue) => {
      const newArray = [...value];
      newArray[index] = newValue;
      onChange(newArray);
    };
  
    const handleAdd = () => {
      console.log("Array Of string value ",value);
      onChange([...value, '']);
    };
  
    const handleRemove = (index) => {
      const newArray = [...value];
      newArray.splice(index, 1);
      onChange(newArray);
    };
  
    return (
      <div>
        {value.map((item, index) => (
          <div key={index}>
            <input
              value={item}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            <button onClick={() => handleRemove(index)}>Remove</button>
          </div>
        ))}
        <button onClick={handleAdd}>Add</button>
      </div>
    );
  }
  
  