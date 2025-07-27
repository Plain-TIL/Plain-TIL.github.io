import { useEffect, useRef } from "react";

const useRendering = (callback: () => void)=> {
  const savedCallback = useRef<() => void>(null);
  const delayTime = import.meta.env.VITE_RENDER_TIME || 60;

  useEffect(() => {
    savedCallback.current = callback; // callback 변경 시 ref 업데이트
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }
    if (delayTime != null) {
      tick(); // 마운트가 된다면 일단 실행
      const id = setInterval(tick, delayTime * 1000); // 반복적인 작업을 수행할 때 사용하는 함수
      return () => clearInterval(id); // 언마운트에는 메모리 누수 방지를 위한 인터벌 정리
    }
  }, [delayTime]);
}

export default useRendering;