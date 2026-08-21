import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export function Container({ children, className = "" }: CardProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: CardProps & { id?: string }) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${className}`}
    >
      {children}
    </section>
  );
}
