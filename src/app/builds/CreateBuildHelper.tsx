export function formChangeHandler(event: any, updateTitle: Function) {
  updateTitle((prevValue: any) => {
    return { ...prevValue, [event.target.name]: event.target.value };
  });
}
