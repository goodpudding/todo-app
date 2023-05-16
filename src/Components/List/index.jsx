import React from "react";
import { Button, Stack, Checkbox, Card } from "@mantine/core";

const List = ({ list, toggleComplete, deleteItem }) => {
  const incompleteItems = list.filter((item) => !item.complete);

  return (
    <Stack spacing="md">
      {incompleteItems.map((item) => (
        <div key={item.id} className="listItem">
          <Card>
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
          <Button
            type="button"
            onClick={() => deleteItem(item.id)}
            color="red"
            radius="xs"
            size="xs"
          >
            Delete Item
          </Button>
          </Card>
        </div>
      ))}
    </Stack>
  );
};

export default List;
