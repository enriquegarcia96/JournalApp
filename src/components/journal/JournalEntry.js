export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://estaticos-cdn.prensaiberica.es/clip/7583e1dd-e048-4687-84cd-383a484e6b27_16-9-discover-aspect-ratio_default_0.jpg)",
        }}
      ></div>

    <div className="journa__entry-body" >
        <p className="journal__entry-title" >
            Un nuevo dia
        </p>

        <p className="journal__entry-content" >
            loreajkklajklajdlkajldkjlkjaslkjdaslkjdaslkjdljasdlkjaslk
        </p>

    </div>

    <div className="journal__entry-date-box" >

        <span>Monday</span>
        <h4>28</h4>

    </div>

    </div>
  );
};
