import styled from "styled-components";
import { motion } from "motion/react";

interface ProgressBarProps {
  text: string;
  level: number;
  delay: number;
}

const ContainerBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .title {
    font-size: 18px;
  }
`;

const Bar = styled.div`
  height: 12px;
  width: 100%;

  border-radius: 5px;

  position: relative;

  background-color: #404060;
`;

const Level = styled.div<{ $level: number }>`
  height: 100%;
  width: ${(props) => props.$level}%;

  border-radius: 5px;

  position: absolute;
  top: 0;
  left: 0;

  background-color: #798fd2;
`;

const ProgressBar = ({ text, level, delay }: ProgressBarProps) => {
  return (
    <ContainerBar>
      <div className="title">{text}</div>
      <Bar>
        <Level
          as={motion.div}
          whileInView={{ width: [0, `${level}%`] }}
          transition={{ duration: 1, delay: delay }}
          $level={level}
        />
      </Bar>
    </ContainerBar>
  );
};

export default ProgressBar;
