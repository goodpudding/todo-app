import React, { useEffect, useState, useContext } from "react";
import useForm from "../../hooks/form";
import { Button, TextInput, Paper } from "@mantine/core";
import { v4 as uuid } from "uuid";
import { SettingsContext } from "../../Context/Settings";
import { AuthContext } from "../../Context/auth";
import Auth from "../../Context/auth/Auth";

import List from "../List/index";
import PaginatedList from "../Pagination";

const Todo = () => {
  const { settings } = useContext(SettingsContext);
  const [defaultValues] = useState({ difficulty: 4 });
  const [list, setList] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(1);
  const [incomplete, setIncomplete] = useState(0);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item.text);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  const [displayedItems, setDisplayedItems] = useState([]);

  useEffect(() => {
    const newDisplayedItems = settings.showCompleted
      ? list
      : list.filter((item) => !item.complete);
    setDisplayedItems(newDisplayedItems);
  }, [list, settings.showCompleted, settings.itemsToDisplay, currentPosition]);

  const sortedItems = [...displayedItems].sort(
    (a, b) => b.difficulty - a.difficulty
  );

  return (
    <>
      <div id="todoAreaDiv">
        <Auth capability="create">
          <div id="formDiv">
            <Paper shadow="xs" p="sm" withBorder>
              <title data-testid="todo-title">
                <h1 data-testid="todo-h1">
                  To Do List: {incomplete} items pending
                </h1>
              </title>

              <form onSubmit={handleSubmit}>
                <h2>Add To Do Item</h2>
                <TextInput
                  onChange={handleChange}
                  name="text"
                  type="text"
                  placeholder="Item Details"
                  label="To Do Item"
                  description="Enter in an item you want to add to your todo list"
                  radius="lg"
                  size="md"
                  withAsterisk
                />

                <TextInput
                  placeholder="Assignee Name"
                  label="Assigned To"
                  description="Who do you want to assign this task to?"
                  radius="lg"
                  size="md"
                  withAsterisk
                  name="assignee"
                  onChange={handleChange}
                />

                <label>
                  <span>Difficulty</span>
                  <input
                    onChange={handleChange}
                    defaultValue={defaultValues.difficulty}
                    type="range"
                    min={1}
                    max={5}
                    name="difficulty"
                  />
                </label>

                <label>
                  <Button type="submit" color="teal" radius="md" size="lg">
                    Add Item
                  </Button>
                </label>
              </form>
            </Paper>
          </div>
        </Auth>

        <PaginatedList
          items={sortedItems}
          itemsPerPage={settings.itemsToDisplay}
          page={currentPosition}
          onChangePage={setCurrentPosition}
        >
          {(paginatedItems) => (
            <List
              list={paginatedItems}
              toggleComplete={toggleComplete}
              deleteItem={deleteItem}
            />
          )}
        </PaginatedList>
      </div>
    </>
  );
};

export default Todo;
