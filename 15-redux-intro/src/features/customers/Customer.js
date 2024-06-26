import { useSelector } from "react-redux";

function Customer() {
  // useSelector - create a subscription to the store
  const customer = useSelector((store) => store.customer.fullName);
  // console.log(customer); // {fullName: '', nationalID: '', createdAt: ''}
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
