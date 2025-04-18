import React, { useState, useEffect } from 'react';
import ArmyRoster  from './components/ArmyRoster';
import ClassFilter from './components/ClassFilter';
import SortControls from './components/SortControls';
import BotList     from './components/BotList';
import BotDetail   from './components/BotDetail';
import './App.css';

export default function App() {
  // **All** hook calls MUST be inside the body of this function component
  const [allBots,    setAllBots]    = useState([]);
  const [userArmy,   setUserArmy]   = useState([]);
  const [focusedBot, setFocusedBot] = useState(null);
  const [sortBy,     setSortBy]     = useState(null);
  const [filters,    setFilters]    = useState([]);

  // fetch once on mount
  useEffect(() => {
    fetch('http://localhost:8002/bots')
      .then(r => r.json())
      .then(setAllBots)
      .catch(console.error);
  }, []);

  // enlist removes from allBots → userArmy
  const enlistBot = bot => {
    if (!userArmy.some(b => b.id === bot.id)) {
      setUserArmy(a => [...a, bot]);
      setAllBots(a => a.filter(b => b.id !== bot.id));
    }
  };
  // release puts back
  const releaseBot = bot => {
    setUserArmy(a => a.filter(b => b.id !== bot.id));
    setAllBots(a => [bot, ...a]);
  };
  // remove deletes from server + both lists
  const removeBot = id => {
    fetch(`http://localhost:8002/bots/${id}`, { method: 'DELETE' })
      .then(r => {
        if (r.ok) {
          setUserArmy(a => a.filter(b => b.id !== id));
          setAllBots(a => a.filter(b => b.id !== id));
          setFocusedBot(null);
        }
      })
      .catch(console.error);
  };

  return (
    <div className="App">
      <div className="preview-banner">
        Preview mode — JSON‑Server @ <code>localhost:8002</code>
      </div>

      <ArmyRoster bots={userArmy}
                  onRelease={releaseBot}
                  onRemove={removeBot}
      />

      {userArmy.length === 0 &&
        <div className="empty-army">
          You haven’t enlisted any bots yet. Click below to add them!
        </div>
      }

      <ClassFilter botClasses={['Assault','Defender','Support','Medic','Witch','Captain']}
                   onApply={setFilters}
      />

      <SortControls onSortChange={setSortBy} />

      {focusedBot
        ? <BotDetail bot={focusedBot}
                     onBack={() => setFocusedBot(null)}
                     onEnlist={bot => { enlistBot(bot); setFocusedBot(null); }}
          />
        : <BotList bots={allBots}
                   filters={filters}
                   sortBy={sortBy}
                   onCardClick={setFocusedBot}
                   onRemove={removeBot}
                   onEnlist={enlistBot}
          />
      }
    </div>
  );
}
