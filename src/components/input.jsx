function input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="bg-slate-50 border border-slate-200 outline-slate-400 px-4 py-2 rounded-md"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default input;
