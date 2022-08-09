const TechnologyChip = ({ name }: { name: string }) => {
  return (
    <>
      <span className="chip">{name}</span>
      <style jsx>{`
        .chip {
          border: 1px solid black;
          border-radius: 10px;
          padding: 0 0.8rem;
          margin-right: 0.5rem;
          margin-bottom: 0.5rem;
          background-color: black;
          color: white;
          font-weight: 600;
        }

        @media (prefers-color-scheme: dark) {
          .chip {
            background-color: var(--bg-body-dark);
            border-color: white;
            color: white;
          }
        }
      `}</style>
    </>
  );
};

export default TechnologyChip;
