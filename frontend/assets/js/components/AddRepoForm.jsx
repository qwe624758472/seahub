const AddRepoForm = ({onNewRepo=f=>f}) => {
    let _name;

    const submit = (e) => {
        e.preventDefault();
        onNewRepo(_name.value);
        _name.value = "";
        _name.focus();
    }

    return (
        <form onSubmit={submit}>
          <label>New library name:</label>
          <input ref={input => _name=input}
            type="text" required/>
            <button>Add</button>
        </form>
    )
};

export default AddRepoForm;
