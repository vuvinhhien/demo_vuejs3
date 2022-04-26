import instance from "../configs/axios";

export const getAllTodos = async () => {
  try {
    const response = await instance.get("/todos");
    return { data: response.data };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const addNewTodo = async (todoText: any, setIsLoadingAction: any) => {
  try {
    console.log(setIsLoadingAction);
    setIsLoadingAction({ isLoading: true });
    const response = await instance.post("/todos", { content: todoText });
    setIsLoadingAction({ isLoading: false });
    return { data: response.data };
  } catch (error) {
    setIsLoadingAction({ isLoading: false });
    console.log(error);
    return { error };
  }
};

export const deleteTodo = async (todoId: any, setIsLoadingAction: any) => {
  try {
    setIsLoadingAction({ isLoading: true });
    const response = await instance.delete(`/todos/${todoId}`);
    setIsLoadingAction({ isLoading: false });
    return { data: response.data };
  } catch (error) {
    setIsLoadingAction({ isLoading: false });
    console.log(error);
    return { error };
  }
};
