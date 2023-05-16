import React from 'react';
import { useSettings } from '../../Context/Settings';
import { Button, TextInput } from '@mantine/core';

function Settings() {
  const { settings, setSettings } = useSettings();

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Settings</h1>
      <TextInput
        label="User Name"
        placeholder="Enter your name"
        value={settings.userName}
        onChange={handleChange}
        name="userName"
      />
      <TextInput
        label="Email"
        placeholder="Enter your email"
        value={settings.email}
        onChange={handleChange}
        name="email"
      />
      <Button onClick={() => alert('Settings Saved!')}>Save Settings</Button>
    </div>
  );
}

export default Settings;
