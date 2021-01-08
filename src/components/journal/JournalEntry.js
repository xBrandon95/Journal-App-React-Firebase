export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage: "url(/img/pinguino8.png)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo dia</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Lunes</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
