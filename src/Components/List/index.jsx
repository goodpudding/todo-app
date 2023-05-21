import React from "react";
import { Button, Stack, Checkbox, Badge, Paper, Divider } from "@mantine/core";

const List = ({ list, toggleComplete, deleteItem }) => {

  return (
    <Stack spacing="md">
      {list.map((item) => (
        <div key={item.id} className="listItem">
          <Paper shadow="lg" p="lg" withBorder>
            <div className="buttons">
              <Badge color={item.complete ? "green" : "teal"} size="lg" variant="filled">
                {item.complete ? "Completed" : "Pending"}
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
              onChange={() => {toggleComplete(item.id); console.log('ITEM', item.id)}}
              label="Complete"
            />
          </Paper>
        </div>
      ))}
    </Stack>
  );
};

export default List;
