<template>
  <div>
    <h1>Using axios</h1>
    <form action="">
      <div>
        <label for="todoText">TodoText:</label>
        <input type="text" name="text" id="todoText" v-model="todoText" />
      </div>
      <button type="submit" @click="addTodoHandler">Add todo</button>
    </form>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
        @click="deleteTodoHandler(todo.id)"
      >
        {{ todo.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getAllTodos, addNewTodo, deleteTodo } from "@/services";
import { mapActions } from "vuex";

export default {
  async created() {
    const { error, data } = await getAllTodos();
    if (error) {
      alert("Something wrong with the api");
      return;
    }

    this.todos = data;
  },
  data() {
    return {
      todoText: "",
      todos: [],
    };
  },
  methods: {
    async addTodoHandler(e) {
      e.preventDefault();
      const { data, error } = await addNewTodo(
        this.todoText,
        this.setIsLoadingAction
      );
      if (error) {
        alert("Something wrong with the api");
        return;
      }
      this.todos.push(data);
      this.todoText = "";
    },
    async deleteTodoHandler(todoId) {
      const { error } = await deleteTodo(todoId, this.setIsLoadingAction);
      if (error) {
        alert("Something wrong with the api");
        return;
      }
      const deletedTodoIndex = this.todos.findIndex(
        (todo) => todo.id === todoId
      );

      this.todos.splice(deletedTodoIndex, 1);
    },
    ...mapActions("spinner", ["setIsLoadingAction"]),
  },
};
</script>

<style></style>
