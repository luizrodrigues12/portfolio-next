import styled from "styled-components";
import { motion } from "motion/react";

interface ProgressBarProps {
  text: string;
  level: number;
  delay: number;
  className?: string;
}

const ContainerBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 10px;

  .title {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    .title {
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
    .title {
      font-size: 14px;
    }
  }

  @media (min-width: 1440px) {
    .title {
      font-size: 16px;
    }
  }
`;

const Bar = styled.div`
  height: 6px;
  width: 100%;

  border-radius: 5px;

  position: relative;
  background-color: #404060;

  @media (min-width: 768px) {
    height: 8px;
  }

  @media (min-width: 1024px) {
    height: 12px;
  }
`;

const Level = styled.div<{ $level: number }>`
  height: 100%;
  width: ${(props) => props.$level}%;

  border-radius: 5px;

  position: absolute;
  top: 0;
  left: 0;

  background-color: var(--principal-color);
`;

const ProgressBar = ({ text, level, delay, className }: ProgressBarProps) => {
  return (
    <ContainerBar className={className}>
      <div className="title">{text}</div>
      <Bar>
        <Level
          as={motion.div}
          whileInView={{ width: [0, `${level}%`] }}
          transition={{ duration: 1, delay: delay }}
          viewport={{ once: true }}
          $level={level}
        />
      </Bar>
    </ContainerBar>
  );
};

export default ProgressBar;
