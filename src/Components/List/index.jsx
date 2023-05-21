import React from "react";
import { Button, Stack, Checkbox, Badge, Paper, Divider } from "@mantine/core";
import { useContext } from 'react';
import { AuthContext } from '../../Context/auth';
import Auth from '../../Context/auth/Auth';

const List = ({ list, toggleComplete, deleteItem }) => {
  let { isLoggedIn, can, user } = useContext(AuthContext);

  console.log(can('read'));
  console.log('Are we logged in??', isLoggedIn);
  console.log('Who is the current user', user);
  return (
    <Stack spacing="md">
      {list.map((item) => (
      <Auth capability='read'>
       <div key={item.id} className="listItem">
          <Paper shadow="lg" p="lg" withBorder>
            <div className="buttons">
              <Badge color={item.complete ? "green" : "teal"} size="lg" variant="filled">
                {item.complete ? "Completed" : "Pending"}
              </Badge>
              <p>
              <small>Assigned to: {item.assignee}</small>
            </p>
            <Auth capability='delete'>

              <Button
                type="button"
                onClick={() => deleteItem(item.id)}
                color="red"
                radius="xs"
                size="xs"
              >
                Delete Item
              </Button>
              </Auth>

            </div>
              <Divider my="sm" />
            <p>{item.text}</p>
           
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
        </Auth>

      ))}
    </Stack>
  );
};

export default List;
