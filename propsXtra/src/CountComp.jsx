export default function CountComp({handleReset, count}){
    return (
        <h2 className="h2 hover-trigger" onClick={handleReset}>{count}</h2>
    );
}