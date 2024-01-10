export default function CountComp({handleReset, count}){
    return (
        <h2 onClick={handleReset}>{count}</h2>
    );
}