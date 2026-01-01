import React from 'react';
import { Calendar, DollarSign, PieChart, Activity } from 'lucide-react';

interface EventItem {
    id: string;
    date: string;
    ticker: string;
    type: 'Earnings' | 'Dividend' | 'Macro' | 'Split';
    exposure?: string;
    impact: 'High' | 'Medium' | 'Low';
}

const mockEvents: EventItem[] = [
    { id: '1', date: 'Today', ticker: 'RELIANCE', type: 'Earnings', exposure: '12.5%', impact: 'High' },
    { id: '2', date: 'Tomorrow', ticker: 'TCS', type: 'Dividend', exposure: '8.2%', impact: 'Low' },
    { id: '3', date: 'Feb 14', ticker: 'IN CPI', type: 'Macro', impact: 'High' },
    { id: '4', date: 'Feb 15', ticker: 'HDFCBANK', type: 'Earnings', exposure: '10.1%', impact: 'High' },
    { id: '5', date: 'Feb 20', ticker: 'RBI MPC', type: 'Macro', impact: 'High' },
];

export const EventsCalendar: React.FC = () => {
    return (
        <div className="flex flex-col h-full bg-[#0E1118]/50 border border-terminal-border rounded-xl overflow-hidden">
            <div className="p-4 border-b border-terminal-border flex items-center gap-2">
                <Calendar className="w-5 h-5 text-terminal-accent" />
                <h3 className="font-bold text-terminal-text">Portfolio Calendar</h3>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                {mockEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-3 bg-terminal-surface/50 border border-terminal-border rounded-lg hover:bg-terminal-surface transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col items-center justify-center w-12 h-12 bg-terminal-bg border border-terminal-border rounded">
                                <span className="text-[10px] text-terminal-text-muted uppercase font-bold">{event.date.split(' ')[0]}</span>
                                <span className="text-sm font-bold text-terminal-text">{event.date.split(' ')[1] || ''}</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-terminal-text">{event.ticker}</span>
                                    {event.exposure && (
                                        <span className="text-[10px] text-terminal-accent bg-terminal-accent/10 px-1.5 py-0.5 rounded border border-terminal-accent/20">
                                            {event.exposure} Exp.
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                    {event.type === 'Earnings' && <DollarSign className="w-3 h-3 text-emerald-400" />}
                                    {event.type === 'Dividend' && <PieChart className="w-3 h-3 text-blue-400" />}
                                    {event.type === 'Macro' && <Activity className="w-3 h-3 text-orange-400" />}
                                    <span className="text-xs text-terminal-text-muted">{event.type}</span>
                                </div>
                            </div>
                        </div>

                        <div className={`w-2 h-2 rounded-full ${event.impact === 'High' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' :
                            event.impact === 'Medium' ? 'bg-yellow-500' : 'bg-blue-500'
                            }`} title={`${event.impact} Impact`} />
                    </div>
                ))}
            </div>
        </div>
    );
};
