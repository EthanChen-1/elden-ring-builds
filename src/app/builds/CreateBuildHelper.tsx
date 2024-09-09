export function formChangeHandler(event: any, updateInput: Function) {
  updateInput((prevValue: any) => {
    return { ...prevValue, [event.target.name]: event.target.value };
  });
}

export function addItem(ref: any, updateInput: any, limit: any) {
  updateInput((prevValue: any) => {
    const itemArr = [...prevValue[ref.current.name]];
    if (itemArr.length < limit) {
      itemArr.push(ref.current.value);
    }
    return { ...prevValue, [ref.current.name]: itemArr };
  });
}
