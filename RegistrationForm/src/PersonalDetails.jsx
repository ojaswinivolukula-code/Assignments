function PersnolDetails({ state, dispatch }) {
  const { name, email } = state.formData;
  return (
    <>
      <h3>Personal Details</h3>
      <input
        type="text "
        placeholder="Enter name"
        value={name}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "name",
            value: e.target.value,
          })
        }
      />
      <br></br>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "email",
            value: e.target.value,
          })
        }
      />

      <button
        onClick={() =>
          dispatch({
            type: "NEXT_STEP",
          })
        }
      >
        Next
      </button>
    </>
  );
}
export default PersnolDetails;
