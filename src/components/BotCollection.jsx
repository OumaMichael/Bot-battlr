import React from "react";
import BotCard from "./BotCard";

function BotList({ bots, onCardClick, onRemove, sortBy, filters, onEnlist }) {
  const visibleBots = bots
    .filter(bot => filters.length === 0 || filters.includes(bot.bot_class))
    .sort((a, b) => (sortBy ? b[sortBy] - a[sortBy] : 0));

  return (
    <div className="ui four column grid">
      <h2>All Available Bots</h2>
      <div className="row">
        {visibleBots.map(bot => (
          <BotCard key={bot.id} bot={bot} onShowDetails={onCardClick} onDelete={onRemove} isYourArmy={false} onEnlist={onEnlist} />
        ))}
      </div>
    </div>
  );
}

export default BotList;
