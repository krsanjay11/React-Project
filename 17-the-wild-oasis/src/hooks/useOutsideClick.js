import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapuring = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          // console.log(ref); // {current: div.sc-cWSIco.hdqdGU}
          handler();
        }
      }

      // true - event will handle in the capturing phase when it move down the tree, not at bubbling stage
      document.addEventListener("click", handleClick, true);
      return () =>
        document.removeEventListener("click", handleClick, listenCapuring);
    },
    [handler, listenCapuring]
  );
  return ref;
}
