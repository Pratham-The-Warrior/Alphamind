import React, { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Sector } from 'recharts';
import { Layers } from 'lucide-react';
import { portfolioHoldings, sectorAllocation } from '../../services/mockData';

// Generate colors for the chart
const COLORS = [
    '#00ff9d', // Success/Green
    '#00cc7a',
    '#00995c',
    '#7000ff', // Primary/Purple
    '#5a00cc',
    '#430099',
    '#ff00ff', // Accent/Magenta
    '#cc00cc',
    '#990099',
    '#00ffff', // Cyan
    '#00cccc',
    '#ff9900', // Orange
    '#cc7a00',
];

export const SunburstAllocation: React.FC = () => {
    const [hoveredNode, setHoveredNode] = useState<any | null>(null);

    // Data Preparation for Sunburst Hierarchy
    // Level 1: Asset Class (We'll assume mostly Equity + Cash for now based on mock data)
    // Level 2: Sectors
    // Level 3: Holdings

    const data = useMemo(() => {
        // Level 1: Asset Class (Root)
        const totalPortfolioValue = portfolioHoldings.reduce((sum, item) => sum + item.marketValue, 0);

        // Level 2: Sectors
        const sectors = sectorAllocation.map((sector, index) => {
            // Find holdings for this sector
            const holdingsInSector = portfolioHoldings.filter(h => h.sector === sector.sector);

            // If we don't have direct mapping in mock data, we distribute roughly
            // For the sake of this visual, we'll try to map exact holdings where possible, 
            // fallback to generic children if logic doesn't perfectly align with mock data shape

            const children = holdingsInSector.map(h => ({
                name: h.symbol,
                value: h.marketValue,
                depth: 3,
                color: COLORS[index % COLORS.length] // Keep slightly related color
            }));

            // If no specific holdings found (mock data mismatch), add a generic "Others"
            if (children.length === 0) {
                children.push({
                    name: `Other ${sector.sector}`,
                    value: sector.value,
                    depth: 3,
                    color: COLORS[index % COLORS.length]
                });
            }

            return {
                name: sector.sector,
                value: sector.value,
                depth: 2,
                children: children,
                color: COLORS[index % COLORS.length]
            };
        });

        // Level 1: Asset Class (Aggregated)
        const assetClass = {
            name: 'Equities',
            value: totalPortfolioValue,
            depth: 1,
            children: sectors,
            color: '#2a2a2a' // Dark center
        };

        return assetClass;
    }, []);

    // Flatten data for Recharts Pie layers
    const level1Data = [{ name: data.name, value: data.value, color: '#1a1a1a' }];
    const level2Data = data.children || [];
    const level3Data = level2Data.flatMap(sector => sector.children || []);

    const renderActiveShape = (props: any) => {
        const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
        const isHovered = hoveredNode && hoveredNode.name === payload.name;

        return (
            <g>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={isHovered ? outerRadius + 4 : outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                    stroke="#000"
                    strokeWidth={1}
                />
            </g>
        );
    };

    const onPieEnter = (data: any) => {
        setHoveredNode(data);
    };

    const onPieLeave = () => {
        setHoveredNode(null);
    };

    return (
        <div className="h-full flex flex-col bg-terminal-card border border-terminal-border rounded-lg overflow-hidden relative">
            <div className="p-4 border-b border-terminal-border flex justify-between items-center bg-terminal-surface">
                <div className="flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-terminal-accent" />
                    <span className="text-terminal-accent text-sm font-bold">PORTFOLIO COMPOSITION</span>
                </div>
                <div className="text-terminal-text-muted text-xs">SUNBURST VIEW</div>
            </div>

            <div className="flex-1 min-h-[300px] relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        {/* Center Info Text */}
                        {/* We can't easily put HTML in SVG, so we use the absolute positioned div below */}

                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(0,0,0,0.9)',
                                borderColor: '#333',
                                color: '#00ff9d',
                                fontFamily: 'monospace'
                            }}
                            itemStyle={{ color: '#fff' }}
                            formatter={(value: number) => [`₹${value.toLocaleString()}`, 'Value']}
                        />

                        {/* Level 1: Root (Hidden/Background or tiny center) */}
                        {/* We skip rendering purely visual Level 1 ring to save space for important rings, 
                or make it very thin inner ring */}

                        {/* Level 2: Sectors */}
                        <Pie
                            data={level2Data}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            fill="#8884d8"
                            stroke="#000"
                            strokeWidth={1}
                            onMouseEnter={onPieEnter}
                            onMouseLeave={onPieLeave}
                            activeIndex={hoveredNode?.depth === 2 && hoveredNode?.name === hoveredNode?.name ? undefined : undefined} // Simple hover logic
                        >
                            {level2Data.map((entry, index) => (
                                <Cell
                                    key={`cell-l2-${index}`}
                                    fill={entry.color}
                                    opacity={hoveredNode && (hoveredNode.name !== entry.name && !entry.children?.some((c: any) => c.name === hoveredNode.name)) ? 0.3 : 1}
                                />
                            ))}
                        </Pie>

                        {/* Level 3: Holdings */}
                        <Pie
                            data={level3Data}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            innerRadius={105}
                            outerRadius={140}
                            fill="#82ca9d"
                            stroke="#000"
                            strokeWidth={1}
                            onMouseEnter={onPieEnter}
                            onMouseLeave={onPieLeave}
                        >
                            {level3Data.map((entry: any, index: number) => (
                                <Cell
                                    key={`cell-l3-${index}`}
                                    fill={entry.color}
                                    opacity={hoveredNode && (hoveredNode.name !== entry.name) ? 0.3 : 1} // Dim others
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* Center Details Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <div className="text-terminal-text-muted text-xs font-mono mb-1">
                            {hoveredNode ? (hoveredNode.depth === 3 ? 'HOLDING' : 'SECTOR') : 'TOTAL'}
                        </div>
                        <div className="text-terminal-text font-bold text-sm tracking-wider">
                            {hoveredNode ? hoveredNode.name : 'PORTFOLIO'}
                        </div>
                        <div className="text-terminal-success font-mono text-xs mt-1">
                            {hoveredNode
                                ? `₹${(hoveredNode.value / 100000).toFixed(1)}L`
                                : '₹70.5L'}
                        </div>
                        <div className="text-terminal-text-dim font-mono text-[10px] mt-0.5">
                            {hoveredNode
                                ? `${((hoveredNode.value / data.value) * 100).toFixed(1)}%`
                                : '100%'}
                        </div>
                    </div>
                </div>

                {/* Legend / Guide */}
                <div className="absolute bottom-4 right-4 text-[10px] text-terminal-text-muted text-right space-y-1">
                    <div className="flex items-center justify-end space-x-1">
                        <span className="w-2 h-2 rounded-full bg-terminal-accent"></span>
                        <span>Inner: Sectors</span>
                    </div>
                    <div className="flex items-center justify-end space-x-1">
                        <span className="w-2 h-2 rounded-full border border-terminal-accent"></span>
                        <span>Outer: Holdings</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
