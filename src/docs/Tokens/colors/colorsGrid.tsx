import { getContrast } from 'polished';
import colors from "../../../tokens/colors";

interface renderColorsProps  {
    theme: 'light' | 'dark'
}

interface renderColorShadesProps {
    colorShades: Record<string, string>
}

export function ColorsGrid() {
    return (
        <>
            <h1>Light Theme</h1>
            {renderColors('light')}

            <h1>Dark Theme</h1>
            {renderColors('dark')}
        </>
    );
}

function renderColors(theme: renderColorsProps) {
    const themeColors = colors[theme];

    return Object.entries(themeColors).map(([colorGroup, colorShades]) => (
        <div  key={colorGroup}>
            <h3 style={{ textAlign: 'center' }} >{colorGroup}</h3>
            {renderColorShades(colorShades)}
        </div>
    ));
}

function renderColorShades(colorShades: renderColorShadesProps) {
    return Object.entries(colorShades).map(([key, color]) => {
        if (typeof color !== 'string') {
            throw new Error(`Color '${key}' is not a valid string.`);
        }

        return (
            <div
                key={key}
                style={{
                    backgroundColor: color,
                    padding: '1rem',
                    marginBottom: '0.5rem',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontFamily: 'monospace',
                        color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
                    }}
                >
                    <strong>{key}</strong>
                    <span>{color}</span>
                </div>
            </div>
        );
    });
}