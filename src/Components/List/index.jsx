import React from 'react';
import { Button, Stack, Text } from '@mantine/core';

const List = ({ list, toggleComplete, deleteItem }) => {
  return (
    <Stack spacing="md">
      {list.map((item) => (
        <div key={item.id}>
          <Text>{item.text}</Text>
          <Text><small>Assigned to: {item.assignee}</small></Text>
          <Text><small>Difficulty: {item.difficulty}</small></Text>
          <div onClick={() => toggleComplete(item.id)}>
            Complete: {item.complete.toString()}
          </div>
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
