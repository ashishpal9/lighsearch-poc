/* eslint-disable react-hooks/exhaustive-deps */
import { Line } from '@/types/commonTypes';
import { useRef, useState, useEffect } from 'react';

const LineDraw: React.FC = () => {
  const canvasRef = useRef<any>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const [activeLine, setActiveLine] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState({
    start: false,
    end: false,
    line: false,
  });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);

  const getMousePosition = (event: any) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const handleMouseDown = (event: any) => {
    const mousePos = getMousePosition(event);
    let lineIndex = null;
    let draggingType = { start: false, end: false, line: false };
    for (let i = 0; i < lines.length; i++) {
      const { start, end } = lines[i];
      const threshold = 10;
      if (
        Math.abs(mousePos.x - start.x) < threshold &&
        Math.abs(mousePos.y - start.y) < threshold
      ) {
        draggingType = { start: true, end: false, line: false };
        lineIndex = i;
        break;
      } else if (
        Math.abs(mousePos.x - end.x) < threshold &&
        Math.abs(mousePos.y - end.y) < threshold
      ) {
        draggingType = { start: false, end: true, line: false };
        lineIndex = i;
        break;
      } else if (isPointOnLine(mousePos, start, end)) {
        draggingType = { start: false, end: false, line: true };
        setDragOffset({
          x: mousePos.x - start.x,
          y: mousePos.y - start.y,
        });
        lineIndex = i;
        break;
      }
    }
    if (lineIndex !== null) {
      setIsDragging(draggingType);
      setActiveLine(lineIndex);
    } else {
      // Create a new line if clicked outside any existing line
      const newLine = {
        start: { x: mousePos.x, y: mousePos.y },
        end: { x: mousePos.x, y: mousePos.y },
      };
      setLines((prevLines) => [...prevLines, newLine]);
      setIsDragging({ start: false, end: true, line: false });
      setActiveLine(lines.length);
    }
  };

  const isPointOnLine = (
    point: any,
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const distance =
      Math.abs(
        (end.y - start.y) * point.x -
          (end.x - start.x) * point.y +
          end.x * start.y -
          end.y * start.x
      ) /
      Math.sqrt((end.y - start.y) ** 2 + (end.x - start.x) ** 2);
    return distance < 10; // Adjust the threshold for sensitivity
  };

  const drag = (event: any) => {
    if (!isDragging.start && !isDragging.end && !isDragging.line) return;
    const mousePos = getMousePosition(event);
    setLines((prevLines) =>
      prevLines.map((line, index) => {
        if (index !== activeLine) return line;
        if (isDragging.start) {
          return { ...line, start: { x: mousePos.x, y: mousePos.y } };
        } else if (isDragging.end) {
          return { ...line, end: { x: mousePos.x, y: mousePos.y } };
        } else if (isDragging.line) {
          const dx = mousePos.x - dragOffset.x;
          const dy = mousePos.y - dragOffset.y;
          return {
            start: { x: dx, y: dy },
            end: { x: dx + (line.end.x - line.start.x), y: dy + (line.end.y - line.start.y) },
          };
        }
        return line;
      })
    );
    draw();
  };

  const stopDragging = () => {
    setIsDragging({ start: false, end: false, line: false });
    setActiveLine(null);
  };

  const handleMouseMove = (event: any) => {
    const mousePos = getMousePosition(event);
    let lineIndex = null;
    for (let i = 0; i < lines.length; i++) {
      const { start, end } = lines[i];
      if (isPointOnLine(mousePos, start, end)) {
        lineIndex = i;
        break;
      }
    }
    setHoveredLine(lineIndex);
    if (isDragging.start || isDragging.end || isDragging.line) {
      drag(event);
    }
  };
  const calculateLineLength = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    return Math.sqrt((end.x - start.x) ** 2 + (end.y - start.y) ** 2);
  };
  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    lines.forEach(({ start, end }, index) => {
      // Change the line style based on hover state
      if (hoveredLine === index || activeLine === index) {
        ctx.strokeStyle = "#00ff00";
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]); // Solid line
      } else {
        ctx.strokeStyle = "#00dc00";
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]); // Dashed line
      }
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
      if (hoveredLine === index || activeLine === index) {
        // Draw hollow circles for the start and end points
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.arc(start.x, start.y, 5, 0, Math.PI * 2);
        ctx.strokeStyle = "#00FF00";
        ctx.lineWidth = 1;

        ctx.stroke();
        ctx.beginPath();
        ctx.arc(end.x, end.y, 5, 0, Math.PI * 2);
        ctx.strokeStyle = "#00FF00";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      // Calculate and display the line length in pixels
      const length = calculateLineLength(start, end);
      ctx.fillStyle = "#00FF00";
      ctx.font = "14px Arial";
      ctx.fillText(`${length.toFixed(1)} mm`, end.x + 10, end.y - 10);
    });
  };
  
  useEffect(() => {
    draw();
  }, [lines, hoveredLine]);

  return (
      <canvas
        className='line-draw-canvas'
        ref={canvasRef}
        height={600}
        width={1000}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
      />
  );
};

export default LineDraw;
