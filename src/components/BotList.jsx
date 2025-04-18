import React from 'react';
import BotCard from './BotCard';

export default function BotList({ bots, filters, sortBy, onCardClick, onRemove, onEnlist }) {
  const visible = bots
    .filter(b => !filters.length || filters.includes(b.bot_class))
    .sort((a, b) => sortBy ? b[sortBy] - a[sortBy] : 0);

  return (
    <div className="ui four column grid">
      <h2>All Available Bots</h2>
      <div className="row">
        {visible.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onShowDetails={onCardClick}
            onDelete={onRemove}
            isYourArmy={false}
            onEnlist={onEnlist}
          />
        ))}
      </div>
    </div>
  );
}
