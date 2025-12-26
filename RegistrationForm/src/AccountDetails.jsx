function AccountDetails({state,dispatch}) {
  const { username, password } = state.formData;
  return (
    <>
      <h3>Account Details</h3>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "username",
            value: e.target.value,
          })
        }
      />
      <br></br>

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "password",
            value: e.target.value,
          })
        }
      />
      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>Back</button>
      <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
    </>
  );
}
export default AccountDetails;
