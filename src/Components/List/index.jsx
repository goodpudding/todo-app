import React from "react";
import { Button, Stack, Checkbox, Badge, Paper, Divider } from "@mantine/core";

const List = ({ list, toggleComplete, deleteItem }) => {
  const incompleteItems = list.filter((item) => !item.complete);

  return (
    <Stack spacing="md">
      {incompleteItems.map((item) => (
        <div key={item.id} className="listItem">
          <Paper shadow="lg" p="lg" withBorder>
            <div className="buttons">
              <Badge color="teal" size="lg" variant="filled">
                Pending
              </Badge>
              <Button
                type="button"
                onClick={() => deleteItem(item.id)}
                color="red"
                radius="xs"
                size="xs"
              >
                Delete Item
              </Button>

            </div>
              <Divider my="sm" />
            <p>{item.text}</p>
            <p>
              <small>Assigned to: {item.assignee}</small>
            </p>
            <p>
              <small>Difficulty: {item.difficulty}</small>
            </p>
            <Checkbox
              checked={item.complete}
              onChange={() => toggleComplete(item.id)}
              label="Complete"
            />
          </Paper>
        </div>
      ))}
    </Stack>
  );
};

export default List;
