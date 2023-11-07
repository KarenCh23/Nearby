import { useState } from 'react';

interface CheckBoxProps {
  id: number;
  category: { name: string; id: number };

  register: Function;
}

const Checkbox = ({ id, category, register }: CheckBoxProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="category__checkbox" onClick={() => setChecked(!checked)}>
      <input
        type="checkbox"
        name={category.name}
        value={category.id}
        checked={checked}
        onChange={(e) => {
          setChecked(!checked);
        }}
        {...register('category')}
      />
      <h5 className="category__name">{category.name}</h5>
    </div>
  );
};

export default Checkbox;
