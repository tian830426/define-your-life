import React, { useState, useEffect, useRef } from "react";

function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    // 監聽滑鼠移動事件
    const handleMouseMove = (e) => {
      const targetElement = document.elementFromPoint(e.clientX, e.clientY);
      const isCursorOverlapping = targetElement === cursorRef.current;
      setIsHovering(isCursorOverlapping);
      setCursorPos({ x: e.clientX, y: e.clientY });
      setCursorText("( scroll )");
    };
    document.addEventListener("mousemove", handleMouseMove);
    // 記得清除事件監聽器
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        zIndex: 999,
        top: "2%",
        left: "4%",
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "2px",
        color: isHovering ? "gray" : "white",
        pointerEvents: "none",
        transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
      }}
    >
      {cursorText}
    </div>
  );
}

export default CustomCursor;
