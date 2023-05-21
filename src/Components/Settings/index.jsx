import React from 'react';
import { useSettings } from '../../Context/Settings';
import { Button, TextInput, Checkbox } from '@mantine/core';

function SettingsComponent() {
  const { settings, updateSettings } = useSettings();

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    updateSettings({
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <h1>Settings</h1>
      <TextInput
        label="How many tasks per page would you like to display?"
        type="number"
        value={settings.itemsToDisplay}
        onChange={handleChange}
        name="itemsToDisplay"
      />
      <Checkbox
        label="Show Completed Items"
        checked={settings.showCompleted} // changed from settings.hideCompleted
        onChange={handleChange}
        name="showCompleted" // changed from name="hideCompleted"
      />
      <TextInput
        label="Sort by"
        value={settings.sort}
        onChange={handleChange}
        name="sort"
      />
      <Button onClick={() => alert('Settings Saved!')}>Save Settings</Button>
    </div>
  );
}

export default SettingsComponent;
