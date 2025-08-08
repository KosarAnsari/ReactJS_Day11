function User({ Data }) {
  return (
    <>
<div style = {{border:'1px solid black',
padding:'10px',
margin:'10px',
width:'400px',
borderRadius:'10px'}}>
<h4>
        Name: <span style={{ color: 'green' }}>:{Data.name}</span>
      </h4>
      <h4>
        Age:
        <span style={{ backgroundColor: 'red', color: 'white' }}>
          {Data.age}
        </span>
      </h4>
      <h4>
        Email:<span style={{ color: 'blue' }}>{Data.email}</span>
      </h4>
      <h4>Id:{Data.id}</h4>
</div>
    </>
  );
}
export default User;
