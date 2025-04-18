import React from "react";

const classIcons = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

export default function BotDetail({ bot, onBack, onEnlist }) {
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              src={bot.avatar_url}
              alt={bot.name}
              className="ui medium circular image bordered"
            />
          </div>
          <div className="four wide column">
            <h2>{bot.name}</h2>
            <p><strong>Phrase:</strong> {bot.catchphrase}</p>
            <p>
              <strong>Class:</strong> {bot.bot_class} <i className={classIcons[bot.bot_class]} />
            </p>
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button className="ui fluid button" onClick={onBack}>Back</button>
            <button className="ui fluid primary button" onClick={() => onEnlist(bot)}>Enlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}
