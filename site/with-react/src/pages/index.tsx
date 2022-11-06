import yayJpg from '../assets/yay.jpg';
import { InputPlus } from "@renovator/input-plus-react";
import { useState } from 'react';

export default function HomePage() {
  const [value, setValue] = useState("");
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <InputPlus value={value} onChange={setValue} />
    </div>
  );
}
