import React from 'react';

const classIcons = {
  Assault: 'icon military',
  Defender: 'icon shield',
  Support: 'icon plus circle',
  Medic: 'icon ambulance',
  Witch: 'icon magic',
  Captain: 'icon star'
};

export default function BotCard({ bot, onShowDetails, onDelete, isYourArmy, onEnlist }) {
  const handleClick = () => onShowDetails(bot);
  const confirmDelete = e => {
    e.stopPropagation();
    if (window.confirm('Delete this bot?')) onDelete(bot.id);
  };

  return (
    <div className="ui column">
      <div className="ui card" onClick={handleClick}>
        <div className="image">
          <img src={bot.avatar_url} alt={bot.name} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name} <i className={classIcons[bot.bot_class]} />
          </div>
          <div className="meta">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span><i className="icon heartbeat" /> {bot.health}</span>
          <span><i className="icon lightning" /> {bot.damage}</span>
          <span><i className="icon shield" /> {bot.armor}</span>
          {isYourArmy
            ? <button className="ui mini red button right floated" onClick={confirmDelete}>×</button>
            : <button className="ui mini green button right floated" onClick={e => { e.stopPropagation(); onEnlist(bot); }}>+</button>
          }
        </div>
      </div>
    </div>
  );
}
