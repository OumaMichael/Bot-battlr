import React from 'react';
import BotCard from './BotCard';

export default function ArmyRoster({ bots, onRelease, onRemove }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <h1>🛡️ Your Deployed Bots</h1>
        <div className="row bot-army-row">
          {bots.map(bot => (
            <BotCard
              key={bot.id}
              bot={bot}
              onShowDetails={onRelease}
              onDelete={onRemove}
              isYourArmy
            />
          ))}
        </div>
      </div>
    </div>
  );
}
