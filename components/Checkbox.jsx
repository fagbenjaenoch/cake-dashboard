import { useState, useEffect } from "react";

function Checkbox({ label }) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const isChecked = localStorage.getItem("isChecked") === "true";
    setChecked(isChecked);
  }, []);

  const handleOnChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    localStorage.setItem("isChecked", isChecked);
  };

  return (
    <div className='mt-4'>
      <input type="checkbox" checked={checked} onChange={handleOnChange} />
      <label className="ml-2">{label}</label>
    </div>
  );
}

export default Checkbox;
