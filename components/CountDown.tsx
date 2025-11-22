import React, { useState, useEffect, useCallback } from 'react';

const CountDown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [nextMeetingStr, setNextMeetingStr] = useState('');

  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const target = new Date();

    const currentDay = now.getDay();
    const currentHour = now.getHours();
    
    let daysUntilThursday = (4 - currentDay + 7) % 7;
    
    // If it's Thursday but past 7AM, move to next week
    if (currentDay === 4 && currentHour >= 7) {
      daysUntilThursday = 7;
    }

    target.setDate(now.getDate() + daysUntilThursday);
    target.setHours(7, 0, 0, 0);

    const diff = target.getTime() - now.getTime();
    
    if (diff > 0) {
        setTimeLeft({
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / 1000 / 60) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        });
        
        const options: Intl.DateTimeFormatOptions = { 
          month: 'long', 
          day: 'numeric', 
          weekday: 'long' 
        };
        setNextMeetingStr(target.toLocaleDateString('zh-TW', options));
    }
  }, []);

  useEffect(() => {
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const setReminder = () => {
      alert("請記得將每週四早上 07:00 加入您的行事曆！");
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/50 to-transparent rounded-bl-full -mr-8 -mt-8"></div>
        
        <div className="relative z-10">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <p className="text-xs font-bold text-primary-500 uppercase tracking-wider mb-1">Next Meeting</p>
                    <h3 className="text-2xl font-bold text-slate-800">{nextMeetingStr || '計算中...'}</h3>
                    <p className="text-slate-500 font-medium mt-1 flex items-center">
                        <i className="far fa-clock mr-2"></i> 早上 07:00 - 08:45
                    </p>
                </div>
                <button 
                    onClick={setReminder}
                    className="bg-primary-50 text-primary-600 hover:bg-primary-600 hover:text-white p-3 rounded-xl transition-all duration-300 shadow-sm"
                    title="設定提醒"
                >
                    <i className="fas fa-bell text-lg"></i>
                </button>
            </div>

            <div className="grid grid-cols-4 gap-3">
                {[
                    { label: '天', value: timeLeft.days },
                    { label: '時', value: timeLeft.hours },
                    { label: '分', value: timeLeft.minutes },
                    { label: '秒', value: timeLeft.seconds }
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center p-2 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary-600 to-primary-800 font-mono">
                            {String(item.value).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] uppercase font-bold text-slate-400 mt-1">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default CountDown;