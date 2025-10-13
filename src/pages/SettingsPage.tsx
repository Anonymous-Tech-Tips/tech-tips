import { useUserPrefs } from '@/contexts/UserPrefsContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  const { prefs, setSetting, exportPrefs, importPrefs, resetPrefs } = useUserPrefs();

  const doImport = async () => {
    const text = prompt('Paste exported preferences JSON:');
    if (!text) return;
    const ok = importPrefs(text);
    alert(ok ? 'Imported!' : 'Invalid JSON');
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader><CardTitle>Settings</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={prefs.settings.studyMode} onChange={e => setSetting('studyMode', e.target.checked)} />
            Study mode (hide game thumbs, focus on tools/education)
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={prefs.settings.reducedMotion} onChange={e => setSetting('reducedMotion', e.target.checked)} />
            Reduced motion
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={!prefs.settings.soundEnabled ? false : true}
                   onChange={e => setSetting('soundEnabled', e.target.checked)} />
            Sounds enabled
          </label>

          <div className="flex gap-2">
            <Button onClick={() => navigator.clipboard.writeText(exportPrefs())}>Export</Button>
            <Button variant="outline" onClick={doImport}>Import</Button>
            <Button variant="destructive" onClick={resetPrefs}>Reset</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
