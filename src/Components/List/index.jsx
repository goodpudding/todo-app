import React from 'react';
import { Button, Stack, Text, Checkbox } from '@mantine/core';

const List = ({ list, toggleComplete, deleteItem }) => {
  return (
    <Stack spacing="md">
      {list.map((item) => (
        <div key={item.id}>
          <Text>{item.text}</Text>
          <Text><small>Assigned to: {item.assignee}</small></Text>
          <Text><small>Difficulty: {item.difficulty}</small></Text>
          <Checkbox checked={toggleComplete} onChange={(event) => setChecked(event.currentTarget.toggleComplete)} label= "Complete" />     
          <Button
            type="button"
            onClick={() => deleteItem(item.id)}
            color="red"
            radius="xs"
            size="xs"
          >
            Delete Item
          </Button>
          <hr />
        </div>
      ))}
    </Stack>
  );
};

export default List;
