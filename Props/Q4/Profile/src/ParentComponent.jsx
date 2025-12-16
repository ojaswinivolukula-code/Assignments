import UserInfo from "./ChildComponent";
function UserProfile(){
    const name="Alice";
    const age=25;
    return(
<div>
    <h3>UserProfile</h3>
    < UserInfo name={name}  age={age}/>
</div>
    )
}
export default UserProfile