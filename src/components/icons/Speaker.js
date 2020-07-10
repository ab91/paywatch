import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width={21} height={30} {...props}>
      <path
        d="M20.664.077a.623.623 0 00-.654.034L8.796 7.82H3.18C1.425 7.824.002 9.282 0 11.082v7.836c.002 1.8 1.425 3.259 3.18 3.26h5.616L20.01 29.89a.623.623 0 00.653.034.654.654 0 00.337-.575V.652c0-.24-.13-.462-.336-.575zM8.353 20.874H3.18c-1.054 0-1.908-.876-1.908-1.956v-7.836c0-1.08.854-1.956 1.908-1.956h5.173v11.748zm11.375 7.251L9.625 21.18V8.82l10.103-6.946v26.25z"
        fill="fill"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgComponent;
