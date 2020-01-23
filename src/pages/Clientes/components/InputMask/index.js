import React, { useState, useEffect, useRef } from "react";
import InputMask from "react-text-mask";
import { useField } from "@rocketseat/unform";

export default function MaskInput({ name, mask, ...rest }) {
  const { defaultValue, registerField, error } = useField(name);
  const [nroCep, setNroCep] = useState(defaultValue);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: name,
        ref: ref.current,
        path: 'props.value'
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  function handleChange(e) {
    setNroCep(e.target.value);
  }

  return (
    <React.Fragment>
      <InputMask
        mask={mask}
        ref={ref}
        value={nroCep}
        onChange={handleChange}
        {...rest}
      />
      {error && <span>{error}</span>}
    </React.Fragment>
  );
}